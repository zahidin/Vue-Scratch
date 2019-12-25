import Vue from "vue";
import "./styles/global.scss";
import Router from "./router";
import App from "@/App.vue";

new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");
