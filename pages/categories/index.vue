<template>
  <div>
    <!--- navigation section -->
    <TheHeader />
    <!-- slider section -->
    <div
      class="container-full category_background d-flex justify-content-center"
    >
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <p class="fw-bold text-white display-6">دسته بندی ها</p>
          <p class="text-white h5">با کیفیت ترین لوازم ساختمانی و صنعتی</p>
        </div>
      </div>
    </div>

    <!-- broad crump -->
    <div class="container-full category_broadcrumps">
      <div class="container ps-4">
        <nav class="py-3">
          <ol class="breadcrumb align-items-center mb-0">
            <li class="breadcrumb-item">
              <nuxt-link :to="'/'" class="text-dark"> صفحه اصلی </nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              دسته بندی ها
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- main section -->
    <section class="main" style="direction: rtl">
      <div class="container py-3">
        <div class="row">
          <div
            v-for="product_categorie in ApiData"
            :key="product_categorie.id"
            class="col-md-3 col-lg-3 p-2"
          >
            <nuxt-link :to="'/categories/' + product_categorie.slug">
              <img
                v-if="product_categorie.image"
                class="w-100 border"
                :src="product_categorie.image.src"
                alt="shiralat"
              />
              <img
                v-else
                class="w-100 border"
                src="https://via.placeholder.com/150"
                alt="shiralat"
              />
              <p
                class="
                  txt-justify
                  text-center
                  fw-bold
                  text-white
                  bg-info
                  p-2
                  rounded
                "
              >
                {{ product_categorie.name }}
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
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
          ApiData: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  head() {
    return {
      title: "دسته بندی ها",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "در این قسمت دسته بندی لوازم ساختمان قرار دارد",
        },
      ],
    };
  },
};
</script>