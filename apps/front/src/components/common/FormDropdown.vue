<template>
  <Dropdown
    :id="fieldId"
    :modelValue="modelValue"
    :options="options"
    :option-label="optionLabel"
    :option-value="optionValue"
    :placeholder="placeholder"
    v-bind="$attrs"
    :class="{ 'p-invalid': error }"
    @update:modelValue="onUpdate"
  />
</template>

<script setup lang="ts" generic="T">
import Dropdown from "primevue/dropdown";
import { computed } from "vue";

const props = defineProps<{
  modelValue: T | null;
  options: (T | { label: string; value: T })[];
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  fieldId?: string;
  error?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: T | null): void;
}>();

const fieldId = computed(
  () => props.fieldId || `field-${Math.random().toString(36).substr(2, 9)}`,
);

const onUpdate = (value: T | null) => {
  emit("update:modelValue", value);
};
</script>
