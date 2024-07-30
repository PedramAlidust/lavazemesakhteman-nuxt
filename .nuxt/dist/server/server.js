module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/CataloguePdf","2":"pages/ProductsPdf","3":"pages/blog/_blog/index","4":"pages/blog/about","5":"pages/blog/index","6":"pages/categories/_categorie/index","7":"pages/categories/index","8":"pages/index","9":"pages/order/getinfo","10":"pages/order/index","11":"pages/panel/index","12":"pages/panel/login","13":"pages/panel/model","14":"pages/panel/subcategory","15":"pages/product/_single/index","16":"pages/products/_product/index","17":"pages/products/all","18":"pages/products/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/2022/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("089cf57e", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3b8e9566", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"لوازم ساختمان\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"لوازم ساختمان\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"لوازم ساختمان\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"لوازم ساختمان\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/2022/_nuxt/icons/icon_64x64.055abe.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/2022/_nuxt/icons/icon_512x512.055abe.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/2022/_nuxt/manifest.e9e8861c.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_629329f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_629329f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_629329f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_629329f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_629329f6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error-page[data-v-629329f6]{text-align:center}.error-page a[data-v-629329f6]{text-decoration:none;color:red}.error-page a[data-v-629329f6]:active,.error-page a[data-v-629329f6]:hover{color:salmon}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_9f0a498a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_9f0a498a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_9f0a498a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_9f0a498a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_9f0a498a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("797461a0", content, true)

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/*! Buefy v0.9.28 | MIT License | github.com/buefy/buefy */@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n/*! bulma.io v0.9.4 | MIT License | github.com/jgthms/bulma */.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.taginput .taginput-container.is-focusable,.textarea{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.5em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.5em - 1px) calc(.75em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{outline:none}.select fieldset[disabled] select,.select select[disabled],.taginput [disabled].taginput-container.is-focusable,.taginput fieldset[disabled] .taginput-container.is-focusable,[disabled].button,[disabled].file-cta,[disabled].file-name,[disabled].input,[disabled].pagination-ellipsis,[disabled].pagination-link,[disabled].pagination-next,[disabled].pagination-previous,[disabled].textarea,fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{cursor:not-allowed}.b-checkbox.checkbox,.b-radio.radio,.breadcrumb,.button,.carousel,.carousel-list,.file,.is-unselectable,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.switch,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless):after,.select:not(.is-multiple):not(.is-loading):after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.level:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.pagination:not(:last-child),.progress-wrapper.is-not-native:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:9999px;cursor:pointer;pointer-events:auto;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before,.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete:before,.modal-close:before{height:2px;width:50%}.delete:after,.modal-close:after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading:after,.control.is-loading:after,.loader,.select.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:9999px;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;position:relative;width:1em}.b-image-wrapper>img.has-ratio,.b-image-wrapper>img.placeholder,.hero-video,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.navbar-burger{color:currentColor;font-family:inherit;font-size:1em}\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */.navbar-burger,blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:inherit}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,optgroup,select,textarea{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#7957d5;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{color:#da1039;font-size:.875em;font-weight:400;padding:.25em .5em}code,hr{background-color:#f5f5f5}hr{border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:inherit}table th{color:#363636}@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.box{background-color:#fff;border-radius:6px;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px #7957d5;box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px #7957d5}a.box:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5;box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:calc(.5em - 1px) 1em;text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.5em - 1px);margin-right:.25em}.button .icon:last-child:not(:first-child){margin-left:.25em;margin-right:calc(-.5em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.5em - 1px);margin-right:calc(-.5em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#7957d5;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-ghost{background:none;border-color:transparent;color:#7957d5;text-decoration:none}.button.is-ghost.is-hovered,.button.is-ghost:hover{color:#7957d5;text-decoration:underline}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:#fff;-webkit-box-shadow:none;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-hovered,.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined.is-focused,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined.is-loading.is-focused:after,.button.is-white.is-outlined.is-loading.is-hovered:after,.button.is-white.is-outlined.is-loading:focus:after,.button.is-white.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined.is-focused,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-white.is-inverted.is-outlined.is-loading:focus:after,.button.is-white.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-hovered,.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined.is-focused,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined.is-loading.is-focused:after,.button.is-black.is-outlined.is-loading.is-hovered:after,.button.is-black.is-outlined.is-loading:focus:after,.button.is-black.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined.is-focused,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-black.is-inverted.is-outlined.is-loading:focus:after,.button.is-black.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none}.button.is-light.is-inverted{color:#f5f5f5}.button.is-light.is-inverted,.button.is-light.is-inverted.is-hovered,.button.is-light.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined.is-focused,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:rgba(0,0,0,.7)}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined.is-loading.is-focused:after,.button.is-light.is-outlined.is-loading.is-hovered:after,.button.is-light.is-outlined.is-loading:focus:after,.button.is-light.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-light.is-inverted.is-outlined.is-focused,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#f5f5f5}.button.is-light.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-light.is-inverted.is-outlined.is-loading:focus:after,.button.is-light.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-dark{background-color:#363636;border-color:transparent;color:#fff}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#fff}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#fff}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#fff}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:#363636;-webkit-box-shadow:none;box-shadow:none}.button.is-dark.is-inverted{background-color:#fff;color:#363636}.button.is-dark.is-inverted.is-hovered,.button.is-dark.is-inverted:hover{background-color:#f2f2f2}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined.is-focused,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#fff}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined.is-loading.is-focused:after,.button.is-dark.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-outlined.is-loading:focus:after,.button.is-dark.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-dark.is-inverted.is-outlined.is-focused,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#fff;color:#363636}.button.is-dark.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-inverted.is-outlined.is-loading:focus:after,.button.is-dark.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-primary{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#7957d5;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-hovered,.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-primary.is-outlined.is-focused,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-outlined.is-loading.is-focused:after,.button.is-primary.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-outlined.is-loading:focus:after,.button.is-primary.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined.is-focused,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-inverted.is-outlined.is-loading:focus:after,.button.is-primary.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-primary.is-light{background-color:#f2effb;color:#552fbc}.button.is-primary.is-light.is-hovered,.button.is-primary.is-light:hover{background-color:#eae4f8;border-color:transparent;color:#552fbc}.button.is-primary.is-light.is-active,.button.is-primary.is-light:active{background-color:#e2daf6;border-color:transparent;color:#552fbc}.button.is-link{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#7957d5;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-hovered,.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-link.is-outlined.is-focused,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-outlined.is-loading.is-focused:after,.button.is-link.is-outlined.is-loading.is-hovered:after,.button.is-link.is-outlined.is-loading:focus:after,.button.is-link.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined.is-focused,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-link.is-inverted.is-outlined.is-loading:focus:after,.button.is-link.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-link.is-light{background-color:#f2effb;color:#552fbc}.button.is-link.is-light.is-hovered,.button.is-link.is-light:hover{background-color:#eae4f8;border-color:transparent;color:#552fbc}.button.is-link.is-light.is-active,.button.is-link.is-light:active{background-color:#e2daf6;border-color:transparent;color:#552fbc}.button.is-info{background-color:#167df0;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#0f77ea;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#0e71de;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#167df0;border-color:#167df0;-webkit-box-shadow:none;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-hovered,.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#167df0;color:#167df0}.button.is-info.is-outlined.is-focused,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#167df0;border-color:#167df0;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-outlined.is-loading.is-focused:after,.button.is-info.is-outlined.is-loading.is-hovered:after,.button.is-info.is-outlined.is-loading:focus:after,.button.is-info.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#167df0;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined.is-focused,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-info.is-inverted.is-outlined.is-loading:focus:after,.button.is-info.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-info.is-light{background-color:#ecf4fe;color:#0d68ce}.button.is-info.is-light.is-hovered,.button.is-info.is-light:hover{background-color:#e0eefd;border-color:transparent;color:#0d68ce}.button.is-info.is-light.is-active,.button.is-info.is-light:active{background-color:#d4e7fc;border-color:transparent;color:#0d68ce}.button.is-success{background-color:#48c78e;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#3ec487;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(72,199,142,.25);box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#3abb81;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#48c78e;border-color:#48c78e;-webkit-box-shadow:none;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#48c78e}.button.is-success.is-inverted.is-hovered,.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#48c78e}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#48c78e;color:#48c78e}.button.is-success.is-outlined.is-focused,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#48c78e;border-color:#48c78e;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #48c78e #48c78e!important}.button.is-success.is-outlined.is-loading.is-focused:after,.button.is-success.is-outlined.is-loading.is-hovered:after,.button.is-success.is-outlined.is-loading:focus:after,.button.is-success.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#48c78e;-webkit-box-shadow:none;box-shadow:none;color:#48c78e}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined.is-focused,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#48c78e}.button.is-success.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-success.is-inverted.is-outlined.is-loading:focus:after,.button.is-success.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #48c78e #48c78e!important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-success.is-light{background-color:#effaf5;color:#257953}.button.is-success.is-light.is-hovered,.button.is-success.is-light:hover{background-color:#e6f7ef;border-color:transparent;color:#257953}.button.is-success.is-light.is-active,.button.is-success.is-light:active{background-color:#dcf4e9;border-color:transparent;color:#257953}.button.is-warning{background-color:#ffe08a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdc7d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,224,138,.25);box-shadow:0 0 0 .125em rgba(255,224,138,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd970;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffe08a;border-color:#ffe08a;-webkit-box-shadow:none;box-shadow:none}.button.is-warning.is-inverted{color:#ffe08a}.button.is-warning.is-inverted,.button.is-warning.is-inverted.is-hovered,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ffe08a}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffe08a;color:#ffe08a}.button.is-warning.is-outlined.is-focused,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffe08a;border-color:#ffe08a;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffe08a #ffe08a!important}.button.is-warning.is-outlined.is-loading.is-focused:after,.button.is-warning.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-outlined.is-loading:focus:after,.button.is-warning.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffe08a;-webkit-box-shadow:none;box-shadow:none;color:#ffe08a}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined.is-focused,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffe08a}.button.is-warning.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-inverted.is-outlined.is-loading:focus:after,.button.is-warning.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ffe08a #ffe08a!important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-warning.is-light{background-color:#fffaeb;color:#946c00}.button.is-warning.is-light.is-hovered,.button.is-warning.is-light:hover{background-color:#fff6de;border-color:transparent;color:#946c00}.button.is-warning.is-light.is-active,.button.is-warning.is-light:active{background-color:#fff3d1;border-color:transparent;color:#946c00}.button.is-danger{background-color:#f14668;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#f03a5f;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(241,70,104,.25);box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ef2e55;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#f14668;border-color:#f14668;-webkit-box-shadow:none;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-hovered,.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f14668}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;color:#f14668}.button.is-danger.is-outlined.is-focused,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#f14668;border-color:#f14668;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #f14668 #f14668!important}.button.is-danger.is-outlined.is-loading.is-focused:after,.button.is-danger.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-outlined.is-loading:focus:after,.button.is-danger.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#f14668;-webkit-box-shadow:none;box-shadow:none;color:#f14668}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined.is-focused,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#f14668}.button.is-danger.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-inverted.is-outlined.is-loading:focus:after,.button.is-danger.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f14668 #f14668!important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.button.is-danger.is-light.is-hovered,.button.is-danger.is-light:hover{background-color:#fde0e6;border-color:transparent;color:#cc0f35}.button.is-danger.is-light.is-active,.button.is-danger.is-light:active{background-color:#fcd4dc;border-color:transparent;color:#cc0f35}.button.is-small{font-size:.75rem}.button.is-small:not(.is-rounded){border-radius:2px}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;opacity:.5}.button.is-fullwidth{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{position:absolute;left:calc(50% - .5em);top:calc(50% - .5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:9999px;padding-left:1.25em;padding-right:1.25em}.buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){font-size:.75rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded){border-radius:2px}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.buttons.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}@media screen and (max-width:768px){.button.is-responsive.is-small{font-size:.5625rem}.button.is-responsive,.button.is-responsive.is-normal{font-size:.65625rem}.button.is-responsive.is-medium{font-size:.75rem}.button.is-responsive.is-large{font-size:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.button.is-responsive.is-small{font-size:.65625rem}.button.is-responsive,.button.is-responsive.is-normal{font-size:.75rem}.button.is-responsive.is-medium{font-size:1rem}.button.is-responsive.is-large{font-size:1.25rem}}.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none!important;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width:1024px){.container{max-width:960px}}@media screen and (max-width:1215px){.container.is-widescreen:not(.is-max-desktop){max-width:1152px}}@media screen and (max-width:1407px){.container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}@media screen and (min-width:1216px){.container:not(.is-max-desktop){max-width:1152px}}@media screen and (min-width:1408px){.container:not(.is-max-desktop):not(.is-max-widescreen){max-width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:inherit}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-normal{font-size:1rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.icon-text{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;color:inherit;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.5rem;vertical-align:top}.icon-text .icon{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.icon-text .icon:not(:last-child){margin-right:.25em}.icon-text .icon:not(:first-child){margin-left:.25em}div.icon-text{display:-webkit-box;display:-ms-flexbox;display:flex}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:9999px}.image.is-fullwidth{width:100%}.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;position:relative;padding:1.25rem 2.5rem 1.25rem 1.5rem}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{right:.5rem;position:absolute;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.notification.is-dark{background-color:#363636;color:#fff}.notification.is-primary{background-color:#7957d5;color:#fff}.notification.is-primary.is-light{background-color:#f2effb;color:#552fbc}.notification.is-link{background-color:#7957d5;color:#fff}.notification.is-link.is-light{background-color:#f2effb;color:#552fbc}.notification.is-info{background-color:#167df0;color:#fff}.notification.is-info.is-light{background-color:#ecf4fe;color:#0d68ce}.notification.is-success{background-color:#48c78e;color:#fff}.notification.is-success.is-light{background-color:#effaf5;color:#257953}.notification.is-warning{background-color:#ffe08a;color:rgba(0,0,0,.7)}.notification.is-warning.is-light{background-color:#fffaeb;color:#946c00}.notification.is-danger{background-color:#f14668;color:#fff}.notification.is-danger.is-light{background-color:#feecf0;color:#cc0f35}.progress,.progress-wrapper.is-not-native{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:9999px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress-wrapper.is-not-native::-webkit-progress-bar,.progress::-webkit-progress-bar{background-color:#ededed}.progress-wrapper.is-not-native::-webkit-progress-value,.progress::-webkit-progress-value{background-color:#4a4a4a}.progress-wrapper.is-not-native::-moz-progress-bar,.progress::-moz-progress-bar{background-color:#4a4a4a}.progress-wrapper.is-not-native::-ms-fill,.progress::-ms-fill{background-color:#4a4a4a;border:none}.is-white.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-white::-webkit-progress-value{background-color:#fff}.is-white.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-white::-moz-progress-bar{background-color:#fff}.is-white.progress-wrapper.is-not-native::-ms-fill,.progress.is-white::-ms-fill{background-color:#fff}.is-white.progress-wrapper.is-not-native:indeterminate,.progress.is-white:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#fff),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#fff 30%,#ededed 0)}.is-black.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.is-black.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.is-black.progress-wrapper.is-not-native::-ms-fill,.progress.is-black::-ms-fill{background-color:#0a0a0a}.is-black.progress-wrapper.is-not-native:indeterminate,.progress.is-black:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#0a0a0a),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#0a0a0a 30%,#ededed 0)}.is-light.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.is-light.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.is-light.progress-wrapper.is-not-native::-ms-fill,.progress.is-light::-ms-fill{background-color:#f5f5f5}.is-light.progress-wrapper.is-not-native:indeterminate,.progress.is-light:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#f5f5f5),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#f5f5f5 30%,#ededed 0)}.is-dark.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-dark::-webkit-progress-value{background-color:#363636}.is-dark.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-dark::-moz-progress-bar{background-color:#363636}.is-dark.progress-wrapper.is-not-native::-ms-fill,.progress.is-dark::-ms-fill{background-color:#363636}.is-dark.progress-wrapper.is-not-native:indeterminate,.progress.is-dark:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#363636),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#363636 30%,#ededed 0)}.is-primary.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-primary::-webkit-progress-value{background-color:#7957d5}.is-primary.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-primary::-moz-progress-bar{background-color:#7957d5}.is-primary.progress-wrapper.is-not-native::-ms-fill,.progress.is-primary::-ms-fill{background-color:#7957d5}.is-primary.progress-wrapper.is-not-native:indeterminate,.progress.is-primary:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#7957d5 30%,#ededed 0)}.is-link.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-link::-webkit-progress-value{background-color:#7957d5}.is-link.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-link::-moz-progress-bar{background-color:#7957d5}.is-link.progress-wrapper.is-not-native::-ms-fill,.progress.is-link::-ms-fill{background-color:#7957d5}.is-link.progress-wrapper.is-not-native:indeterminate,.progress.is-link:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#7957d5 30%,#ededed 0)}.is-info.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-info::-webkit-progress-value{background-color:#167df0}.is-info.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-info::-moz-progress-bar{background-color:#167df0}.is-info.progress-wrapper.is-not-native::-ms-fill,.progress.is-info::-ms-fill{background-color:#167df0}.is-info.progress-wrapper.is-not-native:indeterminate,.progress.is-info:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#167df0),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#167df0 30%,#ededed 0)}.is-success.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-success::-webkit-progress-value{background-color:#48c78e}.is-success.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-success::-moz-progress-bar{background-color:#48c78e}.is-success.progress-wrapper.is-not-native::-ms-fill,.progress.is-success::-ms-fill{background-color:#48c78e}.is-success.progress-wrapper.is-not-native:indeterminate,.progress.is-success:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#48c78e),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#48c78e 30%,#ededed 0)}.is-warning.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-warning::-webkit-progress-value{background-color:#ffe08a}.is-warning.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-warning::-moz-progress-bar{background-color:#ffe08a}.is-warning.progress-wrapper.is-not-native::-ms-fill,.progress.is-warning::-ms-fill{background-color:#ffe08a}.is-warning.progress-wrapper.is-not-native:indeterminate,.progress.is-warning:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#ffe08a),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#ffe08a 30%,#ededed 0)}.is-danger.progress-wrapper.is-not-native::-webkit-progress-value,.progress.is-danger::-webkit-progress-value{background-color:#f14668}.is-danger.progress-wrapper.is-not-native::-moz-progress-bar,.progress.is-danger::-moz-progress-bar{background-color:#f14668}.is-danger.progress-wrapper.is-not-native::-ms-fill,.progress.is-danger::-ms-fill{background-color:#f14668}.is-danger.progress-wrapper.is-not-native:indeterminate,.progress.is-danger:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#f14668),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#f14668 30%,#ededed 0)}.progress-wrapper.is-not-native:indeterminate,.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#ededed;background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#4a4a4a),color-stop(30%,#ededed));background-image:linear-gradient(90deg,#4a4a4a 30%,#ededed 0);background-position:0 0;background-repeat:no-repeat;background-size:150% 150%}.progress-wrapper.is-not-native:indeterminate::-webkit-progress-bar,.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress-wrapper.is-not-native:indeterminate::-moz-progress-bar,.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress-wrapper.is-not-native:indeterminate::-ms-fill,.progress:indeterminate::-ms-fill{animation-name:none}.is-small.progress-wrapper.is-not-native,.progress.is-small{height:.75rem}.is-medium.progress-wrapper.is-not-native,.progress.is-medium{height:1.25rem}.is-large.progress-wrapper.is-not-native,.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:rgba(0,0,0,.7)}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#fff}.table td.is-link,.table td.is-primary,.table th.is-link,.table th.is-primary{background-color:#7957d5;border-color:#7957d5;color:#fff}.table td.is-info,.table th.is-info{background-color:#167df0;border-color:#167df0;color:#fff}.table td.is-success,.table th.is-success{background-color:#48c78e;border-color:#48c78e;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffe08a;border-color:#ffe08a;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#f14668;border-color:#f14668;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#7957d5;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table td.is-vcentered,.table th.is-vcentered{vertical-align:middle}.table th{color:#363636}.table th:not([align]){text-align:left}.table tr.is-selected{background-color:#7957d5;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:transparent}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover,.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(2n){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.has-addons .tag,.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.tag:not(body).is-dark{background-color:#363636;color:#fff}.tag:not(body).is-primary{background-color:#7957d5;color:#fff}.tag:not(body).is-primary.is-light{background-color:#f2effb;color:#552fbc}.tag:not(body).is-link{background-color:#7957d5;color:#fff}.tag:not(body).is-link.is-light{background-color:#f2effb;color:#552fbc}.tag:not(body).is-info{background-color:#167df0;color:#fff}.tag:not(body).is-info.is-light{background-color:#ecf4fe;color:#0d68ce}.tag:not(body).is-success{background-color:#48c78e;color:#fff}.tag:not(body).is-success.is-light{background-color:#effaf5;color:#257953}.tag:not(body).is-warning{background-color:#ffe08a;color:rgba(0,0,0,.7)}.tag:not(body).is-warning.is-light{background-color:#fffaeb;color:#946c00}.tag:not(body).is-danger{background-color:#f14668;color:#fff}.tag:not(body).is-danger.is-light{background-color:#feecf0;color:#cc0f35}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:9999px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.subtitle sup,.title sub,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:9999px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1.25rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.input,.select select,.taginput .taginput-container.is-focusable,.textarea{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.input::-moz-placeholder,.select select::-moz-placeholder,.taginput .taginput-container.is-focusable::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.select select::-webkit-input-placeholder,.taginput .taginput-container.is-focusable::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.select select:-moz-placeholder,.taginput .taginput-container.is-focusable:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.select select:-ms-input-placeholder,.taginput .taginput-container.is-focusable:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered,.select select:hover,.taginput .is-hovered.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:hover,.textarea:hover{border-color:#b5b5b5}.input:active,.input:focus,.is-active.input,.is-active.textarea,.is-focused.input,.is-focused.textarea,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select fieldset[disabled] select,.select select[disabled],.taginput [disabled].taginput-container.is-focusable,.taginput fieldset[disabled] .taginput-container.is-focusable,[disabled].input,[disabled].textarea,fieldset[disabled] .input,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.select fieldset[disabled] select::-moz-placeholder,.select select[disabled]::-moz-placeholder,.taginput [disabled].taginput-container.is-focusable::-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder,[disabled].input::-moz-placeholder,[disabled].textarea::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.select fieldset[disabled] select::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,.taginput [disabled].taginput-container.is-focusable::-webkit-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder,[disabled].input::-webkit-input-placeholder,[disabled].textarea::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:hsla(0,0%,47.8%,.3)}.select fieldset[disabled] select:-moz-placeholder,.select select[disabled]:-moz-placeholder,.taginput [disabled].taginput-container.is-focusable:-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder,[disabled].input:-moz-placeholder,[disabled].textarea:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.select fieldset[disabled] select:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,.taginput [disabled].taginput-container.is-focusable:-ms-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder,[disabled].input:-ms-input-placeholder,[disabled].textarea:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input,.taginput .taginput-container.is-focusable,.textarea{-webkit-box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);max-width:100%;width:100%}.taginput [readonly].taginput-container.is-focusable,[readonly].input,[readonly].textarea{-webkit-box-shadow:none;box-shadow:none}.is-white.input,.is-white.textarea,.taginput .is-white.taginput-container.is-focusable{border-color:#fff}.is-white.input:active,.is-white.input:focus,.is-white.is-active.input,.is-white.is-active.textarea,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.textarea:active,.is-white.textarea:focus,.taginput .is-white.is-active.taginput-container.is-focusable,.taginput .is-white.is-focused.taginput-container.is-focusable,.taginput .is-white.taginput-container.is-focusable:active,.taginput .is-white.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.is-black.input,.is-black.textarea,.taginput .is-black.taginput-container.is-focusable{border-color:#0a0a0a}.is-black.input:active,.is-black.input:focus,.is-black.is-active.input,.is-black.is-active.textarea,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.textarea:active,.is-black.textarea:focus,.taginput .is-black.is-active.taginput-container.is-focusable,.taginput .is-black.is-focused.taginput-container.is-focusable,.taginput .is-black.taginput-container.is-focusable:active,.taginput .is-black.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.input,.is-light.textarea,.taginput .is-light.taginput-container.is-focusable{border-color:#f5f5f5}.is-light.input:active,.is-light.input:focus,.is-light.is-active.input,.is-light.is-active.textarea,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.textarea:active,.is-light.textarea:focus,.taginput .is-light.is-active.taginput-container.is-focusable,.taginput .is-light.is-focused.taginput-container.is-focusable,.taginput .is-light.taginput-container.is-focusable:active,.taginput .is-light.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.is-dark.input,.is-dark.textarea,.taginput .is-dark.taginput-container.is-focusable{border-color:#363636}.is-dark.input:active,.is-dark.input:focus,.is-dark.is-active.input,.is-dark.is-active.textarea,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.textarea:active,.is-dark.textarea:focus,.taginput .is-dark.is-active.taginput-container.is-focusable,.taginput .is-dark.is-focused.taginput-container.is-focusable,.taginput .is-dark.taginput-container.is-focusable:active,.taginput .is-dark.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.is-primary.input,.is-primary.textarea,.taginput .is-primary.taginput-container.is-focusable{border-color:#7957d5}.is-primary.input:active,.is-primary.input:focus,.is-primary.is-active.input,.is-primary.is-active.textarea,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.textarea:active,.is-primary.textarea:focus,.taginput .is-primary.is-active.taginput-container.is-focusable,.taginput .is-primary.is-focused.taginput-container.is-focusable,.taginput .is-primary.taginput-container.is-focusable:active,.taginput .is-primary.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-link.input,.is-link.textarea,.taginput .is-link.taginput-container.is-focusable{border-color:#7957d5}.is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.textarea:active,.is-link.textarea:focus,.taginput .is-link.is-active.taginput-container.is-focusable,.taginput .is-link.is-focused.taginput-container.is-focusable,.taginput .is-link.taginput-container.is-focusable:active,.taginput .is-link.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-info.input,.is-info.textarea,.taginput .is-info.taginput-container.is-focusable{border-color:#167df0}.is-info.input:active,.is-info.input:focus,.is-info.is-active.input,.is-info.is-active.textarea,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.textarea:active,.is-info.textarea:focus,.taginput .is-info.is-active.taginput-container.is-focusable,.taginput .is-info.is-focused.taginput-container.is-focusable,.taginput .is-info.taginput-container.is-focusable:active,.taginput .is-info.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.is-success.input,.is-success.textarea,.taginput .is-success.taginput-container.is-focusable{border-color:#48c78e}.is-success.input:active,.is-success.input:focus,.is-success.is-active.input,.is-success.is-active.textarea,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.textarea:active,.is-success.textarea:focus,.taginput .is-success.is-active.taginput-container.is-focusable,.taginput .is-success.is-focused.taginput-container.is-focusable,.taginput .is-success.taginput-container.is-focusable:active,.taginput .is-success.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(72,199,142,.25);box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.is-warning.input,.is-warning.textarea,.taginput .is-warning.taginput-container.is-focusable{border-color:#ffe08a}.is-warning.input:active,.is-warning.input:focus,.is-warning.is-active.input,.is-warning.is-active.textarea,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.textarea:active,.is-warning.textarea:focus,.taginput .is-warning.is-active.taginput-container.is-focusable,.taginput .is-warning.is-focused.taginput-container.is-focusable,.taginput .is-warning.taginput-container.is-focusable:active,.taginput .is-warning.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,224,138,.25);box-shadow:0 0 0 .125em rgba(255,224,138,.25)}.is-danger.input,.is-danger.textarea,.taginput .is-danger.taginput-container.is-focusable{border-color:#f14668}.is-danger.input:active,.is-danger.input:focus,.is-danger.is-active.input,.is-danger.is-active.textarea,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.textarea:active,.is-danger.textarea:focus,.taginput .is-danger.is-active.taginput-container.is-focusable,.taginput .is-danger.is-focused.taginput-container.is-focusable,.taginput .is-danger.taginput-container.is-focusable:active,.taginput .is-danger.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(241,70,104,.25);box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.is-small.input,.is-small.textarea,.taginput .is-small.taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea,.taginput .is-medium.taginput-container.is-focusable{font-size:1.25rem}.is-large.input,.is-large.textarea,.taginput .is-large.taginput-container.is-focusable{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea,.taginput .is-fullwidth.taginput-container.is-focusable{display:block;width:100%}.is-inline.input,.is-inline.textarea,.taginput .is-inline.taginput-container.is-focusable{display:inline;width:auto}.input.is-rounded{border-radius:9999px;padding-left:calc(1.125em - 1px);padding-right:calc(1.125em - 1px)}.input.is-static{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:auto}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox input[disabled],.radio input[disabled],[disabled].checkbox,[disabled].radio,fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading):after{border-color:#7957d5;right:1.125em;z-index:4}.select.is-rounded select{border-radius:9999px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover:after{border-color:#363636}.select.is-white:not(:hover):after,.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black:not(:hover):after,.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover):after,.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.select.is-dark:not(:hover):after,.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover):after,.select.is-primary select{border-color:#7957d5}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#6943d0}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-link:not(:hover):after,.select.is-link select{border-color:#7957d5}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#6943d0}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-info:not(:hover):after,.select.is-info select{border-color:#167df0}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#0e71de}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.select.is-success:not(:hover):after,.select.is-success select{border-color:#48c78e}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#3abb81}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{-webkit-box-shadow:0 0 0 .125em rgba(72,199,142,.25);box-shadow:0 0 0 .125em rgba(72,199,142,.25)}.select.is-warning:not(:hover):after,.select.is-warning select{border-color:#ffe08a}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd970}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,224,138,.25);box-shadow:0 0 0 .125em rgba(255,224,138,.25)}.select.is-danger:not(:hover):after,.select.is-danger select{border-color:#f14668}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ef2e55}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{-webkit-box-shadow:0 0 0 .125em rgba(241,70,104,.25);box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a!important;opacity:.5}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.25);box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(10,10,10,.25);box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);color:rgba(0,0,0,.7)}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#fff}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#fff}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(54,54,54,.25);box-shadow:0 0 .5em rgba(54,54,54,.25);color:#fff}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#167df0;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#0f77ea;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(22,125,240,.25);box-shadow:0 0 .5em rgba(22,125,240,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#0e71de;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#48c78e;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#3ec487;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(72,199,142,.25);box-shadow:0 0 .5em rgba(72,199,142,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#3abb81;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffe08a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdc7d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,224,138,.25);box-shadow:0 0 .5em rgba(255,224,138,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd970;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#f14668;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#f03a5f;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(241,70,104,.25);box-shadow:0 0 .5em rgba(241,70,104,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ef2e55;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-normal{font-size:1rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-cta,.file.is-boxed .file-label{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.file-label{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border:1px solid #dbdbdb;border-left-width:0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:600}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-link,.help.is-primary{color:#7957d5}.help.is-info{color:#167df0}.help.is-success{color:#48c78e}.help.is-warning{color:#ffe08a}.help.is-danger{color:#f14668}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons.has-addons-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:5;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{-webkit-box-sizing:border-box;box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#4a4a4a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7957d5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#b5b5b5;content:\"/\"}.breadcrumb ol,.breadcrumb ul{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"→\"}.breadcrumb.has-bullet-separator li+li:before{content:\"•\"}.breadcrumb.has-dot-separator li+li:before{content:\"·\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"≻\"}.card{background-color:#fff;border-radius:.25rem;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);color:#4a4a4a;max-width:100%;position:relative}.card-content:first-child,.card-footer:first-child,.card-header:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-content:last-child,.card-footer:last-child,.card-header:last-child{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-header{background-color:transparent;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 .125em .25em rgba(10,10,10,.1);box-shadow:0 .125em .25em rgba(10,10,10,.1)}.card-header,.card-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem 1rem}.card-header-icon,.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;color:currentColor;font-family:inherit;font-size:1em;margin:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.75rem 1rem}.card-image{display:block;position:relative}.card-image:first-child img{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-image:last-child img{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.card-content{background-color:transparent;padding:1.5rem}.card-footer{background-color:transparent;border-top:1px solid #ededed;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.card-footer,.card-footer-item{display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ededed}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:0;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item,.dropdown .dropdown-menu .has-link a{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}.dropdown .dropdown-menu .has-link a,a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}.dropdown .dropdown-menu .has-link a:hover,a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}.dropdown .dropdown-menu .has-link a.is-active,a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#7957d5;color:#fff}.dropdown-divider{background-color:#ededed;border:none;display:block;height:1px;margin:.5rem 0}.level{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:-webkit-box;display:-ms-flexbox;display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level{display:-webkit-box;display:-ms-flexbox;display:flex}.level>.level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}.level-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:-webkit-box;display:-ms-flexbox;display:flex}}.level-right{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:-webkit-box;display:-ms-flexbox;display:flex}}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:inherit}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,85.9%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,85.9%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:inherit}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#7957d5;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.message.is-light .message-body{border-color:#f5f5f5}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#fff}.message.is-dark .message-body{border-color:#363636}.message.is-primary{background-color:#f2effb}.message.is-primary .message-header{background-color:#7957d5;color:#fff}.message.is-primary .message-body{border-color:#7957d5;color:#552fbc}.message.is-link{background-color:#f2effb}.message.is-link .message-header{background-color:#7957d5;color:#fff}.message.is-link .message-body{border-color:#7957d5;color:#552fbc}.message.is-info{background-color:#ecf4fe}.message.is-info .message-header{background-color:#167df0;color:#fff}.message.is-info .message-body{border-color:#167df0;color:#0d68ce}.message.is-success{background-color:#effaf5}.message.is-success .message-header{background-color:#48c78e;color:#fff}.message.is-success .message-body{border-color:#48c78e;color:#257953}.message.is-warning{background-color:#fffaeb}.message.is-warning .message-header{background-color:#ffe08a;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffe08a;color:#946c00}.message.is-danger{background-color:#feecf0}.message.is-danger .message-header{background-color:#f14668;color:#fff}.message.is-danger .message-body{border-color:#f14668;color:#cc0f35}.message-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:700;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-radius:4px;border:solid #dbdbdb;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card,.modal-card-foot,.modal-card-head{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-card-foot,.modal-card-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5}.navbar.is-light,.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:rgba(0,0,0,.7)}}.navbar.is-dark{background-color:#363636;color:#fff}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#fff}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#fff}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-dark .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#fff}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#fff}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#fff}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#fff}}.navbar.is-primary{background-color:#7957d5;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-link{background-color:#7957d5;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-info{background-color:#167df0;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#167df0;color:#fff}}.navbar.is-success{background-color:#48c78e;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#3abb81;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#48c78e;color:#fff}}.navbar.is-warning{background-color:#ffe08a}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd970;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd970;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd970;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffe08a;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#f14668;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ef2e55;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#f14668;color:#fff}}.navbar>.container{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{-webkit-box-shadow:0 2px 0 0 #f5f5f5;box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{-webkit-box-shadow:0 -2px 0 0 #f5f5f5;box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:focus,.navbar-link:hover,.navbar-link[focus-within],a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:hover,a.navbar-item[focus-within]{background-color:#fafafa;color:#7957d5}.navbar-link.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover{background-color:#fafafa;color:#7957d5}.navbar-item{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#7957d5}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom:3px solid #7957d5;color:#7957d5;padding-bottom:calc(.5rem - 3px)}.navbar-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless):after{border-color:#7957d5;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-link:after{display:none}.navbar-menu{background-color:#fff;-webkit-box-shadow:0 8px 16px rgba(10,10,10,.1);box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable[focus-within] .navbar-link,.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-burger{display:none}.navbar-item,.navbar-link{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-item.has-dropdown{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;-webkit-box-shadow:0 -8px 8px rgba(10,10,10,.1);box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable[focus-within] .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar-item.is-hoverable[focus-within] .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable[focus-within] .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.navbar-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:auto}.navbar-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% - 4px);-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:focus):not(:hover),a.navbar-item.is-active:not(:focus):not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:9999px}.pagination.is-rounded .pagination-link{border-radius:9999px}.pagination,.pagination-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.5em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#7957d5}.pagination-link:active,.pagination-next:active,.pagination-previous:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2);box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link.is-disabled,.pagination-link[disabled],.pagination-next.is-disabled,.pagination-next[disabled],.pagination-previous.is-disabled,.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#7957d5;border-color:#7957d5;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li{list-style:none}@media screen and (max-width:768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{margin-bottom:0;margin-top:0}.pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:0;margin-top:0}.pagination.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}.panel{border-radius:6px;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel.is-white .panel-heading{background-color:#fff;color:#0a0a0a}.panel.is-white .panel-tabs a.is-active{border-bottom-color:#fff}.panel.is-white .panel-block.is-active .panel-icon{color:#fff}.panel.is-black .panel-heading{background-color:#0a0a0a;color:#fff}.panel.is-black .panel-tabs a.is-active{border-bottom-color:#0a0a0a}.panel.is-black .panel-block.is-active .panel-icon{color:#0a0a0a}.panel.is-light .panel-heading{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.panel.is-light .panel-tabs a.is-active{border-bottom-color:#f5f5f5}.panel.is-light .panel-block.is-active .panel-icon{color:#f5f5f5}.panel.is-dark .panel-heading{background-color:#363636;color:#fff}.panel.is-dark .panel-tabs a.is-active{border-bottom-color:#363636}.panel.is-dark .panel-block.is-active .panel-icon{color:#363636}.panel.is-primary .panel-heading{background-color:#7957d5;color:#fff}.panel.is-primary .panel-tabs a.is-active{border-bottom-color:#7957d5}.panel.is-primary .panel-block.is-active .panel-icon{color:#7957d5}.panel.is-link .panel-heading{background-color:#7957d5;color:#fff}.panel.is-link .panel-tabs a.is-active{border-bottom-color:#7957d5}.panel.is-link .panel-block.is-active .panel-icon{color:#7957d5}.panel.is-info .panel-heading{background-color:#167df0;color:#fff}.panel.is-info .panel-tabs a.is-active{border-bottom-color:#167df0}.panel.is-info .panel-block.is-active .panel-icon{color:#167df0}.panel.is-success .panel-heading{background-color:#48c78e;color:#fff}.panel.is-success .panel-tabs a.is-active{border-bottom-color:#48c78e}.panel.is-success .panel-block.is-active .panel-icon{color:#48c78e}.panel.is-warning .panel-heading{background-color:#ffe08a;color:rgba(0,0,0,.7)}.panel.is-warning .panel-tabs a.is-active{border-bottom-color:#ffe08a}.panel.is-warning .panel-block.is-active .panel-icon{color:#ffe08a}.panel.is-danger .panel-heading{background-color:#f14668;color:#fff}.panel.is-danger .panel-tabs a.is-active{border-bottom-color:#f14668}.panel.is-danger .panel-block.is-active .panel-icon{color:#f14668}.panel-block:not(:last-child),.panel-tabs:not(:last-child){border-bottom:1px solid #ededed}.panel-heading{background-color:#ededed;border-radius:6px 6px 0 0;color:#363636;font-size:1.25em;font-weight:700;line-height:1.25;padding:.75em 1em}.panel-tabs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.875em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#7957d5}.panel-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{-ms-flex-wrap:wrap;flex-wrap:wrap}.panel-block.is-active{border-left-color:#7957d5;color:#363636}.panel-block.is-active .panel-icon{color:#7957d5}.panel-block:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-size:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs,.tabs a{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;color:#4a4a4a;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#7957d5;color:#7957d5}.tabs ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{-webkit-box-flex:0;-ms-flex:none;flex:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:.75em}.tabs ul.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#7957d5;border-color:#7957d5;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:9999px;border-top-left-radius:9999px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:9999px;border-top-right-radius:9999px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.columns.is-mobile>.column.is-full{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-one-third{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.columns.is-mobile>.column.is-offset-0{margin-left:0}.columns.is-mobile>.column.is-1{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333337%}.columns.is-mobile>.column.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66666674%}.columns.is-mobile>.column.is-3{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333337%}.columns.is-mobile>.column.is-5{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66666674%}.columns.is-mobile>.column.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333337%}.columns.is-mobile>.column.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66666674%}.columns.is-mobile>.column.is-9{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333337%}.columns.is-mobile>.column.is-11{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66666674%}.columns.is-mobile>.column.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-narrow-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-mobile{margin-left:0}.column.is-1-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1-mobile{margin-left:8.33333337%}.column.is-2-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2-mobile{margin-left:16.66666674%}.column.is-3-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4-mobile{margin-left:33.33333337%}.column.is-5-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5-mobile{margin-left:41.66666674%}.column.is-6-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7-mobile{margin-left:58.33333337%}.column.is-8-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8-mobile{margin-left:66.66666674%}.column.is-9-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10-mobile{margin-left:83.33333337%}.column.is-11-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11-mobile{margin-left:91.66666674%}.column.is-12-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-narrow,.column.is-narrow-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full,.column.is-full-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0}.column.is-1,.column.is-1-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333337%}.column.is-2,.column.is-2-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66666674%}.column.is-3,.column.is-3-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333337%}.column.is-5,.column.is-5-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66666674%}.column.is-6,.column.is-6-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333337%}.column.is-8,.column.is-8-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66666674%}.column.is-9,.column.is-9-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333337%}.column.is-11,.column.is-11-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66666674%}.column.is-12,.column.is-12-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-narrow-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-touch{margin-left:0}.column.is-1-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1-touch{margin-left:8.33333337%}.column.is-2-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2-touch{margin-left:16.66666674%}.column.is-3-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4-touch{margin-left:33.33333337%}.column.is-5-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5-touch{margin-left:41.66666674%}.column.is-6-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7-touch{margin-left:58.33333337%}.column.is-8-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8-touch{margin-left:66.66666674%}.column.is-9-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10-touch{margin-left:83.33333337%}.column.is-11-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11-touch{margin-left:91.66666674%}.column.is-12-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-narrow-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-desktop{margin-left:0}.column.is-1-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1-desktop{margin-left:8.33333337%}.column.is-2-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2-desktop{margin-left:16.66666674%}.column.is-3-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4-desktop{margin-left:33.33333337%}.column.is-5-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5-desktop{margin-left:41.66666674%}.column.is-6-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7-desktop{margin-left:58.33333337%}.column.is-8-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8-desktop{margin-left:66.66666674%}.column.is-9-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10-desktop{margin-left:83.33333337%}.column.is-11-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11-desktop{margin-left:91.66666674%}.column.is-12-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-narrow-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-widescreen{margin-left:0}.column.is-1-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1-widescreen{margin-left:8.33333337%}.column.is-2-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2-widescreen{margin-left:16.66666674%}.column.is-3-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4-widescreen{margin-left:33.33333337%}.column.is-5-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5-widescreen{margin-left:41.66666674%}.column.is-6-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7-widescreen{margin-left:58.33333337%}.column.is-8-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8-widescreen{margin-left:66.66666674%}.column.is-9-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10-widescreen{margin-left:83.33333337%}.column.is-11-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11-widescreen{margin-left:91.66666674%}.column.is-12-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-narrow-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:unset}.column.is-full-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-three-quarters-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-fullhd{margin-left:0}.column.is-1-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333337%}.column.is-offset-1-fullhd{margin-left:8.33333337%}.column.is-2-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66666674%}.column.is-offset-2-fullhd{margin-left:16.66666674%}.column.is-3-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333337%}.column.is-offset-4-fullhd{margin-left:33.33333337%}.column.is-5-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66666674%}.column.is-offset-5-fullhd{margin-left:41.66666674%}.column.is-6-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333337%}.column.is-offset-7-fullhd{margin-left:58.33333337%}.column.is-8-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66666674%}.column.is-offset-8-fullhd{margin-left:66.66666674%}.column.is-9-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333337%}.column.is-offset-10-fullhd{margin-left:83.33333337%}.column.is-11-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66666674%}.column.is-offset-11-fullhd{margin-left:91.66666674%}.column.is-12-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:.75rem}.columns.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:-webkit-box;display:-ms-flexbox;display:flex}.columns.is-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.columns.is-vcentered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(var(--columnGap)*-1);margin-right:calc(var(--columnGap)*-1)}.columns.is-variable>.column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1023px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1024px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1216px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1408px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:0.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:0.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-1-tablet{--columnGap:0.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-1-tablet-only{--columnGap:0.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-1-touch{--columnGap:0.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-1-desktop{--columnGap:0.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-1-desktop-only{--columnGap:0.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-1-widescreen{--columnGap:0.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-1-widescreen-only{--columnGap:0.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-1-fullhd{--columnGap:0.25rem}}.columns.is-variable.is-2{--columnGap:0.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:0.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-2-tablet{--columnGap:0.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-2-tablet-only{--columnGap:0.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-2-touch{--columnGap:0.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-2-desktop{--columnGap:0.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-2-desktop-only{--columnGap:0.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-2-widescreen{--columnGap:0.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-2-widescreen-only{--columnGap:0.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-2-fullhd{--columnGap:0.5rem}}.columns.is-variable.is-3{--columnGap:0.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:0.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-3-tablet{--columnGap:0.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-3-tablet-only{--columnGap:0.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-3-touch{--columnGap:0.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-3-desktop{--columnGap:0.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-3-desktop-only{--columnGap:0.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-3-widescreen{--columnGap:0.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-3-widescreen-only{--columnGap:0.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-3-fullhd{--columnGap:0.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1023px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1024px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1216px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1408px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1023px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1024px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1216px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1408px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:-webkit-box;display:-ms-flexbox;display:flex}.tile.is-1{width:8.33333337%}.tile.is-1,.tile.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-2{width:16.66666674%}.tile.is-3{width:25%}.tile.is-3,.tile.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-4{width:33.33333337%}.tile.is-5{width:41.66666674%}.tile.is-5,.tile.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-6{width:50%}.tile.is-7{width:58.33333337%}.tile.is-7,.tile.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-8{width:66.66666674%}.tile.is-9{width:75%}.tile.is-9,.tile.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-10{width:83.33333337%}.tile.is-11{width:91.66666674%}.tile.is-11,.tile.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-12{width:100%}}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#7957d5!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#5a32c7!important}.has-background-primary{background-color:#7957d5!important}.has-text-primary-light{color:#f2effb!important}a.has-text-primary-light:focus,a.has-text-primary-light:hover{color:#d1c6f1!important}.has-background-primary-light{background-color:#f2effb!important}.has-text-primary-dark{color:#552fbc!important}a.has-text-primary-dark:focus,a.has-text-primary-dark:hover{color:#704bd2!important}.has-background-primary-dark{background-color:#552fbc!important}.has-text-link{color:#7957d5!important}a.has-text-link:focus,a.has-text-link:hover{color:#5a32c7!important}.has-background-link{background-color:#7957d5!important}.has-text-link-light{color:#f2effb!important}a.has-text-link-light:focus,a.has-text-link-light:hover{color:#d1c6f1!important}.has-background-link-light{background-color:#f2effb!important}.has-text-link-dark{color:#552fbc!important}a.has-text-link-dark:focus,a.has-text-link-dark:hover{color:#704bd2!important}.has-background-link-dark{background-color:#552fbc!important}.has-text-info{color:#167df0!important}a.has-text-info:focus,a.has-text-info:hover{color:#0d64c6!important}.has-background-info{background-color:#167df0!important}.has-text-info-light{color:#ecf4fe!important}a.has-text-info-light:focus,a.has-text-info-light:hover{color:#bcdafb!important}.has-background-info-light{background-color:#ecf4fe!important}.has-text-info-dark{color:#0d68ce!important}a.has-text-info-dark:focus,a.has-text-info-dark:hover{color:#1e81f1!important}.has-background-info-dark{background-color:#0d68ce!important}.has-text-success{color:#48c78e!important}a.has-text-success:focus,a.has-text-success:hover{color:#34a873!important}.has-background-success{background-color:#48c78e!important}.has-text-success-light{color:#effaf5!important}a.has-text-success-light:focus,a.has-text-success-light:hover{color:#c8eedd!important}.has-background-success-light{background-color:#effaf5!important}.has-text-success-dark{color:#257953!important}a.has-text-success-dark:focus,a.has-text-success-dark:hover{color:#31a06e!important}.has-background-success-dark{background-color:#257953!important}.has-text-warning{color:#ffe08a!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd257!important}.has-background-warning{background-color:#ffe08a!important}.has-text-warning-light{color:#fffaeb!important}a.has-text-warning-light:focus,a.has-text-warning-light:hover{color:#ffecb8!important}.has-background-warning-light{background-color:#fffaeb!important}.has-text-warning-dark{color:#946c00!important}a.has-text-warning-dark:focus,a.has-text-warning-dark:hover{color:#c79200!important}.has-background-warning-dark{background-color:#946c00!important}.has-text-danger{color:#f14668!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ee1742!important}.has-background-danger{background-color:#f14668!important}.has-text-danger-light{color:#feecf0!important}a.has-text-danger-light:focus,a.has-text-danger-light:hover{color:#fabdc9!important}.has-background-danger-light{background-color:#feecf0!important}.has-text-danger-dark{color:#cc0f35!important}a.has-text-danger-dark:focus,a.has-text-danger-dark:hover{color:#ee2049!important}.has-background-danger-dark{background-color:#cc0f35!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.is-flex-direction-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.is-flex-direction-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.is-flex-direction-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.is-flex-direction-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.is-flex-wrap-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.is-flex-wrap-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.is-flex-wrap-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.is-justify-content-flex-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.is-justify-content-flex-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.is-justify-content-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.is-justify-content-space-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.is-justify-content-space-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.is-justify-content-space-evenly{-webkit-box-pack:space-evenly!important;-ms-flex-pack:space-evenly!important;justify-content:space-evenly!important}.is-justify-content-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:start!important}.is-justify-content-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:end!important}.is-justify-content-left{-webkit-box-pack:left!important;-ms-flex-pack:left!important;justify-content:left!important}.is-justify-content-right{-webkit-box-pack:right!important;-ms-flex-pack:right!important;justify-content:right!important}.is-align-content-flex-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.is-align-content-flex-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.is-align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.is-align-content-space-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.is-align-content-space-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.is-align-content-space-evenly{-ms-flex-line-pack:space-evenly!important;align-content:space-evenly!important}.is-align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.is-align-content-start{-ms-flex-line-pack:start!important;align-content:start!important}.is-align-content-end{-ms-flex-line-pack:end!important;align-content:end!important}.is-align-content-baseline{-ms-flex-line-pack:baseline!important;align-content:baseline!important}.is-align-items-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.is-align-items-flex-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.is-align-items-flex-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.is-align-items-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.is-align-items-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.is-align-items-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:start!important}.is-align-items-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:end!important}.is-align-items-self-start{-webkit-box-align:self-start!important;-ms-flex-align:self-start!important;align-items:self-start!important}.is-align-items-self-end{-webkit-box-align:self-end!important;-ms-flex-align:self-end!important;align-items:self-end!important}.is-align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.is-align-self-flex-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.is-align-self-flex-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.is-align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.is-align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.is-align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}.is-flex-grow-0{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important}.is-flex-grow-1{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.is-flex-grow-2{-webkit-box-flex:2!important;-ms-flex-positive:2!important;flex-grow:2!important}.is-flex-grow-3{-webkit-box-flex:3!important;-ms-flex-positive:3!important;flex-grow:3!important}.is-flex-grow-4{-webkit-box-flex:4!important;-ms-flex-positive:4!important;flex-grow:4!important}.is-flex-grow-5{-webkit-box-flex:5!important;-ms-flex-positive:5!important;flex-grow:5!important}.is-flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.is-flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.is-flex-shrink-2{-ms-flex-negative:2!important;flex-shrink:2!important}.is-flex-shrink-3{-ms-flex-negative:3!important;flex-shrink:3!important}.is-flex-shrink-4{-ms-flex-negative:4!important;flex-shrink:4!important}.is-flex-shrink-5{-ms-flex-negative:5!important;flex-shrink:5!important}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-radiusless{border-radius:0!important}.is-shadowless{-webkit-box-shadow:none!important;box-shadow:none!important}.is-clickable{cursor:pointer!important;pointer-events:all!important}.is-clipped{overflow:hidden!important}.is-relative{position:relative!important}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.m-0{margin:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.mx-0{margin-right:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:.25rem!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-2{margin:.5rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-3{margin:.75rem!important}.mt-3{margin-top:.75rem!important}.mr-3{margin-right:.75rem!important}.mb-3{margin-bottom:.75rem!important}.ml-3,.mx-3{margin-left:.75rem!important}.mx-3{margin-right:.75rem!important}.my-3{margin-top:.75rem!important;margin-bottom:.75rem!important}.m-4{margin:1rem!important}.mt-4{margin-top:1rem!important}.mr-4{margin-right:1rem!important}.mb-4{margin-bottom:1rem!important}.ml-4,.mx-4{margin-left:1rem!important}.mx-4{margin-right:1rem!important}.my-4{margin-top:1rem!important;margin-bottom:1rem!important}.m-5{margin:1.5rem!important}.mt-5{margin-top:1.5rem!important}.mr-5{margin-right:1.5rem!important}.mb-5{margin-bottom:1.5rem!important}.ml-5,.mx-5{margin-left:1.5rem!important}.mx-5{margin-right:1.5rem!important}.my-5{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-6{margin:3rem!important}.mt-6{margin-top:3rem!important}.mr-6{margin-right:3rem!important}.mb-6{margin-bottom:3rem!important}.ml-6,.mx-6{margin-left:3rem!important}.mx-6{margin-right:3rem!important}.my-6{margin-top:3rem!important;margin-bottom:3rem!important}.m-auto{margin:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}.mx-auto{margin-right:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.p-0{padding:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.px-0{padding-right:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:.25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-2{padding:.5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-3{padding:.75rem!important}.pt-3{padding-top:.75rem!important}.pr-3{padding-right:.75rem!important}.pb-3{padding-bottom:.75rem!important}.pl-3,.px-3{padding-left:.75rem!important}.px-3{padding-right:.75rem!important}.py-3{padding-top:.75rem!important;padding-bottom:.75rem!important}.p-4{padding:1rem!important}.pt-4{padding-top:1rem!important}.pr-4{padding-right:1rem!important}.pb-4{padding-bottom:1rem!important}.pl-4,.px-4{padding-left:1rem!important}.px-4{padding-right:1rem!important}.py-4{padding-top:1rem!important;padding-bottom:1rem!important}.p-5{padding:1.5rem!important}.pt-5{padding-top:1.5rem!important}.pr-5{padding-right:1.5rem!important}.pb-5{padding-bottom:1.5rem!important}.pl-5,.px-5{padding-left:1.5rem!important}.px-5{padding-right:1.5rem!important}.py-5{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-6{padding:3rem!important}.pt-6{padding-top:3rem!important}.pr-6{padding-right:3rem!important}.pb-6{padding-bottom:3rem!important}.pl-6,.px-6{padding-left:3rem!important}.px-6{padding-right:3rem!important}.py-6{padding-top:3rem!important;padding-bottom:3rem!important}.p-auto{padding:auto!important}.pt-auto{padding-top:auto!important}.pr-auto{padding-right:auto!important}.pb-auto{padding-bottom:auto!important}.pl-auto,.px-auto{padding-left:auto!important}.px-auto{padding-right:auto!important}.py-auto{padding-top:auto!important;padding-bottom:auto!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.is-underlined{text-decoration:underline!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-medium{font-weight:500!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary,.is-family-sans-serif,.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif!important}.is-family-code,.is-family-monospace{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.hero{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover{opacity:1}.hero.is-white .tabs li.is-active a{color:#fff!important;opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e8e3e4,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e8e3e4,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover{opacity:1}.hero.is-black .tabs li.is-active a{color:#0a0a0a!important;opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:rgba(0,0,0,.7)}.hero.is-light .subtitle{color:rgba(0,0,0,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(0,0,0,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:rgba(0,0,0,.7)}.hero.is-light .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-light .tabs a:hover{opacity:1}.hero.is-light .tabs li.is-active a{color:#f5f5f5!important;opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#fff}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#fff}.hero.is-dark .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#fff}.hero.is-dark .tabs a{color:#fff;opacity:.9}.hero.is-dark .tabs a:hover{opacity:1}.hero.is-dark .tabs li.is-active a{color:#363636!important;opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#fff}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#7957d5;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#7957d5}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover{opacity:1}.hero.is-primary .tabs li.is-active a{color:#7957d5!important;opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-link{background-color:#7957d5;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#7957d5}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover{opacity:1}.hero.is-link .tabs li.is-active a{color:#7957d5!important;opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-info{background-color:#167df0;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#167df0}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#0e71de;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover{opacity:1}.hero.is-info .tabs li.is-active a{color:#167df0!important;opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#167df0}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}}.hero.is-success{background-color:#48c78e;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#48c78e}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#3abb81;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover{opacity:1}.hero.is-success .tabs li.is-active a{color:#48c78e!important;opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#48c78e}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#29b35e,#48c78e 71%,#56d2af)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#29b35e,#48c78e 71%,#56d2af)}}.hero.is-warning{background-color:#ffe08a;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffe08a}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd970;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover{opacity:1}.hero.is-warning .tabs li.is-active a{color:#ffe08a!important;opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffe08a}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffb657,#ffe08a 71%,#fff6a3)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffb657,#ffe08a 71%,#fff6a3)}}.hero.is-danger{background-color:#f14668;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#f14668}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ef2e55;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover{opacity:1}.hero.is-danger .tabs li.is-active a{color:#f14668!important;opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#f14668}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#fa0a62,#f14668 71%,#f7595f)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#fa0a62,#f14668 71%,#f7595f)}}.hero.is-small .hero-body{padding:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding:9rem 4.5rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding:18rem 6rem}}.hero.is-fullheight-with-navbar .hero-body,.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.hero-body,.hero-foot,.hero-head{-ms-flex-negative:0;flex-shrink:0}.hero-body{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:3rem 1.5rem}@media print,screen and (min-width:769px){.hero-body{padding:3rem}}.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section{padding:3rem}.section.is-medium{padding:9rem 4.5rem}.section.is-large{padding:18rem 6rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}.is-noscroll{position:fixed;overflow-y:hidden;width:100%;bottom:0}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.fade-enter,.fade-leave-to{opacity:0}.zoom-in-enter-active,.zoom-in-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-in-enter-active .animation-content,.zoom-in-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-in-enter,.zoom-in-leave-active{opacity:0}.zoom-in-enter .animation-content,.zoom-in-leave-active .animation-content{-webkit-transform:scale(.95);transform:scale(.95)}.zoom-out-enter-active,.zoom-out-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-out-enter-active .animation-content,.zoom-out-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-out-enter,.zoom-out-leave-active{opacity:0}.zoom-out-enter .animation-content,.zoom-out-leave-active .animation-content{-webkit-transform:scale(1.05);transform:scale(1.05)}.slide-next-enter-active,.slide-next-leave-active,.slide-prev-enter-active,.slide-prev-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-next-enter,.slide-prev-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);position:absolute;width:100%}.slide-next-leave-to,.slide-prev-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);position:absolute;width:100%}.slide-down-enter-active,.slide-down-leave-active,.slide-up-enter-active,.slide-up-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-down-enter,.slide-up-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);position:absolute;height:100%}.slide-down-leave-to,.slide-up-enter{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;height:100%}.slide-enter-active,.slide-leave-active{-webkit-transition:.15s ease-out;transition:.15s ease-out}.slide-leave-active{-webkit-transition-timing-function:cubic-bezier(0,1,.5,1);transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{overflow:hidden;max-height:0}.autocomplete{position:relative}.autocomplete .dropdown-menu{display:block;width:100%}.autocomplete .dropdown-menu.is-opened-top{top:auto;bottom:100%}.autocomplete .dropdown-content{overflow:auto;max-height:200px}.autocomplete .dropdown-item,.autocomplete .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .autocomplete a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.autocomplete .dropdown-item.is-hovered,.autocomplete .dropdown .dropdown-menu .has-link a.is-hovered,.dropdown .dropdown-menu .has-link .autocomplete a.is-hovered{background:#f5f5f5;color:#0a0a0a}.autocomplete .dropdown-item.is-disabled,.autocomplete .dropdown .dropdown-menu .has-link a.is-disabled,.dropdown .dropdown-menu .has-link .autocomplete a.is-disabled{opacity:.5;cursor:not-allowed}.autocomplete.is-small{border-radius:2px;font-size:.75rem}.autocomplete.is-medium{font-size:1.25rem}.autocomplete.is-large{font-size:1.5rem}.carousel{min-height:120px;position:relative}.carousel.is-overlay{background-color:rgba(10,10,10,.86);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;max-height:100vh;position:fixed;z-index:40}.carousel.is-overlay .carousel-item img{cursor:default}.carousel.is-overlay .carousel-indicator.has-background{background:transparent}.carousel .progress,.carousel .progress-wrapper.is-not-native{border-radius:2px;height:.25rem;margin-bottom:0}.carousel .carousel-items{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;width:100%}@media print,screen and (min-width:769px){.carousel .carousel-items:hover .carousel-arrow.is-hovered{opacity:1}}.carousel .carousel-items .carousel-item{-ms-flex-negative:0;flex-shrink:0;width:100%}.carousel .carousel-pause{pointer-events:none;position:absolute;top:0;right:.15rem;z-index:1}.carousel .carousel-indicator{width:100%;padding:.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carousel .carousel-indicator.has-background{background:rgba(10,10,10,.5)}.carousel .carousel-indicator.has-custom{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;overflow:hidden;overflow-x:auto}.carousel .carousel-indicator.has-custom.is-small .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 10%;flex:1 0 10%}.carousel .carousel-indicator.has-custom.is-medium .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 16.66667%;flex:1 0 16.66667%}.carousel .carousel-indicator.is-inside{position:absolute}.carousel .carousel-indicator.is-inside.is-bottom{bottom:0}.carousel .carousel-indicator.is-inside.is-top{top:0}.carousel .carousel-indicator .indicator-item:not(:last-child){margin-right:.5rem}.carousel .carousel-indicator .indicator-item .indicator-style:hover,.carousel .carousel-indicator .indicator-item.is-active .indicator-style{background:#7957d5;border:1px solid #fff}.carousel .carousel-indicator .indicator-item .indicator-style{display:block;border:1px solid #7957d5;background:#fff;outline:none;-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes{height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-dots{border-radius:9999px;height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-lines{height:5px;width:25px}.carousel-list{position:relative;overflow:hidden;width:100%}.carousel-list.has-shadow{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}@media print,screen and (min-width:769px){.carousel-list:hover .carousel-arrow.is-hovered{opacity:1}}.carousel-list .carousel-slides{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.carousel-list .carousel-slides:not(.is-dragging){-webkit-transition:all .25s ease-out 0s;transition:all .25s ease-out 0s}.carousel-list .carousel-slides.has-grayscale .carousel-slide img{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img{-webkit-filter:grayscale(0);filter:grayscale(0)}.carousel-list .carousel-slides.has-opacity .carousel-slide img{opacity:.25}.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img{opacity:1}.carousel-list .carousel-slides .carousel-slide{border:2px solid transparent;-ms-flex-negative:0;flex-shrink:0}.carousel-arrow{-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel-arrow.is-hovered{opacity:0}.carousel-arrow .icon{background:#fff;color:#7957d5;cursor:pointer;border:1px solid #fff;border-radius:9999px;outline:0}.carousel-arrow .icon:hover{border:1px solid #7957d5;opacity:1}.carousel-arrow .icon.has-icons-left,.carousel-arrow .icon.has-icons-right{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.carousel-arrow .icon.has-icons-left{left:1.5rem}.carousel-arrow .icon.has-icons-right{right:1.5rem}.b-checkbox.checkbox{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-checkbox.checkbox:not(.button){margin-right:.5em}.b-checkbox.checkbox:not(.button)+.checkbox:last-child{margin-right:0}.b-checkbox.checkbox input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-checkbox.checkbox input[type=checkbox]+.check{width:1.25em;height:1.25em;-ms-flex-negative:0;flex-shrink:0;border-radius:4px;border:2px solid #7a7a7a;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;background:transparent}.b-checkbox.checkbox input[type=checkbox]:checked+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%230a0a0a'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='rgba(0,0,0,.7)'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-success{background:#48c78e url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#48c78e}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-warning{background:#ffe08a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='rgba(0,0,0,.7)'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffe08a}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-danger{background:#f14668 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f14668}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%230a0a0a' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='rgba(0,0,0,.7)' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-link{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-success{background:#48c78e url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#48c78e}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-warning{background:#ffe08a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='rgba(0,0,0,.7)' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffe08a}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-danger{background:#f14668 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f14668}.b-checkbox.checkbox input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(72,199,142,.8);box-shadow:0 0 .5em rgba(72,199,142,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,224,138,.8);box-shadow:0 0 .5em rgba(255,224,138,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(241,70,104,.8);box-shadow:0 0 .5em rgba(241,70,104,.8)}.b-checkbox.checkbox .control-label{padding-left:calc(.75em - 1px)}.b-checkbox.checkbox.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-checkbox.checkbox[disabled]{opacity:.5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-white{border-color:#fff}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-dark{border-color:#363636}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-link,.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-info{border-color:#167df0}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-success{border-color:#48c78e}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-warning{border-color:#ffe08a}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-danger{border-color:#f14668}.b-checkbox.checkbox.is-small{border-radius:2px;font-size:.75rem}.b-checkbox.checkbox.is-medium{font-size:1.25rem}.b-checkbox.checkbox.is-large{font-size:1.5rem}.b-clockpicker .card-header{background-color:#7957d5;color:#fff}.b-clockpicker .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-white .card-header{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-white .b-clockpicker-face:after{background-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-hand{background-color:#fff;border-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-number.active{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-black .card-header{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-black .b-clockpicker-face:after{background-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-hand{background-color:#0a0a0a;border-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-number.active{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-light .card-header{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.b-clockpicker.is-light .b-clockpicker-face:after{background-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-hand{background-color:#f5f5f5;border-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-number.active{background-color:#f5f5f5;color:rgba(0,0,0,.7)}.b-clockpicker.is-dark .card-header{background-color:#363636;color:#fff}.b-clockpicker.is-dark .b-clockpicker-face:after{background-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-hand{background-color:#363636;border-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-number.active{background-color:#363636;color:#fff}.b-clockpicker.is-primary .card-header{background-color:#7957d5;color:#fff}.b-clockpicker.is-primary .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-primary .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .card-header,.b-clockpicker.is-primary .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-link .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-info .card-header{background-color:#167df0;color:#fff}.b-clockpicker.is-info .b-clockpicker-face:after{background-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-hand{background-color:#167df0;border-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-number.active{background-color:#167df0;color:#fff}.b-clockpicker.is-success .card-header{background-color:#48c78e;color:#fff}.b-clockpicker.is-success .b-clockpicker-face:after{background-color:#48c78e}.b-clockpicker.is-success .b-clockpicker-face-hand{background-color:#48c78e;border-color:#48c78e}.b-clockpicker.is-success .b-clockpicker-face-number.active{background-color:#48c78e;color:#fff}.b-clockpicker.is-warning .card-header{background-color:#ffe08a;color:rgba(0,0,0,.7)}.b-clockpicker.is-warning .b-clockpicker-face:after{background-color:#ffe08a}.b-clockpicker.is-warning .b-clockpicker-face-hand{background-color:#ffe08a;border-color:#ffe08a}.b-clockpicker.is-warning .b-clockpicker-face-number.active{background-color:#ffe08a;color:rgba(0,0,0,.7)}.b-clockpicker.is-danger .card-header{background-color:#f14668;color:#fff}.b-clockpicker.is-danger .b-clockpicker-face:after{background-color:#f14668}.b-clockpicker.is-danger .b-clockpicker-face-hand{background-color:#f14668;border-color:#f14668}.b-clockpicker.is-danger .b-clockpicker-face-number.active{background-color:#f14668;color:#fff}.b-clockpicker .dropdown-menu{min-width:0}.b-clockpicker .dropdown,.b-clockpicker .dropdown-trigger{width:100%}.b-clockpicker .dropdown-trigger .input[readonly],.b-clockpicker .dropdown .input[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05)}.b-clockpicker .dropdown-trigger .input[readonly].is-active,.b-clockpicker .dropdown-trigger .input[readonly].is-focused,.b-clockpicker .dropdown-trigger .input[readonly]:active,.b-clockpicker .dropdown-trigger .input[readonly]:focus,.b-clockpicker .dropdown .input[readonly].is-active,.b-clockpicker .dropdown .input[readonly].is-focused,.b-clockpicker .dropdown .input[readonly]:active,.b-clockpicker .dropdown .input[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-clockpicker .dropdown-item,.b-clockpicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .b-clockpicker a{font-size:inherit;padding:0}.b-clockpicker .dropdown-content{padding-top:0;padding-bottom:0}.b-clockpicker .card{border-radius:.25rem}.b-clockpicker .card-header{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.b-clockpicker .card-content{padding:12px}.b-clockpicker-btn{cursor:pointer;opacity:.6}.b-clockpicker-btn.active,.b-clockpicker-btn:hover{opacity:1}.b-clockpicker-period .b-clockpicker-btn{font-size:16px}.b-clockpicker-time span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-header{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:inherit}.b-clockpicker-header .b-clockpicker-time{white-space:nowrap}.b-clockpicker-header .b-clockpicker-time span{height:60px;font-size:60px}.b-clockpicker-header .b-clockpicker-period{-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:8px 0 6px 8px}.b-clockpicker-body{-webkit-transition:.9s cubic-bezier(.25,.8,.5,1);transition:.9s cubic-bezier(.25,.8,.5,1)}.b-clockpicker-body .b-clockpicker-btn{padding:0 8px;border-radius:9999px;margin-bottom:2px}.b-clockpicker-body .b-clockpicker-btn.active,.b-clockpicker-body .b-clockpicker-btn:hover{background-color:#7957d5;color:#fff}.b-clockpicker-body .b-clockpicker-period{position:absolute;top:5px;right:5px}.b-clockpicker-body .b-clockpicker-time{position:absolute;top:5px;left:5px;font-size:16px}.b-clockpicker-body .b-clockpicker-face{border-radius:50%;position:relative;background-color:#dbdbdb;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-body .b-clockpicker-face:after{border-radius:50%;content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:12px;height:12px;z-index:10}.b-clockpicker-body .b-clockpicker-face-outer-ring{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100% - 50px);width:calc(100% - 50px);position:relative;border-radius:50%}.b-clockpicker-body .b-clockpicker-face-number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:40px;height:40px;left:calc(50% - 20px);top:calc(50% - 20px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.b-clockpicker-body .b-clockpicker-face-number>span{z-index:1}.b-clockpicker-body .b-clockpicker-face-number:after,.b-clockpicker-body .b-clockpicker-face-number:before{content:\"\";height:40px;width:40px;border-radius:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-body .b-clockpicker-face-number.active{cursor:default;z-index:2}.b-clockpicker-body .b-clockpicker-face-number.disabled{pointer-events:none;opacity:.25}.b-clockpicker-body .b-clockpicker-face-hand{height:calc(50% - 6px);width:2px;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.b-clockpicker-body .b-clockpicker-face-hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:12px;height:12px;content:\"\";position:absolute;top:-6px;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-footer{display:block;padding:12px}.b-clockpicker.is-small{border-radius:2px;font-size:.75rem}.b-clockpicker.is-medium{font-size:1.25rem}.b-clockpicker.is-large{font-size:1.5rem}.collapse .collapse-trigger{display:inline;cursor:pointer}.collapse .collapse-content{display:inherit}.colorpicker .color-name{font-family:monospace;text-transform:uppercase}.colorpicker .colorpicker-footer{margin-top:.875rem;padding-top:.875rem;border:solid #dbdbdb;border-width:1px 0 0}.colorpicker .colorpicker-footer .colorpicker-fields{margin-bottom:.875rem}.colorpicker .colorpicker-footer .colorpicker-fields .field{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.colorpicker .colorpicker-footer .colorpicker-fields .field .field-label{margin-right:.5rem}.colorpicker .colorpicker-footer .colorpicker-fields .field .control{display:-webkit-box;display:-ms-flexbox;display:flex}.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input{-webkit-appearance:none;-moz-appearance:textfield;appearance:textfield;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:0;min-width:42px;text-align:right}.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-inner-spin-button,.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.colorpicker .dropdown.is-expanded .dropdown-menu,.colorpicker .dropdown.is-expanded.is-mobile-modal .dropdown-menu{width:unset}.colorpicker .dropdown-horizontal-colorpicker{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.colorpicker .dropdown-horizontal-colorpicker .colorpicker-footer{border-width:0 0 0 1px;margin-top:0;padding-top:0;margin-left:.875rem;padding-left:.875rem}svg.b-colorpicker-triangle{width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:769px){svg.b-colorpicker-triangle{width:100%;height:auto}}svg.b-colorpicker-triangle .colorpicker-triangle-hue{width:100%;height:100%;background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue,svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue foreignObject,svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue g,svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl,svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl foreignObject,svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl g{-webkit-transform-origin:50% 50%;transform-origin:50% 50%}svg.b-colorpicker-triangle .hue-range-thumb,svg.b-colorpicker-triangle .sl-range-thumb{background:transparent;border-radius:4px;-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;cursor:-webkit-grab;cursor:grab;height:calc(100% - .25em);width:calc(100% - .25em);margin:.125em}svg.b-colorpicker-triangle .hue-range-thumb:hover,svg.b-colorpicker-triangle .sl-range-thumb:hover{-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #b5b5b5;box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #b5b5b5}svg.b-colorpicker-triangle .hue-range-thumb:focus,svg.b-colorpicker-triangle .sl-range-thumb:focus{-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25);box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25)}svg.b-colorpicker-triangle .hue-range-thumb:active,svg.b-colorpicker-triangle .sl-range-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}div.b-colorpicker-square{position:relative;aspect-ratio:1/1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.b-colorpicker-square .colorpicker-square-slider-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red);border-radius:4px;position:absolute;top:0;right:0;bottom:0;left:0}div.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb{border-radius:2.28571px;position:absolute;aspect-ratio:1/1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;cursor:-webkit-grab;cursor:grab}div.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:hover{-webkit-box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5;box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5}div.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:focus{-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25);box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25)}div.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}div.b-colorpicker-square .colorpicker-square-slider-sl{background:#fff;border-radius:2px;position:absolute;top:0;right:0;bottom:0;left:0}div.b-colorpicker-square .colorpicker-square-slider-sl:before{content:\"\";background:-webkit-gradient(linear,left bottom,left top,from(#000),to(#fff));background:linear-gradient(0deg,#000,#fff);position:absolute;top:0;right:0;bottom:0;left:0;mix-blend-mode:hard-light}div.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb{display:block;border-radius:4px;position:absolute;width:8px;height:8px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #dbdbdb;cursor:-webkit-grab;cursor:grab}div.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:hover{-webkit-box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5;box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5}div.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:focus{-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25);box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25)}div.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.b-colorpicker-alpha-slider{height:1em;background-image:linear-gradient(45deg,#c7c7c7 25%,transparent 0,transparent 75%,#c7c7c7 0,#c7c7c7),linear-gradient(45deg,#c7c7c7 25%,transparent 0,transparent 75%,#c7c7c7 0,#c7c7c7);background-size:1em 1em;background-position:.5em .5em,0 0;border-radius:4px;margin-top:.125em;margin-bottom:.875rem;position:relative}.b-colorpicker-alpha-slider .alpha-range-thumb{width:.4em;height:1.25em;border-radius:4px;-webkit-box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #dbdbdb,0 0 0 1px #dbdbdb;box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #dbdbdb,0 0 0 1px #dbdbdb;cursor:-webkit-grab;cursor:grab;position:absolute;top:50%;left:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-colorpicker-alpha-slider .alpha-range-thumb:hover{-webkit-box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5;box-shadow:inset 0 0 0 1px #fff,inset 0 0 0 2px #b5b5b5,0 0 0 1px #b5b5b5}.b-colorpicker-alpha-slider .alpha-range-thumb:focus{-webkit-box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25);box-shadow:inset 0 0 0 1px #fff,0 0 0 1px #7957d5,0 0 0 .125em rgba(121,87,213,.25)}.b-colorpicker-alpha-slider .alpha-range-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.b-colorpicker-alpha-slider .alpha-range-thumb>.b-tooltip,.b-colorpicker-alpha-slider .alpha-range-thumb>.b-tooltip>.tooltip-trigger{position:absolute;display:block;top:0;right:0;bottom:0;left:0}.datepicker{font-size:.875rem}.datepicker .dropdown,.datepicker .dropdown-trigger{width:100%}.datepicker .dropdown-trigger .input[readonly],.datepicker .dropdown .input[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05)}.datepicker .dropdown-trigger .input[readonly].is-active,.datepicker .dropdown-trigger .input[readonly].is-focused,.datepicker .dropdown-trigger .input[readonly]:active,.datepicker .dropdown-trigger .input[readonly]:focus,.datepicker .dropdown .input[readonly].is-active,.datepicker .dropdown .input[readonly].is-focused,.datepicker .dropdown .input[readonly]:active,.datepicker .dropdown .input[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.datepicker .dropdown.is-disabled{opacity:1}.datepicker .dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);box-shadow:0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02)}.datepicker .dropdown-item,.datepicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .datepicker a{font-size:inherit}.datepicker .datepicker-header{padding-bottom:.875rem;margin-bottom:.875rem;border-bottom:1px solid #dbdbdb}.datepicker .datepicker-footer{margin-top:.875rem;padding-top:.875rem;border-top:1px solid #dbdbdb}.datepicker .datepicker-table{display:table;margin:0 auto}.datepicker .datepicker-table .datepicker-cell{text-align:center;vertical-align:middle;display:table-cell;border-radius:4px;padding:.5rem .75rem}.datepicker .datepicker-table .datepicker-header{display:table-header-group}.datepicker .datepicker-table .datepicker-header .datepicker-cell{color:#7a7a7a;font-weight:600}.datepicker .datepicker-table .datepicker-body{display:table-row-group}.datepicker .datepicker-table .datepicker-body .datepicker-row{display:table-row}.datepicker .datepicker-table .datepicker-body .datepicker-months{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:17rem}.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:33.33%;height:2.5rem}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable{color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today{border:1px solid rgba(121,87,213,.5)}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable{color:#4a4a4a}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected),.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected){background-color:#f5f5f5;color:#0a0a0a;cursor:pointer}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered{background-color:#f5f5f5;color:#0a0a0a;border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected{background-color:#7957d5;color:#fff}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected{background-color:#7957d5;color:#fff;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected{background-color:rgba(121,87,213,.5);border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected{background-color:#7957d5;color:#fff;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected){color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number{cursor:default}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell{padding:.3rem .75rem .75rem}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event{position:relative}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events{bottom:.425rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;padding:0 .35rem;position:absolute;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white{background-color:#fff}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black{background-color:#0a0a0a}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light{background-color:#f5f5f5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark{background-color:#363636}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link,.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary{background-color:#7957d5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info{background-color:#167df0}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success{background-color:#48c78e}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning{background-color:#ffe08a}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger{background-color:#f14668}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event{border-radius:50%;height:.35em;margin:0 .1em;width:.35em}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event{height:.25em;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected{overflow:hidden}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary{background-color:#aa94e4}.datepicker.is-small{border-radius:2px;font-size:.75rem}.datepicker.is-medium{font-size:1.25rem}.datepicker.is-large{font-size:1.5rem}@media screen and (min-width:1024px){.datepicker .footer-horizontal-timepicker{border:none;padding-left:10px;margin-left:5px}.datepicker .dropdown-horizontal-timepicker,.datepicker .footer-horizontal-timepicker{display:-webkit-box;display:-ms-flexbox;display:flex}.datepicker .content-horizontal-timepicker{border-right:1px solid #dbdbdb}}.dialog .modal-card{max-width:460px;width:auto}.dialog .modal-card .modal-card-head{font-size:1.25rem;font-weight:600}.dialog .modal-card .modal-card-body .field{margin-top:16px}.dialog .modal-card .modal-card-body.is-titleless{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.dialog .modal-card .modal-card-foot{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.dialog .modal-card .modal-card-foot .button{display:inline;min-width:5em;font-weight:600}@media print,screen and (min-width:769px){.dialog .modal-card{min-width:320px}}.dialog.is-small .button,.dialog.is-small .input,.dialog.is-small .modal-card{border-radius:2px;font-size:.75rem}.dialog.is-medium .button,.dialog.is-medium .input,.dialog.is-medium .modal-card{font-size:1.25rem}.dialog.is-large .button,.dialog.is-large .input,.dialog.is-large .modal-card{font-size:1.5rem}.dialog.has-custom-container{position:absolute}.dropdown+.dropdown{margin-left:.5em}.dropdown .background{bottom:0;left:0;position:absolute;right:0;top:0;position:fixed;background-color:rgba(10,10,10,.86);z-index:40;cursor:pointer}@media screen and (min-width:1024px){.dropdown .background{display:none}}.dropdown.dropdown-menu-animation .dropdown-menu{display:block}.dropdown .dropdown-menu .dropdown-item.is-disabled,.dropdown .dropdown-menu .has-link a.is-disabled{cursor:not-allowed}.dropdown .dropdown-menu .dropdown-item.is-disabled:hover,.dropdown .dropdown-menu .has-link a.is-disabled:hover{background:inherit;color:inherit}.dropdown .dropdown-menu .has-link a{padding-right:3rem;white-space:nowrap}.dropdown.is-hoverable:not(.is-active) .dropdown-menu{display:none}.dropdown.is-hoverable:not(.is-touch-enabled):hover .dropdown-menu{display:inherit}.dropdown.is-expanded,.dropdown.is-expanded .dropdown-menu,.dropdown.is-expanded .dropdown-trigger{width:100%}.dropdown.is-expanded.is-mobile-modal .dropdown-menu{max-width:100%}.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled,.dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled{opacity:.5}.dropdown .navbar-item{height:100%}.dropdown.is-disabled{opacity:.5;cursor:not-allowed}.dropdown.is-disabled .dropdown-trigger{pointer-events:none}.dropdown.is-inline .dropdown-menu{position:static;display:inline-block;padding:0}.dropdown.is-top-right .dropdown-menu{top:auto;bottom:100%}.dropdown.is-top-left .dropdown-menu{top:auto;bottom:100%;right:0;left:auto}.dropdown.is-bottom-left .dropdown-menu{right:0;left:auto}@media screen and (max-width:1023px){.dropdown.is-mobile-modal.is-touch-enabled>.dropdown-menu,.dropdown.is-mobile-modal:not(.is-hoverable)>.dropdown-menu{position:fixed!important;width:calc(100vw - 40px);max-width:460px;max-height:calc(100vh - 120px);top:25%!important;left:50%!important;bottom:auto!important;right:auto!important;-webkit-transform:translate3d(-50%,-25%,0);transform:translate3d(-50%,-25%,0);white-space:normal;overflow-y:auto;z-index:50!important}.dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal.is-touch-enabled>.dropdown-menu>.dropdown-content>a,.dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal:not(.is-hoverable)>.dropdown-menu>.dropdown-content>a,.dropdown.is-mobile-modal.is-touch-enabled>.dropdown-menu>.dropdown-content>.dropdown-item,.dropdown.is-mobile-modal.is-touch-enabled>.dropdown-menu>.dropdown-content>.has-link a,.dropdown.is-mobile-modal:not(.is-hoverable)>.dropdown-menu>.dropdown-content>.dropdown-item,.dropdown.is-mobile-modal:not(.is-hoverable)>.dropdown-menu>.dropdown-content>.has-link a{padding:1rem 1.5rem}}@media screen and (max-width:1023px){html.is-clipped-touch{overflow:hidden!important}}.field.is-grouped .field{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped .field:not(:last-child){margin-right:.75rem}.field.is-grouped .field.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons .control:first-child .control .button,.field.has-addons .control:first-child .control .input,.field.has-addons .control:first-child .control .select select{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.has-addons .control:last-child .control .button,.field.has-addons .control:last-child .control .input,.field.has-addons .control:last-child .control .select select{border-bottom-right-radius:4px;border-top-right-radius:4px}.field.has-addons .control .control .button,.field.has-addons .control .control .input,.field.has-addons .control .control .select select{border-radius:0}.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons.b-numberinput .control{margin-right:unset}.field.is-floating-in-label,.field.is-floating-label{position:relative}.field.is-floating-in-label .label,.field.is-floating-label .label{position:absolute;left:1em;font-size:.75rem;background-color:transparent;z-index:5;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 2em);overflow:hidden}.field.is-floating-in-label .label.is-small,.field.is-floating-label .label.is-small{font-size:.5625rem}.field.is-floating-in-label .label.is-medium,.field.is-floating-label .label.is-medium{font-size:.9375rem}.field.is-floating-in-label .label.is-large,.field.is-floating-label .label.is-large{font-size:1.125rem}.field.is-floating-in-label .taginput .counter,.field.is-floating-label .taginput .counter{float:none;text-align:right}.field.is-floating-in-label.has-addons>.label+.control .button,.field.is-floating-in-label.has-addons>.label+.control .input,.field.is-floating-in-label.has-addons>.label+.control .select select,.field.is-floating-label.has-addons>.label+.control .button,.field.is-floating-label.has-addons>.label+.control .input,.field.is-floating-label.has-addons>.label+.control .select select{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.is-floating-label .label{top:-.775em;padding-left:.125em;padding-right:.125em}.field.is-floating-label .label:before{content:\"\";display:block;position:absolute;top:.775em;left:0;right:0;height:.375em;background-color:#fff;z-index:-1}.field.is-floating-label .input:focus,.field.is-floating-label .select select:focus,.field.is-floating-label .textarea:focus{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-label .taginput .taginput-container{padding-top:.475em}.field.is-floating-label .taginput .taginput-container.is-focused{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-in-label>.label{top:.25em}.field.is-floating-in-label>.label+.control.datepicker .input,.field.is-floating-in-label>.label+.control.timepicker .input,.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) .input,.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) .textarea,.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) select{padding-top:calc(1.625em - .5625rem);padding-bottom:1px;height:3.25em}.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple){height:3.25em}.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>.label+.control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple):after{margin-top:1px}.field.is-floating-in-label>.label+.control.taginput .taginput-container{padding-top:calc(1.9em - .5625rem - 1px)}.field.is-floating-in-label>.label+.control:not(.taginput) .is-left.icon,.field.is-floating-in-label>.label+.control:not(.taginput) .is-right.icon{height:3.25em}.field.is-floating-in-label>.label+.control:not(.taginput) .is-left.icon{padding-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>.label+.control.is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>.label+.field-body>.has-addons .control .input,.field.is-floating-in-label>.label+.field-body>.has-addons .control .textarea,.field.is-floating-in-label>.label+.field-body>.has-addons .control select,.field.is-floating-in-label>.label+.field-body>.is-grouped .control .input,.field.is-floating-in-label>.label+.field-body>.is-grouped .control .textarea,.field.is-floating-in-label>.label+.field-body>.is-grouped .control select{padding-top:calc(1.625em - .5625rem);padding-bottom:1px}.field.is-floating-in-label.has-numberinput .b-numberinput .control .button,.field.is-floating-in-label.has-numberinput .b-numberinput .control .input,.field.is-floating-in-label>.label+.field-body>.has-addons .control .button,.field.is-floating-in-label>.label+.field-body>.has-addons .control .input,.field.is-floating-in-label>.label+.field-body>.has-addons .control .textarea,.field.is-floating-in-label>.label+.field-body>.has-addons .control select,.field.is-floating-in-label>.label+.field-body>.is-grouped .control .button,.field.is-floating-in-label>.label+.field-body>.is-grouped .control .input,.field.is-floating-in-label>.label+.field-body>.is-grouped .control .textarea,.field.is-floating-in-label>.label+.field-body>.is-grouped .control select{height:3.25em}.field.is-floating-in-label.has-numberinput .label,.field.is-floating-label.has-numberinput .label{margin-left:3rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput.has-numberinput-is-small .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label{margin-left:3.75rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput.has-numberinput-is-large .label{margin-left:4.5rem}.field.is-floating-in-label.has-numberinput-compact .label,.field.is-floating-label.has-numberinput-compact .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label{margin-left:1.6875rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label{margin-left:2.8125rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label{margin-left:3.375rem}.field.has-addons-right.is-floating-in-label .label,.field.has-addons-right.is-floating-label .label,.field.is-grouped-right.is-floating-in-label .label,.field.is-grouped-right.is-floating-label .label{position:relative;left:5.25em}.control .help.counter{float:right;margin-left:.5em}.control .icon.is-clickable{pointer-events:auto;cursor:pointer}.control.is-loading:after{top:calc(50% - .5em);right:.75em}.icon{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit}.icon svg{background-color:transparent;fill:currentColor;stroke-width:0;stroke:currentColor;pointer-events:none;width:100%;height:100%}.b-image-wrapper>img{-o-object-fit:cover;object-fit:cover}.b-image-wrapper>img.has-ratio,.b-image-wrapper>img.placeholder{height:100%;width:100%}.b-image-wrapper>img.placeholder{-webkit-filter:blur(10px);filter:blur(10px)}.loading-overlay{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;z-index:29}.loading-overlay.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.loading-overlay.is-full-page{position:fixed;z-index:999}.loading-overlay.is-full-page .loading-icon:after{top:calc(50% - 2.5em);left:calc(50% - 2.5em);width:5em;height:5em}.loading-overlay .loading-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#7f7f7f;background:hsla(0,0%,100%,.5)}.loading-overlay .loading-icon{position:relative}.loading-overlay .loading-icon:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:9999px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:calc(50% - 1.5em);left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.menu .menu-list li>a.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.message .media,.notification .media{padding-top:0;border:0}.message .auto-close-progress progress,.notification .auto-close-progress progress{border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;height:10px!important}.modal.is-full-screen>.animation-content,.modal.is-full-screen>.animation-content>.modal-card{width:100%;height:100%;max-height:100vh;margin:0;background-color:#f5f5f5}.modal .animation-content{margin:0 20px}.modal .animation-content .modal-card{margin:0}@media screen and (max-width:768px){.modal .animation-content{width:100%}}.modal .modal-content{width:100%}@media screen and (max-width:768px){.modal .modal-close{background-color:color-mix(in hsl,rgba(10,10,10,.86) 10%,transparent)}.modal .modal-close :focus,.modal .modal-close:hover{background-color:color-mix(in hsl,rgba(10,10,10,.86) 20%,transparent)}.modal .modal-close:active{background-color:color-mix(in hsl,rgba(10,10,10,.86) 30%,transparent)}}.navbar.has-navbar-centered .navbar-start{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:auto}.navbar.has-navbar-centered .navbar-end{margin-left:0}.navbar .navbar-dropdown.is-boxed{visibility:hidden;-webkit-transition-property:opacity,visibility,-webkit-transform;transition-property:opacity,visibility,-webkit-transform;transition-property:opacity,visibility,transform;transition-property:opacity,visibility,transform,-webkit-transform}.navbar .navbar-item.has-dropdown.is-active .is-boxed,.navbar .navbar-item.has-dropdown.is-hoverable:hover .is-boxed{visibility:visible}.notices{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1000;pointer-events:none}.notices .toast{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;text-align:center;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:2em;padding:.75em 1.5em;pointer-events:auto;opacity:.92}.notices .toast.is-white{color:#0a0a0a;background:#fff}.notices .toast.is-black{color:#fff;background:#0a0a0a}.notices .toast.is-light{color:rgba(0,0,0,.7);background:#f5f5f5}.notices .toast.is-dark{color:#fff;background:#363636}.notices .toast.is-link,.notices .toast.is-primary{color:#fff;background:#7957d5}.notices .toast.is-info{color:#fff;background:#167df0}.notices .toast.is-success{color:#fff;background:#48c78e}.notices .toast.is-warning{color:rgba(0,0,0,.7);background:#ffe08a}.notices .toast.is-danger{color:#fff;background:#f14668}.notices .snackbar{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:4px;pointer-events:auto;background:#363636;color:#fff;min-height:3em}.notices .snackbar .text{padding:.5em 1em}.notices .snackbar .action{margin-left:auto;padding:.5em .5em .5em 0}.notices .snackbar .action .button{font-weight:600;text-transform:uppercase;background:#363636;border:transparent}.notices .snackbar .action .button:active,.notices .snackbar .action .button:hover{background:#292929}.notices .snackbar .action.is-white .button{color:#fff}.notices .snackbar .action.is-black .button{color:#0a0a0a}.notices .snackbar .action.is-light .button{color:#f5f5f5}.notices .snackbar .action.is-dark .button{color:#363636}.notices .snackbar .action.is-link .button,.notices .snackbar .action.is-primary .button{color:#7957d5}.notices .snackbar .action.is-info .button{color:#167df0}.notices .snackbar .action.is-success .button{color:#48c78e}.notices .snackbar .action.is-warning .button{color:#ffe08a}.notices .snackbar .action.is-danger .button{color:#f14668}.notices .snackbar .action.is-cancel{padding-right:0}@media screen and (max-width:768px){.notices .snackbar{width:100%;margin:0;border-radius:0}}@media print,screen and (min-width:769px){.notices .snackbar{min-width:350px;max-width:600px;overflow:hidden}}.notices .notification{pointer-events:auto;max-width:600px}.notices .notification.is-bottom,.notices .notification.is-top,.notices .snackbar.is-bottom,.notices .snackbar.is-top,.notices .toast.is-bottom,.notices .toast.is-top{-ms-flex-item-align:center;align-self:center}.notices .notification.is-bottom-right,.notices .notification.is-top-right,.notices .snackbar.is-bottom-right,.notices .snackbar.is-top-right,.notices .toast.is-bottom-right,.notices .toast.is-top-right{-ms-flex-item-align:end;align-self:flex-end}.notices .notification.is-bottom-left,.notices .notification.is-top-left,.notices .snackbar.is-bottom-left,.notices .snackbar.is-top-left,.notices .toast.is-bottom-left,.notices .toast.is-top-left{-ms-flex-item-align:start;align-self:flex-start}.notices .notification.is-toast,.notices .snackbar.is-toast,.notices .toast.is-toast{opacity:.92}.notices.is-top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.notices.is-bottom{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.notices.is-bottom .notification{margin-bottom:0}.notices.is-bottom .notification:not(:first-child){margin-bottom:1.5rem}.notices.has-custom-container{position:absolute}@media screen and (max-width:768px){.notices{padding:0;position:fixed!important}}.notification .auto-close-progress.progress-wrapper{position:absolute;bottom:0;left:0;width:100%}.b-numberinput.field{margin-bottom:0}.b-numberinput.field.has-addons.is-expanded,.b-numberinput.field.is-grouped div.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.b-numberinput input[type=number]::-webkit-inner-spin-button,.b-numberinput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.b-numberinput input[type=number]{-moz-appearance:textfield;text-align:center}.b-numberinput .button.is-rounded{padding-left:1em;padding-right:1em}.pagination .pagination-next,.pagination .pagination-previous{padding-left:.75em;padding-right:.75em}.pagination .pagination-next.is-disabled,.pagination .pagination-previous.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.pagination.is-simple{-webkit-box-pack:normal;-ms-flex-pack:normal;justify-content:normal}.pagination.is-simple.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pagination.is-simple.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.pagination .is-current{pointer-events:none;cursor:not-allowed}@media print,screen and (min-width:769px){.pagination.has-input .pagination-list{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input .pagination-input{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input .pagination-previous{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input .pagination-next{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-centered .pagination-list{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-centered .pagination-input{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-centered .pagination-next{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-centered.is-input-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-centered.is-input-right .pagination-list{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-centered.is-input-right .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-centered.is-input-right .pagination-input{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-centered.is-input-left .pagination-input{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-centered.is-input-left .pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-centered.is-input-left .pagination-list{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-centered.is-input-left .pagination-next{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-right .pagination-input{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-right .pagination-list{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-right.is-input-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-right.is-input-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-right.is-input-right .pagination-list{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-right.is-input-right .pagination-input{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-right.is-input-left .pagination-input{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-right.is-input-left .pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-right.is-input-left .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-right.is-input-left .pagination-list{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-input-right .pagination-list{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-input-right .pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-input-right .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-input-right .pagination-input{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.pagination.has-input.is-input-left .pagination-input{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.has-input.is-input-left .pagination-list{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.has-input.is-input-left .pagination-previous{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.has-input.is-input-left .pagination-next{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}}.progress-wrapper{position:relative;overflow:hidden}.progress-wrapper:not(:last-child){margin-bottom:1.5rem}.progress-wrapper .progress-value{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:.66667rem;line-height:1rem;font-weight:700;color:rgba(0,0,0,.7);white-space:nowrap}.progress-wrapper .progress,.progress-wrapper .progress-bar,.progress-wrapper .progress-wrapper.is-not-native{margin-bottom:0}.progress-wrapper .is-small.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-small.progress-wrapper.is-not-native .progress-value,.progress-wrapper .progress-bar.is-small+.progress-value,.progress-wrapper .progress-bar.is-small .progress-value,.progress-wrapper .progress.is-small+.progress-value,.progress-wrapper .progress.is-small .progress-value{font-size:.5rem;line-height:.75rem}.progress-wrapper .is-medium.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-medium.progress-wrapper.is-not-native .progress-value,.progress-wrapper .progress-bar.is-medium+.progress-value,.progress-wrapper .progress-bar.is-medium .progress-value,.progress-wrapper .progress.is-medium+.progress-value,.progress-wrapper .progress.is-medium .progress-value{font-size:.83333rem;line-height:1.25rem}.progress-wrapper .is-large.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-large.progress-wrapper.is-not-native .progress-value,.progress-wrapper .progress-bar.is-large+.progress-value,.progress-wrapper .progress-bar.is-large .progress-value,.progress-wrapper .progress.is-large+.progress-value,.progress-wrapper .progress.is-large .progress-value{font-size:1rem;line-height:1.5rem}.progress-wrapper .progress-bar::-webkit-progress-value,.progress-wrapper .progress-wrapper.is-not-native::-webkit-progress-value,.progress-wrapper .progress::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}.progress-wrapper .is-more-than-half.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half+.progress-value,.progress-wrapper .progress.is-more-than-half+.progress-value{color:#fff}.progress-wrapper .is-more-than-half.is-white.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-white+.progress-value,.progress-wrapper .progress.is-more-than-half.is-white+.progress-value{color:#0a0a0a}.progress-wrapper .is-more-than-half.is-black.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-black+.progress-value,.progress-wrapper .progress.is-more-than-half.is-black+.progress-value{color:#fff}.progress-wrapper .is-more-than-half.is-light.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-light+.progress-value,.progress-wrapper .progress.is-more-than-half.is-light+.progress-value{color:rgba(0,0,0,.7)}.progress-wrapper .is-more-than-half.is-dark.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-more-than-half.is-info.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-more-than-half.is-link.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-more-than-half.is-primary.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .is-more-than-half.is-success.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-dark+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-info+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-link+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-primary+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-success+.progress-value,.progress-wrapper .progress.is-more-than-half.is-dark+.progress-value,.progress-wrapper .progress.is-more-than-half.is-info+.progress-value,.progress-wrapper .progress.is-more-than-half.is-link+.progress-value,.progress-wrapper .progress.is-more-than-half.is-primary+.progress-value,.progress-wrapper .progress.is-more-than-half.is-success+.progress-value{color:#fff}.progress-wrapper .is-more-than-half.is-warning.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-warning+.progress-value,.progress-wrapper .progress.is-more-than-half.is-warning+.progress-value{color:rgba(0,0,0,.7)}.progress-wrapper .is-more-than-half.is-danger.progress-wrapper.is-not-native+.progress-value,.progress-wrapper .progress-bar.is-more-than-half.is-danger+.progress-value,.progress-wrapper .progress.is-more-than-half.is-danger+.progress-value{color:#fff}.progress-wrapper .is-squared.progress-wrapper.is-not-native,.progress-wrapper .progress-bar.is-squared,.progress-wrapper .progress.is-squared{border-radius:0}.progress-wrapper.is-not-native{white-space:nowrap;background-color:#ededed;border-radius:9999px}.progress-wrapper.is-not-native .progress-bar{position:relative;display:inline-block;vertical-align:top;height:100%;background-color:#4a4a4a}.progress-wrapper.is-not-native .progress-bar .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-white{background-color:#fff}.progress-wrapper.is-not-native .progress-bar.is-white .progress-value{color:#0a0a0a}.progress-wrapper.is-not-native .progress-bar.is-black{background-color:#0a0a0a}.progress-wrapper.is-not-native .progress-bar.is-black .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-light{background-color:#f5f5f5}.progress-wrapper.is-not-native .progress-bar.is-light .progress-value{color:rgba(0,0,0,.7)}.progress-wrapper.is-not-native .progress-bar.is-dark{background-color:#363636}.progress-wrapper.is-not-native .progress-bar.is-dark .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-primary{background-color:#7957d5}.progress-wrapper.is-not-native .progress-bar.is-primary .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-link{background-color:#7957d5}.progress-wrapper.is-not-native .progress-bar.is-link .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-info{background-color:#167df0}.progress-wrapper.is-not-native .progress-bar.is-info .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-success{background-color:#48c78e}.progress-wrapper.is-not-native .progress-bar.is-success .progress-value{color:#fff}.progress-wrapper.is-not-native .progress-bar.is-warning{background-color:#ffe08a}.progress-wrapper.is-not-native .progress-bar.is-warning .progress-value{color:rgba(0,0,0,.7)}.progress-wrapper.is-not-native .progress-bar.is-danger{background-color:#f14668}.progress-wrapper.is-not-native .progress-bar.is-danger .progress-value{color:#fff}.progress-wrapper.is-squared{border-radius:0}.b-radio.radio{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-radio.radio:not(.button){margin-right:.5em}.b-radio.radio:not(.button)+.radio:last-child{margin-right:0}.b-radio.radio+.radio{margin-left:0}.b-radio.radio input[type=radio]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-radio.radio input[type=radio]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;position:relative;cursor:pointer;width:1.25em;height:1.25em;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;border-radius:50%;border:2px solid #7a7a7a}.b-radio.radio input[type=radio]+.check:before{content:\"\";display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;left:50%;margin-left:-.625em;bottom:50%;margin-bottom:-.625em;width:1.25em;height:1.25em;-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);background-color:#7957d5}.b-radio.radio input[type=radio]+.check.is-white:before{background:#fff}.b-radio.radio input[type=radio]+.check.is-black:before{background:#0a0a0a}.b-radio.radio input[type=radio]+.check.is-light:before{background:#f5f5f5}.b-radio.radio input[type=radio]+.check.is-dark:before{background:#363636}.b-radio.radio input[type=radio]+.check.is-link:before,.b-radio.radio input[type=radio]+.check.is-primary:before{background:#7957d5}.b-radio.radio input[type=radio]+.check.is-info:before{background:#167df0}.b-radio.radio input[type=radio]+.check.is-success:before{background:#48c78e}.b-radio.radio input[type=radio]+.check.is-warning:before{background:#ffe08a}.b-radio.radio input[type=radio]+.check.is-danger:before{background:#f14668}.b-radio.radio input[type=radio]:checked+.check{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-white{border-color:#fff}.b-radio.radio input[type=radio]:checked+.check.is-black{border-color:#0a0a0a}.b-radio.radio input[type=radio]:checked+.check.is-light{border-color:#f5f5f5}.b-radio.radio input[type=radio]:checked+.check.is-dark{border-color:#363636}.b-radio.radio input[type=radio]:checked+.check.is-link,.b-radio.radio input[type=radio]:checked+.check.is-primary{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-info{border-color:#167df0}.b-radio.radio input[type=radio]:checked+.check.is-success{border-color:#48c78e}.b-radio.radio input[type=radio]:checked+.check.is-warning{border-color:#ffe08a}.b-radio.radio input[type=radio]:checked+.check.is-danger{border-color:#f14668}.b-radio.radio input[type=radio]:checked+.check:before{-webkit-transform:scale(.5);transform:scale(.5)}.b-radio.radio input[type=radio]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-link,.b-radio.radio input[type=radio]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(72,199,142,.8);box-shadow:0 0 .5em rgba(72,199,142,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,224,138,.8);box-shadow:0 0 .5em rgba(255,224,138,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(241,70,104,.8);box-shadow:0 0 .5em rgba(241,70,104,.8)}.b-radio.radio input[type=radio][disabled]+.check{cursor:not-allowed}.b-radio.radio .control-label{padding-left:calc(.75em - 1px)}.b-radio.radio.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-radio.radio.button.is-selected{z-index:1}.b-radio.radio[disabled]{opacity:.5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-white{border-color:#fff}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-dark{border-color:#363636}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-link,.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-info{border-color:#167df0}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-success{border-color:#48c78e}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-warning{border-color:#ffe08a}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-danger{border-color:#f14668}.b-radio.radio.is-small{border-radius:2px;font-size:.75rem}.b-radio.radio.is-medium{font-size:1.25rem}.b-radio.radio.is-large{font-size:1.5rem}.rate{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.rate:not(:last-child){margin-bottom:.75rem}.rate.is-spaced .rate-item:not(:last-child){margin-right:.25rem}.rate.is-disabled .rate-item{cursor:auto}.rate.is-disabled .rate-item:hover{-webkit-transform:none;transform:none}.rate.is-rtl .rate-item{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.rate.is-rtl .rate-text{margin-left:0;margin-right:.35rem}.rate .rate-item{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-transition:all .3s;transition:all .3s}.rate .rate-item:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.rate .rate-item.set-half .is-half,.rate .rate-item.set-on .icon{color:#ffd970}.rate .rate-item.set-half .is-half{position:absolute;left:0;top:0;overflow:hidden}.rate .icon{color:#dbdbdb;line-height:1;pointer-events:none;width:inherit}.rate .is-half>i{position:absolute;left:0}.rate .rate-text{font-size:.8rem;margin-left:.35rem}.rate .rate-text.is-small{font-size:.6rem}.rate .rate-text.is-medium{font-size:1rem}.rate .rate-text.is-large{font-size:1.2rem}.select select{text-rendering:auto!important;padding-right:2.5em}.select select option{color:#4a4a4a;padding:calc(.5em - 1px) calc(.75em - 1px)}.select select option:disabled{cursor:not-allowed;opacity:.5}.select select optgroup{color:#b5b5b5;font-weight:400;font-style:normal;padding:.25em 0}.select select[disabled]{opacity:1}.select.is-empty select{color:hsla(0,0%,47.8%,.7)}.select.is-loading:after{top:calc(50% - .5em);right:.75em}.b-skeleton{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;vertical-align:middle;width:100%}.b-skeleton>.b-skeleton-item{background:-webkit-gradient(linear,left top,right top,color-stop(25%,#dbdbdb),color-stop(50%,hsla(0,0%,85.9%,.5)),color-stop(75%,#dbdbdb));background:linear-gradient(90deg,#dbdbdb 25%,hsla(0,0%,85.9%,.5) 50%,#dbdbdb 75%);background-size:400% 100%;width:100%}.b-skeleton>.b-skeleton-item.is-rounded{border-radius:4px}.b-skeleton>.b-skeleton-item:after{content:\" \"}.b-skeleton>.b-skeleton-item+.b-skeleton-item{margin-top:.5rem}.b-skeleton.is-animated>.b-skeleton-item{-webkit-animation:skeleton-loading 1.5s infinite;animation:skeleton-loading 1.5s infinite}.b-skeleton.is-centered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-skeleton.is-right{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.b-skeleton+.b-skeleton{margin-top:.5rem}.b-skeleton>.b-skeleton-item{line-height:1rem}.b-skeleton.is-small>.b-skeleton-item{line-height:.75rem}.b-skeleton.is-medium>.b-skeleton-item{line-height:1.25rem}.b-skeleton.is-large>.b-skeleton-item{line-height:1.5rem}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.b-sidebar .sidebar-content{background-color:#f5f5f5;-webkit-box-shadow:5px 0 13px 3px rgba(10,10,10,.1);box-shadow:5px 0 13px 3px rgba(10,10,10,.1);width:260px;z-index:39}.b-sidebar .sidebar-content.is-white{background-color:#fff}.b-sidebar .sidebar-content.is-black{background-color:#0a0a0a}.b-sidebar .sidebar-content.is-light{background-color:#f5f5f5}.b-sidebar .sidebar-content.is-dark{background-color:#363636}.b-sidebar .sidebar-content.is-link,.b-sidebar .sidebar-content.is-primary{background-color:#7957d5}.b-sidebar .sidebar-content.is-info{background-color:#167df0}.b-sidebar .sidebar-content.is-success{background-color:#48c78e}.b-sidebar .sidebar-content.is-warning{background-color:#ffe08a}.b-sidebar .sidebar-content.is-danger{background-color:#f14668}.b-sidebar .sidebar-content.is-fixed{position:fixed;left:0;top:0}.b-sidebar .sidebar-content.is-fixed.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-absolute{position:absolute;left:0;top:0}.b-sidebar .sidebar-content.is-absolute.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-mini{width:80px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed){-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth){width:260px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-static{position:static}.b-sidebar .sidebar-content.is-absolute,.b-sidebar .sidebar-content.is-static{-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-fullwidth{width:100%;max-width:100%}.b-sidebar .sidebar-content.is-fullheight{height:100%;max-height:100%;overflow:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:stretch;align-content:stretch}@media screen and (max-width:768px){.b-sidebar .sidebar-content.is-mini-mobile{width:80px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile){width:260px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-hidden-mobile{width:0;height:0;overflow:hidden}.b-sidebar .sidebar-content.is-fullwidth-mobile{width:100%;max-width:100%}}.b-sidebar .sidebar-content .sidebar-close{background:rgba(10,10,10,.3)}.b-sidebar .sidebar-content .sidebar-close:hover{background:rgba(10,10,10,.86)}.b-sidebar .sidebar-background{bottom:0;left:0;position:absolute;right:0;top:0;background:rgba(10,10,10,.86);position:fixed;z-index:38}.b-slider{margin:1em 0;background:transparent;width:100%}.b-slider .b-slider-track{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:pointer;background:#dbdbdb;border-radius:4px}.b-slider .b-slider-fill{position:absolute;height:100%;-webkit-box-shadow:0 0 0 #7a7a7a;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-slider .b-slider-thumb-wrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;cursor:-webkit-grab;cursor:grab;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.b-slider .b-slider-thumb-wrapper .b-slider-thumb{-webkit-box-shadow:none;box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff}.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider .b-slider-thumb-wrapper.is-dragging{cursor:-webkit-grabbing;cursor:grabbing}.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider .b-slider-thumb-wrapper.has-indicator .b-slider-thumb{padding:16px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto}.b-slider.slider-focus{padding-top:20px;padding-bottom:20px;margin-top:-20px;margin-bottom:-20px;cursor:pointer}.b-slider.is-rounded .b-slider-thumb{border-radius:9999px}.b-slider.is-disabled .b-slider-track{cursor:not-allowed;opacity:.5}.b-slider.is-disabled .b-slider-thumb-wrapper{cursor:not-allowed}.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb{-webkit-transform:scale(1);transform:scale(1)}.b-slider .b-slider-track{height:.5rem}.b-slider .b-slider-thumb{height:1rem;width:1rem}.b-slider .b-slider-tick{height:.25rem}.b-slider .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.25rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-small .b-slider-track{height:.375rem}.b-slider.is-small .b-slider-thumb{height:.75rem;width:.75rem}.b-slider.is-small .b-slider-tick{height:.1875rem}.b-slider.is-small .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.1875rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-medium .b-slider-track{height:.625rem}.b-slider.is-medium .b-slider-thumb{height:1.25rem;width:1.25rem}.b-slider.is-medium .b-slider-tick{height:.3125rem}.b-slider.is-medium .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.3125rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-large .b-slider-track{height:.75rem}.b-slider.is-large .b-slider-thumb{height:1.5rem;width:1.5rem}.b-slider.is-large .b-slider-tick{height:.375rem}.b-slider.is-large .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.375rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-white .b-slider-fill{background:#fff!important}.b-slider.is-black .b-slider-fill{background:#0a0a0a!important}.b-slider.is-light .b-slider-fill{background:#f5f5f5!important}.b-slider.is-dark .b-slider-fill{background:#363636!important}.b-slider.is-link .b-slider-fill,.b-slider.is-primary .b-slider-fill{background:#7957d5!important}.b-slider.is-info .b-slider-fill{background:#167df0!important}.b-slider.is-success .b-slider-fill{background:#48c78e!important}.b-slider.is-warning .b-slider-fill{background:#ffe08a!important}.b-slider.is-danger .b-slider-fill{background:#f14668!important}.b-slider .b-slider-tick{position:absolute;width:3px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;background:#b5b5b5;border-radius:4px}.b-slider .b-slider-tick.is-tick-hidden{background:transparent}.b-steps .steps .step-items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps .steps .step-items .step-item{margin-top:0;position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:1em;flex-basis:1em}.b-steps .steps .step-items .step-item .step-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#4a4a4a}.b-steps .steps .step-items .step-item .step-link:not(.is-clickable){cursor:not-allowed}.b-steps .steps .step-items .step-item .step-marker{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#b5b5b5;border:.2em solid #fff;z-index:1;overflow:hidden}.b-steps .steps .step-items .step-item.is-white:after,.b-steps .steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(270deg,#dbdbdb 50%,#fff 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-white.is-active .step-marker{background-color:#fff;border-color:#fff;color:#fff}.b-steps .steps .step-items .step-item.is-white.is-active:after,.b-steps .steps .step-items .step-item.is-white.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker{color:#0a0a0a;background-color:#fff}.b-steps .steps .step-items .step-item.is-white.is-previous:after,.b-steps .steps .step-items .step-item.is-white.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black:after,.b-steps .steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(270deg,#dbdbdb 50%,#0a0a0a 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-black.is-active .step-marker{background-color:#fff;border-color:#0a0a0a;color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-active:after,.b-steps .steps .step-items .step-item.is-black.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker{color:#fff;background-color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-previous:after,.b-steps .steps .step-items .step-item.is-black.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light:after,.b-steps .steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(270deg,#dbdbdb 50%,#f5f5f5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-light.is-active .step-marker{background-color:#fff;border-color:#f5f5f5;color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-active:after,.b-steps .steps .step-items .step-item.is-light.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker{color:rgba(0,0,0,.7);background-color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-previous:after,.b-steps .steps .step-items .step-item.is-light.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark:after,.b-steps .steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(270deg,#dbdbdb 50%,#363636 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker{background-color:#fff;border-color:#363636;color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-active:after,.b-steps .steps .step-items .step-item.is-dark.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker{color:#fff;background-color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-previous:after,.b-steps .steps .step-items .step-item.is-dark.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary:after,.b-steps .steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-active:after,.b-steps .steps .step-items .step-item.is-primary.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-previous:after,.b-steps .steps .step-items .step-item.is-primary.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link:after,.b-steps .steps .step-items .step-item.is-link:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-link.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-active:after,.b-steps .steps .step-items .step-item.is-link.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-previous:after,.b-steps .steps .step-items .step-item.is-link.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info:after,.b-steps .steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(270deg,#dbdbdb 50%,#167df0 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-info.is-active .step-marker{background-color:#fff;border-color:#167df0;color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-active:after,.b-steps .steps .step-items .step-item.is-info.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker{color:#fff;background-color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-previous:after,.b-steps .steps .step-items .step-item.is-info.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success:after,.b-steps .steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#48c78e));background:linear-gradient(270deg,#dbdbdb 50%,#48c78e 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-success.is-active .step-marker{background-color:#fff;border-color:#48c78e;color:#48c78e}.b-steps .steps .step-items .step-item.is-success.is-active:after,.b-steps .steps .step-items .step-item.is-success.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker{color:#fff;background-color:#48c78e}.b-steps .steps .step-items .step-item.is-success.is-previous:after,.b-steps .steps .step-items .step-item.is-success.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning:after,.b-steps .steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffe08a));background:linear-gradient(270deg,#dbdbdb 50%,#ffe08a 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker{background-color:#fff;border-color:#ffe08a;color:#ffe08a}.b-steps .steps .step-items .step-item.is-warning.is-active:after,.b-steps .steps .step-items .step-item.is-warning.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker{color:rgba(0,0,0,.7);background-color:#ffe08a}.b-steps .steps .step-items .step-item.is-warning.is-previous:after,.b-steps .steps .step-items .step-item.is-warning.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger:after,.b-steps .steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f14668));background:linear-gradient(270deg,#dbdbdb 50%,#f14668 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker{background-color:#fff;border-color:#f14668;color:#f14668}.b-steps .steps .step-items .step-item.is-danger.is-active:after,.b-steps .steps .step-items .step-item.is-danger.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker{color:#fff;background-color:#f14668}.b-steps .steps .step-items .step-item.is-danger.is-previous:after,.b-steps .steps .step-items .step-item.is-danger.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item .step-marker{color:#fff}.b-steps .steps .step-items .step-item .step-details{text-align:center;z-index:1}.b-steps .steps .step-items .step-item:not(:first-child),.b-steps .steps .step-items .step-item:only-child{-ms-flex-negative:1;flex-shrink:1}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{content:\" \";display:block;position:absolute;width:100%;bottom:0;left:-50%}.b-steps .steps .step-items .step-item:only-child:after{content:\" \";display:block;position:absolute;height:.2em;bottom:0}.b-steps .steps .step-items .step-item:only-child:after,.b-steps .steps .step-items .step-item:only-child:before{width:25%;left:50%}.b-steps .steps .step-items .step-item:only-child:before{right:50%;left:auto}.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-active .step-link{cursor:default}.b-steps .steps .step-items .step-item.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-active:after,.b-steps .steps .step-items .step-item.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-previous:after,.b-steps .steps .step-items .step-item.is-previous:before{background-position:0 100%}.b-steps .steps+.step-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-steps .steps+.step-content .step-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-steps .steps+.step-content .step-item:focus{outline:none}.b-steps .steps+.step-content.is-transitioning{overflow:hidden}.b-steps .steps.is-rounded .step-item .step-marker{border-radius:9999px}.b-steps .steps.is-animated .step-item:not(:first-child):before,.b-steps .steps.is-animated .step-item:only-child:before{-webkit-transition:background .15s ease-out;transition:background .15s ease-out}.b-steps .steps.has-label-left .step-items .step-item .step-link,.b-steps .steps.has-label-right .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.b-steps .steps.has-label-left .step-items .step-item .step-link>.step-details,.b-steps .steps.has-label-right .step-items .step-item .step-link>.step-details{background-color:#fff;padding:.2em}.b-steps .steps.has-label-left .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-steps .steps{font-size:1rem;min-height:2rem}.b-steps .steps .step-items .step-item .step-marker{height:2rem;width:2rem}.b-steps .steps .step-items .step-item .step-marker .icon *,.b-steps .steps .step-items .step-item .step-marker .icon :before{font-size:1rem}.b-steps .steps .step-items .step-item .step-details .step-title{font-size:1.2rem;font-weight:600;line-height:1rem}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{height:.2em;top:1rem}.b-steps .steps .step-items .step-item:only-child:after{top:1rem}@media screen and (max-width:768px){.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before,.b-steps .steps .step-items .step-item:not(:first-child):before{top:1rem}}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-small .steps{font-size:.75rem;min-height:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker{height:1.5rem;width:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker .icon *,.b-steps.is-small .steps .step-items .step-item .step-marker .icon :before{font-size:.75rem}.b-steps.is-small .steps .step-items .step-item .step-details .step-title{font-size:.9rem;font-weight:600;line-height:.75rem}.b-steps.is-small .steps .step-items .step-item:not(:first-child):before,.b-steps.is-small .steps .step-items .step-item:only-child:before{height:.2em;top:.75rem}.b-steps.is-small .steps .step-items .step-item:only-child:after{top:.75rem}@media screen and (max-width:768px){.b-steps.is-small .steps .step-items .step-item:after,.b-steps.is-small .steps .step-items .step-item:before,.b-steps.is-small .steps .step-items .step-item:not(:first-child):before{top:.75rem}}.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-medium .steps{font-size:1.25rem;min-height:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker{height:2.5rem;width:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *,.b-steps.is-medium .steps .step-items .step-item .step-marker .icon :before{font-size:1.25rem}.b-steps.is-medium .steps .step-items .step-item .step-details .step-title{font-size:1.5rem;font-weight:600;line-height:1.25rem}.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before,.b-steps.is-medium .steps .step-items .step-item:only-child:before{height:.2em;top:1.25rem}.b-steps.is-medium .steps .step-items .step-item:only-child:after{top:1.25rem}@media screen and (max-width:768px){.b-steps.is-medium .steps .step-items .step-item:after,.b-steps.is-medium .steps .step-items .step-item:before,.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before{top:1.25rem}}.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-large .steps{font-size:1.5rem;min-height:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker{height:3rem;width:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker .icon *,.b-steps.is-large .steps .step-items .step-item .step-marker .icon :before{font-size:1.5rem}.b-steps.is-large .steps .step-items .step-item .step-details .step-title{font-size:1.8rem;font-weight:600;line-height:1.5rem}.b-steps.is-large .steps .step-items .step-item:not(:first-child):before,.b-steps.is-large .steps .step-items .step-item:only-child:before{height:.2em;top:1.5rem}.b-steps.is-large .steps .step-items .step-item:only-child:after{top:1.5rem}@media screen and (max-width:768px){.b-steps.is-large .steps .step-items .step-item:after,.b-steps.is-large .steps .step-items .step-item:before,.b-steps.is-large .steps .step-items .step-item:not(:first-child):before{top:1.5rem}}.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps.is-vertical>.steps .step-items{height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-steps.is-vertical>.steps .step-items .step-item{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1em 0}.b-steps.is-vertical>.steps .step-items .step-item:after,.b-steps.is-vertical>.steps .step-items .step-item:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-white:after,.b-steps.is-vertical>.steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(0deg,#dbdbdb 50%,#fff 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-black:after,.b-steps.is-vertical>.steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(0deg,#dbdbdb 50%,#0a0a0a 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-light:after,.b-steps.is-vertical>.steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(0deg,#dbdbdb 50%,#f5f5f5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-dark:after,.b-steps.is-vertical>.steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(0deg,#dbdbdb 50%,#363636 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-link:after,.b-steps.is-vertical>.steps .step-items .step-item.is-link:before,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:after,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-info:after,.b-steps.is-vertical>.steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(0deg,#dbdbdb 50%,#167df0 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-success:after,.b-steps.is-vertical>.steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#48c78e));background:linear-gradient(0deg,#dbdbdb 50%,#48c78e 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-warning:after,.b-steps.is-vertical>.steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffe08a));background:linear-gradient(0deg,#dbdbdb 50%,#ffe08a 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-danger:after,.b-steps.is-vertical>.steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f14668));background:linear-gradient(0deg,#dbdbdb 50%,#f14668 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:100%;width:.2em;top:-50%;left:calc(50% - .1em)}.b-steps.is-vertical>.steps .step-items .step-item.is-active:after,.b-steps.is-vertical>.steps .step-items .step-item.is-active:before,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:after,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:before{background-position:100% 0}.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{top:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after{width:.2em;top:auto;bottom:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:25%}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.b-steps.is-vertical>.steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link>.step-details{background-color:#fff}.b-steps.is-vertical>.step-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-steps.is-vertical>.step-navigation{-ms-flex-preferred-size:100%;flex-basis:100%}.b-steps.is-vertical.is-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@media screen and (max-width:768px){.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active){display:none}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:after,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{content:\" \";display:block;position:absolute;height:.2em;width:25%;bottom:0;left:50%}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{right:50%;left:auto}.b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details{display:none}}.switch{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-right:.5em}.switch+.switch:last-child{margin-right:0}.switch input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.switch input[type=checkbox]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;width:2.75em;height:1.575em;padding:.2em;background:#b5b5b5;border-radius:4px;-webkit-transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out,-webkit-box-shadow .15s ease-out}.switch input[type=checkbox]+.check.is-white-passive,.switch input[type=checkbox]+.check:hover{background:#fff}.switch input[type=checkbox]+.check.is-black-passive,.switch input[type=checkbox]+.check:hover{background:#0a0a0a}.switch input[type=checkbox]+.check.is-light-passive,.switch input[type=checkbox]+.check:hover{background:#f5f5f5}.switch input[type=checkbox]+.check.is-dark-passive,.switch input[type=checkbox]+.check:hover{background:#363636}.switch input[type=checkbox]+.check.is-link-passive,.switch input[type=checkbox]+.check.is-primary-passive,.switch input[type=checkbox]+.check:hover{background:#7957d5}.switch input[type=checkbox]+.check.is-info-passive,.switch input[type=checkbox]+.check:hover{background:#167df0}.switch input[type=checkbox]+.check.is-success-passive,.switch input[type=checkbox]+.check:hover{background:#48c78e}.switch input[type=checkbox]+.check.is-warning-passive,.switch input[type=checkbox]+.check:hover{background:#ffe08a}.switch input[type=checkbox]+.check.is-danger-passive,.switch input[type=checkbox]+.check:hover{background:#f14668}.switch input[type=checkbox]+.check.input[type=checkbox]+.switch input[type=checkbox]+.check.check{background:\"pink\"}.switch input[type=checkbox]+.check:before{content:\"\";display:block;border-radius:4px;width:1.175em;height:1.175em;background:#f5f5f5;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;will-change:transform;-webkit-transform-origin:left;transform-origin:left}.switch input[type=checkbox]+.check.is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:4px}.switch input[type=checkbox]:checked+.check{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-white{background:#fff}.switch input[type=checkbox]:checked+.check.is-black{background:#0a0a0a}.switch input[type=checkbox]:checked+.check.is-light{background:#f5f5f5}.switch input[type=checkbox]:checked+.check.is-dark{background:#363636}.switch input[type=checkbox]:checked+.check.is-link,.switch input[type=checkbox]:checked+.check.is-primary{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-info{background:#167df0}.switch input[type=checkbox]:checked+.check.is-success{background:#48c78e}.switch input[type=checkbox]:checked+.check.is-warning{background:#ffe08a}.switch input[type=checkbox]:checked+.check.is-danger{background:#f14668}.switch input[type=checkbox]:checked+.check:before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.switch input[type=checkbox]:checked+.check.is-elastic:before{-webkit-transform:translate3d(50%,0,0) scaleX(1.5);transform:translate3d(50%,0,0) scaleX(1.5)}.switch input[type=checkbox]:active,.switch input[type=checkbox]:focus{outline:none}.switch input[type=checkbox]:active+.check,.switch input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.6);box-shadow:0 0 .5em hsla(0,0%,47.8%,.6)}.switch input[type=checkbox]:active+.check.is-white-passive,.switch input[type=checkbox]:focus+.check.is-white-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active+.check.is-black-passive,.switch input[type=checkbox]:focus+.check.is-black-passive{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active+.check.is-light-passive,.switch input[type=checkbox]:focus+.check.is-light-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active+.check.is-dark-passive,.switch input[type=checkbox]:focus+.check.is-dark-passive{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active+.check.is-link-passive,.switch input[type=checkbox]:active+.check.is-primary-passive,.switch input[type=checkbox]:focus+.check.is-link-passive,.switch input[type=checkbox]:focus+.check.is-primary-passive{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active+.check.is-info-passive,.switch input[type=checkbox]:focus+.check.is-info-passive{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active+.check.is-success-passive,.switch input[type=checkbox]:focus+.check.is-success-passive{-webkit-box-shadow:0 0 .5em rgba(72,199,142,.8);box-shadow:0 0 .5em rgba(72,199,142,.8)}.switch input[type=checkbox]:active+.check.is-warning-passive,.switch input[type=checkbox]:focus+.check.is-warning-passive{-webkit-box-shadow:0 0 .5em rgba(255,224,138,.8);box-shadow:0 0 .5em rgba(255,224,138,.8)}.switch input[type=checkbox]:active+.check.is-danger-passive,.switch input[type=checkbox]:focus+.check.is-danger-passive{-webkit-box-shadow:0 0 .5em rgba(241,70,104,.8);box-shadow:0 0 .5em rgba(241,70,104,.8)}.switch input[type=checkbox]:active:checked+.check,.switch input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-white,.switch input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active:checked+.check.is-black,.switch input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active:checked+.check.is-light,.switch input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active:checked+.check.is-dark,.switch input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active:checked+.check.is-link,.switch input[type=checkbox]:active:checked+.check.is-primary,.switch input[type=checkbox]:focus:checked+.check.is-link,.switch input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-info,.switch input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active:checked+.check.is-success,.switch input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(72,199,142,.8);box-shadow:0 0 .5em rgba(72,199,142,.8)}.switch input[type=checkbox]:active:checked+.check.is-warning,.switch input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,224,138,.8);box-shadow:0 0 .5em rgba(255,224,138,.8)}.switch input[type=checkbox]:active:checked+.check.is-danger,.switch input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(241,70,104,.8);box-shadow:0 0 .5em rgba(241,70,104,.8)}.switch.has-left-label{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.switch.has-left-label .control-label{padding-right:calc(.75em - 1px)}.switch:not(.has-left-label) .control-label{padding-left:calc(.75em - 1px)}.switch:hover input[type=checkbox]+.check{background:hsla(0,0%,71%,.9)}.switch:hover input[type=checkbox]+.check.is-white-passive{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]+.check.is-black-passive{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]+.check.is-light-passive{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]+.check.is-dark-passive{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]+.check.is-link-passive,.switch:hover input[type=checkbox]+.check.is-primary-passive{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]+.check.is-info-passive{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]+.check.is-success-passive{background:rgba(72,199,142,.9)}.switch:hover input[type=checkbox]+.check.is-warning-passive{background:rgba(255,224,138,.9)}.switch:hover input[type=checkbox]+.check.is-danger-passive{background:rgba(241,70,104,.9)}.switch:hover input[type=checkbox]:checked+.check{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-white{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-black{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]:checked+.check.is-light{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-dark{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]:checked+.check.is-link,.switch:hover input[type=checkbox]:checked+.check.is-primary{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-info{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]:checked+.check.is-success{background:rgba(72,199,142,.9)}.switch:hover input[type=checkbox]:checked+.check.is-warning{background:rgba(255,224,138,.9)}.switch:hover input[type=checkbox]:checked+.check.is-danger{background:rgba(241,70,104,.9)}.switch.is-rounded input[type=checkbox]+.check,.switch.is-rounded input[type=checkbox]+.check:before{border-radius:9999px}.switch.is-rounded input[type=checkbox].is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:9999px}.switch.is-outlined input[type=checkbox]+.check{background:transparent;border:.1rem solid #b5b5b5}.switch.is-outlined input[type=checkbox]+.check.is-white-passive{border:.1rem solid hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:before{background:#fff}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:hover{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive{border:.1rem solid rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:hover{border-color:rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive{border:.1rem solid hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:hover{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive{border:.1rem solid rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:before{background:#363636}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:hover{border-color:rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive{border:.1rem solid rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:before{background:#167df0}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:hover{border-color:rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive{border:.1rem solid rgba(72,199,142,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:before{background:#48c78e}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:hover{border-color:rgba(72,199,142,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive{border:.1rem solid rgba(255,224,138,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:before{background:#ffe08a}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:hover{border-color:rgba(255,224,138,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive{border:.1rem solid rgba(241,70,104,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:before{background:#f14668}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:hover{border-color:rgba(241,70,104,.9)}.switch.is-outlined input[type=checkbox]+.check:before{background:#b5b5b5}.switch.is-outlined input[type=checkbox]:checked+.check{border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-white{background:transparent;border-color:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-white:before{background:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-black{background:transparent;border-color:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-black:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-light{background:transparent;border-color:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-light:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark{background:transparent;border-color:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark:before{background:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-info{background:transparent;border-color:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-info:before{background:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-success{background:transparent;border-color:#48c78e}.switch.is-outlined input[type=checkbox]:checked+.check.is-success:before{background:#48c78e}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning{background:transparent;border-color:#ffe08a}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning:before{background:#ffe08a}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger{background:transparent;border-color:#f14668}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger:before{background:#f14668}.switch.is-outlined input[type=checkbox]:checked+.check:before{background:#7957d5}.switch.is-outlined:hover input[type=checkbox]+.check{background:transparent;border-color:hsla(0,0%,71%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check{background:transparent;border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-white{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-black{border-color:rgba(10,10,10,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-light{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-dark{border-color:rgba(54,54,54,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-link,.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-primary{border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-info{border-color:rgba(22,125,240,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-success{border-color:rgba(72,199,142,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-warning{border-color:rgba(255,224,138,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-danger{border-color:rgba(241,70,104,.9)}.switch.is-small{border-radius:2px;font-size:.75rem}.switch.is-medium{font-size:1.25rem}.switch.is-large{font-size:1.5rem}.switch[disabled]{opacity:.5;cursor:not-allowed;color:#7a7a7a}.table-wrapper .table{margin-bottom:0}.table-wrapper:not(:last-child){margin-bottom:1.5rem}@media screen and (max-width:1023px){.table-wrapper{overflow-x:auto}}.b-table{-webkit-transition:opacity 86ms ease-out;transition:opacity 86ms ease-out}@media print,screen and (min-width:769px){.b-table .table-mobile-sort{display:none}}.b-table .icon{-webkit-transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:transform .15s ease-out,opacity 86ms ease-out;transition:transform .15s ease-out,opacity 86ms ease-out,-webkit-transform .15s ease-out}.b-table .icon.is-desc{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.b-table .icon.is-expanded{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.b-table .sort-icon.icon.is-desc{-webkit-transform:rotate(180deg) translateY(-50%)!important;transform:rotate(180deg) translateY(-50%)!important}.b-table .table{width:100%;border:1px solid transparent;border-radius:4px;border-collapse:separate}.b-table .table th{font-weight:600}.b-table .table th .th-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-table .table th .th-wrap .icon{margin-left:.5rem;margin-right:0;font-size:1rem}.b-table .table th .th-wrap.is-numeric{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right;width:95%}.b-table .table th .th-wrap.is-numeric .sort-icon{margin-left:0;margin-right:.5rem;left:0;right:auto}.b-table .table th .th-wrap.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.b-table .table th.is-current-sort{border-color:#7a7a7a;font-weight:700}.b-table .table th.is-sortable:hover{border-color:#7a7a7a}.b-table .table th.is-sortable,.b-table .table th.is-sortable .th-wrap{cursor:pointer}.b-table .table th.is-sortable .is-relative,.b-table .table th.is-sortable .th-wrap .is-relative{position:absolute}.b-table .table th .sort-icon{position:absolute;bottom:50%;right:0;-webkit-transform:translateY(50%);transform:translateY(50%)}.b-table .table th .multi-sort-icons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-table .table th .multi-sort-icons .multi-sort-cancel-icon{margin-left:10px}.b-table .table th.is-sticky{position:sticky;left:0;z-index:3!important;background:transparent}.b-table .table tr.is-selected .checkbox input:checked+.check{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%237957d5'/%3E%3C/svg%3E\") no-repeat 50%}.b-table .table tr.is-selected .checkbox input+.check{border-color:#fff}.b-table .table tr.is-empty:hover{background-color:transparent}.b-table .table .chevron-cell{vertical-align:middle}.b-table .table .chevron-cell>a{color:#7957d5!important}.b-table .table .checkbox-cell{width:40px}.b-table .table .checkbox-cell .checkbox{vertical-align:middle}.b-table .table .checkbox-cell .checkbox .check{-webkit-transition:none;transition:none}.b-table .table tr.detail{-webkit-box-shadow:inset 0 1px 3px #dbdbdb;box-shadow:inset 0 1px 3px #dbdbdb;background:#fafafa}.b-table .table tr.detail .detail-container{padding:1rem}.b-table .table:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-table .table.is-bordered th.is-current-sort,.b-table .table.is-bordered th.is-sortable:hover{border-color:#dbdbdb;background:#f5f5f5}.b-table .table td.is-sticky{position:sticky;left:0;z-index:1;background:#fff}.b-table .table.is-striped tbody tr:not(.is-selected):nth-child(2n) td.is-sticky{background:#fafafa}.b-table .level:not(.top){padding-bottom:1.5rem}.b-table .table-wrapper{position:relative}.b-table .table-wrapper.has-sticky-header{height:300px;overflow-y:auto}@media screen and (max-width:768px){.b-table .table-wrapper.has-sticky-header.has-mobile-cards{height:auto!important;overflow-y:visible!important;overflow-y:initial!important}}.b-table .table-wrapper.has-sticky-header tr:first-child th{position:sticky;top:0;z-index:2;background:#fff}@media screen and (max-width:768px){.b-table .table-wrapper.has-mobile-cards .table{background-color:transparent}.b-table .table-wrapper.has-mobile-cards thead tr{-webkit-box-shadow:none;box-shadow:none;border-width:0}.b-table .table-wrapper.has-mobile-cards thead tr th{display:none}.b-table .table-wrapper.has-mobile-cards thead tr .checkbox-cell{display:block;width:100%;text-align:right;margin-bottom:1rem;border:0}.b-table .table-wrapper.has-mobile-cards tfoot th{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.has-mobile-cards tr td{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr td:last-child{border-bottom:0}.b-table .table-wrapper.has-mobile-cards tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]){background:#fff}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover{background-color:#fff}.b-table .table-wrapper.has-mobile-cards tr.detail{margin-top:-1rem}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}}.b-table .table-wrapper.is-card-list .table{background-color:transparent}.b-table .table-wrapper.is-card-list thead tr{-webkit-box-shadow:none;box-shadow:none;border-width:0}.b-table .table-wrapper.is-card-list thead tr th{display:none}.b-table .table-wrapper.is-card-list thead tr .checkbox-cell{display:block;width:100%;text-align:right;margin-bottom:1rem;border:0}.b-table .table-wrapper.is-card-list tfoot th{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.is-card-list tr td{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr td:last-child{border-bottom:0}.b-table .table-wrapper.is-card-list tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.is-card-list tr:not([class*=is-]){background:#fff}.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover{background-color:#fff}.b-table .table-wrapper.is-card-list tr.detail{margin-top:-1rem}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}.touch-dragged-cell{position:absolute}.touch-dragged-cell,.touch-dragged-cell .table{pointer-events:none;background-color:color-mix(in srgb,#fff 10%,transparent)}.touch-dragged-cell .table{width:100%}.touch-dragged-cell .table td,.touch-dragged-cell .table tr{background-color:transparent}@media screen and (max-width:768px){.touch-dragged-cell.has-mobile-cards .table tr{display:block}.touch-dragged-cell.has-mobile-cards .table tr td{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right}.touch-dragged-cell.has-mobile-cards .table tr td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}}.b-tabs .tabs{margin-bottom:0;-ms-flex-negative:0;flex-shrink:0}.b-tabs .tabs li a:focus{outline:none;border-bottom-color:#7957d5}.b-tabs .tabs li:not(.is-active) a:focus{border-bottom-color:#363636}.b-tabs .tabs li.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.b-tabs .tabs.is-boxed li a:focus{background-color:#fff;border-bottom-color:transparent}.b-tabs .tabs.is-boxed li:not(.is-active) a:focus{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.b-tabs .tabs.is-toggle li a:focus{background-color:#7957d5;border-color:#7957d5}.b-tabs .tabs.is-toggle li:not(.is-active) a:focus{background-color:#f5f5f5;border-color:#b5b5b5}.b-tabs .tab-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-tabs .tab-content .tab-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-tabs .tab-content .tab-item:focus{outline:none}.b-tabs .tab-content.is-transitioning{overflow:hidden}.b-tabs:not(:last-child){margin-bottom:1.5rem}.b-tabs.is-fullwidth{width:100%}.b-tabs.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-tabs.is-vertical>.tabs ul{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-tabs.is-vertical>.tabs ul li{width:100%}.b-tabs.is-vertical>.tabs ul li a{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.b-tabs.is-vertical>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:#dbdbdb!important;border-radius:4px 0 0 4px}.b-tabs.is-vertical>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:transparent!important}.b-tabs.is-vertical>.tabs.is-toggle li+li{margin-left:0}.b-tabs.is-vertical>.tabs.is-toggle li:first-child a{border-radius:4px 4px 0 0}.b-tabs.is-vertical>.tabs.is-toggle li:last-child a{border-radius:0 0 4px 4px}.b-tabs.is-vertical>.tabs.is-fullwidth li a{height:100%}.b-tabs.is-vertical>.tab-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-tabs.is-vertical.is-right,.b-tabs.is-vertical.is-right>.tabs ul a{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-tabs.is-vertical.is-right>.tabs ul a .icon:first-child{margin-right:0;margin-left:.5em}.b-tabs.is-vertical.is-right>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:transparent!important;border-left-color:#dbdbdb!important;border-radius:0 4px 4px 0}.b-tabs.is-vertical.is-right>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:#dbdbdb!important;border-left-color:transparent!important}.b-tabs.is-multiline>.tabs ul{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-negative:1;flex-shrink:1}.tag .has-ellipsis{max-width:10em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tag .delete.is-white,.tag.has-delete-icon.is-white,.tag.is-delete.is-white{background:#fff}.tag .delete.is-white:hover,.tag.has-delete-icon.is-white:hover,.tag.is-delete.is-white:hover{background-color:#e6e6e6;text-decoration:none}.tag .delete.is-black,.tag.has-delete-icon.is-black,.tag.is-delete.is-black{background:#0a0a0a}.tag .delete.is-black:hover,.tag.has-delete-icon.is-black:hover,.tag.is-delete.is-black:hover{background-color:#000;text-decoration:none}.tag .delete.is-light,.tag.has-delete-icon.is-light,.tag.is-delete.is-light{background:#f5f5f5}.tag .delete.is-light:hover,.tag.has-delete-icon.is-light:hover,.tag.is-delete.is-light:hover{background-color:#dbdbdb;text-decoration:none}.tag .delete.is-dark,.tag.has-delete-icon.is-dark,.tag.is-delete.is-dark{background:#363636}.tag .delete.is-dark:hover,.tag.has-delete-icon.is-dark:hover,.tag.is-delete.is-dark:hover{background-color:#1c1c1c;text-decoration:none}.tag .delete.is-primary,.tag.has-delete-icon.is-primary,.tag.is-delete.is-primary{background:#7957d5}.tag .delete.is-primary:hover,.tag.has-delete-icon.is-primary:hover,.tag.is-delete.is-primary:hover{background-color:#5a32c7;text-decoration:none}.tag .delete.is-link,.tag.has-delete-icon.is-link,.tag.is-delete.is-link{background:#7957d5}.tag .delete.is-link:hover,.tag.has-delete-icon.is-link:hover,.tag.is-delete.is-link:hover{background-color:#5a32c7;text-decoration:none}.tag .delete.is-info,.tag.has-delete-icon.is-info,.tag.is-delete.is-info{background:#167df0}.tag .delete.is-info:hover,.tag.has-delete-icon.is-info:hover,.tag.is-delete.is-info:hover{background-color:#0d64c6;text-decoration:none}.tag .delete.is-success,.tag.has-delete-icon.is-success,.tag.is-delete.is-success{background:#48c78e}.tag .delete.is-success:hover,.tag.has-delete-icon.is-success:hover,.tag.is-delete.is-success:hover{background-color:#34a873;text-decoration:none}.tag .delete.is-warning,.tag.has-delete-icon.is-warning,.tag.is-delete.is-warning{background:#ffe08a}.tag .delete.is-warning:hover,.tag.has-delete-icon.is-warning:hover,.tag.is-delete.is-warning:hover{background-color:#ffd257;text-decoration:none}.tag .delete.is-danger,.tag.has-delete-icon.is-danger,.tag.is-delete.is-danger{background:#f14668}.tag .delete.is-danger:hover,.tag.has-delete-icon.is-danger:hover,.tag.is-delete.is-danger:hover{background-color:#ee1742;text-decoration:none}.tag.has-delete-icon{padding:0}.tag.has-delete-icon .icon:first-child:not(:last-child){margin-right:0;margin-left:0}.tags.inline-tags{margin-bottom:0}.tags.inline-tags:not(:last-child){margin-right:.5rem}.taginput .taginput-container{display:-webkit-box;display:-ms-flexbox;display:flex}.taginput .taginput-container.is-focusable{padding:calc(.275em - 1px) 0 0;cursor:text}.taginput .taginput-container.is-focusable,.taginput .taginput-container:not(.is-focusable){-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:auto}.taginput .taginput-container:not(.is-focusable).is-small{border-radius:2px;font-size:.75rem}.taginput .taginput-container:not(.is-focusable).is-medium{font-size:1.25rem}.taginput .taginput-container:not(.is-focusable).is-large{font-size:1.5rem}.taginput .taginput-container>.tag,.taginput .taginput-container>.tags{margin-left:.275rem;margin-bottom:calc(.275em - 1px);font-size:.9em;height:calc(2em - 1px)}.taginput .taginput-container>.tag .tag,.taginput .taginput-container>.tags .tag{margin-bottom:0;font-size:.9em;height:calc(2em - 1px)}.taginput .taginput-container>.tag .tag.is-delete,.taginput .taginput-container>.tags .tag.is-delete{width:calc(2em - 1px)}.taginput .taginput-container .autocomplete{position:static;-webkit-box-flex:1;-ms-flex:1;flex:1}.taginput .taginput-container .autocomplete input{height:calc(2em - 1px);margin-bottom:calc(.275em - 1px);padding-top:0;padding-bottom:0;border:none;-webkit-box-shadow:none;box-shadow:none;min-width:8em}.taginput .taginput-container .autocomplete input:focus{-webkit-box-shadow:none!important;box-shadow:none!important}.taginput .taginput-container .autocomplete .icon{height:calc(2em - 1px)}.taginput .taginput-container .autocomplete>.control.is-loading:after{top:.375em}.timepicker .dropdown-menu{min-width:0}.timepicker .dropdown,.timepicker .dropdown-trigger{width:100%}.timepicker .dropdown-trigger .input[readonly],.timepicker .dropdown .input[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05);box-shadow:inset 0 .0625em .125em rgba(10,10,10,.05)}.timepicker .dropdown-trigger .input[readonly].is-active,.timepicker .dropdown-trigger .input[readonly].is-focused,.timepicker .dropdown-trigger .input[readonly]:active,.timepicker .dropdown-trigger .input[readonly]:focus,.timepicker .dropdown .input[readonly].is-active,.timepicker .dropdown .input[readonly].is-focused,.timepicker .dropdown .input[readonly]:active,.timepicker .dropdown .input[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.timepicker .dropdown.is-disabled{opacity:1}.dropdown .dropdown-menu .has-link .timepicker a,.timepicker .dropdown-item,.timepicker .dropdown .dropdown-menu .has-link a{font-size:inherit;padding:0}.timepicker .timepicker-footer{padding:0 .5rem}.timepicker .dropdown-content .control{font-size:1.25em;margin-right:0!important}.timepicker .dropdown-content .control .select{margin:0 .125em}.timepicker .dropdown-content .control .select select{font-weight:600;padding-right:calc(.75em - 1px);border:0}.timepicker .dropdown-content .control .select select option:disabled{color:hsla(0,0%,47.8%,.7)}.timepicker .dropdown-content .control .select:after{display:none}.timepicker .dropdown-content .control.is-colon{font-size:1.7em;line-height:1.7em}.timepicker .dropdown-content .control.is-colon:last-child{padding-right:calc(.75em - 1px)}.timepicker.is-small{border-radius:2px;font-size:.75rem}.timepicker.is-medium{font-size:1.25rem}.timepicker.is-large{font-size:1.5rem}.b-tooltip{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.b-tooltip.is-top .tooltip-content{top:auto;bottom:calc(100% + 7px)}.b-tooltip.is-top .tooltip-content,.b-tooltip.is-top .tooltip-content:before{right:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-top .tooltip-content:before{top:100%;bottom:auto;border-top:5px solid #7957d5;border-right:5px solid transparent;border-left:5px solid transparent}.b-tooltip.is-top.is-white .tooltip-content:before{border-top-color:#fff}.b-tooltip.is-top.is-black .tooltip-content:before{border-top-color:#0a0a0a}.b-tooltip.is-top.is-light .tooltip-content:before{border-top-color:#f5f5f5}.b-tooltip.is-top.is-dark .tooltip-content:before{border-top-color:#363636}.b-tooltip.is-top.is-primary .tooltip-content:before{border-top-color:#7957d5}.b-tooltip.is-top.is-primary.is-light .tooltip-content:before{border-top-color:#f2effb}.b-tooltip.is-top.is-link .tooltip-content:before{border-top-color:#7957d5}.b-tooltip.is-top.is-link.is-light .tooltip-content:before{border-top-color:#f2effb}.b-tooltip.is-top.is-info .tooltip-content:before{border-top-color:#167df0}.b-tooltip.is-top.is-info.is-light .tooltip-content:before{border-top-color:#ecf4fe}.b-tooltip.is-top.is-success .tooltip-content:before{border-top-color:#48c78e}.b-tooltip.is-top.is-success.is-light .tooltip-content:before{border-top-color:#effaf5}.b-tooltip.is-top.is-warning .tooltip-content:before{border-top-color:#ffe08a}.b-tooltip.is-top.is-warning.is-light .tooltip-content:before{border-top-color:#fffaeb}.b-tooltip.is-top.is-danger .tooltip-content:before{border-top-color:#f14668}.b-tooltip.is-top.is-danger.is-light .tooltip-content:before{border-top-color:#feecf0}.b-tooltip.is-right .tooltip-content{right:auto;left:calc(100% + 7px)}.b-tooltip.is-right .tooltip-content,.b-tooltip.is-right .tooltip-content:before{top:50%;bottom:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-right .tooltip-content:before{right:100%;left:auto;border-top:5px solid transparent;border-right:5px solid #7957d5;border-bottom:5px solid transparent}.b-tooltip.is-right.is-white .tooltip-content:before{border-right-color:#fff}.b-tooltip.is-right.is-black .tooltip-content:before{border-right-color:#0a0a0a}.b-tooltip.is-right.is-light .tooltip-content:before{border-right-color:#f5f5f5}.b-tooltip.is-right.is-dark .tooltip-content:before{border-right-color:#363636}.b-tooltip.is-right.is-primary .tooltip-content:before{border-right-color:#7957d5}.b-tooltip.is-right.is-primary.is-light .tooltip-content:before{border-right-color:#f2effb}.b-tooltip.is-right.is-link .tooltip-content:before{border-right-color:#7957d5}.b-tooltip.is-right.is-link.is-light .tooltip-content:before{border-right-color:#f2effb}.b-tooltip.is-right.is-info .tooltip-content:before{border-right-color:#167df0}.b-tooltip.is-right.is-info.is-light .tooltip-content:before{border-right-color:#ecf4fe}.b-tooltip.is-right.is-success .tooltip-content:before{border-right-color:#48c78e}.b-tooltip.is-right.is-success.is-light .tooltip-content:before{border-right-color:#effaf5}.b-tooltip.is-right.is-warning .tooltip-content:before{border-right-color:#ffe08a}.b-tooltip.is-right.is-warning.is-light .tooltip-content:before{border-right-color:#fffaeb}.b-tooltip.is-right.is-danger .tooltip-content:before{border-right-color:#f14668}.b-tooltip.is-right.is-danger.is-light .tooltip-content:before{border-right-color:#feecf0}.b-tooltip.is-bottom .tooltip-content{top:calc(100% + 7px);right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-bottom .tooltip-content:before{top:auto;right:auto;bottom:100%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-right:5px solid transparent;border-bottom:5px solid #7957d5;border-left:5px solid transparent}.b-tooltip.is-bottom.is-white .tooltip-content:before{border-bottom-color:#fff}.b-tooltip.is-bottom.is-black .tooltip-content:before{border-bottom-color:#0a0a0a}.b-tooltip.is-bottom.is-light .tooltip-content:before{border-bottom-color:#f5f5f5}.b-tooltip.is-bottom.is-dark .tooltip-content:before{border-bottom-color:#363636}.b-tooltip.is-bottom.is-primary .tooltip-content:before{border-bottom-color:#7957d5}.b-tooltip.is-bottom.is-primary.is-light .tooltip-content:before{border-bottom-color:#f2effb}.b-tooltip.is-bottom.is-link .tooltip-content:before{border-bottom-color:#7957d5}.b-tooltip.is-bottom.is-link.is-light .tooltip-content:before{border-bottom-color:#f2effb}.b-tooltip.is-bottom.is-info .tooltip-content:before{border-bottom-color:#167df0}.b-tooltip.is-bottom.is-info.is-light .tooltip-content:before{border-bottom-color:#ecf4fe}.b-tooltip.is-bottom.is-success .tooltip-content:before{border-bottom-color:#48c78e}.b-tooltip.is-bottom.is-success.is-light .tooltip-content:before{border-bottom-color:#effaf5}.b-tooltip.is-bottom.is-warning .tooltip-content:before{border-bottom-color:#ffe08a}.b-tooltip.is-bottom.is-warning.is-light .tooltip-content:before{border-bottom-color:#fffaeb}.b-tooltip.is-bottom.is-danger .tooltip-content:before{border-bottom-color:#f14668}.b-tooltip.is-bottom.is-danger.is-light .tooltip-content:before{border-bottom-color:#feecf0}.b-tooltip.is-left .tooltip-content{right:calc(100% + 7px);left:auto}.b-tooltip.is-left .tooltip-content,.b-tooltip.is-left .tooltip-content:before{top:50%;bottom:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-left .tooltip-content:before{right:auto;left:100%;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #7957d5}.b-tooltip.is-left.is-white .tooltip-content:before{border-left-color:#fff}.b-tooltip.is-left.is-black .tooltip-content:before{border-left-color:#0a0a0a}.b-tooltip.is-left.is-light .tooltip-content:before{border-left-color:#f5f5f5}.b-tooltip.is-left.is-dark .tooltip-content:before{border-left-color:#363636}.b-tooltip.is-left.is-primary .tooltip-content:before{border-left-color:#7957d5}.b-tooltip.is-left.is-primary.is-light .tooltip-content:before{border-left-color:#f2effb}.b-tooltip.is-left.is-link .tooltip-content:before{border-left-color:#7957d5}.b-tooltip.is-left.is-link.is-light .tooltip-content:before{border-left-color:#f2effb}.b-tooltip.is-left.is-info .tooltip-content:before{border-left-color:#167df0}.b-tooltip.is-left.is-info.is-light .tooltip-content:before{border-left-color:#ecf4fe}.b-tooltip.is-left.is-success .tooltip-content:before{border-left-color:#48c78e}.b-tooltip.is-left.is-success.is-light .tooltip-content:before{border-left-color:#effaf5}.b-tooltip.is-left.is-warning .tooltip-content:before{border-left-color:#ffe08a}.b-tooltip.is-left.is-warning.is-light .tooltip-content:before{border-left-color:#fffaeb}.b-tooltip.is-left.is-danger .tooltip-content:before{border-left-color:#f14668}.b-tooltip.is-left.is-danger.is-light .tooltip-content:before{border-left-color:#feecf0}.b-tooltip .tooltip-content{width:auto;padding:.35rem .75rem;border-radius:6px;font-size:.85rem;font-weight:400;-webkit-box-shadow:0 1px 2px 1px rgba(0,1,0,.2);box-shadow:0 1px 2px 1px rgba(0,1,0,.2);z-index:38;white-space:nowrap;position:absolute}.b-tooltip .tooltip-content:before{position:absolute;content:\"\";pointer-events:none;z-index:38}.b-tooltip .tooltip-trigger{width:100%}.b-tooltip.is-white .tooltip-content{background:#fff;color:#0a0a0a}.b-tooltip.is-black .tooltip-content{background:#0a0a0a;color:#fff}.b-tooltip.is-light .tooltip-content{background:#f5f5f5;color:rgba(0,0,0,.7)}.b-tooltip.is-dark .tooltip-content{background:#363636;color:#fff}.b-tooltip.is-primary .tooltip-content{background:#7957d5;color:#fff}.b-tooltip.is-primary.is-light .tooltip-content{background:#f2effb;color:#552fbc}.b-tooltip.is-link .tooltip-content{background:#7957d5;color:#fff}.b-tooltip.is-link.is-light .tooltip-content{background:#f2effb;color:#552fbc}.b-tooltip.is-info .tooltip-content{background:#167df0;color:#fff}.b-tooltip.is-info.is-light .tooltip-content{background:#ecf4fe;color:#0d68ce}.b-tooltip.is-success .tooltip-content{background:#48c78e;color:#fff}.b-tooltip.is-success.is-light .tooltip-content{background:#effaf5;color:#257953}.b-tooltip.is-warning .tooltip-content{background:#ffe08a;color:rgba(0,0,0,.7)}.b-tooltip.is-warning.is-light .tooltip-content{background:#fffaeb;color:#946c00}.b-tooltip.is-danger .tooltip-content{background:#f14668;color:#fff}.b-tooltip.is-danger.is-light .tooltip-content{background:#feecf0;color:#cc0f35}.b-tooltip.is-always .tooltip-content,.b-tooltip.is-always .tooltip-content:before{opacity:1;visibility:visible}.b-tooltip.is-multiline .tooltip-content{display:flex-block;text-align:center;white-space:normal}.b-tooltip.is-multiline.is-small .tooltip-content{width:180px}.b-tooltip.is-multiline.is-medium .tooltip-content{width:240px}.b-tooltip.is-multiline.is-large .tooltip-content{width:300px}.b-tooltip.is-dashed .tooltip-trigger{border-bottom:1px dashed #b5b5b5;cursor:default}.b-tooltip.is-square .tooltip-content{border-radius:0}.upload{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.upload input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;outline:none;cursor:pointer;z-index:-1}.upload .upload-draggable{cursor:pointer;padding:.25em;border:1px dashed #b5b5b5;border-radius:6px}.upload .upload-draggable.is-disabled{opacity:.5;cursor:not-allowed}.upload .upload-draggable.is-loading{position:relative;pointer-events:none;opacity:.5}.upload .upload-draggable.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:9999px;content:\"\";display:block;height:1em;position:relative;width:1em;top:0;left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.upload .upload-draggable.is-hovered.is-white,.upload .upload-draggable:hover.is-white{border-color:#fff;background:hsla(0,0%,100%,.05)}.upload .upload-draggable.is-hovered.is-black,.upload .upload-draggable:hover.is-black{border-color:#0a0a0a;background:rgba(10,10,10,.05)}.upload .upload-draggable.is-hovered.is-light,.upload .upload-draggable:hover.is-light{border-color:#f5f5f5;background:hsla(0,0%,96.1%,.05)}.upload .upload-draggable.is-hovered.is-dark,.upload .upload-draggable:hover.is-dark{border-color:#363636;background:rgba(54,54,54,.05)}.upload .upload-draggable.is-hovered.is-link,.upload .upload-draggable.is-hovered.is-primary,.upload .upload-draggable:hover.is-link,.upload .upload-draggable:hover.is-primary{border-color:#7957d5;background:rgba(121,87,213,.05)}.upload .upload-draggable.is-hovered.is-info,.upload .upload-draggable:hover.is-info{border-color:#167df0;background:rgba(22,125,240,.05)}.upload .upload-draggable.is-hovered.is-success,.upload .upload-draggable:hover.is-success{border-color:#48c78e;background:rgba(72,199,142,.05)}.upload .upload-draggable.is-hovered.is-warning,.upload .upload-draggable:hover.is-warning{border-color:#ffe08a;background:rgba(255,224,138,.05)}.upload .upload-draggable.is-hovered.is-danger,.upload .upload-draggable:hover.is-danger{border-color:#f14668;background:rgba(241,70,104,.05)}.upload.is-expanded,.upload .upload-draggable.is-expanded{width:100%}.upload.is-rounded{border-radius:9999px}.upload.is-rounded .file-name{border-top-right-radius:9999px;border-bottom-right-radius:9999px}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.upload input[type=file]{z-index:auto}.upload .upload-draggable+input[type=file]{z-index:-1}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("953c94b0", content, true)

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(36);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:iransanse;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}body{font-family:iransanse!important;background-color:#f4f2ec!important}.aligncenter{-moz-text-align-last:center;text-align-last:center}@media only screen and (max-width:768px){figure img{width:100%;height:100%}}.text-justify{text-align:justify;-moz-text-align-last:right;text-align-last:right;direction:rtl}.category_broadcrumps{background-color:#f0f0f0!important}.txt-justify{text-align:justify;-moz-text-align-last:right;text-align-last:right}.txt-justify,nav{direction:rtl}.bar{width:90%;height:2px;background-color:#000}a{text-decoration:none!important}.slider_background{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-repeat:no-repeat;background-position:50%;background-size:cover;min-height:60vh}.slide_intro{font-weight:700;color:#fff;margin-top:-30%}@media (max-width:768px){.slide_intro{font-size:15pt!important}}.slide_intro_short{color:#fff;margin-top:-1.5%}@media (max-width:768px){.slide_intro_short{font-size:12pt!important}}.service_background_one{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.service_background_one,.service_background_two{background-repeat:no-repeat;background-position:50%;background-size:100% 100%;min-height:30vh}.service_background_two{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}.service_background_three{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");background-repeat:no-repeat;background-position:50%;background-size:100% 100%;min-height:30vh}.res-img{width:100%}@media (max-width:780px){.res-img{width:40%!important}}.img_hover{position:relative}.img_hover:hover:after{content:\"\";position:absolute;top:0;bottom:0;right:4px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") 50% no-repeat;background-color:rgba(60,59,67,.2);background-size:20px;color:#fff;width:100%;height:100%}.cta_bg{position:relative;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") rgba(0,0,0,.4);background-repeat:no-repeat;background-position:top;background-size:cover;background-blend-mode:multiply}.line-height{line-height:1.5!important}.cta_pic_width{width:70%}@media (max-width:570px){.cta_pic_width{width:100%}}.cta2_bg{position:relative;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") rgba(0,0,0,.4);background-repeat:no-repeat;background-position:top;background-size:cover;background-blend-mode:multiply}.main{min-height:50vh;display:flex;align-items:center}.category_background{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");background-repeat:no-repeat;background-position:top;background-size:cover;min-height:30vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/IRANSansWebFaNum.732cabb.ttf";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slider1-slide2.ecaa4ec.webp";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home1_1.b4e4a05.webp";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home1_2.11abed6.webp";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home1_3.322cc5f.webp";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plus-256.a128cb7.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/parallax__.fcc006c.webp";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pattern.6e6f8b6.webp";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/category_background.1d056dd.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("4ea49670", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:slick;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:40%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:slick;font-size:25px;line-height:1;opacity:.75;color:#0e3746;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:relative;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:slick;font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}@media (max-width:767px){.slick-next:before,.slick-prev:before{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("a777e430", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list,.slick-slider{position:relative;display:block}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{transform:translateZ(0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:\"\"}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("50508913", content, true)

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";/*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,0.15),hsla(0,0%,100%,0))}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-right:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-right:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:right}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(.focus-visible),button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:right;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:right}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}[type=email],[type=number],[type=tel],[type=url]{direction:ltr}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{padding-right:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-left:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer:before{content:\"— \"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-left:.75rem;padding-left:var(--bs-gutter-x,.75rem);padding-right:.75rem;padding-right:var(--bs-gutter-x,.75rem);margin-left:auto;margin-right:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y)*-1);margin-left:calc(var(--bs-gutter-x)*-0.5);margin-right:calc(var(--bs-gutter-x)*-0.5)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-left:calc(var(--bs-gutter-x)*0.5);padding-right:calc(var(--bs-gutter-x)*0.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-right:8.33333333%}.offset-2{margin-right:16.66666667%}.offset-3{margin-right:25%}.offset-4{margin-right:33.33333333%}.offset-5{margin-right:41.66666667%}.offset-6{margin-right:50%}.offset-7{margin-right:58.33333333%}.offset-8{margin-right:66.66666667%}.offset-9{margin-right:75%}.offset-10{margin-right:83.33333333%}.offset-11{margin-right:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-right:0}.offset-sm-1{margin-right:8.33333333%}.offset-sm-2{margin-right:16.66666667%}.offset-sm-3{margin-right:25%}.offset-sm-4{margin-right:33.33333333%}.offset-sm-5{margin-right:41.66666667%}.offset-sm-6{margin-right:50%}.offset-sm-7{margin-right:58.33333333%}.offset-sm-8{margin-right:66.66666667%}.offset-sm-9{margin-right:75%}.offset-sm-10{margin-right:83.33333333%}.offset-sm-11{margin-right:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-right:0}.offset-md-1{margin-right:8.33333333%}.offset-md-2{margin-right:16.66666667%}.offset-md-3{margin-right:25%}.offset-md-4{margin-right:33.33333333%}.offset-md-5{margin-right:41.66666667%}.offset-md-6{margin-right:50%}.offset-md-7{margin-right:58.33333333%}.offset-md-8{margin-right:66.66666667%}.offset-md-9{margin-right:75%}.offset-md-10{margin-right:83.33333333%}.offset-md-11{margin-right:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-right:0}.offset-lg-1{margin-right:8.33333333%}.offset-lg-2{margin-right:16.66666667%}.offset-lg-3{margin-right:25%}.offset-lg-4{margin-right:33.33333333%}.offset-lg-5{margin-right:41.66666667%}.offset-lg-6{margin-right:50%}.offset-lg-7{margin-right:58.33333333%}.offset-lg-8{margin-right:66.66666667%}.offset-lg-9{margin-right:75%}.offset-lg-10{margin-right:83.33333333%}.offset-lg-11{margin-right:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-right:0}.offset-xl-1{margin-right:8.33333333%}.offset-xl-2{margin-right:16.66666667%}.offset-xl-3{margin-right:25%}.offset-xl-4{margin-right:33.33333333%}.offset-xl-5{margin-right:41.66666667%}.offset-xl-6{margin-right:50%}.offset-xl-7{margin-right:58.33333333%}.offset-xl-8{margin-right:66.66666667%}.offset-xl-9{margin-right:75%}.offset-xl-10{margin-right:83.33333333%}.offset-xl-11{margin-right:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-right:0}.offset-xxl-1{margin-right:8.33333333%}.offset-xxl-2{margin-right:16.66666667%}.offset-xxl-3{margin-right:25%}.offset-xxl-4{margin-right:33.33333333%}.offset-xxl-5{margin-right:41.66666667%}.offset-xxl-6{margin-right:50%}.offset-xxl-7{margin-right:58.33333333%}.offset-xxl-8{margin-right:66.66666667%}.offset-xxl-9{margin-right:75%}.offset-xxl-10{margin-right:83.33333333%}.offset-xxl-11{margin-right:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0,0,0,0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0,0,0,0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0,0,0,0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}[dir=ltr] .form-control::file-selector-button{margin-right:.75rem}[dir=rtl] .form-control::file-selector-button{margin-left:.75rem}[dir=ltr] .form-control::file-selector-button{border-right-width:1px}[dir=rtl] .form-control::file-selector-button{border-left-width:1px}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border:0 solid;border-color:inherit;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}[dir=ltr] .form-control::-webkit-file-upload-button{margin-right:.75rem}[dir=rtl] .form-control::-webkit-file-upload-button{margin-left:.75rem}[dir=ltr] .form-control::-webkit-file-upload-button{border-right-width:1px}[dir=rtl] .form-control::-webkit-file-upload-button{border-left-width:1px}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border:0 solid;border-color:inherit;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}[dir=ltr] .form-control-sm::file-selector-button{margin-right:.5rem}[dir=rtl] .form-control-sm::file-selector-button{margin-left:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem}[dir=ltr] .form-control-sm::-webkit-file-upload-button{margin-right:.5rem}[dir=rtl] .form-control-sm::-webkit-file-upload-button{margin-left:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}[dir=ltr] .form-control-lg::file-selector-button{margin-right:1rem}[dir=rtl] .form-control-lg::file-selector-button{margin-left:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem}[dir=ltr] .form-control-lg::-webkit-file-upload-button{margin-right:1rem}[dir=rtl] .form-control-lg::-webkit-file-upload-button{margin-left:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem .75rem .375rem 2.25rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:left .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-left:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-right:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-right:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-right:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:right;margin-right:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:50%;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3 6-6'/%3E%3C/svg%3E\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-right:2.5em}.form-switch .form-check-input{width:2em;margin-right:-2.5em;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-position:100%;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E\")}.form-switch .form-check-input:checked{background-position:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-inline{display:inline-block;margin-left:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;right:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:100% 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(-.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(-.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(-.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-left:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-left:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:left calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-left:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) left calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{padding-left:4.125rem;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:left .75rem center,center left 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-right:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-left:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:left calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-left:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) left calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{padding-left:4.125rem;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E\"),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:left .75rem center,center left 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-right:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-primary,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-secondary,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-success,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-info,.btn-info:focus,.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-warning,.btn-warning:focus,.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-danger,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-light,.btn-light:focus,.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-dark,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-left:.3em solid transparent;border-bottom:0;border-right:.3em solid transparent}.dropdown-toggle:empty:after{margin-right:0}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:right;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{top:100%;right:0;margin-top:.125rem}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:0;right:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:0;right:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:0;right:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:0;right:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:0;right:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:auto;right:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:0;right:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:0;border-left:.3em solid transparent;border-bottom:.3em solid;border-right:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-right:0}.dropend .dropdown-menu[data-bs-popper]{top:0;left:auto;right:100%;margin-top:0;margin-right:.125rem}.dropend .dropdown-toggle:after{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-left:0;border-bottom:.3em solid transparent;border-right:.3em solid}.dropend .dropdown-toggle:empty:after{margin-right:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;left:100%;right:auto;margin-top:0;margin-left:.125rem}.dropstart .dropdown-toggle:after{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";display:none}.dropstart .dropdown-toggle:before{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-left:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty:after{margin-right:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:hsla(0,0%,100%,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-right:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-right-radius:0;border-bottom-right-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-right:0}.dropstart .dropdown-toggle-split:before{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-right-radius:0;border-top-left-radius:0}.nav{display:flex;flex-wrap:wrap;padding-right:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:0 0;border:1px solid transparent;border-top-right-radius:.25rem;border-top-left-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-left:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-right:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-left:0;padding-right:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:50%;background-size:100%}.navbar-nav-scroll{max-height:75vh;max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:.5rem;padding-right:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.55);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-right:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.5rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-left:-.5rem;margin-right:-.5rem}.card-img-overlay{position:absolute;top:0;left:0;bottom:0;right:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-right:0;border-right:0}.card-group>.card:not(:last-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:not(:first-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-right-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:right;background-color:#fff;border:0;border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125)}.accordion-button:not(.collapsed):after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3E%3C/svg%3E\");transform:rotate(180deg)}.accordion-button:after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-right:auto;content:\"\";background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:1.25rem;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:calc(.25rem - 1px);border-bottom-right-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-right:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-right:.5rem}.breadcrumb-item+.breadcrumb-item:before{float:right;padding-left:.5rem;color:#6c757d;content:\"/\";content:var(--bs-breadcrumb-divider,\"/\")}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-right:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;border-color:#dee2e6}.page-link:focus,.page-link:hover{color:#0a58ca;background-color:#e9ecef}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-right:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item:last-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-left:3rem}.alert-dismissible .btn-close{position:absolute;top:0;left:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{height:1rem;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(-45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{display:flex;flex-direction:column;padding-right:0;margin-bottom:0;border-radius:.25rem}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>li:before{content:counters(section,\".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;color:#212529;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-right-radius:inherit;border-top-left-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-right-radius:.25rem;border-top-left-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-left-radius:.25rem;border-bottom-right-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-right-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-right:-1px;border-right-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em;color:#000;background:transparent url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3E%3C/svg%3E\") 50%/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-left:-.375rem;margin-right:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{position:fixed;top:0;right:0;z-index:1060;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-right-radius:calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem;margin:-.5rem auto -.5rem -.5rem}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-left-radius:calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}[dir=ltr] .tooltip{text-align:left}.tooltip,[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1080;display:block;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{position:absolute;top:0;left:0;z-index:1070;display:block;max-width:276px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:right;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow:after,.popover .popover-arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;right:50%;display:block;width:1rem;margin-right:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-right-radius:calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:right;width:100%;margin-left:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{right:0}.carousel-control-next{left:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'/%3E%3C/svg%3E\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;left:0;bottom:0;right:0;z-index:2;display:flex;justify-content:center;padding:0;margin-left:15%;margin-bottom:1rem;margin-right:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-left:3px;margin-right:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;left:15%;bottom:1.25rem;right:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid;border-left:.25em solid transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.offcanvas{position:fixed;bottom:0;z-index:1050;display:flex;flex-direction:column;max-width:100%;visibility:hidden;background-color:#fff;background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:1rem}.offcanvas-header .btn-close{padding:.5rem;margin-top:-.5rem;margin-left:-.5rem;margin-bottom:-.5rem}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:1rem;overflow-y:auto}.offcanvas-start{top:0;right:0;width:400px;border-left:1px solid rgba(0,0,0,.2);transform:translateX(100%)}.offcanvas-end{top:0;left:0;width:400px;border-right:1px solid rgba(0,0,0,.2);transform:translateX(-100%)}.offcanvas-top{top:0;border-bottom:1px solid rgba(0,0,0,.2);transform:translateY(-100%)}.offcanvas-bottom,.offcanvas-top{left:0;right:0;height:30vh;max-height:100%}.offcanvas-bottom{border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.clearfix:after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio:before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;right:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.85714%}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;left:0;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not([focus-within]){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link:after{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:right!important}.float-end{float:left!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{right:0!important}.start-50{right:50%!important}.start-100{right:100%!important}.end-0{left:0!important}.end-50{left:50%!important}.end-100{left:100%!important}.translate-middle{transform:translate(50%,-50%)!important}.translate-middle-x{transform:translateX(50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-left:1px solid #dee2e6!important}.border-end-0{border-left:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-right:1px solid #dee2e6!important}.border-start-0{border-right:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{grid-gap:0!important;gap:0!important}.gap-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-3{grid-gap:1rem!important;gap:1rem!important}.gap-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-left:0!important}.me-1{margin-left:.25rem!important}.me-2{margin-left:.5rem!important}.me-3{margin-left:1rem!important}.me-4{margin-left:1.5rem!important}.me-5{margin-left:3rem!important}.me-auto{margin-left:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-right:0!important}.ms-1{margin-right:.25rem!important}.ms-2{margin-right:.5rem!important}.ms-3{margin-right:1rem!important}.ms-4{margin-right:1.5rem!important}.ms-5{margin-right:3rem!important}.ms-auto{margin-right:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-left:0!important}.pe-1{padding-left:.25rem!important}.pe-2{padding-left:.5rem!important}.pe-3{padding-left:1rem!important}.pe-4{padding-left:1.5rem!important}.pe-5{padding-left:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-right:0!important}.ps-1{padding-right:.25rem!important}.ps-2{padding-right:.5rem!important}.ps-3{padding-right:1rem!important}.ps-4{padding-right:1.5rem!important}.ps-5{padding-right:3rem!important}.font-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important;font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:right!important}.text-end{text-align:left!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-reset{color:inherit!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body,.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))!important;background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-right-radius:.25rem!important}.rounded-end,.rounded-top{border-top-left-radius:.25rem!important}.rounded-bottom,.rounded-end{border-bottom-left-radius:.25rem!important}.rounded-bottom,.rounded-start{border-bottom-right-radius:.25rem!important}.rounded-start{border-top-right-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:right!important}.float-sm-end{float:left!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{grid-gap:0!important;gap:0!important}.gap-sm-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-sm-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-sm-3{grid-gap:1rem!important;gap:1rem!important}.gap-sm-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-sm-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-left:0!important}.me-sm-1{margin-left:.25rem!important}.me-sm-2{margin-left:.5rem!important}.me-sm-3{margin-left:1rem!important}.me-sm-4{margin-left:1.5rem!important}.me-sm-5{margin-left:3rem!important}.me-sm-auto{margin-left:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-right:0!important}.ms-sm-1{margin-right:.25rem!important}.ms-sm-2{margin-right:.5rem!important}.ms-sm-3{margin-right:1rem!important}.ms-sm-4{margin-right:1.5rem!important}.ms-sm-5{margin-right:3rem!important}.ms-sm-auto{margin-right:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-left:0!important}.pe-sm-1{padding-left:.25rem!important}.pe-sm-2{padding-left:.5rem!important}.pe-sm-3{padding-left:1rem!important}.pe-sm-4{padding-left:1.5rem!important}.pe-sm-5{padding-left:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-right:0!important}.ps-sm-1{padding-right:.25rem!important}.ps-sm-2{padding-right:.5rem!important}.ps-sm-3{padding-right:1rem!important}.ps-sm-4{padding-right:1.5rem!important}.ps-sm-5{padding-right:3rem!important}.text-sm-start{text-align:right!important}.text-sm-end{text-align:left!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:right!important}.float-md-end{float:left!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{grid-gap:0!important;gap:0!important}.gap-md-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-md-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-md-3{grid-gap:1rem!important;gap:1rem!important}.gap-md-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-md-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-left:0!important}.me-md-1{margin-left:.25rem!important}.me-md-2{margin-left:.5rem!important}.me-md-3{margin-left:1rem!important}.me-md-4{margin-left:1.5rem!important}.me-md-5{margin-left:3rem!important}.me-md-auto{margin-left:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-right:0!important}.ms-md-1{margin-right:.25rem!important}.ms-md-2{margin-right:.5rem!important}.ms-md-3{margin-right:1rem!important}.ms-md-4{margin-right:1.5rem!important}.ms-md-5{margin-right:3rem!important}.ms-md-auto{margin-right:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-left:0!important}.pe-md-1{padding-left:.25rem!important}.pe-md-2{padding-left:.5rem!important}.pe-md-3{padding-left:1rem!important}.pe-md-4{padding-left:1.5rem!important}.pe-md-5{padding-left:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-right:0!important}.ps-md-1{padding-right:.25rem!important}.ps-md-2{padding-right:.5rem!important}.ps-md-3{padding-right:1rem!important}.ps-md-4{padding-right:1.5rem!important}.ps-md-5{padding-right:3rem!important}.text-md-start{text-align:right!important}.text-md-end{text-align:left!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:right!important}.float-lg-end{float:left!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{grid-gap:0!important;gap:0!important}.gap-lg-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-lg-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-lg-3{grid-gap:1rem!important;gap:1rem!important}.gap-lg-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-lg-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-left:0!important}.me-lg-1{margin-left:.25rem!important}.me-lg-2{margin-left:.5rem!important}.me-lg-3{margin-left:1rem!important}.me-lg-4{margin-left:1.5rem!important}.me-lg-5{margin-left:3rem!important}.me-lg-auto{margin-left:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-right:0!important}.ms-lg-1{margin-right:.25rem!important}.ms-lg-2{margin-right:.5rem!important}.ms-lg-3{margin-right:1rem!important}.ms-lg-4{margin-right:1.5rem!important}.ms-lg-5{margin-right:3rem!important}.ms-lg-auto{margin-right:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-left:0!important}.pe-lg-1{padding-left:.25rem!important}.pe-lg-2{padding-left:.5rem!important}.pe-lg-3{padding-left:1rem!important}.pe-lg-4{padding-left:1.5rem!important}.pe-lg-5{padding-left:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-right:0!important}.ps-lg-1{padding-right:.25rem!important}.ps-lg-2{padding-right:.5rem!important}.ps-lg-3{padding-right:1rem!important}.ps-lg-4{padding-right:1.5rem!important}.ps-lg-5{padding-right:3rem!important}.text-lg-start{text-align:right!important}.text-lg-end{text-align:left!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:right!important}.float-xl-end{float:left!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{grid-gap:0!important;gap:0!important}.gap-xl-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-xl-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-xl-3{grid-gap:1rem!important;gap:1rem!important}.gap-xl-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-xl-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-left:0!important}.me-xl-1{margin-left:.25rem!important}.me-xl-2{margin-left:.5rem!important}.me-xl-3{margin-left:1rem!important}.me-xl-4{margin-left:1.5rem!important}.me-xl-5{margin-left:3rem!important}.me-xl-auto{margin-left:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-right:0!important}.ms-xl-1{margin-right:.25rem!important}.ms-xl-2{margin-right:.5rem!important}.ms-xl-3{margin-right:1rem!important}.ms-xl-4{margin-right:1.5rem!important}.ms-xl-5{margin-right:3rem!important}.ms-xl-auto{margin-right:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-left:0!important}.pe-xl-1{padding-left:.25rem!important}.pe-xl-2{padding-left:.5rem!important}.pe-xl-3{padding-left:1rem!important}.pe-xl-4{padding-left:1.5rem!important}.pe-xl-5{padding-left:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-right:0!important}.ps-xl-1{padding-right:.25rem!important}.ps-xl-2{padding-right:.5rem!important}.ps-xl-3{padding-right:1rem!important}.ps-xl-4{padding-right:1.5rem!important}.ps-xl-5{padding-right:3rem!important}.text-xl-start{text-align:right!important}.text-xl-end{text-align:left!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:right!important}.float-xxl-end{float:left!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{grid-gap:0!important;gap:0!important}.gap-xxl-1{grid-gap:.25rem!important;gap:.25rem!important}.gap-xxl-2{grid-gap:.5rem!important;gap:.5rem!important}.gap-xxl-3{grid-gap:1rem!important;gap:1rem!important}.gap-xxl-4{grid-gap:1.5rem!important;gap:1.5rem!important}.gap-xxl-5{grid-gap:3rem!important;gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-left:0!important}.me-xxl-1{margin-left:.25rem!important}.me-xxl-2{margin-left:.5rem!important}.me-xxl-3{margin-left:1rem!important}.me-xxl-4{margin-left:1.5rem!important}.me-xxl-5{margin-left:3rem!important}.me-xxl-auto{margin-left:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-right:0!important}.ms-xxl-1{margin-right:.25rem!important}.ms-xxl-2{margin-right:.5rem!important}.ms-xxl-3{margin-right:1rem!important}.ms-xxl-4{margin-right:1.5rem!important}.ms-xxl-5{margin-right:3rem!important}.ms-xxl-auto{margin-right:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-left:0!important}.pe-xxl-1{padding-left:.25rem!important}.pe-xxl-2{padding-left:.5rem!important}.pe-xxl-3{padding-left:1rem!important}.pe-xxl-4{padding-left:1.5rem!important}.pe-xxl-5{padding-left:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-right:0!important}.ps-xxl-1{padding-right:.25rem!important}.ps-xxl-2{padding-right:.5rem!important}.ps-xxl-3{padding-right:1rem!important}.ps-xxl-4{padding-right:1.5rem!important}.ps-xxl-5{padding-right:3rem!important}.text-xxl-start{text-align:right!important}.text-xxl-end{text-align:left!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);


const createStore = () => {
  return new vuex__WEBPACK_IMPORTED_MODULE_0___default.a.Store({
    state: {
      ProductList: {},
      Catalogues: {},
      FltProduct: {},
      Categories: {},
      SubCategory: {},
      Product: {},
      Posts: {},
      Post: {},
      Cart: [],
      CompareCart: [],
      PanelCategoryPostRes: null,
      PanelSubCategoryPostRes: null,
      PanelCategoryRes: null,
      PanelSubCategoryRes: null,
      EditPanelFormDataPicRes: null,
      EditPanelFormDataTextFieldRes: null,
      PostPanelModelRes: null,
      PanelModelsRes: null,
      LoginRes: {},
      OrderInCrmRes: {}
    },
    mutations: {
      /* priceList */
      async priceList(state) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/pdf`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.ProductList = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* catalogues */
      async catalogues(state) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/catalogue`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.Catalogues = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* Products */
      async Products(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/products/?per_page=${payload.count}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.FltProduct = response.data;
          /* filter products by categorie id */

          if (payload.CategoryId) {
            state.FltProduct = Object.values(state.FltProduct).filter(item => {
              return item.acf.daste == payload.CategoryId;
            });
          }
          /* filter products by subcategory id */


          if (payload.SubCategoryId) {
            state.FltProduct = Object.values(state.FltProduct).filter(item => {
              return item.acf.zirdaste == payload.SubCategoryId;
            });
          }
        }).catch(error => {
          console.log(error);
        });
      },

      /* Categories */
      async Categories(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/daste/?per_page=${payload.count}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.Categories = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* SubCategorie */
      async SubCategory(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/zirdaste/?per_page=${payload.count}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.SubCategory = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* product detail */
      async Product(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/products/${payload.id}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.Product = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* posts */
      async Posts(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/posts/?per_page=${payload.count}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.Posts = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* post */
      async Post(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${"https://www.ostadshabake.ir"}/wp-json/wp/v2/posts/${payload.id}`
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.Post = response.data;
        }).catch(error => {
          console.log(error);
        });
      },

      /* Categorysearch */
      CategorySearch(state, payload) {
        state.FltProduct = Object.values(state.FltProduct).filter(item => {
          return item.acf.productname.includes(payload.SeProduct);
        });
      },

      /* Cart */
      AddCart(state, payload) {
        state.Cart.push(payload.product);
      },

      /* CompareCart */
      CompareCart(state, payload) {
        state.CompareCart.push(payload.product);
      },

      /* Clear Cart */
      ClearCart(state) {
        state.Cart = [];
      },

      /* Delete Item from cart */
      DeleteCartItem(state, payload) {
        state.Cart = state.Cart.filter(obj => obj.id !== payload.id);
      },

      /* Delete Item form CompareCart */
      DeleteCompareCart(state, payload) {
        state.CompareCart = state.CompareCart.filter(obj => obj.id !== payload.id);
      },

      FilterFltProducts(state, payload) {
        state.FltProduct = {};
      },

      /* Order In Crm */
      async OrderInCrm(state, payload) {
        const jsonData = {
          "name": payload.company,
          "number": payload.phonenumber,
          "town": payload.city,
          "address": payload.address,
          "product": payload.theProduct
        };
        var ReqConfig = {
          method: "post",
          url: `https://api.lavazemesakhteman.com/orders`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(jsonData)
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.OrderInCrmRes = response.data;
        }).catch(error => {
          state.OrderInCrmRes = error.response;
        });
      },

      async PanelPostCategory(state, payload) {
        const formData = new FormData();
        formData.append('categorie_title', payload.categorie_title);
        formData.append('categorie_picture', payload.categorie_picture);
        var ReqConfig = {
          method: "post",
          url: `${"http://localhost:8000"}/api/categories`,
          data: formData,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'multipart/form-data'
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PanelCategoryPostRes = response.data;
        }).catch(error => {
          state.PanelCategoryPostRes = error.response;
        });
      },

      /* Post Subcategorie */
      async PanelPostSubCategory(state, payload) {
        const formData = new FormData();
        formData.append('subcategorie_title', payload.subCategorie_title);
        formData.append('subcategorie_picture', payload.subCategorie_picture);
        var ReqConfig = {
          method: "post",
          url: `${"http://localhost:8000"}/api/subcategories`,
          data: formData,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'multipart/form-data'
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PanelSubCategoryPostRes = response.data;
        }).catch(error => {
          state.PanelSubCategoryPostRes = error.response;
        });
      },

      /* Post Panel Model */
      async PostPanelModel(state, payload) {
        const formData = new FormData();
        formData.append('model_picture', payload.model_picture);
        formData.append('model_title', payload.model_title);
        var ReqConfig = {
          method: "post",
          url: `${"http://localhost:8000"}/api/models`,
          data: formData,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'multipart/form-data'
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PostPanelModelRes = response.data;
        }).catch(error => {
          state.PostPanelModelRes = error.response;
        });
      },

      /* Edit Panel FormDataPic */
      async EditPanelFormDataPic(state, payload) {
        const formData = new FormData();
        formData.append(payload.endPointTitle, payload.endPointTitleValue);
        formData.append(payload.endPointPicture, payload.endPointPictureValue);
        var ReqConfig = {
          method: "post",
          url: `${"http://localhost:8000"}/api/${payload.endpoint}`,
          data: formData,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'multipart/form-data'
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.EditPanelFormDataPicRes = response.data;
        }).catch(error => {
          state.EditPanelFormDataPicRes = error.response;
        });
      },

      /* Edit Panel FormDataTextField */
      async EditPanelFormDataTextField(state, payload) {
        const data = {};
        data[payload.endPointTitle] = payload.endPointTitleValue;
        var ReqConfig = {
          method: "put",
          url: `${"http://localhost:8000"}/api/${payload.endpoint}/${payload.endpointId}`,
          data: data,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'application/json'
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.EditPanelFormDataTextFieldRes = response.data;
        }).catch(error => {
          state.EditPanelFormDataTextFieldRes = error.response;
        });
      },

      /* PanelCategories */
      async PanelCategories(state, payload) {
        var ReqConfig = {
          method: "get",
          url: `${"http://localhost:8000"}/api/categories`,
          headers: {
            Authorization: "Bearer " + payload.token
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PanelCategoryRes = response.data;
        }).catch(error => {
          state.PanelCategoryRes = error.response;
        });
      },

      /* PanelSubCategoryRes */
      async PanelSubCategories(state, payload) {
        var ReqConfig = {
          method: "get",
          url: `${"http://localhost:8000"}/api/subcategories`,
          headers: {
            Authorization: "Bearer " + payload.token
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PanelSubCategoryRes = response.data;
        }).catch(error => {
          state.PanelSubCategoryRes = error.response;
        });
      },

      /* Panel Models */
      async PanelModels(state, payload) {
        var ReqConfig = {
          method: "get",
          url: `${"http://localhost:8000"}/api/models`,
          headers: {
            Authorization: "Bearer " + payload.token
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.PanelModelsRes = response.data;
        }).catch(error => {
          state.PanelModelsRes = error.response;
        });
      },

      /* Login to panel */
      async Login(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${"http://localhost:8000"}/api/login/`,
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            email: payload.email,
            password: payload.password
          }
        };
        /* request section */

        await this.$axios(ReqConfig).then(response => {
          state.LoginRes = response.data;
          /* store token in cookie and push to user profile */

          if (response.status == 200) {
            /* remove old cookie */
            this.$cookiz.remove("jwt-token");
            /* set cookie */

            this.$cookiz.set("jwt-token", response.data.token, {
              maxAge: 60 * 60 * 24 * 30,
              path: '/'
            });
            /* push to profile */

            this.$router.push({
              path: '/panel/'
            });
          }
        }).catch(error => {
          state.LoginRes = error.response;
        });
      },

      /* Sign Out the panel */
      SignOut() {
        this.$cookiz.remove("jwt-token", {
          maxAge: 1
        });
        this.$cookiz.remove("jwt-token");
        /* Push to login page */

        this.$router.push('/panel/login');
      }

    },
    actions: {
      /* Get ProductList */
      GetpriceList({
        commit
      }, payload) {
        commit("priceList", payload);
      },

      /* Get Products */
      GetProducts({
        commit
      }, payload) {
        commit("Products", payload);
      },

      /* Get Catalogues */
      GetCatalogues({
        commit
      }, payload) {
        commit("catalogues", payload);
      },

      /* Get Categories */
      GetCategories({
        commit
      }, payload) {
        commit("Categories", payload);
      },

      /* Get SubCategory */
      GetSubCategory({
        commit
      }, payload) {
        commit("SubCategory", payload);
      },

      /* Get Product */
      GetProduct({
        commit
      }, payload) {
        commit("Product", payload);
      },

      /* Get Post */
      GetPost({
        commit
      }, payload) {
        commit("Post", payload);
      },

      /* Get Posts */
      GetPosts({
        commit
      }, payload) {
        commit("Posts", payload);
      },

      /* Set CategorySearch */
      SetCategorySearch({
        commit
      }, payload) {
        commit("CategorySearch", payload);
      },

      /* Set Cart */
      SetCart({
        commit
      }, payload) {
        commit("AddCart", payload);
      },

      SetFilterFltProducts({
        commit
      }, payload) {
        commit("FilterFltProducts", payload);
      },

      /* SetCompareCart */
      SetCompareCart({
        commit
      }, payload) {
        commit("CompareCart", payload);
      },

      /* Empty Cart */
      EmptyCart({
        commit
      }, payload) {
        commit("ClearCart", payload);
      },

      /* Delete cart item */
      DeleteCart({
        commit
      }, payload) {
        commit("DeleteCartItem", payload);
      },

      /* Delete Compare Cart Item */
      SetDeleteCompareCart({
        commit
      }, payload) {
        commit("DeleteCompareCart", payload);
      },

      /* Set Post Categorie */
      SetPanelPostCategory({
        commit
      }, payload) {
        commit("PanelPostCategory", payload);
      },

      /* Panel Post SubCategory */
      SetPanelPostSubCategory({
        commit
      }, payload) {
        commit("PanelPostSubCategory", payload);
      },

      /* SetLogin */
      SetLogin({
        commit
      }, payload) {
        commit("Login", payload);
      },

      /* Set Sign Out */
      SetSignOut({
        commit
      }, payload) {
        commit("SignOut", payload);
      },

      /* GetPanelCategories */
      GetPanelCategories({
        commit
      }, payload) {
        commit("PanelCategories", payload);
      },

      /* GetPanelSubCategories */
      GetPanelSubCategories({
        commit
      }, payload) {
        commit("PanelSubCategories", payload);
      },

      /* GetPanelModels */
      GetPanelModels({
        commit
      }, payload) {
        commit("PanelModels", payload);
      },

      /* EditPanelSubCategories */
      SetEditPanelFormDataPic({
        commit
      }, payload) {
        commit("EditPanelFormDataPic", payload);
      },

      /* EditPanelFormDataTextField */
      SetEditPanelFormDataTextField({
        commit
      }, payload) {
        commit("EditPanelFormDataTextField", payload);
      },

      /* PostPanelModelPic */
      SetPostPanelModel({
        commit
      }, payload) {
        commit("PostPanelModel", payload);
      },

      /* setOrderInCrm */
      setOrderInCrm({
        commit
      }, payload) {
        commit("OrderInCrm", payload);
      }

    },
    getters: {
      /* Dsp priceList */
      DspPriceList(state) {
        return state.ProductList;
      },

      /* Dsp priceList */
      DspCatalogues(state) {
        return state.Catalogues;
      },

      /* Dsp Products */
      DspProducts(state) {
        return state.Products;
      },

      /* Dsp Categories */
      DspCategories(state) {
        return state.Categories;
      },

      /* Dsp Categories */
      DspFltProducts(state) {
        return state.FltProduct;
      },

      /* Dsp Product */
      DspProduct(state) {
        return state.Product;
      },

      /* Dsp Post */
      DspPost(state) {
        return state.Post;
      },

      /* Dsp Posts */
      DspPosts(state) {
        return state.Posts;
      },

      /* Dsp SubCategory */
      DspSubCategory(state) {
        return state.SubCategory;
      },

      /* Dsp Cart */
      DspCart(state) {
        return state.Cart;
      },

      /* Dsp CpmpareCart */
      DspCpmpareCart(state) {
        return state.CompareCart;
      },

      /* Dsp PanelCategoryErrRes */
      DspPanelCategoryPostRes(state) {
        return state.PanelCategoryPostRes;
      },

      /* Dsp Panel SubCategory SucRes */
      DspPanelSubCategoryPostRes(state) {
        return state.PanelSubCategoryPostRes;
      },

      /* Dsp Login Succes Response */
      DspLoginRes(state) {
        return state.LoginRes;
      },

      /* display PanelCategoryRes */
      DspPanelCategoryRes(state) {
        return state.PanelCategoryRes;
      },

      /* display PanelSubCategories */
      DspPanelSubCategoriesRes(state) {
        return state.PanelSubCategoryRes;
      },

      DspEditPanelFormDataPicRes(state) {
        return state.EditPanelFormDataPicRes;
      },

      DspEditPanelFormDataTextFieldRes(state) {
        return state.EditPanelFormDataTextFieldRes;
      },

      DspPostPanelModel(state) {
        return state.PostPanelModelRes;
      },

      DspPanelModels(state) {
        return state.PanelModelsRes;
      },

      DspOrderInCrmRes(state) {
        return state.OrderInCrmRes;
      }

    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "UrlApi": "https://www.ostadshabake.ir",
        "PanelUrlApi": "http://localhost:8000"
      }
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _316d800b = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 5).then(__webpack_require__.bind(null, 160)));

const _74c43b62 = () => interopDefault(__webpack_require__.e(/* import() | pages/CataloguePdf */ 1).then(__webpack_require__.bind(null, 161)));

const _246fb385 = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/index */ 7).then(__webpack_require__.bind(null, 162)));

const _003cda4a = () => interopDefault(__webpack_require__.e(/* import() | pages/order/index */ 10).then(__webpack_require__.bind(null, 163)));

const _2dc4aa11 = () => interopDefault(__webpack_require__.e(/* import() | pages/panel/index */ 11).then(__webpack_require__.bind(null, 164)));

const _573ec04d = () => interopDefault(__webpack_require__.e(/* import() | pages/products/index */ 18).then(__webpack_require__.bind(null, 165)));

const _15002350 = () => interopDefault(__webpack_require__.e(/* import() | pages/ProductsPdf */ 2).then(__webpack_require__.bind(null, 166)));

const _11b5a546 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/about */ 4).then(__webpack_require__.bind(null, 167)));

const _0177fc66 = () => interopDefault(__webpack_require__.e(/* import() | pages/order/getinfo */ 9).then(__webpack_require__.bind(null, 168)));

const _112765b0 = () => interopDefault(__webpack_require__.e(/* import() | pages/panel/login */ 12).then(__webpack_require__.bind(null, 169)));

const _33e30e30 = () => interopDefault(__webpack_require__.e(/* import() | pages/panel/model */ 13).then(__webpack_require__.bind(null, 170)));

const _98d7e586 = () => interopDefault(__webpack_require__.e(/* import() | pages/panel/subcategory */ 14).then(__webpack_require__.bind(null, 171)));

const _10f3a348 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/all */ 17).then(__webpack_require__.bind(null, 172)));

const _30407986 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/_blog/index */ 3).then(__webpack_require__.bind(null, 173)));

const _bd228650 = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/_categorie/index */ 6).then(__webpack_require__.bind(null, 174)));

const _5fb6ce14 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/_single/index */ 15).then(__webpack_require__.bind(null, 175)));

const _28485f70 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/_product/index */ 16).then(__webpack_require__.bind(null, 176)));

const _cc7f2448 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 8).then(__webpack_require__.bind(null, 177)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/2022/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/blog",
    component: _316d800b,
    name: "blog"
  }, {
    path: "/CataloguePdf",
    component: _74c43b62,
    name: "CataloguePdf"
  }, {
    path: "/categories",
    component: _246fb385,
    name: "categories"
  }, {
    path: "/order",
    component: _003cda4a,
    name: "order"
  }, {
    path: "/panel",
    component: _2dc4aa11,
    name: "panel"
  }, {
    path: "/products",
    component: _573ec04d,
    name: "products"
  }, {
    path: "/ProductsPdf",
    component: _15002350,
    name: "ProductsPdf"
  }, {
    path: "/blog/about",
    component: _11b5a546,
    name: "blog-about"
  }, {
    path: "/order/getinfo",
    component: _0177fc66,
    name: "order-getinfo"
  }, {
    path: "/panel/login",
    component: _112765b0,
    name: "panel-login"
  }, {
    path: "/panel/model",
    component: _33e30e30,
    name: "panel-model"
  }, {
    path: "/panel/subcategory",
    component: _98d7e586,
    name: "panel-subcategory"
  }, {
    path: "/products/all",
    component: _10f3a348,
    name: "products-all"
  }, {
    path: "/blog/:blog",
    component: _30407986,
    name: "blog-blog"
  }, {
    path: "/categories/:categorie",
    component: _bd228650,
    name: "categories-categorie"
  }, {
    path: "/product/:single",
    component: _5fb6ce14,
    name: "product-single"
  }, {
    path: "/products/:product",
    component: _28485f70,
    name: "products-product"
  }, {
    path: "/",
    component: _cc7f2448,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=629329f6&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "error-page"
  }, [_vm._ssrNode("<h1 data-v-629329f6>Oops, something went wrong!</h1> <p data-v-629329f6>Back to <a href=\"/\" data-v-629329f6>safety</a>!</p>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=629329f6&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./layouts/error.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "629329f6",
  "39f5e016"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "70418860"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(23);

// EXTERNAL MODULE: ./assets/css/general_style.css
var general_style = __webpack_require__(25);

// EXTERNAL MODULE: ./assets/css/custome_slick.css
var custome_slick = __webpack_require__(37);

// EXTERNAL MODULE: ./assets/css/slick.css
var slick = __webpack_require__(39);

// EXTERNAL MODULE: ./assets/bootstrap/bootstrap.rtl.min.css
var bootstrap_rtl_min = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3f39e22a&
var defaultvue_type_template_id_3f39e22a_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('nuxt')], 1);
};

var defaultvue_type_template_id_3f39e22a_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3f39e22a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_3f39e22a_render,
  defaultvue_type_template_id_3f39e22a_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "bfc26324"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(43), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(14);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
  "async": true
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(15);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookiz",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(16);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(44);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(17);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/2022/_nuxt/icons/icon_64x64.055abe.png",
    "120x120": "/2022/_nuxt/icons/icon_120x120.055abe.png",
    "144x144": "/2022/_nuxt/icons/icon_144x144.055abe.png",
    "152x152": "/2022/_nuxt/icons/icon_152x152.055abe.png",
    "192x192": "/2022/_nuxt/icons/icon_192x192.055abe.png",
    "384x384": "/2022/_nuxt/icons/icon_384x384.055abe.png",
    "512x512": "/2022/_nuxt/icons/icon_512x512.055abe.png",
    "ipad_1536x2048": "/2022/_nuxt/icons/splash_ipad_1536x2048.055abe.png",
    "ipadpro9_1536x2048": "/2022/_nuxt/icons/splash_ipadpro9_1536x2048.055abe.png",
    "ipadpro10_1668x2224": "/2022/_nuxt/icons/splash_ipadpro10_1668x2224.055abe.png",
    "ipadpro12_2048x2732": "/2022/_nuxt/icons/splash_ipadpro12_2048x2732.055abe.png",
    "iphonese_640x1136": "/2022/_nuxt/icons/splash_iphonese_640x1136.055abe.png",
    "iphone6_50x1334": "/2022/_nuxt/icons/splash_iphone6_50x1334.055abe.png",
    "iphoneplus_1080x1920": "/2022/_nuxt/icons/splash_iphoneplus_1080x1920.055abe.png",
    "iphonex_1125x2436": "/2022/_nuxt/icons/splash_iphonex_1125x2436.055abe.png",
    "iphonexr_828x1792": "/2022/_nuxt/icons/splash_iphonexr_828x1792.055abe.png",
    "iphonexsmax_1242x2688": "/2022/_nuxt/icons/splash_iphonexsmax_1242x2688.055abe.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// CONCATENATED MODULE: ./plugins/http.js

/* harmony default export */ var http = ({
  get: async function (endpoint, token) {
    try {
      const url = `${"http://localhost:8000"}/${endpoint}`;
      const response = await external_axios_default.a.get(url, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async function (endpoint, data, token) {
    try {
      const url = `${"http://localhost:8000"}/${endpoint}`; // Create a new FormData object

      const formData = new FormData(); // Append each key-value pair from the data object to the FormData

      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await external_axios_default.a.post(url, formData, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data

        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./buefy.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ./pwa/icon.plugin.js (mode: 'all')

 // Source: ../plugins/http (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "فروشگاه آنلاین لوازم ساختمانی و صنعتی - لوازم ساختمان",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "تمامی لوازم ساختمانی و صنعتی از جمله شیرآلات , لوله و اتصالات , محصولات پلاستیکی با برند های نسیم , ترمه , شیبه , کاس و ... عرضه می گردد"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002F2022\u002Ffavicon.png"
      }, {
        "rel": "stylesheet",
        "href": "\u002F2022\u002Fcss\u002Fmdb-min.css"
      }, {
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@5.8.55\u002Fcss\u002Fmaterialdesignicons.min.css",
        "rel": "preload",
        "as": "style",
        "onload": "this.rel='stylesheet'"
      }],
      "script": [{
        "src": "\u002F2022\u002Fjs\u002Fbootstrap\u002Fbootstrap.bundle.min.js",
        "body": true
      }, {
        "src": "\u002F2022\u002Fjs\u002Fjquery\u002Fjquery-3-6-0-min.js",
        "body": true
      }, {
        "src": "\u002F2022\u002Fjs\u002Fbootstrap\u002Fmdb-min.js",
        "body": true
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (typeof http === 'function') {
    await http(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/2022/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("vue-slick-carousel");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map