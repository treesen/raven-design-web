import _Vue from "vue";
import { PluginOptions } from "../types/index";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components = [
  Button,
];

export default {
  install: (Vue: typeof _Vue, options?: PluginOptions): void => {
    const { prefix } = options || {};
    const libPrefix = prefix || "raven";

    for (let index = 0; index < components.length; index++) {
      const component = components[index];
      Vue.component(`${libPrefix}${component.name}`, component);
    }
    // components.forEach(component => {
    //   Vue.component(`${libPrefix}${component.name}`, component);
    // })
  },
};
