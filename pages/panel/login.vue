<template>
  <section>
    <!-- Register form -->
    <div class="container mx-4 px-5 pt-5 custom-form">
      <h3 class="text-center text-white pt-3 fw-bold">ورود به مدیریت سایت</h3>
      <form @submit.prevent class="px-lg-5">
        <div class="mt-5 form-group">
          <input
            class="form-control"
            placeholder="ایمیل خود را وارد کنید"
            v-model="email"
            type="email"
            dir="rtl"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            class="form-control mt-3"
            placeholder="رمز عبور خود را وارد کنید"
            type="password"
            id="typeText"
          />
        </div>
      </form>
      <div class="px-lg-5 pt-2">
        <button @click="Login" class="btn btn-success btn-md">ورود</button>
      </div>
    </div>

    <!-- response message -->
    <message ref="messageRef"></message>
  </section>
</template>
      
  <script>
import { mapGetters, mapActions } from "vuex";
import Message from "~/components/panel/Message.vue";

export default {
  components: {
    Message,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  watch: {
    DspLoginRes(newValue) {
      if(newValue) {
        this.$refs.messageRef.showMessage(this.DspLoginRes);
        this.$refs.messageRef.theLoading(false);
      } 
    }
  },
  computed: {
    ...mapGetters(["DspLoginRes"]),
  },
  methods: {
    ...mapActions(["SetLogin"]),
    Login() {
      this.SetLogin({
        email: this.email,
        password: this.password,
      });
      this.$refs.messageRef.theLoading(true);
    },
  },
};
</script>
  
  <style scoped>
section {
  background: linear-gradient(
    135deg,
    #388e3c,
    #1e6db3,
    #394240
  ); /* Darker gradient from green to blue to a darker shade of gray */
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Custom styles for a Persian psychology website with RTL */
[type="email"],
[type="number"],
[type="tel"],
[type="url"] {
  direction: rtl !important;
}

.RegTxt {
  font-size: 2em;
  color: #28a745; /* Bootstrap green color */
}

.custom-form {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15); /* Enhanced box shadow */
  border: 2px solid #fff; /* White border */
  direction: rtl;
}

.form-group {
  margin-bottom: 20px;
}

.btn-success {
  background-color: #28a745; /* Bootstrap green color */
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838; /* Darker shade of Bootstrap green color */
  border-color: #218838;
}
</style>