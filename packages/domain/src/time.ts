import { sql } from "drizzle-orm";

export const APP_TIMEZONE = "Asia/Ho_Chi_Minh";
export const DB_TIMEZONE = APP_TIMEZONE;

export const vietnamNowSql = sql`timezone('Asia/Ho_Chi_Minh', now())`;

export const normalizeVietnamTimestamp = (date: string) => {
  return date
    .trim()
    .replace("T", " ")
    .replace(/(?:Z|[+-]\d{2}:?\d{2})$/, "")
    .slice(0, 19);
};
