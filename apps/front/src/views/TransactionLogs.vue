<template>
  <div class="app-root">
    <div class="transfer-logs-section">
      <TransferLogs />
    </div>
  </div>
</template>

<script setup lang="ts">
import TransferLogs from '../components/common/TransferLogs.vue';
</script>

<style scoped>
.app-root {
  max-width: 1200px;
  margin: 0 auto;
}

.transfer-logs-section {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
</style>
