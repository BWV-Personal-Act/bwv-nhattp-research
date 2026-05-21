<template>
  <InputText
    :id="fieldId"
    :value="modelValue"
    v-bind="$attrs"
    :class="{ 'p-invalid': error }"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import { computed } from "vue";

const props = defineProps<{
  modelValue: string | number;
  fieldId?: string;
  error?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const fieldId = computed(
  () => props.fieldId || `field-${Math.random().toString(36).substr(2, 9)}`,
);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
