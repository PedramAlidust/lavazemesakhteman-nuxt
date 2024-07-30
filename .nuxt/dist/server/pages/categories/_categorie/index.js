exports.ids = [6];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b230e8c", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24dab7e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24dab7e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24dab7e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24dab7e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24dab7e0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".single-post-page[data-v-24dab7e0]{padding:30px;text-align:center;box-sizing:border-box}.post[data-v-24dab7e0]{width:100%}@media (min-width:768px){.post[data-v-24dab7e0]{width:600px;margin:auto}}.post-title[data-v-24dab7e0]{margin:0}.post-details[data-v-24dab7e0]{padding:10px;box-sizing:border-box;border-bottom:3px solid #ccc;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:768px){.post-details[data-v-24dab7e0]{flex-direction:row}}.post-detail[data-v-24dab7e0]{color:#585858;margin:0 10px}.post-feedback a[data-v-24dab7e0]{color:red;text-decoration:none}.post-feedback a[data-v-24dab7e0]:active,.post-feedback a[data-v-24dab7e0]:hover{color:salmon}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/_categorie/index.vue?vue&type=template&id=24dab7e0&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('TheHeader'), _vm._ssrNode(" <div class=\"container-full category_background d-flex justify-content-center\" data-v-24dab7e0><div class=\"row align-items-center\" data-v-24dab7e0><div class=\"col-12 text-center\" data-v-24dab7e0><p class=\"fw-bold text-white display-6\" data-v-24dab7e0>" + _vm._ssrEscape("\n          " + _vm._s(_vm.CategoryData[0].categories[0].name) + "\n        ") + "</p> <p class=\"text-white h5\" data-v-24dab7e0>" + _vm._ssrEscape("\n          با کیفیت ترین " + _vm._s(_vm.CategoryData[0].categories[0].name) + "\n        ") + "</p></div></div></div> "), _vm._ssrNode("<div class=\"container-full category_broadcrumps\" data-v-24dab7e0>", "</div>", [_vm._ssrNode("<div class=\"container ps-4\" data-v-24dab7e0>", "</div>", [_vm._ssrNode("<nav class=\"py-3\" data-v-24dab7e0>", "</nav>", [_vm._ssrNode("<ol class=\"breadcrumb align-items-center mb-0\" data-v-24dab7e0>", "</ol>", [_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-24dab7e0>", "</li>", [_c('nuxt-link', {
    staticClass: "text-dark",
    attrs: {
      "to": '/'
    }
  }, [_vm._v(" صفحه اصلی ")])], 1), _vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-24dab7e0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.CategoryData[0].categories[0].name) + "\n          ") + "</li>")], 2)])])]), _vm._ssrNode(" <section class=\"main\" style=\"direction: rtl\" data-v-24dab7e0><div class=\"container py-3\" data-v-24dab7e0><div class=\"row\" data-v-24dab7e0>" + _vm._ssrList(_vm.CategoryData, function (product_item) {
    return "<div class=\"col-md-3 col-lg-3 p-2\" data-v-24dab7e0>" + (product_item.images[0] ? "<img" + _vm._ssrAttr("src", product_item.images[0].src) + " alt=\"shiralat\" class=\"w-100 border\" data-v-24dab7e0>" : "<img src=\"https://via.placeholder.com/150\" alt=\"shiralat\" class=\"w-100 border\" data-v-24dab7e0>") + " <p class=\"txt-justify text-center fw-bold text-white bg-info p-2 rounded\" data-v-24dab7e0>" + _vm._ssrEscape("\n            " + _vm._s(product_item.name) + "\n          ") + "</p></div>";
  }) + " <div data-v-24dab7e0>" + _vm._s(_vm.CategoryData[0].description) + "</div></div></div></section> "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/categories/_categorie/index.vue?vue&type=template&id=24dab7e0&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/Navigation/TheHeader.vue + 4 modules
var TheHeader = __webpack_require__(65);

// EXTERNAL MODULE: ./components/TheFooter.vue + 4 modules
var TheFooter = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/_categorie/index.vue?vue&type=script&lang=js&



/* harmony default export */ var _categorievue_type_script_lang_js_ = ({
  /*
  data() {
    return {
      CategoryData: null,
    };
  },
  */
  components: {
    TheHeader: TheHeader["a" /* default */],
    TheFooter: TheFooter["a" /* default */]
  },

  asyncData(context) {
    /*Get categorie id */
    return external_axios_default.a.get("https://lavazemesakhteman.com/wp-json/wc/v3/products/categories", {
      params: {
        slug: context.params.categorie
      }
    }).then(res => {
      res.data[0].name;
      /*Get categorie content */

      return external_axios_default.a.get("https://lavazemesakhteman.com/wp-json/wc/v3/products?category=" + res.data[0].id, {
        params: {
          per_page: 100
        }
      }).then(res => {
        return {
          CategoryData: res.data
        };
      }).catch(e => context.error(e));
      /*return first request error*/
    }).catch(e => context.error(e));
  },

  head() {
    return {
      title: this.CategoryData[0].meta_data[2].value,
      meta: [{
        hid: "description",
        name: "description",
        content: this.CategoryData[0].meta_data[3].value
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/categories/_categorie/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_categorievue_type_script_lang_js_ = (_categorievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/categories/_categorie/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(133)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_categorievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "24dab7e0",
  "d9a96f14"
  
)

/* harmony default export */ var _categorie = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close-button.ff47307.png";

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("25e34676", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("38962b15", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCAwIDEgNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHgxPSIwLjUiIHkxPSItMi4xODU1N2UtMDgiIHgyPSIwLjUwMDAwMiIgeTI9IjQ1IiBzdHJva2U9IiNEN0Q3RDciLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPgoJPHRpdGxlPmJ1eWNhcnQtc3ZnPC90aXRsZT4KCTxzdHlsZT4KCQkuczAgeyBmaWxsOiBub25lO3N0cm9rZTogIzBlMzc0NjtzdHJva2Utd2lkdGg6IDEuNSB9IAoJCS5zMSB7IGZpbGw6IG5vbmU7c3Ryb2tlOiAjMGUzNzQ2O3N0cm9rZS1saW5lY2FwOiByb3VuZDtzdHJva2UtbGluZWpvaW46IHJvdW5kO3N0cm9rZS13aWR0aDogMS41IH0gCgk8L3N0eWxlPgoJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0iczAiIGQ9Im0wLjggOGMtMC4xLTQgMy4yLTcuMyA3LjItNy4zaDMyYzQgMCA3LjMgMy4zIDcuMyA3LjNsLTAuMSAzMmMwIDQtMy4yIDcuMy03LjIgNy4zaC0zMmMtNCAwLTcuMy0zLjMtNy4zLTcuM3oiLz4KCTxwYXRoIGlkPSJMYXllciIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iczEiIGQ9Im0xOS40IDMxLjhjMC40IDAgMC44IDAuNCAwLjggMC44IDAgMC40LTAuNCAwLjctMC44IDAuNy0wLjQgMC0wLjctMC4zLTAuNy0wLjcgMC0wLjQgMC4zLTAuOCAwLjctMC44eiIvPgoJPHBhdGggaWQ9IkxheWVyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsYXNzPSJzMSIgZD0ibTMwLjcgMzEuOGMwLjQgMCAwLjcgMC40IDAuNyAwLjggMCAwLjQtMC4zIDAuNy0wLjcgMC43LTAuNCAwLTAuOC0wLjMtMC44LTAuNyAwLTAuNCAwLjQtMC44IDAuOC0wLjh6Ii8+Cgk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzMSIgZD0ibTE0LjcgMTUuM2wyLjEgMC4zIDEgMTEuNWMwLjEgMC45IDAuOSAxLjYgMS44IDEuNmgxMC45YzAuOSAwIDEuNy0wLjYgMS44LTEuNWwwLjktNi42YzAuMi0wLjgtMC41LTEuNS0xLjMtMS41aC0xNC43Ii8+Cgk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzMSIgZD0ibTI2LjEgMjIuOGgyLjgiLz4KPC9zdmc+"

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.41cddb6.png";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/android.f418fd3.png";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iosshare.52ac256.png";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/apple.39f283d.png";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_4b0ba9fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_4b0ba9fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_4b0ba9fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_4b0ba9fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_4b0ba9fc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table-container[data-v-4b0ba9fc]{max-height:150px;overflow-y:auto}.table th[data-v-4b0ba9fc]{text-align:right}.logo[data-v-4b0ba9fc]{width:80px;height:90px}.header-container[data-v-4b0ba9fc]{width:100%;background-color:#fff;transition:all .3s ease-in-out}.header-container.sticky[data-v-4b0ba9fc]{position:fixed;top:0;left:0;right:0;z-index:1000;box-shadow:0 5px 40px rgba(0,0,0,.095)}.Headerstyle[data-v-4b0ba9fc]{padding:0 15px}.MenuStyle[data-v-4b0ba9fc]{color:#404040;font-size:14px}.MenuStyle[data-v-4b0ba9fc]:hover{color:#0e3746}.DownloadBtn[data-v-4b0ba9fc]{border-radius:5px;padding:10px 20px;background-color:#0e3746;box-shadow:none;font-size:14px}.popup[data-v-4b0ba9fc]{position:fixed;bottom:0;background-color:#fff;padding:20px;border:1px solid #000;z-index:100;width:100%}.cart-number[data-v-4b0ba9fc]{position:absolute;top:0;left:0;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background-color:red;font-size:1rem;color:#fff}.image-container[data-v-4b0ba9fc]{position:relative;cursor:pointer}@media screen and (min-width:768px){.Headerstyle[data-v-4b0ba9fc]{padding:0 50px}.DownloadBtn[data-v-4b0ba9fc],.MenuStyle[data-v-4b0ba9fc]{font-size:16px}}.android-txt[data-v-4b0ba9fc]{font-size:11pt}.ios_icon[data-v-4b0ba9fc]{width:16px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/instagram.ac32ec0.png";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/telegram.6d4fb40.png";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/whatsapp.29dd41c.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/youtube.3b55cd2.png";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phone-ringing.f14ac7c.png";

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_5e9248a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_5e9248a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_5e9248a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_5e9248a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_5e9248a6_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".CloseBtn[data-v-5e9248a6]{margin-right:90%;cursor:pointer}.num-font[data-v-5e9248a6]{color:#fff;font-size:12pt;letter-spacing:3px}.CallBtn[data-v-5e9248a6]{border-radius:10px;padding:10px;color:#fff;background-color:#be2623;position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:1000}.footer-margin[data-v-5e9248a6]{margin-left:auto}.bkg-color[data-v-5e9248a6]{background-color:#fff}@media (max-width:767px){.AddressWidth[data-v-5e9248a6]{width:70%}}@media (min-width:768px){.AddressWidth[data-v-5e9248a6]{width:50%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheHeader.vue?vue&type=template&id=4b0ba9fc&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div" + _vm._ssrClass(null, ['header-container', {
    'sticky': _vm.isSticky
  }]) + " data-v-4b0ba9fc>", "</div>", [_vm._ssrNode("<div class=\"container-fluid bg-white pt-3 py-lg-3 Headerstyle px-lg-5\" data-v-4b0ba9fc>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-4b0ba9fc>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 mb-3 mb-lg-0\" data-v-4b0ba9fc><div class=\"d-flex align-items-center justify-content-between\" data-v-4b0ba9fc><button type=\"button\" class=\"DownloadBtn btn text-white\" data-v-4b0ba9fc>\n              دانلود اپلیکیشن\n            </button> <img" + _vm._ssrAttr("src", __webpack_require__(50)) + " alt=\"devider\" class=\"d-none d-lg-block\" data-v-4b0ba9fc> <div class=\"image-container\" data-v-4b0ba9fc><img" + _vm._ssrAttr("src", __webpack_require__(51)) + " alt=\"buycart\" data-v-4b0ba9fc> " + (_vm.DspCart.length !== 0 ? "<span class=\"ms-1 cart-number\" data-v-4b0ba9fc>" + _vm._ssrEscape(_vm._s(_vm.DspCart.length)) + "</span>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"col-lg-7 text-center px-lg-5 mt-0 mt-lg-2\" data-v-4b0ba9fc>", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\" data-v-4b0ba9fc>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/blog/about"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("درباره ما")])]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/blog"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("وبلاگ")])]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/productspdf"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("لیست قیمت")])]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/cataloguepdf"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("کاتالوگ")])]), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("صفحه اصلی")])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 mt-lg-1 text-start d-none d-lg-block\" data-v-4b0ba9fc>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logo img-fluid",
    attrs: {
      "src": __webpack_require__(52),
      "alt": "lavazemesakhtemanlogo"
    }
  })])], 1)], 2)])]), _vm._ssrNode(" "), _vm.isPopupVisible ? _vm._ssrNode("<div class=\"popup\" data-v-4b0ba9fc>", "</div>", [_vm._ssrNode("<button class=\"btn btn-danger btn-sm mx-2\" data-v-4b0ba9fc><div class=\"d-flex\" data-v-4b0ba9fc><div class=\"fw-bold me-2\" data-v-4b0ba9fc>بستن</div> <div data-v-4b0ba9fc><img width=\"19\" height=\"19\"" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt=\"close-btn\" data-v-4b0ba9fc></div></div></button> <div class=\"table-container\" data-v-4b0ba9fc><table dir=\"rtl\" class=\"table\" data-v-4b0ba9fc><thead data-v-4b0ba9fc><tr data-v-4b0ba9fc><th data-v-4b0ba9fc>نام محصول</th> <th data-v-4b0ba9fc>قیمت محصول به تومان</th> <th data-v-4b0ba9fc></th></tr></thead> <tbody data-v-4b0ba9fc>" + _vm._ssrList(_vm.DspCart, function (product) {
    return "<tr data-v-4b0ba9fc><td data-v-4b0ba9fc>" + _vm._ssrEscape(_vm._s(product.name)) + "</td> <td data-v-4b0ba9fc>" + _vm._ssrEscape(_vm._s(product.price)) + "</td> <td data-v-4b0ba9fc><button class=\"mx-2\" data-v-4b0ba9fc>حذف</button></td></tr>";
  }) + "</tbody></table></div> <div class=\"d-flex justify-content-between px-2\" data-v-4b0ba9fc><p dir=\"rtl\" data-v-4b0ba9fc>" + _vm._ssrEscape(_vm._s(_vm.totalPrice) + " تومان") + "</p> <p data-v-4b0ba9fc>مجموع قیمت</p></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/order"
    }
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm mx-2"
  }, [_vm._v("تکمیل خرید")])]), _vm._ssrNode(" <button class=\"btn btn-success btn-sm mx-2\" data-v-4b0ba9fc>\n      خالی کردن سبد خرید\n    </button>")], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.isDownloadVisible ? "<div class=\"popup\" data-v-4b0ba9fc><div class=\"container\" data-v-4b0ba9fc><div class=\"row text-start align-items-center justify-content-center\" data-v-4b0ba9fc><div class=\"col-10 px-0\" data-v-4b0ba9fc><p class=\"android-txt mt-3\" data-v-4b0ba9fc>\n            .جهت دانلود نسخه اندروید روی آیکن سمت راست بزنید\n          </p></div> <div class=\"col-2\" data-v-4b0ba9fc><a href=\"/2022/apk/lavazem.apk\" data-v-4b0ba9fc><img" + _vm._ssrAttr("src", __webpack_require__(53)) + " alt=\"android\" class=\"w-100\" data-v-4b0ba9fc></a></div></div></div> <div class=\"container mt-4\" data-v-4b0ba9fc><div class=\"row text-start align-items-center justify-content-center\" data-v-4b0ba9fc><div class=\"col-10 px-0\" data-v-4b0ba9fc><p dir=\"rtl\" class=\"android-txt mt-3\" data-v-4b0ba9fc>\n            جهت نصب نسخه ios روی آیکن\n            <span data-v-4b0ba9fc><img" + _vm._ssrAttr("src", __webpack_require__(54)) + " alt=\"download-ios\" class=\"ios_icon\" data-v-4b0ba9fc></span>\n            و سپس گزینه Add to HomeScreen بزنید.\n          </p></div> <div class=\"col-2\" data-v-4b0ba9fc><img" + _vm._ssrAttr("src", __webpack_require__(55)) + " alt=\"android\" class=\"w-100\" data-v-4b0ba9fc></div></div></div> <button class=\"btn btn-danger btn-sm mx-2\" data-v-4b0ba9fc>\n      بستن\n    </button></div>" : "<!---->"))], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue?vue&type=template&id=4b0ba9fc&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheHeader.vue?vue&type=script&lang=js&

/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      isPopupVisible: false,
      isDownloadVisible: false,
      isSticky: false
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])(["EmptyCart", "DeleteCart"]),

    showPopup() {
      this.isPopupVisible = true;
    },

    hidePopup() {
      this.isPopupVisible = false;
    },

    showdDownloadPopup() {
      this.isDownloadVisible = true;
    },

    hideDownloadPopup() {
      this.isDownloadVisible = false;
    },

    emptyCard() {
      this.EmptyCart();
    },

    deleteCart(id) {
      this.DeleteCart({
        id: id
      });
    },

    handleScroll() {
      this.isSticky = window.scrollY > 0;
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])(["DspCart"]),

    totalPrice() {
      const persianNumbers = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9"
      };

      function convertToArabicNumerals(str) {
        return str.replace(/[۰-۹]/g, w => persianNumbers[w]);
      }

      return this.DspCart.map(item => {
        const cleanedPrice = item.price.replace(/[^0-9۰-۹]/g, "");
        const numericPrice = parseInt(convertToArabicNumerals(cleanedPrice), 10);
        return isNaN(numericPrice) ? 0 : numericPrice;
      }).reduce((sum, price) => sum + price, 0).toLocaleString("en-US");
    }

  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  name: "TheHeader",
  props: ["menu_data", "cartUpdated"],
  watch: {
    cartUpdated(value) {
      if (value) {
        this.isPopupVisible = true;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b0ba9fc",
  "7b25d4af"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=5e9248a6&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('footer', {
    attrs: {
      "id": "contact-us"
    }
  }, [_vm._ssrNode("<div class=\"container-full bkg-color py-md-5 py-lg-5\" data-v-5e9248a6><div class=\"container px-5\" data-v-5e9248a6><div class=\"row\" data-v-5e9248a6><div class=\"col-lg-3 text-center d-none d-lg-block\" data-v-5e9248a6><p class=\"fw-bold\" data-v-5e9248a6>نماد اعتبار</p> <a referrerpolicy=\"origin\" target=\"_blank\" href=\"https://trustseal.enamad.ir/?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" data-v-5e9248a6><img referrerpolicy=\"origin\" src=\"https://trustseal.enamad.ir/logo.aspx?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" alt=\"enamad\" Code=\"TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" style=\"cursor:pointer\" data-v-5e9248a6></a></div> <div class=\"col-lg-3 text-start pt-4 pt-md-0 pt-lg-0\" data-v-5e9248a6><p class=\"fw-bold text-black\" data-v-5e9248a6>درباره ما</p> <p class=\"text-black text-justify\" data-v-5e9248a6>\n            مجموعه لوازم ساختمان با بیش از بیست سال تجربه\n            مفتخر است با ارايه خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن\n            مسکونی شیرآلات و دیگر لوازم ساختمانی را عرضه می کند.\n          </p></div> <div class=\"col-lg-3 col-6 text-start py-4 py-lg-0\" data-v-5e9248a6><p class=\"fw-bold text-black\" data-v-5e9248a6>شبکه های مجازی</p> <p class=\"text-black text-justify\" data-v-5e9248a6>\n            ما را در فضای مجازی دنبال کنید.\n          </p> <a href=\"https://instagram.com/lavazemesakhteman\" data-v-5e9248a6><img height=\"31\" width=\"31\"" + _vm._ssrAttr("src", __webpack_require__(58)) + " alt=\"instagram\" data-v-5e9248a6></a> <a href=\"https://t.me/pipesystem301\" data-v-5e9248a6><img height=\"31\" width=\"31\"" + _vm._ssrAttr("src", __webpack_require__(59)) + " alt=\"telegram\" data-v-5e9248a6></a> <a href=\"https://wa.me/09365833005\" data-v-5e9248a6><img height=\"31\" width=\"31\"" + _vm._ssrAttr("src", __webpack_require__(60)) + " alt=\"whatsapp\" data-v-5e9248a6></a> <a href=\"https://youtube.com/channel/UCtE62u-O1OjQ-CFjfCnjJTw\" data-v-5e9248a6><img height=\"31\" width=\"31\"" + _vm._ssrAttr("src", __webpack_require__(61)) + " alt=\"youtube\" data-v-5e9248a6></a></div> <div class=\"col-lg-3 col-6 text-start py-4 py-lg-0\" data-v-5e9248a6><p class=\"fw-bold text-black\" data-v-5e9248a6>اطلاعات تماس</p> <p class=\"text-black\" data-v-5e9248a6>02155580447</p> <p class=\"text-black small text-justify AddressWidth footer-margin\" data-v-5e9248a6>\n            خیابان خیام چهار راه گلوبندک کوچه حمام ملاباشی پاساژ 110 طبقه اول\n            پلاک 5\n          </p></div> <div class=\"col-lg-3 text-start d-lg-none pb-5 pb-md-0 pb-lg-0\" data-v-5e9248a6><a referrerpolicy=\"origin\" target=\"_blank\" href=\"https://trustseal.enamad.ir/?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" data-v-5e9248a6><img referrerpolicy=\"origin\" src=\"https://trustseal.enamad.ir/logo.aspx?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" alt=\"enamad\" Code=\"TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic\" style=\"cursor:pointer\" data-v-5e9248a6></a></div></div></div></div> <div class=\"container-full bg-dark\" data-v-5e9248a6><div class=\"container text-center\" data-v-5e9248a6><div class=\"row align-items-center\" data-v-5e9248a6><div class=\"col-12 mt-3 text-white\" data-v-5e9248a6><p data-v-5e9248a6>تمامی حقوق این وب سایت متعلق به فروشگاه لوازم ساختمان می باشد</p></div></div></div></div> " + (_vm.showCallButton ? "<div class=\"text-start CallBtn\" data-v-5e9248a6><img width=\"25\" height=\"25\"" + _vm._ssrAttr("src", __webpack_require__(62)) + " alt=\"phone-ringing\" class=\"CloseBtn\" data-v-5e9248a6></div>" : "<div class=\"text-start CallBtn\" data-v-5e9248a6><img width=\"25\" height=\"25\"" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt=\"close\" class=\"CloseBtn\" data-v-5e9248a6> <div class=\"fw-bold\" data-v-5e9248a6>مشاوره رایگان</div> <div class=\"fw-bold\" data-v-5e9248a6>حتی ایام تعطیل</div> <a href=\"tel:09122339423\" data-v-5e9248a6><div class=\"fw-bold num-font mt-1\" data-v-5e9248a6>09122339423</div></a> <div class=\"fw-bold num-font\" data-v-5e9248a6>02155580447</div></div>"))]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=5e9248a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  props: ["footer_data"],

  data() {
    return {
      showCallButton: false
    };
  },

  methods: {
    toggleCallButton() {
      this.showCallButton = !this.showCallButton;
    }

  }
});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/TheFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e9248a6",
  "73b3daf0"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map