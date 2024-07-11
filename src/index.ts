import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/button.vue";
import Icon from "./components/icon/icon.vue";
import "./style/index.scss";
import "./components/icon";

const components: Record<string, typeof _Vue> = {
  Button,
  Icon,
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
