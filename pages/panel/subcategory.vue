<template>
  <section>
    <div class="container-fluid">
       <!-- Mobile menu -->
       <MobileMenu />
      <div class="row">
        <div class="col-lg-10">
          <h5 class="pt-lg-5 my-5 text-center text-white fw-bold">
            به کمک فرم زیر, زیر دسته محصول ایجاد کنید
          </h5>
          <div class="mx-4 px-5 py-5 custom-form">
            <!-- display errors  -->
            <form @submit.prevent class="px-lg-5">
              <div class="form-group">
                <input
                  type="file"
                  @change="handleFileChange"
                  ref="fileInput"
                  style="display: none"
                />
                <button
                  @click="openFileInput"
                  class="text-white btn btn-sm btn-secondary"
                  type="button"
                >
                  انتخاب عکس زیر دسته
                </button>
                <!-- Display selected picture -->
                <div v-if="SelectedPicture">
                  <img
                    :src="SelectedPicture"
                    alt="picture"
                    class="pt-3 w-100"
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  v-model="CategorieName"
                  class="form-control"
                  placeholder="نام زیر دسته"
                  type="text"
                />
              </div>
            </form>
            <div class="px-lg-5 pt-2">
              <button @click="SaveFormData" class="btn btn-success btn-md">
                ایجاد زیر دسته محصول
              </button>
            </div>
          </div>
        </div>
         <!-- Desktop section sidebar -->
         <SideBarDesktop />
      </div>
    </div>
  </section>
</template>
  
<script>
import MobileMenu from '~/components/panel/MobileMenu.vue';
import SideBarDesktop from '~/components/panel/SideBarDesktop.vue';
import { mapGetters, mapActions } from "vuex";
export default {
components: {
    MobileMenu,
    SideBarDesktop
  },
  data() {
    return {
      CategorieName: "",
      SelectedPicture: null,
      SelectedPictureFile: null,
    };
  },
  computed: {
    ...mapGetters(["DspPanelCategorySucRes", "DspPanelCategoryErrRes"]),
  },
  methods: {
    ...mapActions(["SetPanelPostCategory"]),
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        //Store file object directly
        this.SelectedPictureFile = file;

        //File Reader to read the selected picture as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          this.SelectedPicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    SaveFormData() {
      this.SetPanelPostCategory({
        token: this.$cookiz.get("jwt-token"),
        categorie_title: this.CategorieName,
        categorie_picture: this.SelectedPictureFile,
      });
    },
  },
  /* check if User is not authenticated */
  middleware({ redirect, app }) {
    if (!app.$cookiz.get("jwt-token")) {
      redirect("/panel/login");
    }
  },
};
</script>
  
  <style>
a {
  text-decoration: none;
}

.MobileExit {
  text-align: center;
  width: 100px;
}

.profile_title {
  text-decoration: none !important;
}

.LeftPanel {
  min-height: 100vh;
}

.bg-grey {
  background-color: #f8f9fa; /* Set your preferred grey color */
}

section {
  background: linear-gradient(
    135deg,
    #388e3c,
    #1e6db3,
    #394240
  ); /* Darker gradient from green to blue to a darker shade of gray */
  min-height: 100vh;
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