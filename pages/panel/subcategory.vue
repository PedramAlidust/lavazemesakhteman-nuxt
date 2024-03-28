<template>
  <section>
    <div class="container-fluid">
      <!-- Mobile menu -->
      <MobileMenu />
      <div class="row">
        <div class="col-lg-10 px-5">
          <h5 class="pt-lg-5 my-5 text-center text-white fw-bold">
            به کمک فرم زیر, زیر دسته محصول ایجاد کنید
          </h5>
          <!-- Create SubCategory -->
          <PictureNameForm
            :picChooseBtnName="'انتخاب عکس زیر دسته'"
            :InputPlaceholder="'نام زیر دسته'"
            :creatBtnName="'ایجاد زیر دسته محصول'"
            :vuexPayloadTitle="'subCategorie_title'"
            :vuexPayloadPic="'subCategorie_picture'"
            :cancelBtn="false"
            @save="SaveFormData"
          />

          <!-- Table component -->
          <Table
            class="my-5"
            :categories="PanelSubCategoryRes"
            :loading="tableLoading"
            :resTitleName="'subcategorie_title'"
            :resPicName="'subcategorie_picture'"
            :editEndPoint="'subcategories'"
            :vuexPaloadPicId="'subcategorie_id'" 
            :vuexPayloadPic="'subcategorie_picture'"
          />
        </div>

        <!-- Desktop section sidebar -->
        <SideBarDesktop />
      </div>
    </div>

    <!-- response message -->
    <message ref="messageRef"></message>
  </section>
</template>
  
<script>
import Message from "~/components/panel/Message.vue";
import MobileMenu from "~/components/panel/MobileMenu.vue";
import SideBarDesktop from "~/components/panel/SideBarDesktop.vue";
import Table from "~/components/panel/Table.vue";
import PictureNameForm from "~/components/panel/PictureNameForm.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    MobileMenu,
    SideBarDesktop,
    Message,
    Table,
    PictureNameForm,
  },
  data() {
    return {
      SubCategorieName: "",
      SelectedPicture: null,
      SelectedPictureFile: null,
      tableLoading: false,
      PanelSubCategoryRes: [],
    };
  },
  computed: {
    ...mapGetters(["DspPanelSubCategoryPostRes", "DspPanelSubCategoriesRes"]),
  },
  watch: {
    DspPanelSubCategoryPostRes(newValue) {
      if (newValue) {
        this.$refs.messageRef.showMessage(this.DspPanelSubCategoryPostRes);
        this.$refs.messageRef.theLoading(false);
        /* Load table */
        this.GetPanelSubCategories({
          token: this.$cookiz.get("jwt-token"),
        });

        /* Set Loading */
        this.tableLoading = true;
      }
    },
    DspPanelSubCategoriesRes(resValue) {
      if (resValue) {
        this.PanelSubCategoryRes = this.DspPanelSubCategoriesRes.data;
        this.tableLoading = false;
      }
    },
  },
  methods: {
    ...mapActions(["SetPanelPostSubCategory", "GetPanelSubCategories"]),
    SaveFormData(FormData) {
      this.SetPanelPostSubCategory({
        token: this.$cookiz.get("jwt-token"),
        ...FormData,
      });
      this.$refs.messageRef.theLoading(true);
    },
  },
  /* mounted */
  mounted() {
    this.GetPanelSubCategories({
      token: this.$cookiz.get("jwt-token"),
    });
    /*load table */
    this.tableLoading = true;
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