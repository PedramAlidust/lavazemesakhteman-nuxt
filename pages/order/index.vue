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
                <nuxt-link v-if="DspCart.length" :to="`/order/getinfo`">
                  <button class="btn btn-danger btn-sm fw-bold">ادامه خرید</button>
                </nuxt-link>
                <nuxt-link v-if="!DspCart.length" :to="`/products/`">
                  <button class="btn btn-danger btn-sm fw-bold">مشاهده محصولات</button>
                </nuxt-link>
              </div>
              <div class="text-start col-md-6 col-lg-6">
                <p>مجموع: {{ CartTotalPrice }} تومان</p>
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
  }
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