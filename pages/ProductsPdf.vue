<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <h1 class="PrdPrcTitle text-center pt-5 fw-bold">
        لیست قیمت محصولات لوازم ساختمان و صنعتی
      </h1>
      <div class="container Content mt-5 rounded py-5">
        <div dir="rtl" v-if="pdfs" class="row px-4">
          <div v-for="price in pdfs" :key="price.id" class="col-lg-3 py-3">
            <!-- pdf card -->
            <div class="ListCardLook text-center">
              <div>
                <img class="w-100" :src="price.acf.pdfimage" alt="CatJpg" />
              </div>
              <div class="py-3">
                <p class="PdfTitle fw-bold text-center me-2">
                  {{ price.acf.pdftitle }}
                </p>
                <a target="_blank" :href="price.acf.thepdf">
                  <button
                    type="button"
                    class="DownloadBtn btn-sm btn text-white"
                  >
                    دانلود لیست قیمت
                  </button>
                </a>
              </div>
            </div>
            <!-- end pdf card -->
          </div>
        </div>
        <!-- Loading -->
      </div>
          <!-- Latest Products -->
          <section>
              <div class="container mt-3 pt-5 pb-4">
                <div class="d-flex align-items-center justify-content-end">
                  <p class="CatTxt">آخرین محصولات</p>
                </div>
              </div>
            </section>
             <!-- products section -->
            <section>
                <div class="container py-5 text-center">
                  <div class="row">
                      <div v-for="subcategory in zirdaste" :key="subcategory.id" class="col-lg-3">
                        <div class="CardLook mb-5">
                            <nuxt-link :to="`/products/?subcategoryid=${subcategory.id}&title=${subcategory.title.rendered}`">
                              <img width="300" height="250" class="w-100" v-if="subcategory.acf.subcatpic" :src="subcategory.acf.subcatpic" alt="CatJpg">
                              <img class="w-100" v-if="!subcategory.acf.subcatpic" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                              <p class="ProductTitle mt-3">{{subcategory.title.rendered}}</p>
                            </nuxt-link>                  
                        </div>
                      </div>
                  </div>    
                </div>
            </section>    
       <!-- see all -->     
      <section class="pb-5">
                  <div class="container">
                    <div class="d-flex align-items-center justify-content-between">
                      <button role="button" class="CatBtn">مشاهده همه</button>
                      <p class="BlogTxt">مطالب وبلاگ</p>
                    </div>
                  </div>
                </section>
      <!-- weblog posts section -->
      <section>
        <div class="container pb-5">
          <div dir="rtl" class="row">
            <div class="col-lg-12">
              <div class="container-full">
                <div class="row gx-3">
                  <div
                    v-for="post in Posts"
                    :key="post.id"
                    class="col-lg-4 px-4 px-lg-4"
                  >
                    <!-- post item one -->
                    <div class="p-lg-0 text-center">
                      <img
                        style="height: 300px"
                        v-if="post.acf.postpic"
                        :src="post.acf.postpic"
                        class="w-100 bgbanerimg"
                        alt="bgbaner"
                      />
                      <img
                        class="w-100"
                        v-if="!post.acf.postpic"
                        src="~/assets/pictures/notavalable.png"
                        alt="CatJpg"
                      />
                    </div>
                    <nuxt-link
                      :to="`/blog/${post.title.rendered}/?id=${post.id}`"
                    >
                      <p class="PostItemTitle text-start pt-2 my-2">
                        {{ post.title.rendered }}
                      </p>
                      <div
                        class="PostItemDesc text-start text-white"
                        v-html="post.excerpt.rendered"
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
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },

  asyncData(context) {
    const zirdaste = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/zirdaste/?per_page=4`
    );
    const pdfs = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/pdf/?per_page=100`
    );
    const Posts = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=100`
    );
    return axios
      .all([zirdaste, pdfs, Posts])
      .then(
        axios.spread((...responses) => {
          const zirdaste = responses[0];
          const pdfs = responses[1];
          const Posts = responses[2];

          return {
            zirdaste: zirdaste.data,
            pdfs: pdfs.data,
            Posts: Posts.data,
          };
        })
      )
      .catch((e) => {
        context.error(e);
      });
  },
  head() {
    return {
      title: "لیست قیمت محصولات لوازم بهداشتی ساختمان",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "جدید ترین قیمت های محصولات لوازم بهداشتی ساختمان را مشاهده و دانلود کنید",
        },
      ],
    };
  },
};
</script>


<style scoped>
.ProductTitle {
  color: black;
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
  color: #ebe9e2;
}

.bigimgtxtdesc {
  font-size: 12pt;
}

.PostItemTitle {
  font-weight: bold;
}

/* categorie */
.CatBtn {
  background-color: #23a455;
  color: #ffff;
  border-radius: 8px;
  box-shadow: none;
  padding: 8px 24px;
  border: none;
}

.BlogTxt {
  color: #fff;
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
  font-weight: bold;
}

/* FeatureBox */
.CatTxt {
  color: #fff;
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
  background-color: #be2623;
  box-shadow: none;
}

.CardLook {
  padding: 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

.ListCardLook {
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
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Content container */
.Content {
  background-color: #f4f2ec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: #ffff;
}
</style>