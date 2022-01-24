import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

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
    path: "/sample5-1",
    name: "Sample5-1",
    component: () => import("../views/Sample5-1.vue"),
  },
  {
    path: "/sample5-2",
    name: "Sample5-2",
    component: () => import("../views/Sample5-2.vue"),
  },
  {
    path: "/sample6-1",
    name: "Sample6-1",
    component: () => import("../views/Sample6-1.vue"),
  },
  {
    path: "/sample6-2",
    name: "Sample6-2",
    component: () => import("../views/Sample6-2.vue"),
  },
  {
    path: "/markdown",
    name: "Markdown",
    component: () => import("../views/MarkdownEditor.vue"),
  },
  {
    path: "/transition",
    name: "Transition",
    component: () => import("../views/Transition.vue"),
  },
  {
    path: "/player",
    name: "Player",
    component: () => import("../views/Player.vue"),
  },
  {
    path: "/moreLoad",
    name: "MoreLoad",
    component: () => import("../views/MoreLoad.vue"),
  },
  {
    path: "/miniplayer",
    name: "MiniPlayer",
    component: () => import("../views/MiniPlayer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("startSpinner");
  setTimeout(() => {
    next();
  }, 1);
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  store.commit("endSpinner");
});

export default router;
