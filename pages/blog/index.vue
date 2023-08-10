<template>
    <section class="ProductPriceBkg">
            <TheHeader />
            <!-- page container -->
                <main class="pb-5 mb-5">
                  <h1 class="PrdPrcTitle text-center pt-5 fw-bold">وبلاگ</h1>
                    <div class="container bg-white Content mt-5 rounded py-5">
                        <div dir="rtl" class="row px-4 content">
                            <p class="text-justify"> 
                            وبلاگ یکی از رسانه‌های محبوب در دنیای امروز است که به صورت آنلاین ارائه محتوا می‌کند. 
                            این رسانه برای افراد و شرکت‌ها به عنوان یک ابزار قدرتمند برای انتشار اطلاعات، نظرات و تجربیات به کار می‌رود.
                            وبلاگ‌ها می‌توانند به عنوان یک وسیله ارتباطی بین نویسنده و خواننده در نظر گرفته شوند و در بسیاری از موارد به صورت رایگان در دسترس قرار می‌گیرند.
                            </p>
                            <p class="text-justify">
                              در وبلاگ‌ها می‌توان به موضوعات مختلفی از جمله فناوری، آموزش، موسیقی، ورزش، سفر و غیره پرداخت و مطالب جذاب و خواندنی را برای خوانندگان ارائه کرد. 
                              با توجه به رشد روزافزون فضای مجازی، وبلاگ نقش مهمی در جامعه دارد و به عنوان یک پل ارتباطی بین افراد در جهت انتقال اطلاعات و ارائه نظرات برای مخاطبان خود، مورد استفاده قرار می‌گیرد.
                            </p>
                        </div>
                  </div>
                <!-- weblog posts section -->
                  <section>
                      <div class="container py-5">
                        <div class="row">
                          <div class="col-lg-8">
                            <div class="container-full">
                              <div class="row gx-3">
                                  <div v-for="post in Posts" :key="post.id" class="col-lg-4">
                                      <!-- post item one -->
                                        <div class="bg-image">     
                                          <img v-if="post.acf.postpic" :src="post.acf.postpic" class="bgbanerimg w-100" alt="bgbaner"/>
                                          <img class="w-100" v-if="!post.acf.postpic" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                                          <div class="mask" style="border-radius: 12px; background: linear-gradient(359.73deg, #000000 -30.17%, rgba(217, 217, 217, 0) 12.75%);"></div>
                                        </div>
                                        <nuxt-link :to="`/blog/${post.title.rendered}/?id=${post.id}`">
                                        <p class="PostItemTitle text-start pt-2 my-2">{{post.title.rendered}}</p>
                                        <div class="PostItemDesc text-start text-muted" v-html="post.excerpt.rendered" />
                                        </nuxt-link>
                                  </div>
                              </div>
                            </div>
                          </div>
                              <!-- big image weblog -->
                              <div class="col-lg-4 ">
                                  <div class="bg-image">
                                    <img src="~/assets/pictures/bgbaner.jpg" class="bgbanerimg w-100" alt="bgbaner"/>
                                    <div class="mask" style="border-radius: 12px; background: linear-gradient(359.73deg, #000000 -30.17%, rgba(217, 217, 217, 0) 80.75%);">
                                        <div class="d-flex flex-column text-start h-100">
                                          <p style="margin-top: auto;" class="bigimgtxt text-white mb-0 pb-2 ps-4">وبلاگ ما</p>
                                          <p dir="rtl" class="bigimgtxtdesc text-white mb-0 pb-5 ps-4">در قسمت وبلاگ مطالب مهم آموزشی و اخبار لوازم ساختمان را قرار داده ایم</p>
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
import axios from "axios";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,    
    TheFooter,
  },
  
  asyncData(context) {
    const Posts = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=3`
    );
    return axios
      .all([
        Posts
      ])
      .then(
        axios.spread((...responses) => {
          const Posts = responses[0];
          
          return {
            Posts: Posts.data
          };
        })
      )
      .catch((e) => {
        context.error(e);
      });
  },

 head() {
    return {
      title: "وبلاگ و مقالات فروشگاه لوازم ساختمان",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "با مطالعه مقالات در خصوص لوازم ساختمانی و صنعتی اطلاعات جامع تری جهت خرید کسب خواهید کرد",
        },
      ],
    };
  },
}
</script>


<style scoped>

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
  background-color: #23A455;
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
  background-color: #23A455;
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
    background-color: #23A455;
    box-shadow: none;
}

.CardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.ProductPriceBkg {
  background-image: url("~assets/pictures/pfdlistbkg.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Content container */
.Content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: black;
}
</style>