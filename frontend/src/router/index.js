import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "allservices",

    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: () => import("../components/PageNotFound.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
