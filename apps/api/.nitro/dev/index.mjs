import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestURL, getRequestHeader, getResponseHeader, getRequestHeaders, setResponseHeaders, setResponseStatus, send, removeResponseHeader, appendResponseHeader, setResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, getQuery as getQuery$1, getHeader } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/h3/dist/index.mjs';
import destr from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/ohash/dist/index.mjs';
import { klona } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/scule/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/youch-core/build/index.js';
import { Youch } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/source-map/source-map.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/pathe/dist/index.mjs';
import bcrypt from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/bcrypt/bcrypt.js';
import jwt from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/jsonwebtoken/index.js';
import * as yup from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/yup/index.js';
import { relations, eq, or, gte, lte, like, and, sql, desc } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/packages/domain/node_modules/drizzle-orm/index.js';
import { mysqlTable, timestamp, varchar, mysqlEnum, decimal, int, index, alias } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/packages/domain/node_modules/drizzle-orm/mysql-core/index.js';
import { drizzle } from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/packages/domain/node_modules/drizzle-orm/mysql2/index.js';
import mysql from 'file://C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/node_modules/mysql2/promise.js';

const serverAssets = [{"baseName":"server","dir":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api"}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api/.nitro"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api/.nitro/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:/Users/nhat.tp/Documents/bwv-nhattp-research-nitro-drizzle-radash/apps/api/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/api/v1"
  },
  "nitro": {
    "routeRules": {
      "/**": {
        "cors": true,
        "headers": {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "*",
          "access-control-allow-headers": "*",
          "access-control-max-age": "0",
          "Access-Control-Allow-Origin": "http://localhost:5173",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/api/v1/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function defineNitroPlugin(def) {
  return def;
}

const Nationality = {
  US: "US",
  JAPAN: "\u65E5\u672C"
};

var HttpStatus = /* @__PURE__ */ ((HttpStatus2) => {
  HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
  HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
  HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  return HttpStatus2;
})(HttpStatus || {});

const SUCCESS_MESSAGES = {
  REGISTER: "Registered",
  LOGIN: "Logged in",
  REFRESH_TOKEN: "Token refreshed",
  CHANGE_PASSWORD: "Password changed",
  LOGOUT: "Logged out",
  TRANSFER: "Transfer completed",
  USER_UPDATE: "User updated",
  USER_DELETE: "User deleted"
};
const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: "Internal server error",
  UNAUTHORIZED: "Unauthorized",
  NOT_FOUND: "Resource not found",
  BAD_REQUEST: "Bad request",
  VALIDATION_ERROR: "Validation failed",
  TOKEN_EXPIRED: "Token has expired",
  TOKEN_INVALID: "Invalid token",
  REFRESH_TOKEN_NOT_FOUND: "Refresh token missing",
  USER_NOT_FOUND: "User not found",
  INSUFFICIENT_BALANCE: "Insufficient balance",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  INVALID_PASSWORD: "Invalid password"
};

const baseTransferSchema = yup.object({
  toUserId: yup.number().required("Please select a recipient").positive("Invalid recipient ID").notOneOf([yup.ref("fromUserId")], "Recipient cannot be the same as sender"),
  amount: yup.number().required("Please enter an amount").positive("Amount must be a positive number")
});
yup.object({
  body: baseTransferSchema
});

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const passwordField = yup.string().matches(
  passwordRegex,
  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
).required("Password is required");
const nameWithNationalityTest = yup.string().required("Name is required").min(3, "Name must be at least 3 characters").test("check-name-by-nationality", "Name is invalid", function(value) {
  const { nationality } = this.parent;
  if (!value || !nationality) return true;
  if (nationality === Nationality.US) {
    return (
      // Regex to check if string contains only ASCII characters (0-127)
      // Matches strings that do NOT contain any bytes in range 0x80-0xFF
      /^[^\x80-\xFF]*$/.test(value) || this.createError({ message: "For US, name can only contain 1-byte characters." })
    );
  }
  if (nationality === Nationality.JAPAN) {
    return (
      // Regex to check if string contains any non-ASCII characters
      // Matches strings that contain at least one byte in range 0x80-0xFF
      /[\x80-\xFF]/.test(value) || this.createError({ message: "For Japan, name must contain multi-byte characters." })
    );
  }
  return true;
});
const userCoreFields = {
  email: yup.string().email("Invalid email format").required("Email is required"),
  name: nameWithNationalityTest,
  nationality: yup.string().oneOf(Object.values(Nationality), "Invalid nationality").required("Nationality is required"),
  balance: yup.number().transform((v) => isNaN(v) ? 0 : v).default(0).min(0, "Balance cannot be negative")
};
const updateUserSchema = yup.object().shape({
  ...userCoreFields
});
yup.object().shape({
  ...userCoreFields,
  password: passwordField,
  confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirm password does not match").required("Please confirm your password")
});
yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required")
});
yup.object().shape({
  oldPassword: yup.string().required("Please enter your current password"),
  newPassword: passwordField,
  confirmNewPassword: yup.string().oneOf([yup.ref("newPassword")], "Confirm password does not match").required("Please confirm your new password")
});

const backendRegisterSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  nationality: yup.string().optional()
});
const backendLoginSchema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required")
});
const backendChangePasswordSchema = yup.object({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup.string().min(6, "New password must be at least 6 characters").required("New password is required")
});

const _Sq3fLsApwBsZ4f48tsNUWHTFxRjtjjrbLtaMUkKWsk = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("error", (error, { event }) => {
    if (!event) return;
    const h3Error = error;
    const statusCode = h3Error.statusCode || 500;
    const message = h3Error.statusMessage || ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    const data = h3Error.data || null;
    const response = {
      message,
      ...data && { errors: data }
    };
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = statusCode;
    event.node.res.end(JSON.stringify(response));
  });
});

const plugins = [
  _Sq3fLsApwBsZ4f48tsNUWHTFxRjtjjrbLtaMUkKWsk
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"113a8-0vLNDtdWJwaOu47Jyi5TvhYGfv8\"",
    "mtime": "2026-05-14T10:02:37.185Z",
    "size": 70568,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"3cc50-84luwXC+tklnJKES+4Nkx/LR1MQ\"",
    "mtime": "2026-05-14T10:02:37.185Z",
    "size": 248912,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _332t0X = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_faj5PH = () => Promise.resolve().then(function () { return changePassword_post$1; });
const _lazy_UOUTSQ = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_lDOGwY = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_yYL1tC = () => Promise.resolve().then(function () { return me_get$1; });
const _lazy_BtaqEA = () => Promise.resolve().then(function () { return refreshToken_post$1; });
const _lazy_UYOckX = () => Promise.resolve().then(function () { return register_post$1; });
const _lazy_rIJrkx = () => Promise.resolve().then(function () { return health_get$1; });
const _lazy_a4NRt5 = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_m3Slzh = () => Promise.resolve().then(function () { return all_get$1; });
const _lazy_GW6syX = () => Promise.resolve().then(function () { return user__userId__get$1; });
const _lazy_wBdQNP = () => Promise.resolve().then(function () { return _id__delete$1; });
const _lazy_R38vSV = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_yl_gGQ = () => Promise.resolve().then(function () { return _id__put$1; });
const _lazy_BJ7f7t = () => Promise.resolve().then(function () { return index_get$1; });

const handlers = [
  { route: '', handler: _332t0X, lazy: false, middleware: true, method: undefined },
  { route: '/auth/change-password', handler: _lazy_faj5PH, lazy: true, middleware: false, method: "post" },
  { route: '/auth/login', handler: _lazy_UOUTSQ, lazy: true, middleware: false, method: "post" },
  { route: '/auth/logout', handler: _lazy_lDOGwY, lazy: true, middleware: false, method: "post" },
  { route: '/auth/me', handler: _lazy_yYL1tC, lazy: true, middleware: false, method: "get" },
  { route: '/auth/refresh-token', handler: _lazy_BtaqEA, lazy: true, middleware: false, method: "post" },
  { route: '/auth/register', handler: _lazy_UYOckX, lazy: true, middleware: false, method: "post" },
  { route: '/health', handler: _lazy_rIJrkx, lazy: true, middleware: false, method: "get" },
  { route: '/transfers', handler: _lazy_a4NRt5, lazy: true, middleware: false, method: "post" },
  { route: '/transfers/logs/all', handler: _lazy_m3Slzh, lazy: true, middleware: false, method: "get" },
  { route: '/transfers/logs/user_:userId', handler: _lazy_GW6syX, lazy: true, middleware: false, method: "get" },
  { route: '/users/:id', handler: _lazy_wBdQNP, lazy: true, middleware: false, method: "delete" },
  { route: '/users/:id', handler: _lazy_R38vSV, lazy: true, middleware: false, method: "get" },
  { route: '/users/:id', handler: _lazy_yl_gGQ, lazy: true, middleware: false, method: "put" },
  { route: '/users', handler: _lazy_BJ7f7t, lazy: true, middleware: false, method: "get" }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const nationalityValues = Object.values(Nationality);
const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  balance: decimal("balance", { precision: 10, scale: 2 }).notNull().default("0"),
  nationality: mysqlEnum("nationality", nationalityValues).default(Nationality.US),
  refreshToken: varchar("refresh_token", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
});
const transferLogs = mysqlTable(
  "transfer_logs",
  {
    id: int("id").autoincrement().primaryKey(),
    senderId: int("sender_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    receiverId: int("receiver_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    status: mysqlEnum("status", ["success", "pending", "failed"]).notNull().default("success"),
    message: varchar("message", { length: 255 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
  },
  (table) => {
    return {
      senderIdx: index("sender_idx").on(table.senderId),
      receiverIdx: index("receiver_idx").on(table.receiverId),
      createdAtIdx: index("created_at_idx").on(table.createdAt)
    };
  }
);
const usersRelations = relations(users, ({ many }) => ({
  sentTransfers: many(transferLogs, { relationName: "sentTransfers" }),
  receivedTransfers: many(transferLogs, { relationName: "receivedTransfers" })
}));
const transferLogsRelations = relations(transferLogs, ({ one }) => ({
  sender: one(users, {
    fields: [transferLogs.senderId],
    references: [users.id],
    relationName: "sentTransfers"
  }),
  receiver: one(users, {
    fields: [transferLogs.receiverId],
    references: [users.id],
    relationName: "receivedTransfers"
  })
}));

const schema = /*#__PURE__*/Object.freeze({
  __proto__: null,
  transferLogs: transferLogs,
  transferLogsRelations: transferLogsRelations,
  users: users,
  usersRelations: usersRelations
});

const connectionString = process.env.DATABASE_URL || "";
const poolConnection = mysql.createPool(connectionString);
const db = drizzle(poolConnection, { schema, mode: "default" });

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
class BaseRepository {
  constructor(table) {
    __publicField(this, "table", table);
  }
  async findAll() {
    return db.select().from(this.table);
  }
  async findById(id) {
    const [result] = await db.select().from(this.table).where(eq(this.table.id, id));
    return result || null;
  }
  async findOne(column, value) {
    const [result] = await db.select().from(this.table).where(eq(column, value));
    return result || null;
  }
  async create(data) {
    return db.insert(this.table).values(data);
  }
  async update(id, data) {
    return db.update(this.table).set(data).where(eq(this.table.id, id));
  }
  async delete(id) {
    return db.delete(this.table).where(eq(this.table.id, id));
  }
}

class UserRepositoryClass extends BaseRepository {
  constructor() {
    super(users);
  }
  async findByEmail(email) {
    return this.findOne(users.email, email);
  }
}
const UserRepository = new UserRepositoryClass();

class TransferLogRepositoryClass extends BaseRepository {
  constructor() {
    super(transferLogs);
  }
  async findLogs(filters) {
    const { page, limit, startDate, endDate, search, userId } = filters;
    const offset = (page - 1) * limit;
    const sender = alias(users, "sender");
    const receiver = alias(users, "receiver");
    const conditions = [];
    if (userId) {
      conditions.push(or(eq(transferLogs.senderId, userId), eq(transferLogs.receiverId, userId)));
    }
    if (startDate) {
      conditions.push(gte(transferLogs.createdAt, new Date(startDate)));
    }
    if (endDate) {
      conditions.push(lte(transferLogs.createdAt, new Date(endDate)));
    }
    if (search) {
      const keyword = `%${search}%`;
      const searchConditions = [
        like(transferLogs.status, keyword),
        like(transferLogs.message, keyword),
        like(sender.name, keyword),
        like(sender.email, keyword),
        like(receiver.name, keyword),
        like(receiver.email, keyword)
      ];
      if (!isNaN(Number(search))) {
        searchConditions.push(eq(transferLogs.amount, search));
      }
      conditions.push(or(...searchConditions));
    }
    const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
    const baseQuery = db.select({
      id: transferLogs.id,
      amount: transferLogs.amount,
      status: transferLogs.status,
      message: transferLogs.message,
      createdAt: transferLogs.createdAt,
      sender: {
        id: sender.id,
        name: sender.name,
        email: sender.email
      },
      receiver: {
        id: receiver.id,
        name: receiver.name,
        email: receiver.email
      }
    }).from(transferLogs).leftJoin(sender, eq(transferLogs.senderId, sender.id)).leftJoin(receiver, eq(transferLogs.receiverId, receiver.id));
    const [countResult] = await db.select({ count: sql`count(*)` }).from(transferLogs).leftJoin(sender, eq(transferLogs.senderId, sender.id)).leftJoin(receiver, eq(transferLogs.receiverId, receiver.id)).where(whereClause);
    const total = Number((countResult == null ? void 0 : countResult.count) || 0);
    const data = await baseQuery.where(whereClause).limit(limit).offset(offset).orderBy(desc(transferLogs.createdAt));
    return {
      total,
      page,
      totalPages: Math.ceil(total / limit),
      data
    };
  }
  async transferBalance(fromUserId, toUserId, amount) {
    return await db.transaction(async (tx) => {
      const [fromUser] = await tx.select().from(users).where(eq(users.id, fromUserId));
      const [toUser] = await tx.select().from(users).where(eq(users.id, toUserId));
      if (!fromUser || !toUser) {
        throw new Error("User not found");
      }
      if (Number(fromUser.balance) < amount) {
        throw new Error("Insufficient balance");
      }
      await tx.update(users).set({ balance: sql`${users.balance} - ${amount}` }).where(eq(users.id, fromUserId));
      await tx.update(users).set({ balance: sql`${users.balance} + ${amount}` }).where(eq(users.id, toUserId));
      await tx.insert(transferLogs).values({
        senderId: fromUserId,
        receiverId: toUserId,
        amount: String(amount),
        status: "success"
      });
      return true;
    });
  }
}
const TransferLogRepository = new TransferLogRepositoryClass();

async function requireAuth(event) {
  const authHeader = getHeader(event, "authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }
  const token = authHeader.split(" ")[1];
  if (!process.env.JWT_ACCESS_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await UserRepository.findById(decoded.id);
    if (!user) {
      throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
    }
    event.context.user = user;
    return user;
  } catch (error) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }
}

async function validateBody(event, schema) {
  const body = await readBody(event).catch(() => ({}));
  try {
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    });
    return validatedData;
  } catch (error) {
    throw createError({
      statusCode: HttpStatus.BAD_REQUEST,
      statusMessage: ERROR_MESSAGES.VALIDATION_ERROR,
      data: error.errors
    });
  }
}

const changePassword_post = defineEventHandler(async (event) => {
  const userContext = await requireAuth(event);
  const body = await validateBody(event, backendChangePasswordSchema);
  const user = await UserRepository.findById(userContext.id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }
  const isMatch = await bcrypt.compare(body.oldPassword, user.password);
  if (!isMatch) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.INVALID_PASSWORD });
  }
  const hashedNewPassword = await bcrypt.hash(body.newPassword, 10);
  await UserRepository.update(user.id, {
    password: hashedNewPassword,
    refreshToken: null
  });
  return { message: SUCCESS_MESSAGES.CHANGE_PASSWORD };
});

const changePassword_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: changePassword_post
});

const login_post = defineEventHandler(async (event) => {
  const body = await validateBody(event, backendLoginSchema);
  const user = await UserRepository.findByEmail(body.email);
  const passwordHash = user ? user.password : await bcrypt.hash("dummy_password", 10);
  const isMatch = await bcrypt.compare(body.password, passwordHash);
  if (!isMatch || !user) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.UNAUTHORIZED });
  }
  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m" }
  );
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d" }
  );
  await UserRepository.update(user.id, { refreshToken });
  const { password, refreshToken: _, ...safeUser } = user;
  return { user: safeUser, accessToken, refreshToken };
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const logout_post = defineEventHandler(async (event) => {
  const user = await requireAuth(event);
  await UserRepository.update(user.id, { refreshToken: null });
  return { message: SUCCESS_MESSAGES.LOGOUT };
});

const logout_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: logout_post
});

const me_get = defineEventHandler(async (event) => {
  const userContext = await requireAuth(event);
  const user = await UserRepository.findById(userContext.id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }
  const { password, refreshToken, ...safeUser } = user;
  return safeUser;
});

const me_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: me_get
});

const refreshToken_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body;
  if (!token) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.REFRESH_TOKEN_NOT_FOUND });
  }
  if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await UserRepository.findById(decoded.id);
    if (!user) {
      throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    if (user.refreshToken !== token) {
      throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.TOKEN_INVALID });
    }
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m" }
    );
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d" }
    );
    await UserRepository.update(user.id, { refreshToken });
    return { accessToken, refreshToken };
  } catch (error) {
    throw createError({ statusCode: HttpStatus.UNAUTHORIZED, statusMessage: ERROR_MESSAGES.TOKEN_INVALID });
  }
});

const refreshToken_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: refreshToken_post
});

function applyResponseStatus(event, status) {
  setResponseStatus(event, status);
}

const register_post = defineEventHandler(async (event) => {
  const body = await validateBody(event, backendRegisterSchema);
  const existingUser = await UserRepository.findByEmail(body.email);
  if (existingUser) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.EMAIL_ALREADY_EXISTS });
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const [result] = await UserRepository.create({
    email: body.email,
    name: body.name,
    password: hashedPassword,
    nationality: body.nationality,
    balance: 1e3
  });
  applyResponseStatus(event, HttpStatus.CREATED);
  return { id: result.insertId };
});

const register_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: register_post
});

const health_get = defineEventHandler(() => {
  return { status: "OK" };
});

const health_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: health_get
});

const index_post = defineEventHandler(async (event) => {
  const userContext = await requireAuth(event);
  const body = await validateBody(event, baseTransferSchema);
  try {
    await TransferLogRepository.transferBalance(
      userContext.id,
      body.toUserId,
      body.amount
    );
    return { message: SUCCESS_MESSAGES.TRANSFER };
  } catch (error) {
    if (error.message === "User not found") {
      throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
    }
    if (error.message === "Insufficient balance") {
      throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.INSUFFICIENT_BALANCE });
    }
    throw createError({ statusCode: HttpStatus.INTERNAL_SERVER_ERROR, statusMessage: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_post
});

const all_get = defineEventHandler(async (event) => {
  await requireAuth(event);
  const query = getQuery$1(event);
  const filters = {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || 10,
    startDate: query.startDate ? String(query.startDate) : void 0,
    endDate: query.endDate ? String(query.endDate) : void 0,
    search: query.search ? String(query.search) : void 0
  };
  return await TransferLogRepository.findLogs(filters);
});

const all_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: all_get
});

const user__userId__get = defineEventHandler(async (event) => {
  await requireAuth(event);
  const query = getQuery$1(event);
  const userId = Number(getRouterParam(event, "userId"));
  if (isNaN(userId)) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.BAD_REQUEST });
  }
  const filters = {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || 10,
    startDate: query.startDate ? String(query.startDate) : void 0,
    endDate: query.endDate ? String(query.endDate) : void 0,
    search: query.search ? String(query.search) : void 0,
    userId
  };
  return await TransferLogRepository.findLogs(filters);
});

const user__userId__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: user__userId__get
});

const _id__delete = defineEventHandler(async (event) => {
  await requireAuth(event);
  const id = Number(getRouterParam(event, "id"));
  if (isNaN(id)) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.BAD_REQUEST });
  }
  const user = await UserRepository.findById(id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }
  await UserRepository.delete(id);
  return { message: SUCCESS_MESSAGES.USER_DELETE };
});

const _id__delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__delete
});

const _id__get = defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, "id"));
  if (isNaN(id)) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.BAD_REQUEST });
  }
  const user = await UserRepository.findById(id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }
  const { password, refreshToken, ...safeUser } = user;
  return safeUser;
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get
});

const _id__put = defineEventHandler(async (event) => {
  await requireAuth(event);
  const id = Number(getRouterParam(event, "id"));
  if (isNaN(id)) {
    throw createError({ statusCode: HttpStatus.BAD_REQUEST, statusMessage: ERROR_MESSAGES.BAD_REQUEST });
  }
  const body = await validateBody(event, updateUserSchema);
  const user = await UserRepository.findById(id);
  if (!user) {
    throw createError({ statusCode: HttpStatus.NOT_FOUND, statusMessage: ERROR_MESSAGES.USER_NOT_FOUND });
  }
  await UserRepository.update(id, body);
  return { message: SUCCESS_MESSAGES.USER_UPDATE };
});

const _id__put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__put
});

const index_get = defineEventHandler(async () => {
  const allUsers = await UserRepository.findAll();
  const safeUsers = allUsers.map(({ password, refreshToken, ...user }) => user);
  return safeUsers;
});

const index_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index_get
});
//# sourceMappingURL=index.mjs.map
