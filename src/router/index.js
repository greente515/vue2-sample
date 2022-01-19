import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sample1",
    name: "Sample1",
    component: () => import("../views/Sample1.vue"),
  },
  {
    path: "/sample2",
    name: "Sample2",
    component: () => import("../views/Sample2.vue"),
  },
  {
    path: "/sample3",
    name: "Sample3",
    component: () => import("../views/Sample3.vue"),
  },
  {
    path: "/sample4",
    name: "Sample4",
    component: () => import("../views/Sample4.vue"),
  },
  {
    path: "/sample5",
    name: "Sample5",
    component: () => import("../views/Sample5.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
