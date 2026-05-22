<template>
  <div class="layout-wrapper">
    <AppSidebar :collapsed="collapsed" />

    <div class="layout-content" :class="{ 'sidebar-collapsed': collapsed }">
      <AppHeader @toggle-sidebar="collapsed = !collapsed" />

      <main id="content">
        <div class="page-title-container">
          <h1 class="page-title">{{ route.meta.resolvedTitle }}</h1>
        </div>
        <div class="page-layout">
          <router-view :key="$route.fullPath" />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APP_ROUTES } from "@intern/factory";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import { useLazyQuery } from "@/composables";
import { useLoading } from "@/composables/useLoading";
import { authService } from "@/services";
import { useAuthStore } from "@/stores/authStore";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const collapsed = ref(false);

const { result, refetch, error, isLoading } = useLazyQuery(authService.getMe);

useLoading(isLoading);

watch(
  () => route.fullPath,
  async () => {
    if (!authStore.token) return;
    await refetch();
    if (error.value) {
      authStore.clearAuth();
      router.push({ name: APP_ROUTES.FRONTEND.LOGIN });
      return;
    }
    authStore.setCurrentUser(result.data);
  },
  { immediate: true },
);
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
}

.layout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}

.layout-content.sidebar-collapsed {
  margin-left: 60px;
}

#content {
  flex: 1;
  background-color: #f8f9fa;
}

.page-title-container {
  width: 100%;
  padding: 1rem 1.5rem 0;
  text-align: center;
}

.page-title {
  margin: 0;
  color: #334155;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
}

.page-layout {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .layout-content,
  .layout-content.sidebar-collapsed {
    margin-left: 0;
  }

  .page-layout {
    padding: 1rem;
  }
  .page-title {
    font-size: 1.6rem;
  }
}
</style>
