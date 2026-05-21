<template>
  <div class="form-field">
    <label v-if="label" :for="fieldId" class="form-label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>

    <slot></slot>

    <small v-if="error" class="form-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  label?: string;
  fieldId?: string;
  error?: string;
  required?: boolean;
}>();

const fieldId = computed(
  () => props.fieldId || `field-${Math.random().toString(36).substr(2, 9)}`,
);
</script>

<style scoped>
.form-field {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
}

.required-mark {
  color: #dc2626;
  margin-left: 4px;
}

.form-error {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc2626;
}
</style>
