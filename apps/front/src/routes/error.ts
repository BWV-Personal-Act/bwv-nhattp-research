import { APP_ROUTES } from "@intern/factory";
import type { RouteRecordRaw } from "vue-router";

export default <RouteRecordRaw>{
  path: APP_ROUTES.FRONTEND_PATHS.ERROR,
  component: () => import("@/layouts/RouterBypass.vue"),
  children: [
    {
      path: "",
      name: APP_ROUTES.FRONTEND.NOT_FOUND,
      meta: { title: "Not Found", auth: null },
      component: () => import("@/views/NotFound.vue"),
    },
  ],
};
