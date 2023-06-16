exports.ids = [9];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_product/index.vue?vue&type=template&id=2f7b1cca&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_c('TheHeader'), _vm._ssrNode(" <div class=\"wrapper\" data-v-2f7b1cca><div class=\"container BroadBg py-2 mt-5 mb-4\" data-v-2f7b1cca><div class=\"d-flex align-items-center justify-content-end\" data-v-2f7b1cca>" + (_vm.DspProduct.acf ? "<p class=\"text-success\" data-v-2f7b1cca>" + _vm._ssrEscape(_vm._s(_vm.DspProduct.acf.productname)) + "</p>" : "<!---->") + " <img" + _vm._ssrAttr("src", __webpack_require__(90)) + " alt=\"home\" class=\"px-2\" data-v-2f7b1cca> <img" + _vm._ssrAttr("src", __webpack_require__(91)) + " alt=\"home\" data-v-2f7b1cca></div></div> <div class=\"container pb-5 px-0\" data-v-2f7b1cca><div class=\"row\" data-v-2f7b1cca>" + (_vm.DspProduct.acf ? "<p class=\"product_title text-start\" data-v-2f7b1cca>" + _vm._ssrEscape("\n              " + _vm._s(_vm.DspProduct.acf.productname) + "\n            ") + "</p>" : "<!---->") + " <div class=\"container-full\" data-v-2f7b1cca><div class=\"d-flex justify-content-end\" data-v-2f7b1cca><div class=\"d-flex\" data-v-2f7b1cca><i class=\"star bi bi-star-fill\" data-v-2f7b1cca></i> <i class=\"star bi bi-star-fill\" data-v-2f7b1cca></i> <i class=\"star bi bi-star-fill\" data-v-2f7b1cca></i> <i class=\"star bi bi-star-fill\" data-v-2f7b1cca></i> <i class=\"star bi bi-star-fill\" data-v-2f7b1cca></i> <p class=\"ps-lg-2 pe-lg-2\" data-v-2f7b1cca>امتیاز</p></div></div> <table dir=\"rtl\" class=\"table table-bordered table-striped mt-4 mb-4\" data-v-2f7b1cca><thead data-v-2f7b1cca><tr data-v-2f7b1cca><th scope=\"col\" data-v-2f7b1cca>مدل</th> <th scope=\"col\" data-v-2f7b1cca>سایز</th> <th scope=\"col\" data-v-2f7b1cca>عکس</th> <th scope=\"col\" data-v-2f7b1cca>قیمت</th> <th scope=\"col\" data-v-2f7b1cca>خرید</th></tr></thead> " + (_vm.DspProduct.acf ? "<tbody data-v-2f7b1cca>" + _vm._ssrList(_vm.DspProduct.acf.productdetails, function (info) {
    return "<tr data-v-2f7b1cca><td style=\"width: 30%;\" data-v-2f7b1cca>" + _vm._ssrEscape(_vm._s(info.themodel)) + "</td> <td style=\"width: 10%;\" data-v-2f7b1cca>" + _vm._ssrEscape(_vm._s(info.size)) + "</td> " + (info.modelpicture ? "<td style=\"width: 40%;\" data-v-2f7b1cca><img" + _vm._ssrAttr("src", info.modelpicture) + " alt=\"TheProduct\" class=\"w-25\" data-v-2f7b1cca></td>" : "<!---->") + " " + (!info.modelpicture ? "<td style=\"width: 40%;\" data-v-2f7b1cca><p data-v-2f7b1cca>تصویر موجود نیست</p></td>" : "<!---->") + " <td style=\"width: 30%;\" data-v-2f7b1cca>" + _vm._ssrEscape(_vm._s(info.price)) + "</td> <td style=\"width: 30%;\" data-v-2f7b1cca><button type=\"button\" class=\"btn btn-sm btn-success\" data-v-2f7b1cca>\n                            افزودن\n                          </button></td></tr>";
  }) + "</tbody>" : "<!---->") + "</table></div></div></div></div> "), _c('TheFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/products/_product/index.vue?vue&type=template&id=2f7b1cca&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Navigation/TheHeader.vue + 4 modules
var TheHeader = __webpack_require__(54);

// EXTERNAL MODULE: ./components/TheFooter.vue + 4 modules
var TheFooter = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_product/index.vue?vue&type=script&lang=js&



/* harmony default export */ var _productvue_type_script_lang_js_ = ({
  components: {
    TheHeader: TheHeader["a" /* default */],
    TheFooter: TheFooter["a" /* default */]
  },

  data() {
    return {
      ProductId: ''
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(["DspProduct", "DspCart"])
  },
  methods: { ...Object(external_vuex_["mapActions"])(["GetProduct", "SetCart"]),

    AddCart(name, price) {
      this.SetCart({
        product: {
          name: name,
          price: price,
          id: Math.random().toString(36).substr(2, 10)
        }
      });
    }

  },

  mounted() {
    /* save id parameter  */
    this.ProductId = this.$route.query.id;
    /* get product details */

    this.GetProduct({
      id: this.ProductId
    });
  }

});
// CONCATENATED MODULE: ./pages/products/_product/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_productvue_type_script_lang_js_ = (_productvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/products/_product/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_productvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2f7b1cca",
  "2f7adae6"
  
)

/* harmony default export */ var _product = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("03ce0f35", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f3bf6110", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCAwIDEgNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHgxPSIwLjUiIHkxPSItMi4xODU1N2UtMDgiIHgyPSIwLjUwMDAwMiIgeTI9IjQ1IiBzdHJva2U9IiNEN0Q3RDciLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/buycart.0a3b06c.svg";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.22808b3.png";

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_15850d5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_15850d5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_15850d5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_15850d5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_15850d5e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Headerstyle[data-v-15850d5e]{box-shadow:0 5px 40px rgba(0,0,0,.095);padding:0 15px}.MenuStyle[data-v-15850d5e]{color:#404040;font-size:14px}.MenuStyle[data-v-15850d5e]:hover{color:#23a455}.DownloadBtn[data-v-15850d5e]{border-radius:5px;padding:10px 20px;background-color:#23a455;box-shadow:none;font-size:14px}.popup[data-v-15850d5e]{position:fixed;top:50%;left:50%;background-color:#fff;padding:20px;border:1px solid #000;z-index:100;width:90%;max-width:500px}.cart-number[data-v-15850d5e],.popup[data-v-15850d5e]{transform:translate(-50%,-50%)}.cart-number[data-v-15850d5e]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;border-radius:50%;background-color:red;font-size:1rem;color:#fff}.image-container[data-v-15850d5e]{position:relative;cursor:pointer}@media screen and (min-width:768px){.Headerstyle[data-v-15850d5e]{padding:0 50px}.DownloadBtn[data-v-15850d5e],.MenuStyle[data-v-15850d5e]{font-size:16px}.popup[data-v-15850d5e]{width:60%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_7081bb0c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_7081bb0c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_7081bb0c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_7081bb0c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_7081bb0c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-margin[data-v-7081bb0c]{margin-left:auto}.bkg-color[data-v-7081bb0c]{background-color:#f5f5f5}@media (max-width:767px){.AddressWidth[data-v-7081bb0c]{width:70%}}@media (min-width:768px){.AddressWidth[data-v-7081bb0c]{width:50%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheHeader.vue?vue&type=template&id=15850d5e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', [_vm._ssrNode("<div class=\"container-fluid bg-white pt-3 py-lg-3 Headerstyle px-lg-5\" data-v-15850d5e>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-15850d5e>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3 mb-3 mb-lg-0\" data-v-15850d5e><div class=\"d-flex align-items-center justify-content-between\" data-v-15850d5e><a href=\"/2022/apk/lavazem.apk\" data-v-15850d5e><button type=\"button\" class=\"DownloadBtn btn text-white\" data-v-15850d5e>\n              دانلود اپلیکیشن\n            </button></a> <img" + _vm._ssrAttr("src", __webpack_require__(47)) + " alt=\"devider\" class=\"d-none d-lg-block\" data-v-15850d5e> <div class=\"image-container\" data-v-15850d5e><img" + _vm._ssrAttr("src", __webpack_require__(48)) + " alt=\"buycart\" data-v-15850d5e> " + (_vm.DspCart.length !== 0 ? "<span class=\"ms-1 cart-number\" data-v-15850d5e>" + _vm._ssrEscape(_vm._s(_vm.DspCart.length)) + "</span>" : "<!---->") + "</div></div></div> "), _vm._ssrNode("<div class=\"col-lg-7 text-center px-lg-5 mt-0 mt-lg-2\" data-v-15850d5e>", "</div>", [_vm._ssrNode("<div class=\"d-flex align-items-center justify-content-between\" data-v-15850d5e>", "</div>", [_c('nuxt-link', {
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
      "to": "/"
    }
  }, [_c('p', {
    staticClass: "MenuStyle"
  }, [_vm._v("صفحه اصلی")])])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 mt-lg-1 text-start d-none d-lg-block\" data-v-15850d5e>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": __webpack_require__(49),
      "alt": "lavazemesakhtemanlogo"
    }
  })])], 1)], 2)]), _vm._ssrNode(" "), _vm.isPopupVisible ? _vm._ssrNode("<div class=\"popup\" data-v-15850d5e>", "</div>", [_vm._ssrNode("<table dir=\"rtl\" class=\"table\" data-v-15850d5e><thead data-v-15850d5e><tr data-v-15850d5e><th data-v-15850d5e>نام</th> <th data-v-15850d5e>قیمت</th> <th data-v-15850d5e></th></tr></thead> <tbody data-v-15850d5e>" + _vm._ssrList(_vm.DspCart, function (product) {
    return "<tr data-v-15850d5e><td data-v-15850d5e>" + _vm._ssrEscape(_vm._s(product.name)) + "</td> <td data-v-15850d5e>" + _vm._ssrEscape(_vm._s(product.price)) + "</td> <td data-v-15850d5e><button class=\"mx-2\" data-v-15850d5e>حذف </button></td></tr>";
  }) + "</tbody></table> <div class=\"d-flex justify-content-between px-2\" data-v-15850d5e><p data-v-15850d5e>" + _vm._ssrEscape(_vm._s(_vm.totalPrice)) + "</p> <p data-v-15850d5e>مجموع</p></div> "), _c('nuxt-link', {
    attrs: {
      "to": "/order"
    }
  }, [_c('button', {
    staticClass: "btn btn-danger btn-sm mx-2"
  }, [_vm._v("خرید")])]), _vm._ssrNode(" <button class=\"btn btn-success btn-sm mx-2\" data-v-15850d5e>بستن سبد خرید</button> <button class=\"btn btn-success btn-sm mx-2\" data-v-15850d5e>خالی کردن سبد خرید</button>")], 2) : _vm._e()], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue?vue&type=template&id=15850d5e&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation/TheHeader.vue?vue&type=script&lang=js&

/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      isPopupVisible: false
    };
  },

  methods: { ...Object(external_vuex_["mapActions"])(["EmptyCart", "DeleteCart"]),

    showPopup() {
      this.isPopupVisible = true;
    },

    hidePopup() {
      this.isPopupVisible = false;
    },

    emptyCard() {
      this.EmptyCart();
    },

    deleteCart(id) {
      this.DeleteCart({
        id: id
      });
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])(["DspCart"]),

    totalPrice() {
      return this.DspCart.map(item => ({ ...item,
        price: parseInt(item.price.replace(/[^0-9]/g, ''))
      })).reduce((sum, item) => sum + item.price, 0).toLocaleString();
    }

  },
  name: "TheHeader",
  props: ["menu_data"]
});
// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var Navigation_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Navigation/TheHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Navigation_TheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "15850d5e",
  "7b25d4af"
  
)

/* harmony default export */ var TheHeader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=7081bb0c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('footer', {
    attrs: {
      "id": "contact-us"
    }
  }, [_vm._ssrNode("<div class=\"container-full bkg-color py-md-5 py-lg-5\" data-v-7081bb0c><div class=\"container px-5\" data-v-7081bb0c><div class=\"row\" data-v-7081bb0c><div class=\"col-lg-4 text-start pt-4 pt-md-0 pt-lg-0\" data-v-7081bb0c><p class=\"fw-bold text-black\" data-v-7081bb0c>درباره ما</p> <p class=\"text-black text-justify\" data-v-7081bb0c>\n            مجموعه لوازم ساختمان با بیش از بیست سال تجربه\n            مفتخر است با ارايه خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن\n            مسکونی شیرآلات و دیگر لوازم ساختمانی را عرضه می کند.\n          </p></div> <div class=\"col-lg-4 col-6 text-start py-4 py-lg-0\" data-v-7081bb0c><p class=\"fw-bold text-black\" data-v-7081bb0c>شبکه های مجازی</p> <p class=\"text-black text-justify\" data-v-7081bb0c>\n            ما را در فضای مجازی دنبال کنید.\n          </p> <a href=\"https://instagram.com/lavazemesakhteman\" data-v-7081bb0c><i class=\"bi-instagram h4 text-black px-1\" data-v-7081bb0c></i></a> <a href=\"https://t.me/pipesystem301\" data-v-7081bb0c><i class=\"bi-telegram h4 text-black px-1\" data-v-7081bb0c></i></a> <a href=\"https://wa.me/09365833005\" data-v-7081bb0c><i class=\"bi-whatsapp h4 text-black px-1\" data-v-7081bb0c></i></a> <a href=\"https://youtube.com/channel/UCtE62u-O1OjQ-CFjfCnjJTw\" data-v-7081bb0c><i class=\"bi-youtube h4 text-black px-1\" data-v-7081bb0c></i></a></div> <div class=\"col-lg-4 col-6 text-start py-4 py-lg-0\" data-v-7081bb0c><p class=\"fw-bold text-black\" data-v-7081bb0c>اطلاعات تماس</p> <p class=\"text-black\" data-v-7081bb0c>02155580447</p> <p class=\"text-black small text-justify AddressWidth footer-margin\" data-v-7081bb0c>\n            خیابان خیام چهار راه گلوبندک کوچه حمام ملاباشی پاساژ 110 طبقه اول\n            پلاک 5\n          </p></div></div></div></div> <div class=\"container-full bg-dark\" data-v-7081bb0c><div class=\"container text-center\" data-v-7081bb0c><div class=\"row align-items-center\" data-v-7081bb0c><div class=\"col-12 mt-3 text-white\" data-v-7081bb0c><p data-v-7081bb0c>تمامی حقوق این وب سایت متعلق به فروشگاه لوازم ساختمان می باشد</p></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=7081bb0c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  props: ["footer_data"]
});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/TheFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7081bb0c",
  "73b3daf0"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1fabec0c", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjMzMzIgMTIuNjY2Nkw1LjY2NjUgNy45OTk5OEwxMC4zMzMyIDMuMzMzMzEiIHN0cm9rZT0iI0M1QzVDNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMTM0NzggMTguNzczM1YxNS43MTU2QzcuMTM0NzggMTQuOTM1MSA3Ljc3MjE3IDE0LjMwMjMgOC41NTg0IDE0LjMwMjNIMTEuNDMyNkMxMS44MTAyIDE0LjMwMjMgMTIuMTcyMyAxNC40NTEyIDEyLjQzOTMgMTQuNzE2M0MxMi43MDYzIDE0Ljk4MTMgMTIuODU2MyAxNS4zNDA4IDEyLjg1NjMgMTUuNzE1NlYxOC43NzMzQzEyLjg1MzkgMTkuMDk3OCAxMi45ODIxIDE5LjQwOTkgMTMuMjEyNCAxOS42NDAyQzEzLjQ0MjcgMTkuODcwNSAxMy43NTYxIDIwIDE0LjA4MjkgMjBIMTYuMDQzOEMxNi45NTk2IDIwLjAwMjMgMTcuODM4OCAxOS42NDI4IDE4LjQ4NzIgMTkuMDAwOEMxOS4xMzU2IDE4LjM1ODggMTkuNSAxNy40ODcgMTkuNSAxNi41Nzc4VjcuODY2ODZDMTkuNSA3LjEzMjQ2IDE5LjE3MjEgNi40MzU4NCAxOC42MDQ2IDUuOTY0NjdMMTEuOTM0IDAuNjc1ODcxQzEwLjc3MzcgLTAuMjUxNDM5IDkuMTExMSAtMC4yMjE0OTkgNy45ODUzOSAwLjc0Njk4MUwxLjQ2NzAxIDUuOTY0NjdDMC44NzI3NCA2LjQyMTk1IDAuNTE3NTUgNy4xMjA2NCAwLjUgNy44NjY4NlYxNi41Njg5QzAuNSAxOC40NjM5IDIuMDQ3MzggMjAgMy45NTYxNyAyMEg1Ljg3MjI5QzYuNTUxMjMgMjAgNy4xMDMgMTkuNDU2MiA3LjEwNzkyIDE4Ljc4MjJMNy4xMzQ3OCAxOC43NzMzWiIgZmlsbD0iI0M1QzVDNSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7b1cca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7b1cca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7b1cca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7b1cca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f7b1cca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper[data-v-2f7b1cca]{min-height:70vh}.ProductTxt[data-v-2f7b1cca]{text-align:justify!important;-moz-text-align-last:right!important;text-align-last:right!important}.slick-slide[data-v-2f7b1cca]{margin:10px}.ProdTitle[data-v-2f7b1cca]{font-weight:700}.CardLook[data-v-2f7b1cca]{padding:15px 15px 0!important;background-color:#fff;box-shadow:0 5px 15px 1px rgba(0,0,0,.06);border-radius:8px}.CatTxt[data-v-2f7b1cca]{color:#000;font-weight:700;font-size:23px}.FeatureFont[data-v-2f7b1cca]{font-size:10pt}.ProductInfo[data-v-2f7b1cca]{border:1px solid #e6e6e6;border-radius:10px;box-shadow:0 24px 46px rgba(0,0,0,.1)}.BuyBtn[data-v-2f7b1cca]{border-radius:5px;padding:8px 20px;background-color:#23a455;box-shadow:none;font-size:10pt}p[data-v-2f7b1cca]{padding:0;margin:0}.BroadBg[data-v-2f7b1cca]{background:#fff!important;border:1px solid #f0f0f0;box-shadow:0 10px 54px rgba(0,0,0,.08);border-radius:10px}.product_title[data-v-2f7b1cca]{font-weight:700;font-size:17pt}hr[data-v-2f7b1cca]{color:#e3e3e3;height:2px}.star[data-v-2f7b1cca]{color:#ffb800}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map