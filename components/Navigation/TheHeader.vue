
<template>
  <section>
    <div class="container-fluid bg-white pt-3 py-lg-3 Headerstyle px-lg-5">
      <div class="row align-items-center">
        <div class="col-lg-3 mb-3 mb-lg-0">
          <div class="d-flex align-items-center justify-content-between">
              <button @click="showdDownloadPopup" type="button" class="DownloadBtn btn text-white">
                دانلود اپلیکیشن
              </button>
            <img src="~/assets/svg/Line.svg" alt="devider" class="d-none d-lg-block">
            <div class="image-container">
              <img @click="showPopup" src="~/assets/svg/buycart.svg" alt="buycart">
              <span v-if="DspCart.length !== 0" class="ms-1 cart-number">{{DspCart.length}}</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7 text-center px-lg-5 mt-0 mt-lg-2">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to="/blog/about">
              <p class="MenuStyle">درباره ما</p>
            </nuxt-link>
            <nuxt-link to="/blog">
              <p class="MenuStyle">وبلاگ</p>
            </nuxt-link>
            <nuxt-link to="/productspdf">
              <p class="MenuStyle">لیست قیمت</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p class="MenuStyle">صفحه اصلی</p>
            </nuxt-link>
          </div>
        </div>
        <div class="col-lg-2 mt-lg-1 text-start d-none d-lg-block">
          <nuxt-link to="/">
            <img src="~/assets/pictures/logo.png" alt="lavazemesakhtemanlogo" class="img-fluid">
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- carts toast -->
    <div class="popup" v-if="isPopupVisible">
      <table dir="rtl" class="table">
        <thead>
          <tr>
            <th>نام</th>
            <th>قیمت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in DspCart" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
            <button @click="deleteCart(product.id)" class="mx-2">حذف </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-between px-2">
        <p>{{ totalPrice }}</p>
        <p>مجموع</p>
      </div>
      <nuxt-link to="/order">
        <button class="btn btn-danger btn-sm mx-2">خرید</button>
      </nuxt-link>
      <button @click="hidePopup" class="btn btn-success btn-sm mx-2">بستن سبد خرید</button>
      <button @click="emptyCard" class="btn btn-success btn-sm mx-2">خالی کردن سبد خرید</button>
    </div>
    <!-- dowload app toast -->
    <div class="popup" v-if="isDownloadVisible">
      <!--android -->
      <div class="container ">
        <div class="row text-start align-items-center justify-content-center">
          <div class="col-10 px-0">
            <p class="android-txt mt-3">.جهت دانلود نسخه اندروید روی آیکن سمت راست بزنید</p>
          </div>
          <div class="col-2">
              <a href="/2022/apk/lavazem.apk">
                <img class="w-100" src="~/assets/pictures/android.png" alt="android">
              </a>
          </div>
        </div>
      </div>
      <!-- ios -->
      <div class="container mt-4">
        <div class="row text-start align-items-center justify-content-center">
          <div class="col-10 px-0">
            <p dir="rtl" class="android-txt mt-3">
              جهت نصب نسخه ios روی آیکن
              <span>
                <img class="ios_icon" src="~/assets/pictures/iosshare.png" alt="download-ios">
              </span>
           و سپس گزینه Add to HomeScreen بزنید.
            </p>
          </div>
          <div class="col-2">
            <img class="w-100" src="~/assets/pictures/apple.png" alt="android">
          </div>
        </div>
      </div>
      <button @click="hideDownloadPopup" class="btn btn-danger btn-sm mx-2">بستن</button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  data() {
    return {
        isPopupVisible: false, 
        isDownloadVisible: false
    }
  }, 
  methods: {

    ...mapActions(["EmptyCart", "DeleteCart"]),

    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    }, 
    showdDownloadPopup() {
      this.isDownloadVisible = true
    }, 
    hideDownloadPopup() {
      this.isDownloadVisible = false
    },
    emptyCard() {
      this.EmptyCart()
    }, 
    deleteCart(id) {
      this.DeleteCart({
        id: id
      })
    }
  },  
   computed: {
    ...mapGetters(["DspCart"]), 
    totalPrice() {
       return this.DspCart
      .map(item => ({ ...item, price: parseInt(item.price.replace(/[^0-9]/g, '')) }))
      .reduce((sum, item) => sum + item.price, 0)
      .toLocaleString();
    }
  }, 
  name: "TheHeader",
  props: ["menu_data"],
};
</script>


<style scoped>
/* header */
.Headerstyle {
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.095);
  padding: 0 15px;
}

.MenuStyle {
  color: #404040;
  font-size: 14px;
}

.MenuStyle:hover {
  color: #23A455;
}

.DownloadBtn {
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #23A455;
  box-shadow: none;
  font-size: 14px;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  z-index: 100;
  width: 90%;
  max-width: 500px;
}

.cart-number {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);    
  display: flex;
  align-items: center;
  justify-content: center;
  width:  1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: red;
  font-size: 1rem;
  color: white;
}

.image-container {
  position: relative;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .Headerstyle {
    padding: 0 50px;
  }
  
  .MenuStyle {
    font-size: 16px;
  }
  
  .DownloadBtn {
    font-size: 16px;
  }
  
  .popup {
    width: 60%;
  }
}

.android-txt {
  font-size: 11pt;
}

.ios_icon {
  width: 16px;
}
</style>
