import type { AppConfig } from "@intern/factory";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const API_TIMEZONE = "Asia/Ho_Chi_Minh";

const parseApiDate = (dateString: string) => {
  const vietnamWallTime = dateString.replace(/(?:Z|[+-]\d{2}:?\d{2})$/, "");
  return dayjs.tz(vietnamWallTime, API_TIMEZONE);
};

export const formatCurrency = (
  value: number | string,
  appConfig?: AppConfig,
) => {
  if (!appConfig) return `$${Number(value).toFixed(2)}`;
  const currency = appConfig.locale === "ja-JP" ? "JPY" : "USD";
  return new Intl.NumberFormat(appConfig.locale, {
    style: "currency",
    currency,
  }).format(Number(value));
};

export const formatDate = (dateString: string, appConfig?: AppConfig) => {
  const date = parseApiDate(dateString).toDate();
  if (!appConfig) return dayjs(date).format("YYYY-MM-DD");
  return new Intl.DateTimeFormat(appConfig.locale, {
    timeZone: API_TIMEZONE,
  }).format(date);
};

export const formatFullDate = (dateString: string) => {
  return parseApiDate(dateString).format("YYYY-MM-DD HH:mm:ss");
};

export const formatRelativeTime = (date: string) => {
  const seconds = dayjs().diff(parseApiDate(date), "second");
  const absSeconds = Math.abs(seconds);
  const suffix = seconds >= 0 ? "ago" : "from now";

  if (absSeconds < 60) return `${absSeconds}s ${suffix}`;

  const minutes = Math.floor(absSeconds / 60);
  if (minutes < 60) return `${minutes}m ${suffix}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ${suffix}`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ${suffix}`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ${suffix}`;

  const years = Math.floor(days / 365);
  return `${years}y ${suffix}`;
};
