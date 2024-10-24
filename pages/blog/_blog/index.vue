<template>
    <section class="ProductPriceBkg">
            <TheHeader />
            <!-- page container -->
                <main class="pb-5 mb-5">
                  <section v-if="Post.data[0].ArticleTitle">
                       <h1 dir="rtl" class="PrdPrcTitle text-center pt-5 fw-bold">{{ Post.data[0].ArticleTitle }}</h1>
                      <div class="container Content mt-5 rounded py-5">
                        <div dir="rtl" class="row px-4 content" v-html="Post.data[0].content" />
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
                          <div class="col-lg-12">
                            <div class="container-full">
                              <div dir="rtl" class="row gx-3">
                                  <div v-for="post in Posts.data" :key="post.ArticleId" class="col-lg-4 px-4 px-lg-4">
                                      <!-- post item one -->
                                        <div class="p-lg-0 text-center">
                                          <img style="height: 300px;" v-if="post.ArticleImage" :src="`https://api.lavazemesakhteman.com${post.ArticleImage.url}`" class="w-100 bgbanerimg" alt="bgbaner"/>
                                          <img class="w-100" v-if="!post.ArticleImage" src="~/assets/pictures/notavalable.png" alt="CatJpg">
                                        </div>
                                      <nuxt-link :to="`/blog/${post.ArticleTitle}/?id=${post.ArticleId}`">
                                        <p class="PostItemTitle text-start pt-2 my-2">{{post.ArticleTitle}}</p>
                                        <div class="PostItemDesc text-start text-white" v-html="post.ArticleExcerpt" />
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
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    TheHeader,    
    TheFooter,
    VueSlickCarousel
  },
   
  asyncData(context) {
    const Post = axios.get(
      `https://api.lavazemesakhteman.com/api/articles?filters[ArticleId][$eq]=${context.query.id}`, 
    );
    const Posts = axios.get(
      `https://api.lavazemesakhteman.com/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=15`
    );
    return axios
      .all([
        Post,
        Posts
      ])
      .then(
        axios.spread((...responses) => {
          const Post = responses[0];
          const Posts = responses[1];

          return {
            Post: Post.data,
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
      title: this.Post.data.ArticleMetaTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.Post.data.ArticleMetaDescription,
        },
      ],
    };
  }, 
}
</script>


<style scoped>

.DownloadBtn {
  border-radius: 5px;
  padding: 8px 20px;
  background-color: #BE2623;
  box-shadow: none;
}

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
background-color: #BE2623;
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
  background-color: #BE2623;
  box-shadow: none;
}

.CardLook {
padding: 15px !important;
background-color: #fff;
box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.06);
border-radius: 8px;
}

.ListCardLook {
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
background-color: #0E3746;
background-position: top;
background-repeat: no-repeat;
background-size: cover;
}

/* Content container */
.Content {
background-color: #F4F2EC;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
color: #ffff;
}  
</style>