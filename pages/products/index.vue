<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <h1
        v-if="$route.query.title"
        class="PrdPrcTitle text-center pt-5 fw-bold"
      >
        {{ $route.query.title }}
      </h1>
      <h1
        v-if="!$route.query.title"
        class="PrdPrcTitle text-center pt-5 fw-bold">
        تمامی محصولات ساختمانی و صنعتی
      </h1>
      <!-- products section -->
      <section class="pt-lg-5">
        <div class="container text-center">
          <div dir="rtl" class="row">
            <div v-for="product in Products.data" :key="product.ProductId" class="col-lg-3">
              <div class="CardLook">
                <img
                  class="ProductImg"
                  v-if="product.productPictures"
                  :src="`https://api.lavazemesakhteman.com${product.productPictures.url}`"
                  alt="CatJpg"
                />
                <img
                  class="w-100"
                  v-if="!product.productPictures"
                  src="~/assets/pictures/notavalable.png"
                  alt="CatJpg"
                />
                <nuxt-link v-if="product.ProductSlug" :to="`/products/${product.ProductSlug}/?id=${product.theProductId}`">
                  <p class="ProdTitle text-start me-2 py-3">
                    {{ product.ProductTitle }}
                  </p>
                </nuxt-link>
                <nuxt-link v-if="!product.ProductSlug" :to="`/products/${product.ProductTitle}/?id=${product.theProductId}`">
                  <p class="ProdTitle text-start me-2 py-3">
                    {{ product.ProductTitle }}
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="Products.length == 0"
          class="container bg-white Content mt-2 rounded py-4"
        >
          <div dir="rtl" class="row px-4 content">
            <p class="text-center">محصولی یافت نشد</p>
          </div>
        </div>
      </section>
      <!-- weblog title section -->
      <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to="/blog">
              <button role="button" class="mt-5 CatBtn">مشاهده همه</button>
            </nuxt-link>
            <p class="BlogTxt mt-5 text-white">وبلاگ</p>
          </div>
        </div>
      </section>
      <!-- weblog posts section -->
      <section>
        <div class="container pb-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="container-full">
                <div class="row gx-3">
                  <div
                    v-for="post in Posts.data"
                    :key="post.ArticleId"
                    class="col-lg-4 px-4 px-lg-4"
                  >
                    <!-- post item one -->
                    <div class="p-lg-0 text-center">
                      <img
                        style="height: 300px"
                        v-if="post.ArticleImage"
                        :src="`https://api.lavazemesakhteman.com${post.ArticleImage.url}`"
                        class="w-100 bgbanerimg"
                        alt="bgbaner"
                      />
                      <img
                        class="w-100"
                        v-if="!post.ArticleImage"
                        src="~/assets/pictures/notavalable.png"
                        alt="CatJpg"
                      />
                    </div>
                    <nuxt-link
                      :to="`/blog/${post.ArticleTitle}/?id=${post.ArticleId}`"
                    >
                      <p class="PostItemTitle text-start pt-2 my-2">
                        {{ post.ArticleTitle }}
                      </p>
                      <div
                        class="PostItemDesc text-start text-white"
                        v-html="post.ArticleExcerpt"
                      />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <TheFooter />
  </section>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      SeProduct: "",
    };
  },
  computed: {
    ...mapGetters(["DspFltProducts", "DspPosts", "DspProducts"]),
  },
  methods: {
    ...mapActions(["GetProducts", "GetPosts", "SetCategorySearch"]),
  },

  asyncData(context) {
    /* If it is product page */
    if (!context.query.categoryid && !context.query.subcategoryid) {
      const Products = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type1-products?populate=*&pagination[page]=1&pagination[pageSize]=100&sort=id:desc`
      );
      const Posts = axios.get(
        `https://api.lavazemesakhteman.com/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=15&sort=id:desc`
      );
      return axios
        .all([Products, Posts])
        .then(
          axios.spread((...responses) => {
            const Products = responses[0];
            const Posts = responses[1];
            return { Products: Products.data, Posts: Posts.data };
          })
        )
        .catch((e) => {
          context.error(e);
        });
    }

    /* If it is categorie page */
    if (context.query.categoryid) {

      const Products = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type1-products?filters[OldCategoryType2CategoryId][$eq]=${context.query.categoryid}&populate=*&sort=id:desc`
      );
      const Posts = axios.get(
        `https://api.lavazemesakhteman.com/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=15&sort=id:desc`
      );
      const seo = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type2-Categories?filters[CategoryId][$eq]=${context.query.categoryid}`
      );
      return axios
        .all([Products, Posts, seo])
        .then(
          axios.spread((...responses) => {
            const Products = responses[0];
            const Posts = responses[1];
            const Seos = responses[2];
            return { Products: Products.data, Posts: Posts.data, Seos: Seos.data };
          })
        )
        .catch((e) => {
          context.error(e);
        });
    }

    /* If it is sub categorie page */
    if (context.query.subcategoryid) {
      
      const Products = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type1-products?filters[OldCategoryType3SubCategoryId][$eq]=${context.query.subcategoryid}&populate=*&sort=id:desc`
      );
      const Posts = axios.get(
        `https://api.lavazemesakhteman.com/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=15&sort=id:desc`
      );
      const seo = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type3-Sub-Categories?filters[CategoryId][$eq]=${context.query.subcategoryid}`
      );
      return axios
        .all([Products, Posts, seo])
        .then(
          axios.spread((...responses) => {
            const Products = responses[0];
            const Posts = responses[1];
            const Seos = responses[2];
            return { Products: Products.data, Posts: Posts.data, Seos: Seos.data };
          })
        )
        .catch((e) => {
          context.error(e);
        });
    }
  },

  head() {
    /* if page is categorie */
    if (this.$route.query.categoryid) {
      return {
        title: this.Seos.data[0].CategoryMetaTitle,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.Seos.data[0].CategoryMetaDescription,
          },
        ],
      };
    }
    /* if page is subcategorie */
    if (this.$route.query.subcategoryid) {
      return {
        title: this.Seos.data[0].CategoryMetaTitle,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.Seos.data[0].CategoryMetaDescription,
          },
        ],
      };
    }

    /* if page is all products */
    if (!this.$route.query.categoryid && !this.$route.query.subcategoryid) {
      return {
        title: "تمامی محصولات لوازم ساختمانی و صنعتی",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "در این قسمت تمامی محصولات مربوط به لوازم ساختمانی و صنعتی قرار داده شده است",
          },
        ],
      };
    }
  },
};
</script>


<style scoped>

.ProductImg {
  width: 250px;
  height: 250px;
}

.bgbanerimg {
  border-radius: 12px;
}

.bigimgtxtdesc {
  font-size: 12pt;
}

.bigimgtxt {
  font-weight: bold;
  font-size: 16pt;
}

.PostItemDesc {
  font-size: 11pt;
}

.bigimgtxtdesc {
  font-size: 12pt;
}

.PostItemTitle {
  font-weight: bold;
}

.BlogTxt {
  font-weight: bold;
  font-size: 18pt;
}

/* categorie */
.CatBtn {
  background-color: #be2623;
  color: #ffff;
  border-radius: 8px;
  box-shadow: none;
  padding: 8px 24px;
  border: none;
}

.BlogTxt {
  font-weight: bold;
  font-size: 18pt;
}

/* new product */
.ProdTitle {
  color: black;
  font-weight: bold;
}

/* FeatureBox */
.CatTxt {
  color: #000000;
  font-weight: bold;
  font-size: 23px;
  margin: 0;
  padding: 0;
}

/* general slick style for items space */
.slick-slide {
  margin: 10px 10px;
}

.PdfTitle {
  font-size: 14pt;
}

.DownloadBtn {
  border-radius: 5px;
  padding: 8px 20px;
  background-color: #23a455;
  box-shadow: none;
}

.CardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.ProductPriceBkg {
  background-color: #0e3746;
}

/* Content container */
.Content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: white;
}
</style>