(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["raven-design-web"] = factory(require("vue"));
	else
		root["raven-design-web"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/button/button.vue?vue&type=template&id=8d060e14
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.href)?_c('a',_vm._b({class:[
    'raven-btn',
    ("raven-btn-size-" + _vm.size),
    ("raven-btn-variant-" + _vm.variant),
    {
      'raven-btn-rounded': _vm.rounded,
      'raven-btn-active': _vm.active,
      'raven-btn-block': _vm.block,
    } ],attrs:{"href":_vm.computedHref,"disabled":_vm.disabled},on:{"click":_vm.onClick}},'a',_vm.$attrs,false),[_vm._t("prepend"),_vm._t("default",function(){return [_vm._v(_vm._s(_vm.label))]}),_vm._t("append")],2):_c('button',_vm._b({class:[
    'raven-btn',
    ("raven-btn-size-" + _vm.size),
    ("raven-btn-variant-" + _vm.variant),
    {
      'raven-btn-rounded': _vm.rounded,
      'raven-btn-active': _vm.active,
      'raven-btn-block': _vm.block,
    } ],attrs:{"disabled":_vm.disabled},on:{"click":_vm.onClick}},'button',_vm.$attrs,false),[_vm._t("prepend"),_vm._t("default",function(){return [_vm._v(_vm._s(_vm.label))]}),_vm._t("append")],2)}
var staticRenderFns = []


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-typescript/node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/button/button.vue?vue&type=script&lang=ts

/* harmony default export */ var buttonvue_type_script_lang_ts = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
  name: "Button",
  props: {
    label: {
      type: String
    },
    variant: {
      type: String,
      default: "clickthrough",
      validator: function (value) {
        return ["clickthrough", "negative", "attention", "success", "ghost", "no-background", "cancel", "action", "selector"].indexOf(value) !== -1;
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["tiny", "small", "medium"].indexOf(value) !== -1;
      }
    },
    rounded: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    href: {
      type: String
    }
  },
  computed: {
    computedHref() {
      return this.disabled || this.loading ? undefined : this.href;
    }
  },
  methods: {
    onClick(evt) {
      if (this.disabled || this.loading || this.active) {
        evt.preventDefault();
        return;
      }
      this.$emit("click", evt);
    }
  }
}));
;// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=script&lang=ts
 /* harmony default export */ var button_buttonvue_type_script_lang_ts = (buttonvue_type_script_lang_ts); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/button/button.vue





/* normalize component */
;
var component = normalizeComponent(
  button_buttonvue_type_script_lang_ts,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_button = (component.exports);
;// CONCATENATED MODULE: ./src/style/index.scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/index.ts


const components = {
  Button: button_button
};
/* harmony default export */ var src_0 = ({
  install: (Vue, options) => {
    const {
      prefix
    } = options || {};
    const libPrefix = prefix || "Raven";
    for (const key in components) {
      const component = components[key];
      Vue.component(`${libPrefix}${key}`, component);
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=raven-design-web.umd.js.map