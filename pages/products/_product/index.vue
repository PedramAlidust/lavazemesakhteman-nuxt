<template>
<section>
<TheHeader />
<div class="wrapper">

<!-- single product broad crumb -->
<div class="container BroadBg py-2 mt-5 mb-4">
    <div class="d-flex align-items-center justify-content-end">
        <p v-if="DspProduct.acf" class="text-success">{{DspProduct.acf.productname}}</p>
        <img class="px-2" src="~/assets/svg/leftarrow.svg" alt="home">
        <img src="~/assets/svg/home.svg" alt="home">
    </div>
</div>

<!-- product datails -->
<div class="container pb-5 px-0">
    <div class="row">
            <p v-if="DspProduct.acf" class="product_title text-start">
              {{ DspProduct.acf.productname }}
            </p>
            <div class="container-full">
                  <!-- comments and star count -->
                    <div class="d-flex justify-content-end">
                          <!-- rating points -->
                          <div class="d-flex">
                              <i class="star bi bi-star-fill"></i>
                              <i class="star bi bi-star-fill"></i>
                              <i class="star bi bi-star-fill"></i>
                              <i class="star bi bi-star-fill"></i>
                              <i class="star bi bi-star-fill"></i>
                              <p class="ps-lg-2 pe-lg-2">امتیاز</p>
                          </div>
                     </div>
                   <!-- product table -->  
                  <table dir="rtl" class="table table-bordered table-striped mt-4 mb-4">
                    <thead v-if="DspProduct.acf">
                      <tr>
                         <th v-if="DspProduct.acf.productdetails[0].themodel" scope="col">مدل</th>
                         <th v-if="DspProduct.acf.productdetails[0].size" scope="col">سایز</th>
                         <th scope="col">عکس</th>
                         <th v-if="DspProduct.acf.productdetails[0].price" scope="col">قیمت</th>
                         <th v-if="DspProduct.acf.productdetails[0].color" scope="col">رنگ</th>
                         <th v-if="DspProduct.acf.productdetails[0].material" scope="col">جنس</th>
                         <th v-if="DspProduct.acf.productdetails[0].pn" scope="col">پی ان</th>
                         <th v-if="DspProduct.acf.productdetails[0].debi" scope="col">دبی</th>
                         <th v-if="DspProduct.acf.productdetails[0].tul" scope="col">طول</th>
                         <th scope="col">خرید</th>
                      </tr>
                    </thead>
                    <tbody v-if="DspProduct.acf">
                      <tr v-for="info in DspProduct.acf.productdetails" :key="info.id">
                        <td v-if="info.themodel">{{ info.themodel }}</td>
                        <td v-if="info.size">{{ info.size }}</td>
                         <td v-if="info.modelpicture">
                          <img class="w-25" :src="info.modelpicture" alt="TheProduct">
                        </td>
                         <td v-if="!info.modelpicture">
                           <p>تصویر موجود نیست</p>
                        </td>
                        <td v-if="info.price">{{ info.price }}</td>
                        <td v-if="info.color">{{ info.color }}</td>
                        <td v-if="info.material">{{ info.material }}</td>
                        <td v-if="info.pn">{{ info.pn }}</td>
                        <td v-if="info.debi">{{ info.debi }}</td>
                        <td v-if="info.tul">{{ info.tul }}</td>
                        <td>
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

<TheFooter />
</section>
</template>

<script>
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
      ProductId: ''
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
      
    }
  },
   mounted() {
        /* save id parameter  */
        this.ProductId = this.$route.query.id
        /* get product details */
        this.GetProduct({
          id: this.ProductId
        })
  }, 

}
</script>

<style scoped>

/* product page height */

.wrapper {
  min-height: 70vh;
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

/* new product */
.ProdTitle {
  font-weight: bold;
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