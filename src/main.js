import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLoadmore, { locale } from "vuejs-loadmore";

Vue.config.productionTip = false;

Vue.use(VueLoadmore);
locale.use("en-US");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
