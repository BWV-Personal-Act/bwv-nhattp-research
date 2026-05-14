<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} User Management System. All rights reserved.</p>
      <div class="footer-links">
        <a href="#" target="_blank">Privacy Policy</a>
        <a href="#" target="_blank">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
  .app-footer {
    background: #1e293b;
    color: #cbd5e1;
    padding: 16px 24px;
    margin-top: auto;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-links {
    display: flex;
    gap: 24px;
  }

  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: #3b82f6;
  }
</style>
