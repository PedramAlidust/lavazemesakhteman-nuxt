<template>
  <div>
    <TheHeader />
  <main>
    <!-- slider section -->
    <section  class="py-lg-5 my-lg-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mt-5 mt-lg-0">
            <img class="img-fluid" src="~/assets/pictures/slider.png" alt="slider">
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-5 text-start">
            <p class="SlideTitle mt-4 pt-5 pt-lg-0"><span class="SliderTitle">فروشگاه</span> لوازم ساختمان </p>
            <p class="text-muted">بزرگ ترین عرضه کننده لوازم ساختمانی و صنعتی</p>
            <p class="sliderDesc pt-4">
              هر آنچه از لوازم ساختمانی و صنعتی نیاز دارید تنها کافیست در فروشگاه آنلاین لوازم ساختمان جستجو کنید.کیفیت و کارایی همراه با قیمت مناسب تنها بخشی از خدمات ما می باشد
            </p>
          <div class="d-flex align-items-center justify-content-end py-5 my-lg-5 pt-lg-2 pb-lg-3">
                <nuxt-link to='/products/'>
                <button role="button" class="me-3 btn ProductStyle">محصولات ما</button>
                </nuxt-link>
                <nuxt-link to="/blog/about">
                <button role="button" class="btn AboutStyle">درباره ما</button>
                </nuxt-link>
            </div>
            <img class="img-fluid" src="~/assets/pictures/properties.png" alt="properties">
          </div>
        </div>
      </div>
    </section>
    <!-- features section -->
    <section  class="py-5 pb-lg-5 mb-lg-4 mt-lg-5 pt-lg-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="FeatureBox text-center text-lg-start p-4">
            <img src="~/assets/svg/truck.svg" alt="truck">
             <p class="FeatureTxt  pt-4">ارسال سریع</p>
             <p class="text-muted mt-3 mb-5">تمامی محصولات با سرعت بالا و در کمترین زمان ممکن به دست شما عزیزان خواهند رسید</p>
            </div>
          </div>
          <div class="col-lg-4">
             <div class="FeatureBox text-center text-lg-start p-4">
            <img src="~/assets/svg/shop.svg" alt="shop">
             <p class="FeatureTxt pt-4">محصولات جدید</p>
             <p class="text-muted mt-3 mb-5">جدید ترین محصولات با کیفیتی باورنکردنی به دست شما مشتریان عزیز خواهند رسید</p>
            </div>
          </div>
          <div class="col-lg-4">
             <div class="FeatureBox text-center text-lg-start p-4">
            <img src="~/assets/svg/discount.svg" alt="truck">
             <p class="FeatureTxt pt-4">تخفیف های ویژه</p>
             <p class="text-muted mt-3 mb-5">باتخفیف ویژه هزینه خرید را کاهش دهید و از خرید سریع و آسان بهره مند شوید</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Products categories section -->
      <section>
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to='/products/'>
            <button role="button" class="CatBtn">مشاهده همه</button>
            </nuxt-link>
            <p class="CatTxt">دسته بندی محصولات</p>
          </div>
        </div>
      </section>
     <!-- Products Ctaegirie -->
 
     <section>
        <div class="container py-5 text-center">
            <div class="row">
              <VueSlickCarousel v-if="categories[0]" :arrows="true" :dots="true" :responsive="slickResponsive">
              <div v-for="categorie in categories" :key="categorie.id"  class="col-lg-3">
                <div class="SubCatCardLook">
                  <img width="300" height="250" class="w-100" v-if="categorie.acf.catpic" :src="categorie.acf.catpic" alt="CatJpg">
                  <img class="w-100" v-if="!categorie.acf.catpic" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                  <nuxt-link :to="`/products/?categoryid=${categorie.id}&title=${categorie.title.rendered}`">
                  <p class="ProdTitle text-start me-2 py-3">{{ categorie.title.rendered }}</p>
                  </nuxt-link>
                 </div>
              </div>
               </VueSlickCarousel>
          </div>        
        </div>
     </section>
    <!-- Products categories section -->
      <section>
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to='/products/'>
            <button role="button" class="CatBtn">مشاهده همه</button>
            </nuxt-link>
            <p class="CatTxt">محصولات ما</p>
          </div>
        </div>
      </section>
     <!-- products section -->
     <section>
        <div class="container py-5 text-center">
          <div class="row">
            <VueSlickCarousel v-if="products[0]" :arrows="true" :dots="true" :responsive="slickResponsive">
              <div v-for="subcategory in products" :key="subcategory.id" class="col-lg-3">
                <div class="CardLook">
                  <img width="300" height="250" class="w-100" v-if="subcategory.acf.subcatpic" :src="subcategory.acf.subcatpic" alt="CatJpg">
                  <img class="w-100" v-if="!subcategory.acf.subcatpic" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                     <nuxt-link :to="`/products/?subcategoryid=${subcategory.id}&title=${subcategory.title.rendered}`">
                     <p class="ProductTitle mt-3">{{subcategory.title.rendered}}</p>
                     <button role="button" class="btn btn-sm btn-success mt-3">مشاهده</button>
                   </nuxt-link>                  
                 </div>
              </div>
              </VueSlickCarousel>
          </div>    
        </div>
     </section>
     <!-- call to action section -->
     <section class="CtaBg">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 py-lg-5">
              <div class="d-none d-lg-block  d-flex align-items-center justify-content-start">
                <img src="~/assets/pictures/LeftPic.png" alt="LeftImg">
                <img class="pe-lg-2" src="~/assets/pictures/zarfshuee.png" alt="LeftImg">
              </div>
            </div>
            <div class="col-lg-6 pe-5 text-start  py-5">
              <div class="d-flex align-items-center justify-content-end pb-4">
                <img class="pe-2" src="~/assets/svg/stars.svg" alt="star">
                <p class="CtaTitle">خلاقیت و زیبایی</p>
             </div>
             <p class="CtaDesc">فروشگاه لوازم ساختمانی خلاقیت و کارایی را به همراه زیبایی و قیمت مناسب را به ارمغان آورده است</p>
             <nuxt-link to='/products/'>
             <button class="ProdBtn bg-white mt-5">محصولات ما</button>
             </nuxt-link>
            </div>
          </div>
        </div>
     </section>
     <!-- testimonial title section -->
     <section class="pt-5 mt-5 pb-5">
      <p class="hr TopProducts text-dark">
        <span class="toptextback">
              نظرات مشتریان
        </span>
      </p>
     </section>
     <!-- testimonial description section -->
     <section class="pb-5">
        <div class="container">
            <VueSlickCarousel :arrows="true" :dots="true" :responsive="CommentResponsive">
          <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PersonThree.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">بهترین تجربه خریدی که داشتم فروشگاه لوازم ساختمانی بود توصیه میکنم حتما از این فروشگاه خرید کنید</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>
           <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PersonOne.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">بعد از مدت زیادی گشت و گزار بین فروشگاه های مختلف فقط فروشگاه لوازم ساختمانی بود که تونست در خرید محصول به من کمک کنه</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>
           <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PedrsonTwo.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">کیفیت محصولات عالی بود و همچنین از مدیریت محترم تشکر ویژه دارم که با صبوری هرچه تمام تر من را راهنمایی کردند</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>   
           <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PersonThree.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">برای دفعه پنجم بود که از فروشگاه لوازم ساختمانی خرید میکردم و میتونم بگم از خرید خودم بسیار راضی هستم</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>   
           <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PersonOne.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">با تشکر فراوان از جناب امینی راهنمایی و تجربه ایشان باعث شد چیزی رو که میخوام با قیمت مناسبپیدا کنم پیروز و موفق باشید</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>   
          <div class="CardLook testimosialBorder">
            <img class="TesimonialImg" src="~/assets/pictures/PersonThree.png" alt="CatJpg">
             <!-- testimonial details -->
              <div class="pb-3 px-2">
                <img class="quitoicon" src="~/assets/pictures/quitos.png" alt="quito">  
                <p class="mb-2 pt-2 testiText text-muted text-start">برای دفعه پنجم بود که از فروشگاه لوازم ساختمانی خرید میکردم و میتونم بگم از خرید خودم بسیار راضی هستم</p>
                <img class="quitoiconLeft" src="~/assets/pictures/quitos.png" alt="quitotwo">  
              </div> 
             <!-- end testimonial details -->
          </div>   
        </VueSlickCarousel>

          </div>
     </section>
      <!-- weblog title section -->
      <section class="py-5">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <nuxt-link to="/blog">
            <button role="button" class="CatBtn">مشاهده همه</button>
            </nuxt-link>
            <p class="BlogTxt">مطالب وبلاگ</p>
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
                      <div v-for="post in Posts" :key="post.id" class="col-lg-4">
                          <!-- post item one -->
                            <div class="bg-image p-5 p-lg-0 text-center">
                              <img v-if="post.acf.postpic" :src="post.acf.postpic" class="bgbanerimg img-fluid" alt="bgbaner"/>
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
              <div class="col-lg-4 d-none d-lg-block">
                  <div class="bg-image">
                    <img
                      src="~/assets/pictures/bgbaner.jpg"
                      class="bgbanerimg w-100"
                      alt="bgbaner"/>
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
      <!-- brands section -->
      <section>
        <div class="container pb-5">
          <div class="row py-4">
            <div class="col-lg-9">
                <!-- brands slides -->
               <VueSlickCarousel :arrows="true" :dots="true" :responsive="slickResponsive">
                <div>
                  <img width="150" height="60" class="w-100" src="~/assets/pictures/shibe.png" alt="shibe">
                </div>
                <div>
                  <img width="150" height="70" class="w-100" src="~/assets/pictures/kas.jpg" alt="kas">
                </div>
                <div>
                   <img width="150" height="50" class="w-100" src="~/assets/pictures/sam.jpg" alt="sam">
                </div>
                <div>
                   <img width="150" height="50" class="w-100" src="~/assets/pictures/golpaye.jpg" alt="golpaye">
                </div>
                 <div>
                    <img width="150" height="70" class="w-100" src="~/assets/pictures/shilan.jpg" alt="shilan">
                </div>
                  <div>
                  <img width="150" height="70" class="w-100" src="~/assets/pictures/kas.jpg" alt="kas">
                </div>
                <div>
                   <img width="150" height="50" class="w-100" src="~/assets/pictures/sam.jpg" alt="sam">
                </div>
                 <div>
                  <img width="150" height="60" class="w-100" src="~/assets/pictures/shibe.png" alt="shibe">
                </div>
                <div>
                  <img width="150" height="70" class="w-100" src="~/assets/pictures/kas.jpg" alt="kas">
                </div>
                <div>
                   <img width="150" height="50" class="w-100" src="~/assets/pictures/sam.jpg" alt="sam">
                </div>
                <div>
                   <img width="150" height="50" class="w-100" src="~/assets/pictures/golpaye.jpg" alt="golpaye">
                </div>
                 <div>
                    <img width="150" height="70" class="w-100" src="~/assets/pictures/shilan.jpg" alt="shilan">
                </div>
              </VueSlickCarousel>
            </div>
            <div class="col-lg-3">
              <p class="brandtxt text-start">برند های ما</p>
              <p class="text-start text-muted">!افتخار ما همکاری با بهترین برند هاست</p>
            </div>
          </div>
        </div>    
      </section>
  </main>
      <TheFooter />
  </div>
</template>

<script>
import axios from "axios";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    TheHeader,    
    TheFooter,
    VueSlickCarousel
  },


  asyncData(context) {
    const categories = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/daste/?per_page=100`
    );
    const products = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/zirdaste/?per_page=100`
    );
    const Posts = axios.get(
      `${process.env.UrlApi}/wp-json/wp/v2/posts/?per_page=100`
    );
    return axios
      .all([
        categories,
        products,
        Posts
      ])
      .then(
        axios.spread((...responses) => {
          const categories = responses[0];
          const products = responses[1];
          const Posts = responses[2];

          return {
            categories: categories.data,
            products: products.data,
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
      title: "فروشگاه آنلاین لوازم ساختمانی و صنعتی - لوازم ساختمان",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "تمامی لوازم ساختمانی و صنعتی از جمله شیرآلات , لوله و اتصالات , محصولات پلاستیکی با برند های نسیم , ترمه , شیبه , کاس و ... عرضه می گردد",
        },
      ],
    };
  },

  data() {
    return {
      slickResponsive: [
        {
          breakpoint: 768, // mobile breakpoint
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // tablet breakpoint
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
           {
          breakpoint: 2024, // tablet breakpoint
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
      ],
      CommentResponsive: [
         {
          breakpoint: 768, // mobile breakpoint
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992, // tablet breakpoint
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
           {
          breakpoint: 2024, // tablet breakpoint
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ]
    }
  }, 
 
};
</script>


<style scoped>

p {
  padding: 0;
  margin: 0;
}

a {
  color: black;
}

/* blog section */
.brandtxt {
  font-weight: bold;
  font-size: 16pt;
}

.PostItemTitle {
  font-weight: bold;
}

.PostItemDesc {
  font-size: 11pt;
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

 .BlogTxt {
  font-weight: bold;
  font-size: 18pt;
 }

/* testimonial */

.testiText {
  text-align-last: right !important;
  text-align: justify !important;
}

.testimosialBorder {
  border: 1px solid #ececec;
}

.quitoiconLeft {
  width: 8%;
  margin-right: auto !important;
}

.quitoicon {
  width: 8%;
  margin-left: auto !important;
}

.TesimonialImg {
  border-radius: 100%;
  width: 25%;
  margin: 0 auto;
}

.TopProducts {
    width: 35%;
    margin: 0 auto;
    text-align: center;
}

.toptextback {
  background-color: #fff;
  padding: 15px 25px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 1.3rem;
}

.hr {
  width: 100%;
  border: none;
  border-bottom: 2px dotted #E5E5E5;
  line-height: .2em;
}

/* Call to action */
.CtaBg {
  background:url('~/assets/pictures/thebanner.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 30vh;
}

.CtaTitle {
  font-weight: bold;
  color: #fff;
  font-size: 18pt;
}

.CtaDesc {
  color: #fff;
  font-size: 14pt;
  text-align: right;
}

.ProdBtn {
  background-color: #fff;
  color: #007F61;
  border: none;
  padding: 9px 22px;
  border-radius: 5px;
  font-weight: 400;
}

/* general slick style for items space */
.slick-slide {
  margin: 10px 10px;
}

.CardLook {
  padding: 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
  border-radius: 8px;
}

.SubCatCardLook {
  padding: 15px 15px 0px 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
  border-radius: 8px;
}

/* end slick style */

/* new product */
.ProdTitle {
  font-weight: bold;
}

.ProdPrice {
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

.CatTitle {
  font-weight: bold;
  color: black;
}

/* FeatureBox */

.CatTxt {
  color: #000000;
  font-weight: bold;
  font-size: 23px;
}

.FeatureTxt {
  color: #000000;
  font-weight: bold;
  font-size: 25px;
}

.FeatureBox {
background: #FFFFFF;
border: 1px solid #F0F0F0;
box-shadow: 0px 38px 54px rgba(0, 0, 0, 0.08);
border-radius: 12px;
}

/* end */

.AboutStyle {
  background-color: #23A455;
  color: #ffff;
  border-radius: 8px;
  box-shadow: none;
  padding: 5px 24px;
}

.ProductStyle {
  color: #23A455;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: none;
  border: 1.5px solid #23A455;
  padding: 5px 10px;
}

.SliderTitle {
  color: #404040;
  font-weight: 900;
  font-size: 38px;
}

.SlideTitle {
  color: #23A455;
  font-weight: 900;
  font-size: 38px;
}

.sliderDesc {
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: justify;
  text-align-last: right;
}

/* slick arrow */
.slick-next:before, 
.slick-prev:before {
    color: black !important;
    font-size: 30px;
  }
  
</style>
