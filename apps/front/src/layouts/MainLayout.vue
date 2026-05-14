<template>
  <div class="main-layout">
    <AppSidebar :collapsed="collapsed" />

    <div class="layout-content" :class="{ 'sidebar-collapsed': collapsed }">
      <AppHeader @toggle-sidebar="collapsed = !collapsed" />

      <main class="page-content">
        <router-view :key="$route.fullPath" />
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import AppSidebar from '../components/AppSidebar.vue';
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';

  const collapsed = ref(false);
</script>

<style scoped>
  .main-layout {
    display: flex;
    min-height: 100vh;
  }

  .layout-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease;
    margin-left: 250px;
  }

  .layout-content.sidebar-collapsed {
    margin-left: 60px;
  }

  .page-content {
    flex: 1;
    padding: 24px;
    background-color: #f8f9fa;
  }
</style>
