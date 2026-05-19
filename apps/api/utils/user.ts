import { omit } from 'radash';
import { toCloudFrontUrl } from './s3';

export function toPublicUser<T extends { password?: unknown; avatarUrl: string | null }>(user: T) {
  return {
    ...omit(user, ['password']),
    avatarUrl: toCloudFrontUrl(user.avatarUrl),
  };
}
