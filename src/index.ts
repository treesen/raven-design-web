import { VueConstructor } from "vue";
import button from "./components/button/button.vue";
import "./style/index.scss";

export default {
  install: (Vue: VueConstructor, opts = {}) => {
    Vue.component("raven-button", button);
  },
};
