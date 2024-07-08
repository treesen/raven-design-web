import _Vue from "vue";
import Button from "./components/button/button.vue";
import "./style/index.scss";

const components: Record<string, typeof _Vue> = {
  Button,
};

export default {
  install: (Vue: typeof _Vue): void => {
    for (const key in components) {
      const component = components[key];
      Vue.component(`Raven${key}`, component);
    }
    
  },

};
