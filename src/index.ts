import { VueConstructor } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
    HelloWorld,
    install: (Vue: VueConstructor, opts = {}) => {
        Vue.component('HelloWorld', HelloWorld)
    }
}