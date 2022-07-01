<template>
  <div>
    <!--- navigation section -->
    <TheHeader />
    <!-- slider section -->
    <div class="container-full bg-dark slider_background d-flex justify-content-center">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <p class="fw-bold text-white display-6">فروشگاه لوازم ساختمان</p>
          <p class="text-white h4">
            بزرگ ترین عرضه کننده لوازم ساختمانی و صنعتی
          </p>
        </div>
      </div>
    </div>
    <!-- services section -->
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="service_background_one pt-5 ps-4 text-start">
            <p class="fw-bold h4 pt-4 text-white">بیشترین کیفیت</p>
            <button type="button" class="btn btn-primary btn-sm mt-3">
              مطالعه بیشتر
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 mt-3 mt-lg-0 mt-md-0">
          <div class="service_background_two pt-5 ps-4 text-start">
            <p class="text-white fw-bold h4 pt-4">بهترین قیمت</p>
            <button type="button" class="btn btn-primary btn-sm mt-3">
              مطالعه بیشتر
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 mt-3 mt-lg-0 mt-md-0">
          <div class="service_background_three pt-5 ps-4 text-start">
            <p class="text-white fw-bold h4 pt-4">بزرگ ترین برند</p>
            <button type="button" class="btn btn-primary btn-sm mt-3">
              مطالعه بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- categorie section -->
    <div class="container py-5" style="direction: rtl">
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-dark fw-bold h4">
            دسته محصول مورد نظر خود را انتخاب کنید
          </p>
          <p class="text-muted">هر آنچه از لوازم ساختمانی و صنعتی نیاز دارید</p>
        </div>
      </div>
      <!-- display cetegories loop -->
      <div class="row">
        <div
          v-for="categorie in FltCat"
          :key="categorie.id"
          class="col-lg-2 col-md-2 text-center"
        >
          <nuxt-link :to="'/categories/' + categorie.slug" class="post-preview">
            <img
              class="res-img"
              v-if="categorie.image"
              :src="categorie.image.src"
              alt=""
            />
            <img
              class="res-img"
              v-else
              src="https://via.placeholder.com/150"
              alt=""
            />
            <p class="txt-justify text-center fw-bold text-white bg-info p-2 rounded">
              {{ categorie.name }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div id="weblog" class="container-full cta_bg p-5">
      <div class="container-full py-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 text-start ps-2">
            <p class="fw-bold text-white h3">خلاقیت و زیبایی</p>
            <p class="text-white h5 mt-4 line-height">
              فروشگاه لوازم ساختمانی خلاقیت و کارآیی را به همراه زیبایی و قیمت
              مناسب به ارمغان آورده است
            </p>
            <a
              href="https://lavazemesakhteman.com/%D9%84%DB%8C%D8%B3%D8%AA-%D9%82%DB%8C%D9%85%D8%AA/"
              role="button"
              class="btn btn-info mt-3 text-white"
            >
              مشاهده لیست قیمت
            </a>
          </div>
          <div class="col-6 col-lg-3 col-md-3 text-start mt-5">
            <img
              class="cta_pic_width"
              src="~/assets/pictures/product-6-300x300.jpg"
              alt=""
            />
          </div>
          <div class="col-6 col-lg-3 col-md-3 text-end mt-5">
            <img
              class="cta_pic_width"
              src="~/assets/pictures/product-14-300x300.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- features section -->
    <div id="about-us" class="container py-3 py-md-5 py-lg-5">
      <div class="row py-5">
        <div class="col-lg-4 col-md-4 text-center text-lg-start text-md-start">
          <i class="bi-box2 display-4"></i>
          <p class="fw-bold text-info">محصولات جدید</p>
          <p class="text-muted h6 pt-md-2 pt-lg-2">
            تمامی محصولات با سرعت بالا و در کمترین زمان ممکن به دست مشتریان عزیز
            خواهد رسید
          </p>
          <button type="button" class="btn btn-dark btn-sm mt-3">
            مطالعه بیشتر
          </button>
        </div>
        <div
          class="col-lg-4 col-md-4 text-center text-lg-start text-md-start pt-5 pt-lg-0 pt-md-0 mt-4 mt-lg-0 mt-md-0">
          <i class="bi-tags display-4"></i>
          <p class="fw-bold text-info">تخفیف های ویژه</p>
          <p class="text-muted h6 pt-md-2 pt-lg-2">
            تمامی محصولات با سرعت بالا و در کمترین زمان ممکن به دست مشتریان عزیز
            خواهد رسید
          </p>
          <button type="button" class="btn btn-dark btn-sm mt-3">
            مطالعه بیشتر
          </button>
        </div>
        <div
          class="col-lg-4 col-md-4 text-center text-lg-start text-md-start pt-5 pt-lg-0 pt-md-0 mt-4 mt-lg-0 mt-md-0">
          <i class="bi-truck display-4"></i>
          <p class="fw-bold text-info">ارسال سریع</p>
          <p class="text-muted h6 pt-md-2 pt-lg-2">
            تمامی محصولات با سرعت بالا و در کمترین زمان ممکن به دست مشتریان عزیز
            خواهد رسید
          </p>
          <button type="button" class="btn btn-dark btn-sm mt-3">
            مطالعه بیشتر
          </button>
        </div>
      </div>
    </div>
    <!-- second cta section -->
    <div id="app" class="container-full cta2_bg py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 text-center">
            <p class="text-center text-white fw-bold h3">
              دانلود اپلیکیشن لوازم ساختمان
            </p>
            <p
              class="text-center text-white h5 mt-5 mt-md-3 mt-lg-3 line-height"
            >
              جهت اطلاع از آخرین قیمت ها و تخفیف های ویژه اپلیکیشن لوازم ساختمان
              را دانلود کنید
            </p>
            <button type="button" class="btn btn-info mt-5 text-white fw-bold">
              دانلود اپلیکیشن
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <TheFooter />
  </div>
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
  computed: {
    FltCat: function () {
      return this.categories.filter(
        (item) =>
          item.name !== "سایر محصولات" && item.name !== "فلکه سیم ایتالیا"
      );
    },
  },
  asyncData(context) {
    return axios
      .get("https://lavazemesakhteman.com/wp-json/wc/v3/products/categories", {
        params: {
          per_page: 100,
          page: 1,
        },
      })
      .then((res) => {
        return {
          categories: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
};
</script>


<style scoped>
/*slide components style */
.slider_background {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  min-height: 70vh;
}

@media (max-width: 768px) {
  .slider_background {
    background-size: cover;
    min-height: 40vh;
  }
}

/* trends component style */
.service_background {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  min-height: 50vh;
}

@media (max-width: 768px) {
  .service_background {
    background-position: center;
    background-size: 100% 100%;
    min-height: 70vh;
  }
}

.sandel-background {
  background-repeat: no-repeat;
  background-position: center right;
}

/* diccount background */
.diccount-bg {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 90vh;
}
</style>
