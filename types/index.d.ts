import _Vue from "vue";

export interface PluginOptions {
  prefix?: string;
}

export class RavenDesign {
  static install(Vue: typeof _Vue): void;
}

export default RavenDesign;
