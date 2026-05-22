<template>
  <div class="transfer-form">
    <h2>Transfer Balance</h2>

    <template v-if="canTransfer">
      <div class="form-grid">
        <div class="form-group">
          <label for="receiver">To</label>
          <Dropdown
            id="receiver"
            v-model="toUserId"
            :options="userOptions"
            option-label="label"
            option-value="value"
            :class="{ 'p-invalid': errors.toUserId }"
            placeholder="Select Receiver"
            filter
          />
          <small class="p-error">{{ errors.toUserId }}</small>
        </div>

        <div class="form-group">
          <label for="amount">Amount</label>
          <InputNumber
            id="amount"
            v-model="amount"
            :class="{ 'p-invalid': errors.amount }"
            mode="decimal"
            :min="0"
            placeholder="0.00"
          />
          <small class="p-error">{{ errors.amount }}</small>
        </div>
      </div>

      <div class="form-actions">
        <Button
          label="Send Money"
          icon="pi pi-send"
          class="p-button-success"
          :loading="loading"
          :disabled="!meta.valid"
          @click="onTransfer"
        />
      </div>
    </template>

    <div v-else class="empty-state" role="status">
      <i class="pi pi-info-circle" aria-hidden="true"></i>
      <div>
        <p>No available receiver.</p>
        <small>Add at least one other user before making a transfer.</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  baseTransferSchema,
  type TransferData,
  type UserFromApi,
} from "@intern/factory";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import { useForm } from "vee-validate";
import { computed } from "vue";

import { useMutation } from "../composables";
import { useLoading } from "../composables/useLoading";
import { useNotifications } from "../composables/useNotifications";
import { type ApiErrorResponse, transferService } from "../services";

const props = defineProps<{ users: UserFromApi[]; currentUserId: number }>();
const emit = defineEmits(["success"]);
const { notifySuccess, notifyError } = useNotifications();
const {
  mutate: transferBalance,
  isLoading: loading,
  error: transferError,
} = useMutation(transferService.transferBalance);

useLoading(loading);

const receiverUsers = computed(() =>
  props.users.filter((u) => Number(u.id) !== Number(props.currentUserId)),
);

const canTransfer = computed(() => receiverUsers.value.length > 0);

const userOptions = computed(() =>
  receiverUsers.value.map((u) => ({
    label: `${u.name} ($${Number(u.balance).toFixed(2)})`,
    value: u.id,
  })),
);

const { errors, handleSubmit, defineField, resetForm, meta } =
  useForm<TransferData>({
    validationSchema: baseTransferSchema,
    initialValues: { toUserId: undefined, amount: undefined },
  });

const [toUserId] = defineField("toUserId");
const [amount] = defineField("amount");

const onTransfer = handleSubmit(async (values) => {
  const data = await transferBalance(values);
  if (!transferError.value && data) {
    notifySuccess(data.message);
    resetForm();
    emit("success");
  } else {
    const typedError = transferError.value as {
      response?: { data?: ApiErrorResponse };
    };
    notifyError(typedError?.response?.data?.message || "Transfer error");
  }
});
</script>

<style scoped>
h2 {
  margin-top: 0;
  color: #34495e;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group :deep(.p-component) {
  width: 100%;
}

.form-actions {
  margin-top: 1.5rem;
}

.empty-state {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  color: #475569;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
}

.empty-state i {
  margin-top: 0.15rem;
  color: #3b82f6;
}

.empty-state p {
  margin: 0 0 0.25rem;
  color: #334155;
  font-weight: 600;
}

.empty-state small {
  color: #64748b;
}
</style>
