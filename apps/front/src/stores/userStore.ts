import { UserFromApi } from "@intern/factory";
import { defineStore } from "pinia";
import { sum } from "radash";
import { computed, ref } from "vue";

import type { ApiErrorResponse } from "../api/types";
import { userAPI } from "../api/userAPI";
import { useLoadingStore } from "./loadingStore";

export const useUserStore = defineStore("users", () => {
  const users = ref<UserFromApi[]>([]);
  const loading = ref(false);
  const loadingStore = useLoadingStore();

  const totalUsers = computed(() => users.value.length);
  const totalBalance = computed(() =>
    sum(users.value, (u) => Number(u.balance)),
  );

  const fetchUsers = async () => {
    loadingStore.startLoading();
    loading.value = true;
    try {
      const { data } = await userAPI.getAllUsers();
      users.value = data;
    } catch (error) {
      const typedError = error as { response?: { data?: ApiErrorResponse } };
      console.error(typedError?.response?.data?.message || "Load error");
    } finally {
      loading.value = false;
      loadingStore.stopLoading();
    }
  };

  const deleteUser = async (id: number) => {
    loadingStore.startLoading();
    loading.value = true;
    try {
      await userAPI.deleteUser(id);
      users.value = users.value.filter((u: UserFromApi) => u.id !== id);
      return true;
    } catch (_error) {
      console.error("Delete failed");
      return false;
    } finally {
      loading.value = false;
      loadingStore.stopLoading();
    }
  };

  return {
    users,
    loading,
    totalUsers,
    totalBalance,
    fetchUsers,
    deleteUser,
  };
});
