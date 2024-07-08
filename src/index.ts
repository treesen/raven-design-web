import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components = [Button];

export default {
  install: (Vue: typeof _Vue, options?: PluginOptions): void => {
    const { prefix } = options || {};
    const libPrefix = prefix || "raven";

    components.forEach((component) => {
      console.log('libPrefix',libPrefix, 'component.name',component.name);
      
      // Vue.component(`${libPrefix}-${component.name}`, component);
      Vue.component(`raven-button`, component);
    });
  },
};
