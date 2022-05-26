<template>
  <!-- navigation section -->
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container pe-5 pe-lg-0">
      <img
        class="d-lg-none"
        src="~/assets/pictures/logo-new-min.png"
        alt="lavazemsakhteman"
      />
      <button
        class="navbar-toggler p-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <i class="bi-2x bi-list display-3"></i>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link
              :to="'/'"
              class="nav-link active-item text-dark"
            >
            صفحه اصلی
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a href="#weblog" class="nav-link px-lg-3 text-dark">لیست قیمت</a>
          </li>
          <li class="nav-item">
            <a href="#contact-us" class="nav-link px-lg-3 text-dark"
              >تماس با ما</a
            >
          </li>
          <li class="nav-item">
            <a href="#about-us" class="nav-link px-lg-3 text-dark">درباره ما</a>
          </li>
          <li class="nav-item">
            <a href="#app" class="nav-link px-lg-3 text-dark"
              >دانلود اپلیکیشن</a
            >
          </li>
        </ul>
      </div>
      <img
        class="d-none d-lg-block"
        src="~/assets/pictures/logo-new-min.png"
        alt="lavazemsakhteman"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["menu_data"],
};
</script>


<style scoped>
</style>
