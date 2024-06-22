<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <h1 class="PrdPrcTitle text-center pt-5 fw-bold">درباره ما</h1>
      <div class="container Content mt-5 rounded py-5">
        <div dir="rtl" class="row px-4 content">
          <p>
            مجموعه لوازم ساختمان با بیش از بیست سال تجربه مفتخر است با ارايه
            خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن مسکونی شیرآلات و دیگر
            لوازم ساختمانی را عرضه می کند با توجّه به مشابهت‌هایی که به لحاظ
            فرایند تولید، شیوهٔ بازاریابی، شیوهٔ مدیریت، حجم سرمایه، نوع
            ماشین‌آلات مورد استفاده، نوع موادّ اولیه ملزوم و غیره میان گروه‌های
            گوناگون صنعت وجود دارند، گروه‌های گوناگون صنعت را می‌توان از
            جنبه‌های گوناگون تقسیم‌بندی کرد.
          </p>
          <p>
            در مورد تعریف دقیق «صنعت»، اختلاف نظرهای کثیری وجود دارد. صنعت دارای
            تعریف‌ها و تعبیرهای متفاوتی است که براساس جایگزین‌پذیری فراورده‌ها،
            فرایند تولید و محدوده‌های گیتاشناختی ارائه شده‌اند؛ مثلاً مایکل
            پورتر، صنعت را چنین تعریف می‌کند: «صنعت، عبارت اند از گروه شرکت‌هایی
            که فراورده‌های آنها جایگزین نزدیکی برای هم می‌باشند.
          </p>
        </div>
      </div>
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
        <div class="container pt-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="container-full">
                <div dir="rtl" class="row gx-3">
                  <div
                    v-for="post in Posts"
                    :key="post.id"
                    class="col-lg-4 px-4 px-lg-4"
                  >
                    <!-- post item one -->
                    <div class="p-lg-0 text-center">
                      <img
                        style="height: 300px"
                        v-if="post.acf.postpic"
                        :src="post.acf.postpic"
                        class="w-100 bgbanerimg"
                        alt="bgbaner"
                      />
                      <img
                        class="w-100"
                        v-if="!post.acf.postpic"
                        src="~/assets/pictures/notavalable.png"
                        alt="CatJpg"
                      />
                    </div>
                    <nuxt-link
                      :to="`/blog/${post.title.rendered}/?id=${post.id}`"
                    >
                      <p class="PostItemTitle text-start pt-2 my-2">
                        {{ post.title.rendered }}
                      </p>
                      <div
                        class="PostItemDesc text-start text-white"
                        v-html="post.excerpt.rendered"
                      />
                    </nuxt-link>
                  </div>
                </div>
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
import axios from "axios";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  components: {
    TheHeader,
    TheFooter,
    VueSlickCarousel,
  },

  asyncData(context) {
    const zirdaste = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/zirdaste/?per_page=4`
    );
    const Posts = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=15`
    );
    return axios
      .all([zirdaste, Posts])
      .then(
        axios.spread((...responses) => {
          const zirdaste = responses[0];
          const Posts = responses[1];

          return {
            zirdaste: zirdaste.data,
            Posts: Posts.data,
          };
        })
      )
      .catch((e) => {
        context.error(e);
      });
  },

  head() {
    return {
      title: "درباره فروشگاه آنلاین لوازم ساختمان بیشتر بدانید",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "مجموعه لوازم ساختمان با بیش از بیست سال تجربه مفتخر است با ارايه خدمات به شرکت ها و مراکز خصوصی دولتی و اماکن مسکونی شیرآلات و دیگر لوازم ساختمانی را عرضه می کند",
        },
      ],
    };
  },
};
</script>


<style scoped>
.ProductTitle {
  color: black;
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
  color: #ebe9e2;
}

.bigimgtxtdesc {
  font-size: 12pt;
}

.PostItemTitle {
  font-weight: bold;
}

.BlogTxt {
  color: #fff;
  font-weight: bold;
  font-size: 18pt;
}

/* categorie */
.CatBtn {
  background-color: #be2623;
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
  color: #fff;
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
  background-color: #be2623;
  box-shadow: none;
}

.CardLook {
  padding: 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

.ListCardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.ProductPriceBkg {
  background-color: #0e3746;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Content container */
.Content {
  background-color: #f4f2ec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: #ffff;
}
</style>