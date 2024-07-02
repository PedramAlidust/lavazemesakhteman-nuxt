<template>
  <!-- Footer Section -->
  <footer id="contact-us">
    <div class="container-full bkg-color py-md-5 py-lg-5">
      <div class="container px-5">
        <div class="row">
          <div class="col-lg-3 text-center d-none d-lg-block">
            <p class="fw-bold">نماد اعتبار</p>
            <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic'>
            <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic' alt='enamad' style='cursor:pointer' Code='TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic'>
            </a>
          </div>
          <div class="col-lg-3 text-start pt-4 pt-md-0 pt-lg-0">
            <p class="fw-bold text-black">درباره ما</p>
            <p class="text-black text-justify">
              مجموعه لوازم ساختمان با بیش از بیست سال تجربه
              مفتخر است با ارايه خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن
              مسکونی شیرآلات و دیگر لوازم ساختمانی را عرضه می کند.
            </p>
          </div>
          <div class="col-lg-3 col-6 text-start py-4 py-lg-0">
            <p class="fw-bold text-black">شبکه های مجازی</p>
            <p class="text-black text-justify">
              ما را در فضای مجازی دنبال کنید.
            </p>
            <a href="https://instagram.com/lavazemesakhteman">
              <img height="31" width="31" src="~/assets/pictures/instagram.png" alt="instagram">
            </a>
            <a href="https://t.me/pipesystem301">
              <img height="31" width="31" src="~/assets/pictures/telegram.png" alt="telegram">
            </a>
            <a href="https://wa.me/09365833005">
              <img height="31" width="31" src="~/assets/pictures/whatsapp.png" alt="whatsapp">
            </a>
            <a href="https://youtube.com/channel/UCtE62u-O1OjQ-CFjfCnjJTw">
              <img height="31" width="31" src="~/assets/pictures/youtube.png" alt="youtube">
            </a>
          </div>
          <div class="col-lg-3 col-6 text-start py-4 py-lg-0">
            <p class="fw-bold text-black">اطلاعات تماس</p>
            <p class="text-black">02155580447</p>
            <p class="text-black small text-justify AddressWidth footer-margin">
              خیابان خیام چهار راه گلوبندک کوچه حمام ملاباشی پاساژ 110 طبقه اول
              پلاک 5
            </p>
          </div>
          <div class="col-lg-3 text-start d-lg-none pb-5 pb-md-0 pb-lg-0">
            <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic'>
            <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=419237&Code=TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic' alt='enamad' style='cursor:pointer' Code='TcLrCuoIR3UjxnlOXdjAzmGT2ptSJgic'>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright Footer -->
    <div class="container-full bg-dark">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-12 mt-3 text-white">
            <p>تمامی حقوق این وب سایت متعلق به فروشگاه لوازم ساختمان می باشد</p>
          </div>
        </div>
      </div>
    </div>

    <!-- call button -->
    <div v-if="showCallButton" class="text-start CallBtn">
      <img @click="toggleCallButton" class="CloseBtn" width="25" height="25" src="~/assets/pictures/phone-ringing.png" alt="phone-ringing">
    </div>

    <div v-else class="text-start CallBtn">
      <img @click="toggleCallButton" class="CloseBtn" width="25" height="25" src="~/assets/pictures/close-button.png" alt="close">
      <div class="fw-bold">مشاوره رایگان</div>
      <a href="tel:09122339423">
         <div class="fw-bold num-font mt-1">09122339423</div>
      </a>
      <div class="fw-bold num-font">02155580447</div>
    </div>

  </footer>
</template>

<script>
export default {
  props: ["footer_data"],
  data() {
    return {
      showCallButton: false
    };
  },
  methods: {
    toggleCallButton() {
      this.showCallButton = !this.showCallButton;
    }
  }
};
</script>

<style scoped>
.CloseBtn {
  margin-right: 90%;
  cursor: pointer;
}

.num-font {
  color: white;
  font-size: 12pt;
  letter-spacing: 3px;
}

.CallBtn {
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  background-color: #BE2623;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 1000;
}

.footer-margin {
  margin-left: auto;
}

.bkg-color {
  background-color: #fff;
}

@media (max-width: 767px) { /* Mobile devices */
  .AddressWidth {
    width: 70%;
  }
}

@media (min-width: 768px) { /* Tablets and desktops */
  .AddressWidth {
    width: 50%;
  }
}
</style>
