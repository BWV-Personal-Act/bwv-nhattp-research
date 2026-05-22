import type { Ref } from "vue";
import { computed, onBeforeUnmount, watch } from "vue";

import { useLoadingStore } from "../stores/loadingStore";

type LoadingRef = Pick<Ref<boolean>, "value">;

export const useLoading = (...loadingRefs: LoadingRef[]) => {
  const loadingStore = useLoadingStore();
  let registered = false;

  const isAnyLoading = computed(() =>
    loadingRefs.some((loading) => loading.value),
  );

  watch(
    isAnyLoading,
    (isLoading) => {
      if (isLoading && !registered) {
        loadingStore.startLoading();
        registered = true;
      }

      if (!isLoading && registered) {
        loadingStore.stopLoading();
        registered = false;
      }
    },
    { immediate: true },
  );

  onBeforeUnmount(() => {
    if (registered) {
      loadingStore.stopLoading();
    }
  });
};
