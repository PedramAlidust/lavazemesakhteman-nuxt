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
        تمامی محصولات لوازم ساختمانی
      </h1>
      <!-- search in products -->
      <div class="container bg-white Content my-5 rounded py-4">
        <div dir="rtl" class="row px-4 content">
          <input
            @input="search"
            v-model="SeProduct"
            type="text"
            class="form-control"
            placeholder="محصول مورد نظر خود را سرچ کنید"
          />
        </div>
      </div>
      <!-- products section -->
      <section class="pt-lg-5">
        <div class="container text-center">
          <div dir="rtl" class="row">
            <div v-for="product in AllProductDetails" :key="product.id" class="col-lg-3">
              <div class="CardLook">
                <nuxt-link :to="`/product/single/?title=${product.themodel}&id=${product.id}`">
                  <img
                    class="ProductImg"
                    v-if="product.modelpicture"
                    :src="product.modelpicture"
                    alt="CatJpg"
                  />
                  <img
                    class="w-100"
                    v-if="!product.modelpicture"
                    src="~/assets/pictures/notavalable.png"
                    alt="CatJpg"
                  />
                </nuxt-link>
                  <nuxt-link :to="`/product/single/?title=${product.themodel}&id=${product.id}`">
                    <p class="ProdTitle text-start me-2 py-3">
                      {{ product.themodel }}
                    </p>
                  </nuxt-link>
                </div>
                <!-- price -->
                <div class="text-start pb-5">
                   <div class="fw-bold text-white ps-2 pb-2">قیمت به تومان: {{product.price}}</div>
                   <div class="rounded py-2 ps-2 bg-light text-success">وضعیت: موجود</div>
                  <nuxt-link :to="`/product/single/?title=${product.themodel}&id=${product.id}`">
                     <div class="rounded py-2 ps-2 fw-bold bg-danger text-white mt-2">سفارش محصول</div>
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
    search() {
      if (!this.SeProduct) {
        if (!this.$route.query.subcategoryid && !this.$route.query.categoryid) {
          this.GetProducts({
            count: 100,
          });
          this.Products = this.DspFltProducts;
        }
      } else {
        this.AllProductDetails = Object.values(this.AllProductDetails).filter((item) => {
          return item.themodel.includes(this.SeProduct);
        });
      }
    },
  },

  async asyncData(context) {
  /* If it is the product page */
  if (!context.query.categoryid && !context.query.subcategoryid) {
    const apiUrl = `${process.env.UrlApi}/wp-json/wp/v2/products/?per_page=100`;

    // Fetch products
    return axios.get(apiUrl)
      .then(productsResponse => {
        // Initialize an empty array to collect all details
        let allProductDetails = [];

        // Loop through each product and extract the desired details
        productsResponse.data.forEach(product => {
          product.acf.productdetails.forEach(detail => {
            // Extract necessary fields and push into the array
            allProductDetails.push({
              id: product.id,
              themodel: detail.themodel,
              size: detail.size,
              price: detail.price,
              modelpicture: detail.modelpicture,
            });
          });
        });

        

        return {
          Products: productsResponse.data, // Optionally include original products data
          AllProductDetails: allProductDetails,
        };
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        return {
          Products: [],
          AllProductDetails: [],
        };
      });
  }
},

  head() {
    /* if page is all products */
    if (!this.$route.query.categoryid && !this.$route.query.subcategoryid) {
      return {
        title: "خرید محصولات و لوازم ساختمانی با قیمت مناسب",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "خرید و اطلاع از به روز ترین قیمت لوازم و محصولات ساختمانی و صنعتی",
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