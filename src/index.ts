import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components = [Button];

export default {
  install: (Vue: typeof _Vue, opts: PluginOptions): void => {
    const { prefix } = opts || {};
    const libPrefix = prefix || "raven";

    components.forEach((component) => {
      Vue.component(`${libPrefix}-${component.name}`, component);
    });
  },
};
