import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components: Record<string, typeof _Vue> = {
  Button,
};

export default {
  install: (Vue: typeof _Vue, options?: PluginOptions): void => {
    const { prefix } = options || {};
    const libPrefix = prefix || "raven";

    for (const key in components) {
      const component = components[key];
      Vue.component(`${libPrefix}-${key}`, component);
    }
  },
};
