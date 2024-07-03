import { VueConstructor } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  install: (Vue: VueConstructor, opts = {}) => {
    Vue.component("HelloWorld", HelloWorld);
  },
};
