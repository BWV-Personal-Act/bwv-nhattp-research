export const APP_CONFIG = {
  API_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://api.example.com' : '/api/v1',
  JWT_ACCESS_EXPIRES_IN: '15m',
  JWT_REFRESH_EXPIRES_IN: '7d',
  COOKIE_MAX_AGE: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds

  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LOCALE: 'en-US',
};

export const LOADING_CONFIG = {
  MINIMUM_DISPLAY_TIME: 250, // milliseconds
};

export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
