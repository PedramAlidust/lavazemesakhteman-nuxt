<template>
  <section class="ProductPriceBkg">
    <TheHeader />
    <!-- page container -->
    <main class="pb-5 mb-5">
      <!-- factor section -->
      <section>
        <p class="PrdPrcTitle text-center pt-5 fw-bold">تکمیل اطلاعات</p>
        <div class="container bg-white Content mt-5 rounded py-5">
          <div class="row px-4 content">
             <!-- getting info -->
                <form>
                    <div dir="rtl" class="form-group">
                        <label class="fw-bold">نام شما</label>
                        <input v-model="name" type="text" class="mt-2 form-control"  placeholder="نام خود را وارد کنید">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">شماره تماس</label>
                        <input v-model="number" type="text" class="mt-2 form-control" placeholder="شماره تماس خود را وارد کنید">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">شهر</label>
                        <input v-model="town" type="text" class="mt-2 form-control" placeholder="شهر محل تحویل کالا">
                    </div>
                    <div dir="rtl" class="mt-3 form-group">
                        <label class="fw-bold">آدرس شما</label>
                        <textarea v-model="address" class="mt-2 form-control" rows="5" placeholder="آدرس محل سکونت خود را وارد کنید"></textarea>
                    </div>
                </form>
          </div>
          <!-- buttons and price -->
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 mt-2">
                  <button v-if="this.DspCart[0]" @click="registerOrder" class="btn btn-danger btn-sm fw-bold">
                    ثبت سفارش                 
                 </button>
                 <nuxt-link v-if="!this.DspCart[0]" :to="`/products/all`">
                    <button class="btn btn-danger btn-sm fw-bold">
                      مشاهده محصولات                 
                  </button>
                 </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <TheFooter />


    <!-- response message -->
    <Message ref="messageRef" />
  </section>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
import Message from "@/components/panel/Message.vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    TheHeader,
    TheFooter,
    VueSlickCarousel,
    Message
  },
  data() {
    return {
      name: "",
      number: "",
      town: "", 
      address: "", 
    };
  },
  watch: {
    DspOrderInCrmRes(newValue) {
      if (newValue.id) {
        this.$refs.messageRef.showMessage({data: {message: "سفارش شما ثبت شد کارشناسان ما تا دقایقی دیگر با شما تماس خواهند گرفت"}});
        this.$refs.messageRef.theLoading(false);

        // Construct the SMS message for internal notification
        const internalMessage = `مشتری با مشخصات زیر ثبت سفارش کرد:\nنام: ${this.name}\nشماره تماس: ${this.number}\nشهر: ${this.town}\nآدرس: ${this.address}\nمحصول: ${this.DspCart[0].name}`;

        // Construct the SMS message for the customer
        const customerMessage = `مشتری گرامی سفارش شما با مشخصات زیر ثبت شد:\n\nنام: ${this.name}\nشماره تماس: ${this.number}\nشهر: ${this.town}\nآدرس: ${this.address}\nمحصول: ${this.DspCart[0].name}\n\nمجموعه پخش امینی یکتا\nlavazemesakhteman.com\n02155580447`;

        // List of phone numbers for internal notifications
        const phoneNumbers = [
          '09392250576',
          '09122339423',
          '09192702180'
        ];

        // Send internal notification SMS to each phone number
        phoneNumbers.forEach(number => {
          const requestUrl = `https://api.payamak-panel.com/post/Send.asmx/SendSimpleSMS?username=989122339423&password=$NPT5&to=${number}&from=50002710039423&text=${encodeURIComponent(internalMessage)}&isflash=false`;

          fetch(requestUrl)
            .then(response => response.json())
            .then(responseData => {
              console.log(`Internal GET request successful for ${number}, data:`, responseData);
            })
            .catch(error => {
              console.error(`Error making internal GET request for ${number}:`, error);
            });
        });

        // Send customer SMS
        const customerRequestUrl = `https://api.payamak-panel.com/post/Send.asmx/SendSimpleSMS?username=989122339423&password=$NPT5&to=${this.number}&from=50002710039423&text=${encodeURIComponent(customerMessage)}&isflash=false`;

        fetch(customerRequestUrl)
          .then(response => response.json())
          .then(responseData => {
            console.log('Customer GET request successful, data:', responseData);
          })
          .catch(error => {
            console.error('Error making customer GET request:', error);
          });
      }
    },
  }, 
  computed: {
    ...mapGetters([
      "DspOrderInCrmRes",
      "DspCart"
    ])
  },
  methods: {
    ...mapActions([
      "setOrderInCrm",
    ]), 
    registerOrder() {
      if(this.name && this.number && this.town && this.address) {
            this.setOrderInCrm({
            company: this.name,
            phonenumber: this.number,
            city: this.town,
            address: this.address,
            theProduct: this.DspCart[0].name
          });

          this.$refs.messageRef.theLoading(true);

          // Redirect to /products/all after registering the order
          setTimeout(() => {
            this.$router.push('/products/all');
          }, 10000); // 10000 milliseconds = 10 seconds

      } else {
        alert('همه فیلد ها را وارد کنید')
      }
      
    }
  },
};
</script>
  
  
  <style scoped>
.content {
  min-height: 25vh;
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
}

.bigimgtxtdesc {
  font-size: 12pt;
}

.PostItemTitle {
  font-weight: bold;
}

/* categorie */
.CatBtn {
  background-color: #23a455;
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
  background-color: #23a455;
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
  background-color: #23a455;
  box-shadow: none;
}

.CardLook {
  margin-right: 10px;
  margin-left: 10px;
  padding: 15px !important;
  background-color: #fff;
  box-shadow: 0px 5px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}

/* product section */

.PrdPrcTitle {
  font-size: 20pt;
  color: #fff;
}

.CompareTitle {
  font-size: 20pt;
}

.ProductPriceBkg {
  background-color: #1a3745;
}

/* Content container */
.Content {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0))
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.PostItemTitle {
  color: black;
}

.DelWidth {
  cursor: pointer;
  width: 25px;
}
</style>