import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

import "@/assets/css/reset.css";
import "@/assets/scss/main.scss";
import "vue-select/dist/vue-select.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
