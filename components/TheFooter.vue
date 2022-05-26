<template>
  <!-- Footer Section -->
  <footer id="contact-us">
    <div class="container-full bg-dark py-md-5 py-lg-5">
      <div class="container px-5">
        <div class="row">
          <div class="col-lg-4 text-start pt-4 pt-md-0 pt-lg-0">
            <p class="fw-bold text-white">درباره ما</p>
            <p class="text-white text-justify">
              فروشگاه لوازم ساختمانی و بهداشتی محمد با بیش از بیست سال تجربه
              مفتخر است با ارايه خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن
              مسکونی شیرآلات و دیگر لوازم ساختمانی را عرضه می کند.
            </p>
          </div>
          <div class="col-lg-4 text-start py-4 py-md-0 py-lg-0">
            <p class="fw-bold text-white">شبکه های مجازی</p>
            <p class="text-white text-justify">
              ما را در فضای مجازی دنبال کنید.
            </p>
            <i class="bi-instagram h4 text-white px-1"></i>
            <i class="bi-telegram h4 text-white px-1"></i>
            <i class="bi-whatsapp h4 text-white px-1"></i>
          </div>
          <div class="col-lg-4 text-start py-4 py-md-0 py-lg-0">
            <p class="fw-bold text-white">اطلاعات تماس</p>
            <p class="text-white">02155580447</p>
            <p class="text-white small text-justify w-50 footer-margin">
              خیابان خیام چهار راه گلوبندک کوچه حمام ملاباشی پاساژ 110 طبقه اول
              پلاک 5
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright Footer -->
    <div class="container-full bg-light">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-12 mt-3">
            <p>تمامی حقوق این وب سایت متعلق به فروشگاه لوازم ساختمان می باشد</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["footer_data"],
};
</script>

<style scoped>
.footer-margin {
  margin-left: auto;
}
</style>