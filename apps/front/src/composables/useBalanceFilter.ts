import { ref, computed, type Ref } from 'vue';
import filter from 'lodash/filter';
import isNil from 'lodash/isNil';

export function useBalanceFilter<T extends { balance: number | string }>(dataList: Ref<T[]>) {
  const minBalance = ref<number | null>(null);
  const maxBalance = ref<number | null>(null);

  const filteredData = computed(() => {
    if (isNil(minBalance.value) && isNil(maxBalance.value)) {
      return dataList.value;
    }
    return filter(dataList.value, item => {
      const bal = Number(item.balance);
      const min = !isNil(minBalance.value) ? minBalance.value : -Infinity;
      const max = !isNil(maxBalance.value) ? maxBalance.value : Infinity;
      return bal >= min && bal <= max;
    });
  });

  return { minBalance, maxBalance, filteredData };
}
