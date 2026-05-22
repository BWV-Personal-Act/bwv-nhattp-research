import { APP_ROUTES } from "@intern/factory";
import type { RouteRecordRaw } from "vue-router";

export default <RouteRecordRaw>{
  path: APP_ROUTES.FRONTEND_PATHS.ROOT,
  component: () => import("@/layouts/AppLayout.vue"),
  redirect: { name: APP_ROUTES.FRONTEND.DASHBOARD },
  meta: { auth: true },
  children: [
    {
      path: APP_ROUTES.FRONTEND_PATHS.USERS,
      name: APP_ROUTES.FRONTEND.DASHBOARD,
      meta: { title: "Users" },
      component: () => import("@/views/Dashboard.vue"),
    },
    {
      path: APP_ROUTES.FRONTEND_PATHS.USER_PROFILE,
      name: APP_ROUTES.FRONTEND.USER_PROFILE,
      props: true,
      meta: { title: "User Profile" },
      component: () => import("@/views/UserProfile.vue"),
    },
    {
      path: APP_ROUTES.FRONTEND_PATHS.TRANSACTIONS,
      name: APP_ROUTES.FRONTEND.TRANSACTIONS_LOGS,
      meta: { title: "Transaction History" },
      component: () => import("@/views/TransactionLogs.vue"),
    },
  ],
};
