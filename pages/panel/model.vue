<template>
  <section>
    <div class="container-fluid">
      <!-- Mobile menu -->
      <MobileMenu />
      <div class="row">
        <div class="col-lg-10 px-5">
          <h5 class="pt-lg-5 my-5 text-center text-white fw-bold">
            به کمک فرم زیر, مدل محصول ایجاد کنید
          </h5>

          <!-- Create SubCategory -->
          <PictureNameForm
            :picChooseBtnName="'انتخاب عکس مدل'"
            :InputPlaceholder="'نام مدل'"
            :creatBtnName="'ایجاد مدل محصول'"
            :vuexPayloadTitle="'model_title'"
            :vuexPayloadPic="'model_picture'"
            :cancelBtn="false"
            @save="SaveFormData"
          />

           <!-- Table component -->
           <Table
            class="my-5"
            :categories="PanelModelRes"
            :loading="tableLoading"
            :resTitleName="'model_title'"
            :resPicName="'model_picture'"
            :editEndPoint="'models'"
            :vuexPaloadPicId="'model_id'" 
            :vuexPayloadPic="'model_picture'"
          />

          <!-- END product categories -->
        </div>
        <!-- Desktop section sidebar -->
        <SideBarDesktop />
      </div>
    </div>

    <!-- response message -->
    <Message ref="messageRef" />
  </section>
</template>


<script>
import MobileMenu from "~/components/panel/MobileMenu.vue";
import SideBarDesktop from "~/components/panel/SideBarDesktop.vue";
import Message from "~/components/panel/Message.vue";
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
      SelectedPicture: null,
      SelectedPictureFile: null,
      PanelModelRes: [],
      tableLoading: false,
    };
  },
  watch: {
    DspPostPanelModel(newValue) {
      if (newValue) {
        this.$refs.messageRef.showMessage(this.DspPostPanelModel);
        this.$refs.messageRef.theLoading(false);
        /* Load table */
        this.GetPanelModels({
          token: this.$cookiz.get("jwt-token"),
        });
        /* Set Loading */
        this.tableLoading = true;
      }
    },
    DspPanelModels(resValue) {
      if (resValue) {
        this.PanelModelRes = this.DspPanelModels.data;
        this.tableLoading = false;
      }
    },
  },
  computed: {
    ...mapGetters(["DspPostPanelModel", "DspPanelModels"]),
  },
  methods: {
    ...mapActions(["SetPostPanelModel", "GetPanelModels"]),
    SaveFormData(FormData) {
      this.SetPostPanelModel({
        token: this.$cookiz.get("jwt-token"),
        ...FormData,
      });
      this.$refs.messageRef.theLoading(true);
    },
  },
  /* mounted */
  mounted() {
    this.GetPanelModels({
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


<style scoped>
</style>