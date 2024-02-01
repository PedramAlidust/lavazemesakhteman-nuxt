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
      CompareCart: [],
      PanelCategorySucRes: {},
      PanelCategoryErrRes: {},
      LoginSucRes: {},
      LoginErrRes: {}
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
      },

      async PanelPostCategory(state, payload) {

        const formData = new FormData()
        formData.append('categorie_title', payload.categorie_title)
        formData.append('categorie_picture', payload.categorie_picture)

        var ReqConfig = {
          method: "post",
          url: `${process.env.PanelUrlApi}/api/categories`,
          data: formData,
          headers: {
            Authorization: "Bearer " + payload.token,
            'Content-Type': 'multipart/form-data',
          }
        }

        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.PanelCategorySucRes = response.data;
          })
          .catch((error) => {
            state.PanelCategoryErrRes = error.response
          });

      },
      /* Login to panel */
      async Login(state, payload) {
        /* request config */
        var ReqConfig = {
          method: "post",
          url: `${process.env.PanelUrlApi}/api/login/`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            email: payload.email,
            password: payload.password,
          }
        };
        /* request section */
        await this.$axios(ReqConfig)
          .then((response) => {
            state.LoginSucRes = response.data
            /* clear error response */
            state.LoginErrRes = null

            /* store token in cookie and push to user profile */
            if (response.status == 200) {

              /* remove old cookie */
              this.$cookiz.remove("jwt-token");
              /* set cookie */
              this.$cookiz.set("jwt-token", response.data.token, { maxAge: 60 * 60 * 24 * 30, path: '/' })

              /* push to profile */
              this.$router.push({
                path: '/panel/',
              })

            }
          })
          .catch((error) => {
            state.LoginErrRes = error.response
            /* clear sucess response */
            state.LoginSucRes = null
          });
      }, 
        /* Sign Out the panel */
        SignOut() {
          this.$cookiz.remove("jwt-token", { maxAge: 1 });
          this.$cookiz.remove("jwt-token");

        /* Push to login page */
          this.$router.push('/panel/login')
        },
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
      SetCategorySearch({ commit }, payload) {
        commit("CategorySearch", payload)
      },
      /* Set Cart */
      SetCart({ commit }, payload) {
        commit("AddCart", payload)
      },
      SetFilterFltProducts({ commit }, payload) {
        commit("FilterFltProducts", payload)
      },
      /* SetCompareCart */
      SetCompareCart({ commit }, payload) {
        commit("CompareCart", payload)
      },
      /* Empty Cart */
      EmptyCart({ commit }, payload) {
        commit("ClearCart", payload)
      },
      /* Delete cart item */
      DeleteCart({ commit }, payload) {
        commit("DeleteCartItem", payload)
      },
      /* Delete Compare Cart Item */
      SetDeleteCompareCart({ commit }, payload) {
        commit("DeleteCompareCart", payload)
      },
      /* Set Post Categorie */
      SetPanelPostCategory({ commit }, payload) {
        commit("PanelPostCategory", payload)
      },
      /* SetLogin */
      SetLogin({ commit }, payload) {
        commit("Login", payload)
      }, 
      /* Set Sign Out */
      SetSignOut({ commit }, payload) {
        commit("SignOut", payload)
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
        return state.SubCategory
      },
      /* Dsp Cart */
      DspCart(state) {
        return state.Cart
      },
      /* Dsp CpmpareCart */
      DspCpmpareCart(state) {
        return state.CompareCart
      },
      /* Dsp PanelCategorySucRes */
      DspPanelCategorySucRes(state) {
        return state.PanelCategorySucRes
      },
      /* Dsp PanelCategoryErrRes */
      DspPanelCategoryErrRes(state) {
        return state.PanelCategoryErrRes
      },
      /* Dsp Login Succes Response */
      DspLoginSucRes(state) {
        return state.LoginSucRes;
      },
      /* Dsp Login Error Response */
      DspLoginErrRes(state) {
        return state.LoginErrRes;
      },
    }
  });
};

export default createStore;
