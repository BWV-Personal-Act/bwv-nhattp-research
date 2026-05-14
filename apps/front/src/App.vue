<template>
  <div id="app">
    <MainLayout />
    <Toast />
    <LoadingOverlay />
  </div>
</template>

<script setup lang="ts">
  import { provide, reactive, onMounted } from 'vue';
  import MainLayout from './layouts/MainLayout.vue';
  import Toast from 'primevue/toast';
  import LoadingOverlay from './components/common/LoadingOverlay.vue';
  import { useAuthStore } from './stores/authStore';
  import { useLoadingStore } from './stores/loadingStore';

  const appConfig = reactive({
    locale: 'en-US',
    currency: 'USD',
  });

  provide('appConfig', appConfig);

  const authStore = useAuthStore();
  const loadingStore = useLoadingStore();

  onMounted(() => {
    loadingStore.startLoading();
    authStore.fetchCurrentUser().finally(() => {
      loadingStore.stopLoading();
    });
  });
</script>

<style>
  body {
    margin: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #f8f9fa;
  }
</style>
