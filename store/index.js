import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
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
      CompareCart: []
    },
    mutations: {
      /* priceList */
      async priceList(state) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/pdf`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.ProductList = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* catalogues */
      async catalogues(state) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/catalogue`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Catalogues = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* Products */
      async Products(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/products/?per_page=${payload.count}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.FltProduct = response.data;
            /* filter products by categorie id */
            if (payload.CategoryId) {
              state.FltProduct = Object.values(state.FltProduct).filter((item) => {
                return item.acf.daste == payload.CategoryId
              })
            }
            /* filter products by subcategory id */
            if (payload.SubCategoryId) {
              state.FltProduct = Object.values(state.FltProduct).filter((item) => {
                return item.acf.zirdaste == payload.SubCategoryId
              })
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* Categories */
      async Categories(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/daste/?per_page=${payload.count}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Categories = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* SubCategorie */
      async SubCategory(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/zirdaste/?per_page=${payload.count}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.SubCategory = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },


      /* product detail */
      async Product(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/products/${payload.id}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Product = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      /* posts */
      async Posts(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=${payload.count}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Posts = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* post */
      async Post(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "get",
          url: `${process.env.UrlApi}/wp-json/wp/v2/posts/${payload.id}`,
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.Post = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },

      /* Categorysearch */
      CategorySearch(state, payload) {
        state.FltProduct = Object.values(state.FltProduct).filter((item) => {
          return item.acf.productname.includes(payload.SeProduct) 
        })
      }, 
      /* Cart */
      AddCart(state, payload) {
        state.Cart.push(payload.product)
      },
      /* CompareCart */
      CompareCart(state, payload) {
        state.CompareCart.push(payload.product)
      }, 
      /* Clear Cart */
      ClearCart(state) {
        state.Cart = []
      }, 
      /* Delete Item from cart */
      DeleteCartItem(state, payload) {
        state.Cart = state.Cart.filter(obj => obj.id !== payload.id)
      }, 

      /* Delete Item form CompareCart */
      DeleteCompareCart(state, payload) {
        state.CompareCart = state.CompareCart.filter(obj => obj.id !== payload.id)
      }, 

      FilterFltProducts(state, payload) {
        state.FltProduct = {}
      }
    },
    actions: {
      /* Get ProductList */
      GetpriceList({ commit }, payload) {
        commit("priceList", payload)
      },
      /* Get Products */
      GetProducts({ commit }, payload) {
        commit("Products", payload)
      },
      /* Get Catalogues */
      GetCatalogues({ commit }, payload) {
        commit("catalogues", payload)
      },
      /* Get Categories */
      GetCategories({ commit }, payload) {
        commit("Categories", payload)
      },
      /* Get SubCategory */
      GetSubCategory({ commit }, payload) {
        commit("SubCategory", payload)
      },
      /* Get Product */
      GetProduct({ commit }, payload) {
        commit("Product", payload)
      },
      /* Get Post */
      GetPost({ commit }, payload) {
        commit("Post", payload)
      },
      /* Get Posts */
      GetPosts({ commit }, payload) {
        commit("Posts", payload)
      },
      /* Set CategorySearch */
      SetCategorySearch({commit}, payload) {
        commit("CategorySearch", payload)
      }, 
      /* Set Cart */
      SetCart({commit}, payload) {
        commit("AddCart", payload)
      }, 
      SetFilterFltProducts({commit}, payload) {
        commit("FilterFltProducts", payload)
      }, 
      /* SetCompareCart */
      SetCompareCart({commit}, payload) {
        commit("CompareCart", payload)
      },
      /* Empty Cart */
      EmptyCart({commit}, payload) {
        commit("ClearCart", payload)
      }, 
      /* Delete cart item */
      DeleteCart({commit}, payload) {
        commit("DeleteCartItem", payload)
      }, 
      /* Delete Compare Cart Item */
      SetDeleteCompareCart({commit}, payload) {
        commit("DeleteCompareCart", payload)
      }, 
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
        return state.SubCategory
      }, 
      /* Dsp Cart */
      DspCart(state) {
        return state.Cart
      }, 
      /* Dsp CpmpareCart */
      DspCpmpareCart(state) {
        return state.CompareCart
      }
    }
  });
};

export default createStore;
