import { APP_ROUTES } from "@intern/factory";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: `/${APP_ROUTES.FRONTEND_PATHS.LOGIN}`,
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: APP_ROUTES.FRONTEND.LOGIN,
        meta: { title: APP_ROUTES.FRONTEND.LOGIN, auth: false },
        component: () => import("@/views/Login.vue"),
      },
    ],
  },
  {
    path: `/${APP_ROUTES.FRONTEND_PATHS.REGISTER}`,
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: APP_ROUTES.FRONTEND.REGISTER,
        meta: { title: APP_ROUTES.FRONTEND.REGISTER, auth: false },
        component: () => import("@/views/Register.vue"),
      },
    ],
  },
];

export default routes;
