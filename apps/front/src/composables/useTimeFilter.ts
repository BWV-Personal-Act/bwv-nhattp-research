import dayjs from "dayjs";
import { computed, ref } from "vue";

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

    const endDate = dayjs().toISOString();
    let startDate: string | undefined;

    switch (timeRange.value) {
      case "5m":
        startDate = dayjs().subtract(5, "minute").toISOString();
        break;
      case "10m":
        startDate = dayjs().subtract(10, "minute").toISOString();
        break;
      case "1h":
        startDate = dayjs().subtract(1, "hour").toISOString();
        break;
      case "today":
        startDate = dayjs().startOf("day").toISOString();
        break;
    }

    return { startDate, endDate };
  });

  return { timeRange, timeOptions, dateFilters };
}
