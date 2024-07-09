import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/Button.vue";
import "./style/index.scss";

const components: Record<string, typeof Button> = {
  Button,
};

export default {
  install: (Vue: typeof _Vue, options?: PluginOptions): void => {
    const { prefix } = options || {};
    const libPrefix = prefix || "Raven";

    for (const key in components) {
      const component = components[key];
      Vue.component(`${libPrefix}${key}`, component);
    }
  },
};
