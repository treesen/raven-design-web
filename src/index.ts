import { VueConstructor } from "vue";
import { Opts } from "./types/index";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components = [Button];

export default {
  install: (Vue: VueConstructor, opts: Opts = {}) => {
    const { prefix } = opts;
    const libPrefix = prefix || "raven";

    components.forEach((component) => {
      Vue.component(`${libPrefix}-${component.name}`, component);
    });
  },
};
