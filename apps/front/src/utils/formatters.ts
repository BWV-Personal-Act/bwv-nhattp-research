import type { AppConfig } from "@intern/factory";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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
  if (!appConfig) return dayjs(dateString).format("YYYY-MM-DD");
  return new Intl.DateTimeFormat(appConfig.locale).format(new Date(dateString));
};

export const formatFullDate = (dateString: string) => {
  return dayjs(dateString).format("YYYY-MM-DD HH:mm:ss");
};

export const formatRelativeTime = (date: string) => {
  return dayjs(date).fromNow();
};
