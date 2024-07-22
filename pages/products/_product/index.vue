<template>
<section>
<TheHeader :cartUpdated="isCartUpdated" />
<div class="wrapper">

<!-- single product broad crumb -->
<div class="container BroadBg py-2 mt-5">
    <div class="d-flex align-items-center justify-content-end">
        <p v-if="Product.acf" class="text-success">{{Product.acf.productname}}</p>
        <img class="px-2" src="~/assets/svg/leftarrow.svg" alt="home">
        <img src="~/assets/svg/home.svg" alt="home">
    </div>
</div>

<!-- product datails for desktop -->
<div class="d-none d-md-block d-lg-block container px-0 mt-4">
    <div class="row">
            <h1 v-if="Product.acf" class="product_title text-start">
              {{ Product.acf.productname }}
            </h1>
            <div class="container-full">
                   <!-- product table -->  
                  <table dir="rtl" class="table equal-width-cols table-bordered table-striped mt-4 mb-4 text-center">
                    <thead v-if="Product.acf">
                      <tr>
                         <th scope="col">مدل</th>
                         <th scope="col">سایز</th>
                         <th scope="col" style="width: 280px;">عکس</th>
                         <th scope="col">قیمت</th>
                         <th scope="col">رنگ</th>
                         <th scope="col">جنس</th>
                         <th v-if="Product.acf.productdetails[0].pn" scope="col">PN</th>
                         <th v-if="Product.acf.productdetails[0].debi" scope="col">DN</th>
                         <th v-if="Product.acf.productdetails[0].tul" scope="col">طول</th>
                         <th scope="col">خرید</th>
                      </tr>
                    </thead>
                    <tbody v-if="Product.acf">
                      <tr v-for="info in Product.acf.productdetails" :key="info.id">
                            <td class="align-middle" v-if="info.themodel">
                                <nuxt-link :to="`/product/single/?title=${info.themodel}&id=${PassedUrlId}`">
                                    <p class="text-black">
                                        {{ info.themodel }}        
                                    </p>
                                </nuxt-link>
                                </td>
                            <td class="align-middle" v-if="!info.themodel">-</td>
                            <td class="align-middle" v-if="info.size">{{ info.size }}</td>
                            <td class="align-middle" v-if="!info.size">-</td>
                            <td class="align-middle" v-if="info.modelpicture">
                                    <img class="w-100" :src="info.modelpicture" :alt="`تصویر یک  ${info.themodel}`">
                            </td>
                            <td class="align-middle" v-if="!info.modelpicture">
                            <p>تصویر موجود نیست</p>
                            </td>
                            <td class="align-middle" v-if="info.price">{{ info.price }} تومان</td>
                            <td class="align-middle" v-if="info.color">{{ info.color }}</td>
                            <td class="align-middle" v-if="!info.color">-</td>
                            <td class="align-middle" v-if="info.material">{{ info.material }}</td>
                            <td class="align-middle" v-if="!info.material">-</td>
                            <td class="align-middle" v-if="info.pn">{{ info.pn }}</td>
                            <td class="align-middle" v-if="info.debi">{{ info.debi }}</td>
                            <td class="align-middle" v-if="info.tul">{{ info.tul }}</td>
                            <td class="align-middle">
                            <button @click="AddCart(info.themodel, info.price)" type="button" class="btn btn-sm btn-success">
                            افزودن    
                            </button>
                            </td>

                      </tr>
                    </tbody>
                  </table>    
               </div>          
            </div>
     </div>
</div>

<!-- product details for tablet and mobile -->


<!-- product introduction -->
<div class="container Content rounded pb-5 pt-3">
    <div dir="rtl" class="row px-4 content" v-html="Product.acf.productcontent" />
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
      PassedUrlId: '', 
      isCartUpdated: false
    }
  }, 
   computed: {
    ...mapGetters(["DspProduct", "DspCart"])
  }, 
   methods: {
    ...mapActions(["GetProduct", "SetCart"]), 
    AddCart(name, price) {
      this.SetCart({
        product: {name: name, price: price, id: Math.random().toString(36).substr(2, 10)}
      })
      this.isCartUpdated = `${Date.now()}_${Math.random()}`
    }
  },

  created() {
    this.PassedUrlId = this.$route.query.id
  },

  asyncData(context) {
    const Product = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/products/${context.query.id}`
    );
    return axios
      .all([
        Product
      ])
      .then(
        axios.spread((...responses) => {
          const Product = responses[0];
          return {
            Product: Product.data
          };
        })
      )
      .catch((e) => {
        context.error(e);
      });
   }, 
  head() {
    return {
      title: this.Product.yoast_meta.yoast_wpseo_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.Product.yoast_meta.yoast_wpseo_metadesc,
        }
      ]
    }
  }
}
</script>

<style scoped>

.table th {
    text-align: center;
}

.table {
    text-align: right;
}

/* Add custom styles if needed */
.equal-width-cols {
      table-layout: fixed;
      width: 100%;
    }

/* product page height */

.wrapper {
  min-height: 0;
}

@media (min-width: 768px) {
  .wrapper {
    min-height: 70vh;
  }
}

/* product txt */
.ProductTxt {
    text-align: justify !important;
    text-align-last: right !important;
}

/* general slick style for items space */
.slick-slide {
  margin: 10px 10px;
}

/* Mobile Title */
.ProdTitle {
  font-weight: bold;
  font-size: 16pt;
}

/* Mobile Price */
.price {
  font-weight: bold;
  font-size: 14pt;
  color: #22944d;
}

/* Other Mobile Info */
.OtherInfo {
  font-weight: bold;
  font-size: 14pt;
  color: #22944d;
}


.price-number {
   font-weight: bold;
  font-size: 12pt;
}

.Product_Img {
  width: 70%;
}

.CardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
  border-radius: 8px;
}

/* FeatureBox */
.CatTxt {
  color: #000000;
  font-weight: bold;
  font-size: 23px;
}

/* Product Info */

.FeatureFont {
    font-size: 10pt;
}

.ProductInfo {
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    box-shadow: 0px 24px 46px rgba(0, 0, 0, 0.1);
}

.BuyBtn {
    border-radius: 5px;
    padding: 8px 20px;
    background-color: #23A455;
    box-shadow: none;
    font-size: 10pt;
}

/* general */
p {
    padding: 0;
    margin: 0;
}

.BroadBg {
    background: #FFFFFF !important;
    border: 1px solid #F0F0F0;
    box-shadow: 0px 10px 54px rgba(0, 0, 0, 0.08);
    border-radius: 10px; 
}

.product_title {
    font-weight: bold;
    font-size: 17pt;
}

hr {
    color: #E3E3E3;
    height: 2px;
}

.star {
    color: #FFB800;
}
</style>