import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "panel",
      component: () => import("@/views/OBSPanel.vue"),
    },
    // {
    //   path: "/obs-widget",
    //   name: "obs-widget",
    //   component: () => import("@/views/OBSWidget.vue"),
    // },
  ],
});

export default router;
