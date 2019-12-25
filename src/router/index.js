import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const HelloWorld = () => import("@/components/hello-world/Index.vue");

export default new Router({
  routes: [
    {
      path: "/",
      name: "hello-world",
      component: HelloWorld
    }
  ]
});
