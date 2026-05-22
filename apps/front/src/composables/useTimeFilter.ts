import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { computed, ref } from "vue";

dayjs.extend(utc);
dayjs.extend(timezone);

const API_TIMEZONE = "Asia/Ho_Chi_Minh";
const API_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

const formatApiDate = (date: dayjs.Dayjs) =>
  date.tz(API_TIMEZONE).format(API_DATE_FORMAT);

export function useTimeFilter() {
  const timeRange = ref("all");

  const timeOptions = [
    { label: "All Time", value: "all" },
    { label: "Last 5 mins", value: "5m" },
    { label: "Last 10 mins", value: "10m" },
    { label: "Last 1 hour", value: "1h" },
    { label: "Today", value: "today" },
  ];

  const dateFilters = computed(() => {
    if (timeRange.value === "all")
      return { startDate: undefined, endDate: undefined };

    const now = dayjs().tz(API_TIMEZONE);
    const endDate = formatApiDate(now);
    let startDate: string | undefined;

    switch (timeRange.value) {
      case "5m":
        startDate = formatApiDate(now.subtract(5, "minute"));
        break;
      case "10m":
        startDate = formatApiDate(now.subtract(10, "minute"));
        break;
      case "1h":
        startDate = formatApiDate(now.subtract(1, "hour"));
        break;
      case "today":
        startDate = formatApiDate(now.startOf("day"));
        break;
    }

    return { startDate, endDate };
  });

  return { timeRange, timeOptions, dateFilters };
}
