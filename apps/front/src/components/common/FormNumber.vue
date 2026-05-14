<template>
  <InputNumber
    :id="fieldId"
    :modelValue="modelValue"
    :mode="mode"
    :currency="currency"
    :locale="locale"
    v-bind="$attrs"
    :class="{ 'p-invalid': error }"
    @update:modelValue="onUpdate"
  />
</template>

<script setup lang="ts">
  import InputNumber from 'primevue/inputnumber';
  import { computed } from 'vue';

  const props = defineProps<{
    modelValue: number | null;
    fieldId?: string;
    error?: string;
    mode?: 'currency' | 'decimal';
    currency?: string;
    locale?: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: number | null): void;
  }>();

  const fieldId = computed(
    () => props.fieldId || `field-${Math.random().toString(36).substr(2, 9)}`
  );

  const onUpdate = (value: number | null) => {
    emit('update:modelValue', value);
  };
</script>
