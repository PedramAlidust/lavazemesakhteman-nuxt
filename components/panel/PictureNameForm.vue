<template>
  <div class="px-5 py-5 custom-form">
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
          {{ picChooseBtnName }}
        </button>
        <!-- Display selected picture -->
        <div v-if="SelectedPicture">
          <img
            width="400"
            height="400"
            :src="SelectedPicture"
            alt="picture"
            class="pt-3"
          />
        </div>
      </div>
      <div class="form-group">
        <input
          v-model="CategorieName"
          class="form-control"
          :placeholder="InputPlaceholder"
          type="text"
        />
      </div>
    </form>
    <div class="px-lg-5 pt-2">
      <button @click="SaveFormData" class="btn btn-success btn-md">
        {{ creatBtnName }}
      </button>
      <button v-if="cancelBtn" class="btn btn-danger mx-2" @click="cancelEdit">
        انصراف
      </button>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    SelectedPictureId: {
      type: Number,
    },
    picChooseBtnName: {
      type: String,
      required: true,
    },
    InputPlaceholder: {
      type: String,
      require: true,
    },
    creatBtnName: {
      type: String,
      require: true,
    },
    vuexPayloadPic: {
      type: String,
      require: true,
    },
    vuexPaloadPicId: {
      type: String,
    },
    vuexPayloadTitle: {
      type: String,
    },
    cancelBtn: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      CategorieName: "",
      SelectedPicture: null,
      SelectedPictureFile: null,
    };
  },
  methods: {
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
      const payload = {};

      if (this.$props.vuexPaloadPicId) {
        payload[this.$props.vuexPaloadPicId] = this.SelectedPictureId;
      }

      if (this.$props.vuexPayloadTitle) {
        payload[this.$props.vuexPayloadTitle] = this.CategorieName;
      }

      // Assign SelectedPictureFile only once, outside the conditions
      payload[this.$props.vuexPayloadPic] = this.SelectedPictureFile;

      if (this.CategorieName && this.SelectedPictureFile) {
        this.$emit("EditFieldText", payload, this.CategorieName);
        this.$emit("save", payload);
      } else if (this.CategorieName) {
        this.$emit("EditFieldText", payload, this.CategorieName);
      } else if (this.SelectedPictureFile) {
        this.$emit("save", payload);
      }
    },
    cancelEdit() {
      this.$emit("cancel");
    },
  },
};
</script>
  
  <style scoped>
/* Add your scoped styles here */
</style>
  