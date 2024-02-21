<template>
    <section class="ProductPriceBkg">
            <TheHeader />
            <!-- page container -->
                <main class="pb-5 mb-5">
                  <h1 v-if="$route.query.title"  class="PrdPrcTitle text-center pt-5 fw-bold">{{ $route.query.title }}</h1>
                  <h1 v-if="!$route.query.title"  class="PrdPrcTitle text-center pt-5 fw-bold">تمامی محصولات ساختمانی و صنعتی</h1>
                   <!-- search in products -->
                    <div class="container bg-white Content mt-5 rounded py-4">
                          <div dir="rtl" class="row px-4 content">
                                 <input @input="search" v-model="SeProduct" type="text" class="form-control" placeholder="محصول مورد نظر خود را سرچ کنید">
                          </div>
                    </div>
                  <!-- products section -->
                  <section class="pt-lg-5">
                      <div class="container text-center">
                            <div class="row">
                                     <div v-for="product in Products" :key="product.id"  class="col-lg-3">
                                      <div class="CardLook">
                                        <img class="w-100" v-if="product.acf.productpictures" :src="product.acf.productpictures[0].thepicture" alt="CatJpg">
                                        <img class="w-100" v-if="!product.acf.productpictures" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                                        <nuxt-link :to="`/products/${product.slug}/?id=${product.id}`">
                                        <p class="ProdTitle text-start me-2 py-3">{{ product.acf.productname }}</p>
                                        </nuxt-link>
                                      </div>
                                    </div>
                            </div>
                      </div>
                    <div v-if="Products.length == 0" class="container bg-white Content mt-2 rounded py-4">
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
                            <div class="col-lg-8">
                              <div class="container-full">
                                <div v-if="Posts" class="row gx-3">
                                      <div v-for="post in Posts" :key="post.id" class="col-lg-4">
                                        <!-- post item one -->
                                          <div class="bg-image">
                                            <img v-if="post.acf.postpic" :src="post.acf.postpic" class="bgbanerimg w-100" alt="bgbaner"/>
                                            <img class="w-100" v-if="!post.acf.postpic" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                                            <div class="mask" style="border-radius: 12px; background: linear-gradient(359.73deg, #000000 -30.17%, rgba(217, 217, 217, 0) 12.75%);"></div>
                                          </div>
                                          <nuxt-link :to="`/blog/${post.title.rendered}/?id=${post.id}`">
                                          <p class="PostItemTitle text-start pt-2 my-2 text-white">{{post.title.rendered}}</p>
                                          <div class="PostItemDesc text-start text-white" v-html="post.excerpt.rendered" />
                                          </nuxt-link>
                                    </div>
                                </div>
                              </div>
                            </div>
                                <!-- big image weblog -->
                            <div class="col-lg-4 ">
                                <div class="bg-image">
                                  <img
                                    src="~/assets/pictures/bgbaner.jpg"
                                    class="bgbanerimg w-100"
                                    alt="bgbaner"/>
                                  <div class="mask" style="border-radius: 12px; background: linear-gradient(359.73deg, #000000 -30.17%, rgba(217, 217, 217, 0) 80.75%);">
                                    <div class="d-flex flex-column text-start h-100">
                                      <p style="margin-top: auto;" class="bigimgtxt text-white mb-0 pb-2 ps-4">عنوان مطلب</p>
                                      <p  class="bigimgtxtdesc text-white mb-0 pb-5 ps-4">این متن توضیحات در خصوص این مقاله در وبلاگ می باشد</p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                              <!-- end big image weblog -->
                          </div>
                        </div>
                    </section>
                </main>
                <div dir="ltr">
                  {{ DspProducts }}
                </div>
            <TheFooter />
    </section>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex"
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,    
    TheFooter,
  },
   data() {
    return {
      SeProduct: '', 
    }
  }, 
  computed: {
    ...mapGetters(["DspFltProducts", "DspPosts", "DspProducts"])
  }, 
   methods: {
    ...mapActions(["GetProducts", "GetPosts", "SetCategorySearch"]),
    search() {
      if(!this.SeProduct) {
        /* get products */
            if(this.$route.query.categoryid) {
                this.GetProducts({
                  CategoryId: this.$route.query.categoryid, 
                  count: 100
                  })
                this.Products = this.DspFltProducts
               }
            if(this.$route.query.subcategoryid) {
                  this.GetProducts({
                    SubCategoryId: this.$route.query.subcategoryid, 
                    count: 100
              })
                this.Products = this.DspFltProducts 
            }
            if(!this.$route.query.subcategoryid && !this.$route.query.categoryid) {
                  this.GetProducts({
                    count: 100
                  })
                this.Products = this.DspFltProducts   
           }
      } else {
          this.Products = Object.values(this.Products).filter((item) => {
          return item.acf.productname.includes(this.SeProduct) 
          })     
      }
    }
  },

  asyncData(context) {

    /* If it is product page */
    if(!context.query.categoryid && !context.query.subcategoryid) {
        const Products = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/products/?per_page=100`
        );
        const Posts = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=100`
        );
      return axios
              .all([Products,Posts]).then(
                axios.spread((...responses) => {
                  const Products = responses[0];
                  const Posts = responses[1];
                    return {Products: Products.data,Posts: Posts.data,};
                }))
       .catch((e) => {context.error(e);});
    }

    /* If it is categorie page */
    if(context.query.categoryid) {
        const Products = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/products/?per_page=100`
        );
        const Posts = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=100`
        );
        const Categorie = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/daste/${context.query.categoryid}`
        );
      return axios
              .all([Products,Posts,Categorie]).then(
                axios.spread((...responses) => {
                  const Products = responses[0];
                  const Posts = responses[1];
                  const Categorie = responses[2];
                  const FltProduct = Object.values(Products.data).filter((item) => {
                    return item.acf.daste == context.query.categoryid
                  })
                    return {Products: FltProduct,Posts: Posts.data, Categorie: Categorie.data};
                }))
       .catch((e) => {context.error(e);});
     }

    /* If it is sub categorie page */
    if(context.query.subcategoryid) {
        const Products = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/products/?per_page=100`
        );
        const Posts = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=100`
        );
          const SubCategorie = axios.get(
          `${process.env.UrlApi}/wp-json/wp/v2/zirdaste/${context.query.subcategoryid}`
        );
     return axios
            .all([Products,Posts,SubCategorie]).then(
              axios.spread((...responses) => {
                const Products = responses[0];
                const Posts = responses[1];
                const SubCategorie = responses[2];
                const FltProduct = Object.values(Products.data).filter((item) => {
                  return item.acf.zirdaste == context.query.subcategoryid
                })
                  return {Products: FltProduct,Posts: Posts.data, SubCategorie: SubCategorie.data};
              }))
            .catch((e) => {context.error(e);});
      }
  }, 
  
  head() {
    /* if page is categorie */
     if(this.$route.query.categoryid) {
      return {
        title: this.Categorie.yoast_meta.yoast_wpseo_title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.Categorie.yoast_meta.yoast_wpseo_metadesc
            },
          ],
        }
     }
    /* if page is subcategorie */
       if(this.$route.query.subcategoryid) {
      return {
        title: this.SubCategorie.yoast_meta.yoast_wpseo_title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.SubCategorie.yoast_meta.yoast_wpseo_metadesc,
            },
          ],
        }
     }

    /* if page is all products */
    if(!this.$route.query.categoryid && !this.$route.query.subcategoryid) {
      return {
        title: "تمامی محصولات لوازم ساختمانی و صنعتی",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "در این قسمت تمامی محصولات مربوط به لوازم ساختمانی و صنعتی قرار داده شده است",
            },
          ],
        }
     }
  }
}
</script>


<style scoped>

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
  background-color: #BE2623;
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
    background-color: #23A455;
    box-shadow: none;
}

.CardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.ProductPriceBkg {
  background-color: #0E3746;
}

/* Content container */
.Content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: black;
}

</style>