import { VueConstructor } from "vue";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components = [Button];

export default {
  install: (Vue: VueConstructor, opts: { prefix: string }) => {
    const { prefix } = opts || {};
    const libPrefix = prefix || "raven";

    components.forEach((component) => {
      console.log(`${libPrefix}-${component.name}`);

      Vue.component(`${libPrefix}-${component.name}`, component);
    });
  },
};
