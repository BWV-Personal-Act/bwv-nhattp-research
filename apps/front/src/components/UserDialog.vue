<template>
  <Dialog
    :visible="visible"
    modal
    header="Edit User"
    :style="{ width: '450px' }"
    @update:visible="$emit('update:visible', $event)"
  >
    <div class="p-fluid">
      <slot name="notice"></slot>

      <FormField label="Nationality" :error="errors.nationality" required>
        <FormDropdown
          v-model="nationality"
          :options="NATIONALITY_OPTIONS"
          option-label="label"
          option-value="value"
          placeholder="Select nationality"
        />
      </FormField>

      <FormField label="Email" :error="errors.email" required>
        <FormInput v-model="email" placeholder="Enter email" type="email" />
      </FormField>

      <FormField label="Name" :error="errors.name" required>
        <FormInput v-model="name" placeholder="Enter name" />
      </FormField>

      <FormField label="Initial Balance" :error="errors.balance" required>
        <FormNumber v-model="balance" mode="currency" currency="USD" locale="en-US" />
      </FormField>
    </div>

    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-text"
        @click="$emit('update:visible', false)"
      />
      <Button
        label="Update"
        icon="pi pi-check"
        :loading="loading"
        :disabled="!meta.valid"
        @click="onSubmit"
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { useForm } from 'vee-validate';
  import { updateUserSchema, NATIONALITY_OPTIONS, Nationality } from '@intern/factory';
  import Dialog from 'primevue/dialog';
  import Button from 'primevue/button';
  import FormField from './common/FormField.vue';
  import FormInput from './common/FormInput.vue';
  import FormDropdown from './common/FormDropdown.vue';
  import FormNumber from './common/FormNumber.vue';

  import { UserFromApi } from '@intern/factory';

  const props = defineProps<{
    visible: boolean;
    isEdit: boolean;
    initialData?: Partial<UserFromApi>;
    loading: boolean;
  }>();
  const emit = defineEmits(['update:visible', 'save']);

  const { errors, handleSubmit, defineField, resetForm, meta } = useForm({
    validationSchema: updateUserSchema,
    initialValues: {
      email: props.initialData?.email || '',
      name: props.initialData?.name || '',
      balance: props.initialData?.balance ?? 0,
      nationality: props.initialData?.nationality || Nationality.US,
    },
  });

  const [email] = defineField('email');
  const [name] = defineField('name');
  const [balance] = defineField('balance');
  const [nationality] = defineField('nationality');

  watch(
    () => props.initialData,
    newVal => {
      if (newVal) {
        resetForm({
          values: {
            email: newVal.email || '',
            name: newVal.name || '',
            balance: newVal.balance ?? 0,
            nationality: newVal.nationality || Nationality.US,
          },
        });
      }
    },
    { deep: true }
  );

  const onSubmit = handleSubmit(values => {
    emit('save', { ...props.initialData, ...values });
  });
</script>
