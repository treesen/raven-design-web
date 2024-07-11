(self.webpackChunkraven_design_web=self.webpackChunkraven_design_web||[]).push([[735,791],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{BN:function(){return MDXContext},RP:function(){return useMDXComponents},gz:function(){return withMDXComponents},xA:function(){return MDXProvider}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/button.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Group:function(){return Group},Radius:function(){return Radius},Sizes:function(){return Sizes},Status:function(){return Status},Variants:function(){return Variants},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return button_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),buttonvue_type_script_lang_ts=vue_esm.A.extend({name:"Button",props:{label:String,rounded:Boolean,active:Boolean,disabled:Boolean,loading:Boolean,block:Boolean,href:String,variant:{type:String,default:"primary",validator:function(value){return["primary","secondary","tertiary","negative","attention","success","ghost","no-background","cancel","action","selector"].includes(value)}},size:{type:String,default:"medium",validator:function(value){return["tiny","small","medium"].includes(value)}}},computed:{computedHref(){return this.disabled||this.loading?void 0:this.href}},methods:{onClick(evt){if(this.disabled||this.loading||this.active){evt.preventDefault();return}this.$emit("click",evt)}}}),componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");let __vuedocgen_export_0=(0,componentNormalizer.A)(buttonvue_type_script_lang_ts,function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.href?_c("a",_vm._b({class:["raven-btn","raven-btn-size-"+_vm.size,"raven-btn-variant-"+_vm.variant,{"raven-btn-rounded":_vm.rounded,"raven-btn-active":_vm.active,"raven-btn-block":_vm.block}],attrs:{href:_vm.computedHref,disabled:_vm.disabled},on:{click:_vm.onClick}},"a",_vm.$attrs,!1),[_vm._t("prepend"),_vm._v(" "),_vm._t("default",function(){return[_vm._v(_vm._s(_vm.label))]}),_vm._v(" "),_vm._t("append")],2):_c("button",_vm._b({class:["raven-btn","raven-btn-size-"+_vm.size,"raven-btn-variant-"+_vm.variant,{"raven-btn-rounded":_vm.rounded,"raven-btn-active":_vm.active,"raven-btn-block":_vm.block}],attrs:{disabled:_vm.disabled},on:{click:_vm.onClick}},"button",_vm.$attrs,!1),[_vm._t("prepend"),_vm._v(" "),_vm._t("default",function(){return[_vm._v(_vm._s(_vm.label))]}),_vm._v(" "),_vm._t("append")],2)},[],!1,null,null,null).exports;__vuedocgen_export_0.__docgenInfo={displayName:"Button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"}},{name:"rounded",type:{name:"boolean"}},{name:"active",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"loading",type:{name:"boolean"}},{name:"block",type:{name:"boolean"}},{name:"href",type:{name:"string"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:'"primary"'},values:["primary","secondary","tertiary","negative","attention","success","ghost","no-background","cancel","action","selector"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'},values:["tiny","small","medium"]}],events:[{name:"click",type:{names:["undefined"]}}],slots:[{name:"prepend"},{name:"default"},{name:"append"}],sourceFiles:["/Users/stephen/Documents/work/front-end/raven/raven-design-web/src/components/button/button.vue"]};var button_groupvue_type_script_lang_ts=vue_esm.A.extend({name:"ButtonGroup"});let button_group_vuedocgen_export_0=(0,componentNormalizer.A)(button_groupvue_type_script_lang_ts,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{staticClass:"raven-btn-group"},[this._t("default")],2)},[],!1,null,null,null).exports;button_group_vuedocgen_export_0.__docgenInfo={displayName:"ButtonGroup",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/stephen/Documents/work/front-end/raven/raven-design-web/src/components/button/button-group.vue"]};var icon_star_outline=__webpack_require__("./src/components/icon/icon-star-outline.vue"),button_stories={component:__vuedocgen_export_0};let Radius={render:()=>({components:{Button:__vuedocgen_export_0},template:`
    <div class="component-wapper">
      <Button rounded label="rounded" />
      <Button label="normal" />
    </div>
    `,methods:{onClick(){console.log(1)}}})},Status={render:()=>({components:{Button:__vuedocgen_export_0},template:`
    <div class="component-wapper">
      <Button label="Normal" />
      <Button active label="Active" />
      <Button disabled label="Disabled" />
    </div>
    `})},Sizes={render:()=>({components:{Button:__vuedocgen_export_0,IconStar:icon_star_outline.A},template:`
    <div class="component-wapper">
      <Button size="medium" label="Medium" >
                          <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button size="small" label="Small" >
                          <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button size="tiny" label="Tiny" >
                    <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
    </div>
    `})},Variants={render:()=>({components:{Button:__vuedocgen_export_0,IconStar:icon_star_outline.A},template:`
    <div class="component-wapper">
      <Button variant="primary" label="primary" href="javascript:void(0)">
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="secondary" label="secondary" >
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="tertiary" label="tertiary" >
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="negative" label="negative" >
        <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="action" label="action" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="attention" label="attention" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="success" label="success" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="selector" label="selector" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="ghost" label="ghost" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="cancel" label="cancel" >
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="no-background" label="no-background">
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
      <Button variant="plain" label="plain">
              <template #prepend>
          <IconStar/>
        </template>
        <template #append>
          <IconStar/>
        </template>
      </Button>
    </div>
    `})},Group={render:()=>({components:{Button:__vuedocgen_export_0,ButtonGroup:button_group_vuedocgen_export_0},template:`
    <div class="component-wapper">
      <ButtonGroup>
        <Button size="small" rounded label="<" />
        <Button size="small" label="1" />
        <Button size="small" label="2" />
        <Button size="small" rounded label=">" />
      </ButtonGroup>
    </div>
    `})};Radius.parameters={...Radius.parameters,docs:{...Radius.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      Button\n    },\n    template: `\n    <div class="component-wapper">\n      <Button rounded label="rounded" />\n      <Button label="normal" />\n    </div>\n    `,\n    methods: {\n      onClick() {\n        console.log(1);\n      }\n    }\n  })\n}',...Radius.parameters?.docs?.source}}},Status.parameters={...Status.parameters,docs:{...Status.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      Button\n    },\n    template: `\n    <div class="component-wapper">\n      <Button label="Normal" />\n      <Button active label="Active" />\n      <Button disabled label="Disabled" />\n    </div>\n    `\n  })\n}',...Status.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      Button,\n      IconStar\n    },\n    template: `\n    <div class="component-wapper">\n      <Button size="medium" label="Medium" >\n                          <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button size="small" label="Small" >\n                          <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button size="tiny" label="Tiny" >\n                    <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n    </div>\n    `\n  })\n}',...Sizes.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      Button,\n      IconStar\n    },\n    template: `\n    <div class="component-wapper">\n      <Button variant="primary" label="primary" href="javascript:void(0)">\n        <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="secondary" label="secondary" >\n        <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="tertiary" label="tertiary" >\n        <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="negative" label="negative" >\n        <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="action" label="action" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="attention" label="attention" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="success" label="success" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="selector" label="selector" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="ghost" label="ghost" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="cancel" label="cancel" >\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="no-background" label="no-background">\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n      <Button variant="plain" label="plain">\n              <template #prepend>\n          <IconStar/>\n        </template>\n        <template #append>\n          <IconStar/>\n        </template>\n      </Button>\n    </div>\n    `\n  })\n}',...Variants.parameters?.docs?.source}}},Group.parameters={...Group.parameters,docs:{...Group.parameters?.docs,source:{originalSource:'{\n  render: () => ({\n    components: {\n      Button,\n      ButtonGroup\n    },\n    template: `\n    <div class="component-wapper">\n      <ButtonGroup>\n        <Button size="small" rounded label="<" />\n        <Button size="small" label="1" />\n        <Button size="small" label="2" />\n        <Button size="small" rounded label=">" />\n      </ButtonGroup>\n    </div>\n    `\n  })\n}',...Group.parameters?.docs?.source}}};let __namedExportsOrder=["Radius","Status","Sizes","Variants","Group"]},"./src/stories/guidance.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_stephen_Documents_work_front_end_raven_raven_design_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_button_stories_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/button.stories.ts");function _createMdxContent(props){let _components=Object.assign({h1:"h1",h3:"h3"},(0,_Users_stephen_Documents_work_front_end_raven_raven_design_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{title:"Guidance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"guidance-of-raven-design",children:"Guidance of Raven Design"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{of:_button_stories_ts__WEBPACK_IMPORTED_MODULE_4__.Variants})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_Users_stephen_Documents_work_front_end_raven_raven_design_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}__webpack_exports__.default=MDXContent},"./node_modules/memoizerific sync recursive":function(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/icon/icon-star-outline.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return icon_star_outline}});var icon_star_outlinevue_type_script_lang_ts=__webpack_require__("./node_modules/vue/dist/vue.esm.js").A.extend({name:"icon-star-outline"});let __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").A)(icon_star_outlinevue_type_script_lang_ts,function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"}},[_c("path",{attrs:{"fill-rule":"evenodd",d:"M12.692 4.461a.75.75 0 0 0-1.385 0L9.363 9.136l-5.047.405a.75.75 0 0 0-.428 1.317l3.845 3.294-1.174 4.925a.75.75 0 0 0 1.12.814L12 17.25l4.322 2.64a.75.75 0 0 0 1.12-.814l-1.175-4.925 3.846-3.294a.75.75 0 0 0-.428-1.317l-5.047-.405zm-2.12 5.674L12 6.702l1.428 3.433a.75.75 0 0 0 .632.46l3.706.297-2.823 2.419a.75.75 0 0 0-.242.743l.863 3.617-3.173-1.938a.75.75 0 0 0-.782 0L8.436 17.67l.863-3.617a.75.75 0 0 0-.242-.743l-2.823-2.42 3.706-.296a.75.75 0 0 0 .632-.46","clip-rule":"evenodd"}})])},[],!1,null,null,null).exports;var icon_star_outline=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"icon-star-outline",exportName:"default",description:"",tags:{},sourceFiles:["/Users/stephen/Documents/work/front-end/raven/raven-design-web/src/components/icon/icon-star-outline.vue"]}},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook){if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function renderWithStyleInjection(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}}return{exports:scriptExports,options:options}}__webpack_require__.d(__webpack_exports__,{A:function(){return normalizeComponent}})}}]);
//# sourceMappingURL=stories-guidance-mdx.a5db7da2.iframe.bundle.js.map