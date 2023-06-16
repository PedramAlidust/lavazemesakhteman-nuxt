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
          <p class="fw-bold text-white display-6">
            {{ CategoryData[0].categories[0].name }}
          </p>
          <p class="text-white h5">
            با کیفیت ترین {{ CategoryData[0].categories[0].name }}
          </p>
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
              {{ CategoryData[0].categories[0].name }}
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
            v-for="product_item in CategoryData"
            :key="product_item.id"
            class="col-md-3 col-lg-3 p-2">
            <img v-if="product_item.images[0]"
              class="w-100 border"
              :src="product_item.images[0].src"
              alt="shiralat"
            />
            <img
              v-else
              class="w-100 border"
              src="https://via.placeholder.com/150"
              alt="shiralat"
            />
            <p class="txt-justify text-center fw-bold text-white bg-info p-2 rounded">
              {{ product_item.name }}
            </p>
          </div>
          <div v-html="CategoryData[0].description"></div>
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
  /*
  data() {
    return {
      CategoryData: null,
    };
  },
  */
  components: {
    TheHeader,
    TheFooter,
  },
  
  asyncData(context) {
    /*Get categorie id */
    return axios
      .get("https://lavazemesakhteman.com/wp-json/wc/v3/products/categories", {
        params: {
          slug: context.params.categorie,
        },
      })
      .then((res) => {
        res.data[0].name;
        /*Get categorie content */
        return axios
          .get(
            "https://lavazemesakhteman.com/wp-json/wc/v3/products?category=" +
              res.data[0].id,
            {
              params: {
                per_page: 100,
              },
            }
          )
          .then((res) => {
            return {
              CategoryData: res.data,
            };
          })
          .catch((e) => context.error(e));

        /*return first request error*/
      })
      .catch((e) => context.error(e));
  },
  head() {
    return {
      title: this.CategoryData[0].meta_data[2].value,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.CategoryData[0].meta_data[3].value,
        },
      ],
    };
  },
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
