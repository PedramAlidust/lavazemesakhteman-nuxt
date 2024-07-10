<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <!-- factor section -->
      <section>
        <p class="PrdPrcTitle text-center pt-5 fw-bold">تکمیل اطلاعات</p>
        <div class="container bg-white Content mt-5 rounded py-5">
          <div class="row px-4 content">
             <!-- getting info -->
                <form>
                    <div dir="rtl" class="form-group">
                        <label class="fw-bold">نام شما</label>
                        <input v-model="name" type="text" class="mt-2 form-control"  placeholder="نام خود را وارد کنید">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">شماره تماس</label>
                        <input v-model="number" type="text" class="mt-2 form-control" placeholder="شماره تماس خود را وارد کنید">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">شهر</label>
                        <input v-model="town" type="text" class="mt-2 form-control" placeholder="شهر محل تحویل کالا">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">آدرس شما</label>
                        <textarea v-model="address" class="mt-2 form-control" rows="5" placeholder="آدرس محل سکونت خود را وارد کنید"></textarea>
                    </div>
                </form>
          </div>
          <!-- buttons and price -->
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 mt-2">
                  <button @click="registerOrder" class="btn btn-danger btn-sm fw-bold">
                    ثبت سفارش                 
                 </button>
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
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    TheHeader,
    TheFooter,
    VueSlickCarousel,
  },
  data() {
    return {
      name: "",
      number: "",
      town: "", 
      address: ""
    };
  },
  computed: {
    ...mapGetters([
      "DspOrderInCrmRes",
      "DspCart"
    ])
  },
  methods: {
    ...mapActions([
      "setOrderInCrm",
    ]), 
    registerOrder() {
      this.setOrderInCrm({
        company: this.name,
        phonenumber: this.number,
        city: this.town,
        address: this.address,
        theProduct: this.DspCart[0].name
      });
    }
  },
};
</script>
  
  
  <style scoped>
.content {
  min-height: 25vh;
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
  font-weight: bold;
  font-size: 18pt;
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
  font-weight: bold;
  font-size: 18pt;
}

/* new product */
.ProdTitle {
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
  margin-right: 10px;
  margin-left: 10px;
  padding: 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.CompareTitle {
  font-size: 20pt;
}

.ProductPriceBkg {
  background-color: #1a3745;
}

/* Content container */
.Content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: black;
}

.DelWidth {
  cursor: pointer;
  width: 25px;
}
</style>