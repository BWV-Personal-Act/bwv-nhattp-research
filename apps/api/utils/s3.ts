import { createHash, createHmac } from 'node:crypto';
import { ERROR_MESSAGES, errors } from '@intern/factory';

type S3UploadInput = {
  key: string;
  body: Buffer;
  contentType: string;
};

type S3RequestInput = {
  method: 'DELETE' | 'PUT';
  key: string;
  payloadHash: string;
  contentType?: string;
};

function hash(value: string | Buffer) {
  return createHash('sha256').update(value).digest('hex');
}

function hmac(key: Buffer | string, value: string) {
  return createHmac('sha256', key).update(value).digest();
}

function getSigningKey(secretKey: string, dateStamp: string, region: string) {
  const dateKey = hmac(`AWS4${secretKey}`, dateStamp);
  const regionKey = hmac(dateKey, region);
  const serviceKey = hmac(regionKey, 's3');
  return hmac(serviceKey, 'aws4_request');
}

function normalizePublicUrl(value: string) {
  const url = value.trim().replace(/\/+$/, '');
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function stripCloudFrontHostFromKey(key: string, cloudfrontHost: string) {
  let normalizedKey = key.replace(/^\/+/, '');
  while (normalizedKey === cloudfrontHost || normalizedKey.startsWith(`${cloudfrontHost}/`)) {
    normalizedKey = normalizedKey.slice(cloudfrontHost.length).replace(/^\/+/, '');
  }

  return normalizedKey;
}

function encodeS3Key(key: string) {
  return key.split('/').map(encodeURIComponent).join('/');
}

function requireS3Config() {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const bucket = process.env.AWS_S3_BUCKET;
  const cloudfrontUrl = process.env.CLOUDFRONT_URL;

  if (!region || !accessKeyId || !secretAccessKey || !bucket || !cloudfrontUrl) {
    throw new errors.Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }

  return {
    region,
    accessKeyId,
    secretAccessKey,
    bucket,
    cloudfrontUrl: normalizePublicUrl(cloudfrontUrl),
  };
}

function createS3SignedRequest(input: S3RequestInput) {
  const { region, accessKeyId, secretAccessKey, bucket } = requireS3Config();
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const encodedKey = encodeS3Key(input.key);
  const url = `https://${host}/${encodedKey}`;
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
  const dateStamp = amzDate.slice(0, 8);

  const headersToSign = [
    ...(input.contentType ? [`content-type:${input.contentType}`] : []),
    `host:${host}`,
    `x-amz-content-sha256:${input.payloadHash}`,
    `x-amz-date:${amzDate}`,
  ];
  const canonicalHeaders = `${headersToSign.join('\n')}\n`;
  const signedHeaders = [
    ...(input.contentType ? ['content-type'] : []),
    'host',
    'x-amz-content-sha256',
    'x-amz-date',
  ].join(';');
  const canonicalRequest = [
    input.method,
    `/${encodedKey}`,
    '',
    canonicalHeaders,
    signedHeaders,
    input.payloadHash,
  ].join('\n');

  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    amzDate,
    credentialScope,
    hash(canonicalRequest),
  ].join('\n');
  const signature = createHmac('sha256', getSigningKey(secretAccessKey, dateStamp, region))
    .update(stringToSign)
    .digest('hex');

  return {
    url,
    headers: {
      Authorization: `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
      ...(input.contentType ? { 'Content-Type': input.contentType } : {}),
      'x-amz-content-sha256': input.payloadHash,
      'x-amz-date': amzDate,
    },
  };
}

export function toCloudFrontUrl(value: string | null | undefined) {
  if (!value) return value ?? null;

  const cloudfrontUrl = process.env.CLOUDFRONT_URL
    ? normalizePublicUrl(process.env.CLOUDFRONT_URL)
    : undefined;
  if (!cloudfrontUrl) return value;

  const cloudfrontHost = new URL(cloudfrontUrl).host;
  const normalizedValue = value.trim();
  const hasProtocol = /^https?:\/\//i.test(normalizedValue);
  const looksLikeBareUrl = /^[^/]+\.[^/]+\//.test(normalizedValue);

  try {
    if (!hasProtocol && !looksLikeBareUrl) {
      throw new Error('Avatar URL is an object key');
    }

    const parsedUrl = new URL(hasProtocol ? normalizedValue : `https://${normalizedValue}`);

    if (parsedUrl.host === cloudfrontHost) {
      const key = stripCloudFrontHostFromKey(parsedUrl.pathname, cloudfrontHost);
      return key ? `${cloudfrontUrl}/${key}${parsedUrl.search}` : cloudfrontUrl;
    }

    if (!parsedUrl.hostname.includes('amazonaws.com')) {
      return normalizedValue;
    }

    const key = stripCloudFrontHostFromKey(parsedUrl.pathname, cloudfrontHost);
    return key ? `${cloudfrontUrl}/${key}` : value;
  } catch {
    const key = stripCloudFrontHostFromKey(normalizedValue, cloudfrontHost);
    return key ? `${cloudfrontUrl}/${key}` : value;
  }
}

export function getS3ObjectKeyFromUrl(value: string | null | undefined) {
  if (!value) return null;

  const cloudfrontUrl = process.env.CLOUDFRONT_URL
    ? normalizePublicUrl(process.env.CLOUDFRONT_URL)
    : undefined;
  if (!cloudfrontUrl) return null;

  const cloudfrontHost = new URL(cloudfrontUrl).host;
  const normalizedValue = value.trim();
  const hasProtocol = /^https?:\/\//i.test(normalizedValue);
  const looksLikeBareUrl = /^[^/]+\.[^/]+\//.test(normalizedValue);

  try {
    if (!hasProtocol && !looksLikeBareUrl) {
      return stripCloudFrontHostFromKey(normalizedValue, cloudfrontHost) || null;
    }

    const parsedUrl = new URL(hasProtocol ? normalizedValue : `https://${normalizedValue}`);
    if (parsedUrl.host === cloudfrontHost || parsedUrl.hostname.includes('amazonaws.com')) {
      return stripCloudFrontHostFromKey(parsedUrl.pathname, cloudfrontHost) || null;
    }
  } catch {
    return stripCloudFrontHostFromKey(normalizedValue, cloudfrontHost) || null;
  }

  return null;
}

export async function uploadToS3(input: S3UploadInput) {
  const { cloudfrontUrl } = requireS3Config();
  const encodedKey = encodeS3Key(input.key);
  const payloadHash = hash(input.body);
  const bodyBytes = new Uint8Array(input.body.length);
  bodyBytes.set(input.body);
  const signedRequest = createS3SignedRequest({
    method: 'PUT',
    key: input.key,
    payloadHash,
    contentType: input.contentType,
  });

  const response = await fetch(signedRequest.url, {
    method: 'PUT',
    body: new Blob([bodyBytes], { type: input.contentType }),
    headers: signedRequest.headers,
  });

  if (!response.ok) {
    throw new errors.Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }

  return `${cloudfrontUrl}/${encodedKey}`;
}

export async function deleteFromS3(key: string) {
  const signedRequest = createS3SignedRequest({
    method: 'DELETE',
    key,
    payloadHash: hash(''),
  });

  const response = await fetch(signedRequest.url, {
    method: 'DELETE',
    headers: signedRequest.headers,
  });

  if (!response.ok) {
    throw new errors.Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }
}
