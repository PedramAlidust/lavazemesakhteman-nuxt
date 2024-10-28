<template>
<section>
<TheHeader :cartUpdated="isCartUpdated" />
<div class="wrapper">

<!-- single product broad crumb -->
<div class="container BroadBg py-2 mt-5">
    <div dir="rtl" class="d-flex align-items-center justify-content-start">
        <img src="~/assets/svg/home.svg" alt="home">
        <img class="px-2" src="~/assets/svg/leftarrow.svg" alt="arrow">
        <p v-if="CatTitle.data" class="text-success">{{CatTitle.data[0].ProductTitle}}</p>
        <img class="px-2" src="~/assets/svg/leftarrow.svg" alt="arrow">
        <p v-if="productTitle" class="text-success">{{productTitle}}</p>
    </div>
</div>

<!-- product datails for desktop -->
<div class="d-none d-md-block d-lg-block container px-0 mt-4">
    <div  class="row">
            <h1 dir="rtl" v-if="productTitle" class="product_title text-start">
              {{ productTitle }}
            </h1>
            <div class="container-full">
                   <!-- product table -->  
                  <table dir="rtl" class="table equal-width-cols table-bordered table-striped mt-4 mb-4 text-center">
                    <thead v-if="Product.data">
                      <tr>
                         <th scope="col">مدل</th>
                         <th scope="col">سایز</th>
                         <th scope="col" style="width: 280px;">عکس</th>
                         <th scope="col">قیمت به تومان</th>
                         <th scope="col">رنگ</th>
                         <th scope="col">جنس</th>
                         <th scope="col">خرید</th>
                      </tr>
                    </thead>
                    <tbody v-if="Product.data">
                      <tr v-for="info in Product.data.filter(item => item.Model.trim() === productTitle.trim())" :key="info.id">
                            <td class="align-middle" v-if="info.Model">
                                  <p class="text-black">
                                    {{ info.Model }}        
                                  </p>
                            </td>
                        <td class="align-middle" v-if="!info.Model">-</td>
                        <td class="align-middle" v-if="info.Size">{{ info.Size }}</td>
                        <td class="align-middle" v-if="!info.Size">-</td>
                        <td class="align-middle" v-if="info.Picture">
                                <img class="w-100" :src="`https://api.lavazemesakhteman.com${info.Picture.url}`" :alt="`تصویر یک  ${info.Model}`">
                        </td>
                         <td class="align-middle" v-if="!info.Picture">
                           <p>تصویر موجود نیست</p>
                        </td>
                        <td class="align-middle" v-if="info.Price">{{ info.Price }} تومان</td>
                        <td class="align-middle" v-if="info.Color">{{ info.Color }}</td>
                        <td class="align-middle" v-if="!info.Color">-</td>
                        <td class="align-middle" v-if="info.Material">{{ info.Material }}</td>
                        <td class="align-middle" v-if="!info.Material">-</td>
                        <td class="align-middle">
                          <button @click="AddCart(info.Model, info.Price)" type="button" class="btn btn-sm btn-success">
                            خرید محصول
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
<div class="container px-5">
  <div class="row">
        <table class="mt-5 d-md-none d-lg-none table">
            <tbody v-for="TheProduct in Product.data" :key="TheProduct.id">
                <!-- image -->
                <tr class="text-center">
                      <th class="ProdTitle py-4">{{TheProduct.Model}}</th>
                </tr>
                <tr>
                    <td class="text-center" v-if="TheProduct.Picture">
                        <img class="Product_Img" :src="`https://api.lavazemesakhteman.com/${TheProduct.Picture.url}`" :alt="`تصویر یک  ${TheProduct.Model}`">
                    </td>
                    <td v-if="!TheProduct.Picture">
                        <p>تصویر موجود نیست</p>
                    </td>
                </tr>
                <!-- price -->
                  <tr>
                    <td v-if="TheProduct.Price">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="text-dark fs-6" dir="rtl">{{ TheProduct.Price }} تومان</p>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="price fw-bold fs-6">:قیمت</p>
                                </div>
                            </div>
                        </div>
                    </td>
                  <!-- if there is no price -->
                    <td v-if="!TheProduct.Price">
                         <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="price-number" dir="rtl">-</p>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="price fw-bold fs-6">:قیمت</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <!-- size -->
                  <tr>
                    <td v-if="TheProduct.Size">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="price-number" dir="rtl">{{ TheProduct.Size }}</p>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="text-dark fw-bold fs-6">:سایز</p>
                                </div>
                            </div>
                        </div>
                    </td>
                <!-- if there is no size -->
                    <td v-if="!TheProduct.Size">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="price-number" dir="rtl">-</p>
                                </div>
                                <div class="col-6 text-start fw-bold fs-6">
                                    <p class="text-dark fw-bold fs-6">:سایز</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                  <!-- color -->
                  <tr>
                    <td v-if="TheProduct.Color">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="text-dark fs-6" dir="rtl">{{ TheProduct.Color }}</p>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="price fw-bold fs-6">:رنگ</p>
                                </div>
                            </div>
                        </div>
                    </td>
                <!-- if there is no color -->
                    <td v-if="!TheProduct.Color">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="price-number" dir="rtl">-</p>
                                </div>
                                <div class="col-6 text-start fw-bold fs-6">
                                    <p class="price fs-6">:رنگ</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                  <!-- material -->
                  <tr>
                    <td v-if="TheProduct.Material">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6">
                                    <p class="text-end" dir="rtl">
                                      {{ TheProduct.Material }}
                                    </p>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="text-dark fw-bold fs-6">:جنس</p>
                                </div>
                            </div>
                        </div>
                    </td>
                <!-- if there is no material -->
                    <td v-if="!TheProduct.Material">
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6 text-end">
                                    <p class="price-number" dir="rtl">-</p>
                                </div>
                                <div class="col-6 text-start fw-bold fs-6">
                                    <p class="text-dark fw-bold fs-6">:جنس</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <!-- buy botton -->
                  <tr>
                    <td>
                        <div class="container"> 
                            <div class="row">
                                <div class="col-6">
                                    <button @click="AddCart(TheProduct.Model, TheProduct.Price)" type="button" class="btn btn-sm btn-success">
                                       افزودن        
                                    </button>
                                </div>
                                <div class="col-6 text-start">
                                    <p class="text-dark fw-bold fs-6">:خرید</p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
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
      productTitle: '', 
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
    this.productTitle = this.$route.query.title
  },

  asyncData(context) {

    const productModel = context.query.title; // Extract title from the context
    const encodedTitle = encodeURIComponent(productModel); // Encode the title


    const Product = axios.get(
      `https://api.lavazemesakhteman.com/api/products?filters[Model][$contains]=${encodedTitle}&populate=*`
    );
    const CatTitle = axios.get(
        `https://api.lavazemesakhteman.com/api/Old-category-type1-products?filters[theProductId][$eq]=${context.query.id}`
      );
    return axios
      .all([
        Product,
        CatTitle
      ])
      .then(
        axios.spread((...responses) => {
          const Product = responses[0];
          const CatTitle = responses[1]
          return {
            Product: Product.data, 
            CatTitle: CatTitle.data
          };
        })
      )
      .catch((e) => {
        context.error(e);
      });
   }, 
  head() {
    return {
      title: this.productTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: ` خرید و قیمت و مشخصات ${this.productTitle} همراه با گارانتی از فروشگاه اینترنتی لوازم ساختمان `,
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