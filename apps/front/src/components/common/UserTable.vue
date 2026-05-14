<template>
  <BaseTable
    title="Users List"
    :data="filteredData"
    :loading="loading"
    :rows="5"
    :searchable="true"
    :initial-search="searchQuery" :global-filter-fields="['name', 'email', 'nationality', 'balance']"
    @search="onSearch" >
    <template #filters>
      <div class="balance-filters">
        <InputNumber v-model="minBalance" placeholder="Min Balance" class="balance-input" />
        <span class="separator">-</span>
        <InputNumber v-model="maxBalance" placeholder="Max Balance" class="balance-input" />
      </div>
    </template>

    <Column field="id" header="#" :style="{ width: '40px' }" />

    <Column field="name" header="Name" :style="{ width: '150px' }">
      <template #body="{ data }">
        <span class="user-link" @click="$emit('view', data.id)">
          {{ data.name }}
        </span>
      </template>
    </Column>

    <Column field="nationality" header="Nationality" :style="{ width: '65px' }">
      <template #body="{ data }">
        <span :class="data.nationality === Nationality.US ? 'us-text' : 'jp-text'">
          {{ data.nationality }}
        </span>
      </template>
    </Column>

    <Column field="email" header="Email" :style="{ width: '180px' }" />

    <Column field="balance" header="Balance" :style="{ width: '80px' }">
      <template #body="{ data }">
        {{ formatCurrency(data.balance, appConfig) }}
      </template>
    </Column>

    <Column field="createdAt" header="Created" :style="{ width: '65px' }">
      <template #body="{ data }">
        {{ formatDate(data.createdAt, appConfig) }}
      </template>
    </Column>

    <Column header="Actions" :style="{ width: '70px', textAlign: 'center' }">
      <template #body="{ data }">
        <Button icon="pi pi-pencil" class="p-button-text p-mr-2" @click="$emit('edit', data)" />
        <Button
          icon="pi pi-trash"
          class="p-button-text p-button-danger"
          @click="$emit('delete', data.id)"
        />
      </template>
    </Column>
  </BaseTable>
</template>

<script setup lang="ts">
  import { inject, toRefs, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router'; 
  import BaseTable from './BaseTable.vue';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import InputNumber from 'primevue/inputnumber';
  import type { UserFromApi } from '@intern/factory';
  import type { AppConfig } from '@intern/factory';
  import { formatCurrency, formatDate } from '../../utils/formatters';
  import { useBalanceFilter } from '../../composables/useBalanceFilter';
  import { Nationality } from '@intern/factory';

  const route = useRoute();
  const router = useRouter();

  const props = defineProps<{ users: UserFromApi[]; loading: boolean }>();
  defineEmits(['edit', 'delete', 'view']);
  const searchQuery = ref((route.query.search as string) || '');

  const appConfig = inject<AppConfig>('appConfig');

  const { users } = toRefs(props);

  const { minBalance, maxBalance, filteredData } = useBalanceFilter(users);

  watch(
    () => route.query.search,
    (newSearch) => {
      const query = newSearch ? String(newSearch) : '';
      if (searchQuery.value !== query) {
        searchQuery.value = query;
      }
    }
  );

  const onSearch = (keyword: string) => {
    const currentQuery = { ...route.query };
    if (keyword) {
      currentQuery.search = keyword;
    } else {
      delete currentQuery.search;
    }
    router.push({ query: currentQuery });
  };
</script>

<style scoped>
  .us-text {
    font-weight: bold;
    color: #2563eb;
  }
  .jp-text {
    font-weight: bold;
    color: #dc2626;
  }
  .user-link {
    color: #0ea5e9;
    cursor: pointer;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.2s;
  }
  .user-link:hover {
    text-decoration-color: #0ea5e9;
  }

  .balance-filters {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .separator {
    color: #64748b;
    font-weight: bold;
  }

  :deep(.balance-input .p-inputnumber-input) {
    width: 120px;
  }
</style>
