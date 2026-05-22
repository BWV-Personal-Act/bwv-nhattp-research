<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button @click="goHome" class="home-button">Go to Home</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APP_ROUTES } from "@intern/factory";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push({ name: APP_ROUTES.FRONTEND.DASHBOARD });
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.not-found-content {
  text-align: center;
  background: white;
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: #667eea;
  margin: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 32px;
  color: #333;
  margin: 20px 0 16px;
  font-weight: 600;
}

.error-message {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
}

.home-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.home-button:active {
  transform: translateY(0);
}
</style>
