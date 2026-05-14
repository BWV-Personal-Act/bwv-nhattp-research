<template>
  <div class="auth-layout">
    <Card class="auth-card">
      <template #title>
        <div class="auth-header">
          <div class="icon-wrapper">
            <i :class="['text-primary', icon]"></i>
          </div>
          <div class="title-wrapper">
            <h2 class="m-0">{{ title }}</h2>
          </div>
        </div>
      </template>

      <template #content>
        <form class="auth-form" @submit.prevent="$emit('submit', $event)">
          <small v-if="error" class="p-error text-center block">
            {{ error }}
          </small>

          <slot></slot>

          <Button type="submit" :label="submitLabel" :loading="loading" class="w-full mt-2" />

          <div class="text-center mt-3 text-sm">
            {{ footerText }} <router-link :to="footerRoute">{{ footerLinkText }}</router-link>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  import Card from 'primevue/card';
  import Button from 'primevue/button';

  defineProps<{
    title: string;
    icon: string;
    submitLabel: string;
    loading?: boolean;
    error?: string | null;
    footerText: string;
    footerLinkText: string;
    footerRoute: string;
  }>();

  defineEmits<{
    (e: 'submit', payload: Event): void;
  }>();
</script>

<style scoped>
  .auth-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8fafc;
    padding: 1rem;
  }

  .auth-card {
    width: 100%;
    max-width: 450px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .auth-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .icon-wrapper {
    margin-bottom: 0.5rem;
  }

  .icon-wrapper i {
    font-size: 4.5rem;
  }

  .title-wrapper h2 {
    text-align: center;
    font-size: 2rem;
    color: #334155;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  :slotted(.field) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  :slotted(.p-inputtext),
  :slotted(.p-password) {
    width: 100% !important;
    display: block;
  }

  :slotted(.p-password .p-inputtext) {
    width: 100% !important;
    padding-left: 0.75rem;
    padding-right: 2.5rem;
  }
</style>
