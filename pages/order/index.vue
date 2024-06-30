<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <!-- factor section -->
      <section>
        <p class="PrdPrcTitle text-center pt-5 fw-bold">فاکتور شما</p>
        <div class="container bg-white Content mt-5 rounded py-5">
          <div class="row px-4 content">
            <!--  If is cartItem -->
            <table
              dir="rtl"
              v-if="DspCart.length"
              class="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>نام</th>
                  <th>قیمت به تومان</th>
                  <th>تعداد</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in DspCart" :key="product.id">
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>1</td>
                  <td>
                    <img
                      @click="deleteCartItem(product.id)"
                      class="DelWidth"
                      src="~/assets/pictures/delete.png"
                      alt="delete"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--  If is not cartItem -->
            <div
              v-if="!DspCart.length"
              class="d-flex container align-items-center justify-content-center"
            >
              <p>محصولی در لیست سفارش های شما وجود ندارد</p>
            </div>
          </div>
          <!-- buttons and price -->
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6">
                <a href="https://idpay.ir/">
                  <button class="btn btn-success btn-sm">پرداخت</button>
                </a>
              </div>
              <div class="text-start col-md-6 col-lg-6">
                <p>مجموع: {{ CartTotalPrice }} تومان</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- compare factor -->
      <section>
        <p class="CompareTitle text-center pt-5 fw-bold">فاکتور مقایسه شما</p>
        <div class="container bg-white Content mt-5 rounded py-5">
          <div class="row px-4 content">
            <!--  If is cartItem -->
            <table
              dir="rtl"
              v-if="DspCpmpareCart.length"
              class="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>نام</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>تصویر</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in DspCpmpareCart" :key="product.id">
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>1</td>
                  <td>تصویر موجود نیست</td>
                  <td>
                    <img
                      @click="DeleteCompareCartItem(product.id)"
                      class="DelWidth"
                      src="~/assets/pictures/delete.png"
                      alt="delete"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--  If is not cartItem -->
            <div
              v-if="!DspCpmpareCart.length"
              class="d-flex container align-items-center justify-content-center"
            >
              <p>جهت مقایسه از قسمت مقایسه محصول یک محصول اضافه کنید</p>
            </div>
          </div>
          <!-- buttons and price -->
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6">
                <a href="https://idpay.ir/">
                  <button class="btn btn-success btn-sm">پرداخت</button>
                </a>
              </div>
              <div class="text-start col-md-6 col-lg-6">
                <p>{{ CartCompareTotalPrice }} : مجموع</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- compare brand section -->
      <section>
        <p class="CompareTitle text-center py-5 fw-bold">مقایسه محصول</p>
        <div class="container bg-white Content rounded p-5">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <button @click="compareAction" class="btn btn-danger btn-md">
                مقایسه
              </button>
            </div>
            <div class="col-lg-4 col-md-4">
              <select
                @change="handleSelectionChange"
                dir="rtl"
                class="form-select"
              >
                <option
                  v-for="subcat in DspSubCategory"
                  :key="subcat.id"
                  :value="subcat.id"
                >
                  {{ subcat.title.rendered }}
                </option>
              </select>
            </div>
            <div class="col-lg-4 col-md-4">
              <p class="text-start">جهت مقایسه یک برند انتخاب کنید</p>
            </div>
          </div>
        </div>
      </section>

      <!-- compare table -->
      <section>
        <p class="CompareTitle text-center pt-5 fw-bold">
          مقایسه با {{ SubCatText }}
        </p>
        <div class="container bg-white Content mt-5 rounded py-5">
          <div class="row px-4 content">
            <!--  If is cartItem -->
            <table dir="rtl" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>تصویر</th>
                  <th>افزدون به مقایسه</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="product in DspFltProducts">
                  <tr
                    v-for="(productdetail, index) in product.acf.productdetails"
                    :key="index + Math.random().toString(36).substr(2, 10)"
                  >
                    <td>{{ productdetail.themodel }}</td>
                    <td>{{ productdetail.price }}</td>
                    <td>1</td>
                    <td>تصویر موجود نیست</td>
                    <td>
                      <button
                        @click="
                          AddCompareCart(
                            productdetail.themodel,
                            productdetail.price
                          )
                        "
                        type="button"
                        class="btn btn-sm btn-success"
                      >
                        افزودن
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <!--  If is not cartItem -->
            <div
              v-if="!DspFltProducts"
              class="d-flex container align-items-center justify-content-center"
            >
              <p>جهت مقایسه یک برند انتخاب کنید</p>
            </div>
          </div>
        </div>
      </section>
      <!-- other products -->
      <section>
        <div class="container mt-5 py-4">
          <div class="d-flex align-items-center justify-content-end">
            <p class="CatTxt">آخرین محصولات</p>
          </div>
        </div>
      </section>
      <!-- products section -->
      <section>
        <div class="container py-5 text-center">
          <div class="row">
            <VueSlickCarousel
              v-if="DspSubCategory[0]"
              :slidesPerRow="3"
              :arrows="true"
              :dots="true"
            >
              <div
                v-for="subcategory in DspSubCategory"
                :key="subcategory.id"
                class="col-lg-3"
              >
                <div class="CardLook">
                  <img
                    width="300"
                    height="250"
                    class="w-100"
                    v-if="subcategory.acf.subcatpic"
                    :src="subcategory.acf.subcatpic"
                    alt="CatJpg"
                  />
                  <img
                    class="w-100"
                    v-if="!subcategory.acf.subcatpic"
                    src="~/assets/pictures/notavalable.png"
                    alt="CatJpg"
                  />
                  <nuxt-link
                    :to="`/products/?subcategoryid=${subcategory.id}&title=${subcategory.title.rendered}`"
                  >
                    <button role="button" class="btn btn-sm btn-success mt-3">
                      مشاهده
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </section>

      <!-- weblog title section -->
      <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to="/blog/">
              <button role="button" class="CatBtn">مشاهده همه</button>
            </nuxt-link>
            <p class="BlogTxt">دیگر مطالب</p>
          </div>
        </div>
      </section>
      <!-- weblog posts section -->
      <section>
        <div class="container pb-5">
          <div class="row">
            <div class="col-lg-8">
              <div class="container-full">
                <div class="row gx-3">
                  <div v-for="post in DspPosts" :key="post.id" class="col-lg-4">
                    <!-- post item one -->
                    <div class="bg-image">
                      <img
                        v-if="post.acf.postpic"
                        :src="post.acf.postpic"
                        class="bgbanerimg w-100"
                        alt="bgbaner"
                      />
                      <img
                        class="w-100"
                        v-if="!post.acf.postpic"
                        src="~/assets/pictures/notavalable.png"
                        alt="CatJpg"
                      />
                      <div
                        class="mask"
                        style="
                          border-radius: 12px;
                          background: linear-gradient(
                            359.73deg,
                            #000000 -30.17%,
                            rgba(217, 217, 217, 0) 12.75%
                          );
                        "
                      ></div>
                    </div>
                    <nuxt-link
                      :to="`/blog/${post.title.rendered}/?id=${post.id}`"
                    >
                      <p class="PostItemTitle text-start pt-2 my-2">
                        {{ post.title.rendered }}
                      </p>
                      <div
                        class="PostItemDesc text-start text-muted"
                        v-html="post.excerpt.rendered"
                      />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- big image weblog -->
            <div class="col-lg-4">
              <div class="bg-image">
                <img
                  src="~/assets/pictures/bgbaner.jpg"
                  class="bgbanerimg w-100"
                  alt="bgbaner"
                />
                <div
                  class="mask"
                  style="
                    border-radius: 12px;
                    background: linear-gradient(
                      359.73deg,
                      #000000 -30.17%,
                      rgba(217, 217, 217, 0) 80.75%
                    );
                  "
                >
                  <div class="d-flex flex-column text-start h-100">
                    <p
                      style="margin-top: auto"
                      class="bigimgtxt text-white mb-0 pb-2 ps-4"
                    >
                      وبلاگ ما
                    </p>
                    <p
                      dir="rtl"
                      class="bigimgtxtdesc text-white mb-0 pb-5 ps-4"
                    >
                      در قسمت وبلاگ مطالب مهم آموزشی و اخبار لوازم ساختمان را
                      قرار داده ایم
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end big image weblog -->
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
      SubCatId: "",
      SubCatText: "",
    };
  },
  computed: {
    ...mapGetters([
      "DspCart",
      "DspPosts",
      "DspSubCategory",
      "DspFltProducts",
      "DspCpmpareCart",
    ]),
    CartTotalPrice() {
      const persianNumbers = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };

      function convertToArabicNumerals(str) {
        return str.replace(/[۰-۹]/g, (w) => persianNumbers[w]);
      }

      return this.DspCart.map((item) => {
        console.log(`Original price: ${item.price}`); // Debugging line
        const cleanedPrice = item.price.replace(/[^0-9۰-۹]/g, ""); // Remove non-digit characters
        console.log(`Cleaned price: ${cleanedPrice}`); // Debugging line
        const numericPrice = parseInt(
          convertToArabicNumerals(cleanedPrice),
          10
        );
        console.log(`Numeric price: ${numericPrice}`); // Debugging line
        return isNaN(numericPrice) ? 0 : numericPrice;
      })
        .reduce((sum, price) => sum + price, 0)
        .toLocaleString("en-US");
    },
    CartCompareTotalPrice() {
      const persianNumbers = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };

      function convertToArabicNumerals(str) {
        return str.replace(/[۰-۹]/g, (w) => persianNumbers[w]);
      }

      return this.DspCpmpareCart.map((item) => {
        console.log(`Original price: ${item.price}`); // Debugging line
        const cleanedPrice = item.price.replace(/[^0-9۰-۹]/g, ""); // Remove non-digit characters
        console.log(`Cleaned price: ${cleanedPrice}`); // Debugging line
        const numericPrice = parseInt(
          convertToArabicNumerals(cleanedPrice),
          10
        );
        console.log(`Numeric price: ${numericPrice}`); // Debugging line
        return isNaN(numericPrice) ? 0 : numericPrice;
      })
        .reduce((sum, price) => sum + price, 0)
        .toLocaleString("en-US");
    },
  },
  methods: {
    ...mapActions([
      "GetPosts",
      "GetSubCategory",
      "DeleteCart",
      "SetDeleteCompareCart",
      "GetProducts",
      "SetCompareCart",
      "SetFilterFltProducts",
    ]),
    deleteCartItem(id) {
      this.DeleteCart({
        id: id,
      });
    },
    DeleteCompareCartItem(id) {
      this.SetDeleteCompareCart({
        id: id,
      });
    },
    handleSelectionChange(event) {
      this.SubCatId = event.target.value;
      this.SubCatText =
        event.target.options[event.target.options.selectedIndex].text;
    },
    compareAction() {
      if (this.SubCatId) {
        this.GetProducts({
          SubCategoryId: this.SubCatId,
          count: 100,
        });
      } else {
        alert("لطفا حداقل یک برند انتخاب کنید");
      }
    },
    AddCompareCart(name, price) {
      this.SetCompareCart({
        product: {
          name: name,
          price: price,
          id: Math.random().toString(36).substr(2, 10),
        },
      });
    },
  },
  mounted() {
    /* load posts */
    this.GetPosts({
      count: 3,
    });

    /* load subcategory */
    this.GetSubCategory({
      count: 100,
    });

    /* clear fltproducts */
    this.SetFilterFltProducts();
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
  background-image: url("~assets/pictures/pfdlistbkg.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
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