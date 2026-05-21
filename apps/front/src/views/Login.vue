<template>
  <AuthLayout
    :title="APP_ROUTES.FRONTEND.LOGIN"
    icon="pi pi-user"
    :submit-label="APP_ROUTES.FRONTEND.LOGIN"
    :loading="authStore.loading"
    :error="authStore.error"
    footer-text="Don't have an account?"
    footer-link-text="Sign up now"
    footer-route="/register"
    @submit="handleLogin"
  >
    <div class="field">
      <span class="p-input-icon-left w-full">
        <InputText
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full"
          required
        />
      </span>
    </div>

    <div class="field">
      <span class="p-input-icon-left w-full">
        <Password
          v-model="form.password"
          placeholder="Mật khẩu"
          :feedback="false"
          toggle-mask
          class="w-full"
          input-class="w-full"
          required
        />
      </span>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { APP_ROUTES } from "@intern/factory";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import { reactive } from "vue";
import { useRouter } from "vue-router";

import AuthLayout from "../components/AuthLayout.vue";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
const form = reactive({ email: "", password: "" });

const handleLogin = async () => {
  const success = await authStore.login({
    email: form.email,
    password: form.password,
  });
  if (success) router.push({ name: APP_ROUTES.FRONTEND.DASHBOARD });
};
</script>
