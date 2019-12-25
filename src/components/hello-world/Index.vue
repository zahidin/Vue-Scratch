<template>
  <div>
    <img alt="Vue logo" :src="VueLogo" />
    <HelloComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloComponent from "@/components/hello-world/component/hello/Index.vue";
import VueLogo from "@/assets/img/logo.png";

export default {
  name: "hello-world",
  data: () => {
    return {
      VueLogo
    };
  },
  components: {
    HelloComponent
  }
};
</script>
