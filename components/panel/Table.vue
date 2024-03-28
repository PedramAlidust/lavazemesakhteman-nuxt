<template>
  <div>
    <!-- Dialog for editing item -->
    <div v-if="selectedItem !== null" class="dialog-overlay">
      <div class="dialog">
        <p class="update-modal-text pt-3 ps-4">به روزسانی عکس و متن</p>
        <div class="edit-form px-4 pb-4 pt-2">
          <!-- Edit form inputs go here -->
          <PictureNameForm
            :picChooseBtnName="'انتخاب عکس جدید'"
            :InputPlaceholder="'نام جدید'"
            :creatBtnName="'به روز رسانی'"
            :cancelBtn="true"
            :SelectedPictureId="selectedItem.id"
            :vuexPaloadPicId="vuexPaloadPicId"
            :vuexPayloadPic="vuexPayloadPic"
            @save="EditFormData"
            @EditFieldText="EditFormText"
            @cancel="cancelEdit"
          />
        </div>
      </div>
    </div>

    <!-- Table -->
    <table dir="rtl" class="table">
      <thead>
        <tr>
          <th>نام</th>
          <th>تصویر</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody v-if="pagedItems">
        <tr v-if="loading">
          <td colspan="3">
            <b-notification class="py-5" :closable="false">
              <b-loading
                :is-full-page="false"
                v-model="loading"
                :can-cancel="true"
              ></b-loading>
            </b-notification>
          </td>
        </tr>
        <tr v-for="item in pagedItems" :key="item.id">
          <td>{{ item[resTitleName] }}</td>
          <td>
            <img
              :src="`${panelUrlApi}/storage/` + item[resPicName]"
              alt="Category Image"
              width="150"
              height="150"
            />
          </td>
          <td>
            <button class="btn btn-sm btn-warning" @click="editItem(item)">
              ویرایش
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination">
      <button class="btn btn-primary" :disabled="page === 1" @click="page--">
        قبلی
      </button>
      <span class="btn btn-success paginate-number">{{ page }}</span>
      <button
        class="btn btn-primary"
        :disabled="page * 10 >= totalItems"
        @click="page++"
      >
        بعدی
      </button>
    </div>

    <!-- response message -->
    <Message ref="messageRef" />
  </div>
</template>
  
<script>
import Message from "~/components/panel/Message.vue";
import PictureNameForm from "~/components/panel/PictureNameForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    PictureNameForm,
    Message,
  },
  props: {
    editEndPoint: {
      type: String,
    },
    categories: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    resTitleName: {
      type: String,
      require: true,
    },
    resPicName: {
      type: String,
      require: true,
    },
    vuexPaloadPicId: {
      type: String,
    },
    vuexPayloadPic: {
      type: String,
    },
  },
  data() {
    return {
      CheckDspEditPanelFormDataPicRes: false,
      selectedItem: null,
      page: 1,
      panelUrlApi: process.env.PanelUrlApi,
    };
  },
  watch: {
    DspEditPanelFormDataPicRes(newValue) {
      if (newValue) {
        this.$refs.messageRef.showMessage(this.DspEditPanelFormDataPicRes);
        this.$refs.messageRef.theLoading(false);
        this.cancelEdit();
        if (this.editEndPoint == "categories") {
          this.GetPanelCategories({
            token: this.$cookiz.get("jwt-token"),
          });
        } else if (this.editEndPoint == "subcategories") {
          this.GetPanelSubCategories({
            token: this.$cookiz.get("jwt-token"),
          });
        } else if (this.editEndPoint == "models") {
          this.GetPanelModels({
            token: this.$cookiz.get("jwt-token"),
          });
        }
      }
    },
    DspEditPanelFormDataTextFieldRes(newValue) {
      if (newValue) {
        this.$refs.messageRef.theLoading(false);
        this.cancelEdit();
        if (this.editEndPoint == "categories") {
          this.GetPanelCategories({
            token: this.$cookiz.get("jwt-token"),
          });
        } else if (this.editEndPoint == "subcategories") {
          this.GetPanelSubCategories({
            token: this.$cookiz.get("jwt-token"),
          });
        } else if(this.editEndPoint == "models") {
          this.GetPanelModels({
            token: this.$cookiz.get("jwt-token"),
          });
        }
      }
    },
  },
  computed: {
    ...mapGetters([
      "DspEditPanelFormDataPicRes",
      "DspEditPanelFormDataTextFieldRes",
    ]),
    totalItems() {
      return this.categories.length;
    },
    pagedItems() {
      const start = (this.page - 1) * 10;
      const end = this.page * 10;
      return this.categories.slice(start, end);
    },
  },
  methods: {
    ...mapActions([
      "SetEditPanelFormDataPic",
      "SetEditPanelFormDataTextField",
      "GetPanelCategories",
      "GetPanelSubCategories",
      "GetPanelModels"
    ]),
    editItem(item) {
      this.selectedItem = item;
    },
    cancelEdit() {
      this.selectedItem = null;
    },
    async EditFormData(FormData) {
      const payload = {
        token: this.$cookiz.get("jwt-token"),
        endPointTitle: this.vuexPaloadPicId,
        endPointPicture: this.vuexPayloadPic,
        endpoint: this.editEndPoint,
      };

      if ("categorie_id" in FormData) {
        payload.endPointTitleValue = FormData.categorie_id;
      } else if ("subcategorie_id" in FormData) {
        payload.endPointTitleValue = FormData.subcategorie_id;
      } else if("model_id" in FormData) {
        payload.endPointTitleValue = FormData.model_id
      }

      if ("categorie_picture" in FormData) {
        payload.endPointPictureValue = FormData.categorie_picture;
      } else if ("subcategorie_picture" in FormData) {
        payload.endPointPictureValue = FormData.subcategorie_picture;
      } else if ("model_picture" in FormData) {
        payload.endPointPictureValue = FormData.model_picture
      } 

      this.SetEditPanelFormDataPic(payload);
      this.$refs.messageRef.theLoading(true);
    },
    async EditFormText(FormData, EditFieldText) {
      const payload = {
        token: this.$cookiz.get("jwt-token"),
        endpoint: this.editEndPoint,
        endPointTitle: this.resTitleName,
        endPointTitleValue: EditFieldText,
      };

      if ("subcategorie_id" in FormData) {
        payload.endpointId = FormData.subcategorie_id;
      } else if ("categorie_id" in FormData) {
        payload.endpointId = FormData.categorie_id;
      } else if ("model_id" in FormData) {
        payload.endpointId = FormData.model_id
      }

      this.SetEditPanelFormDataTextField(payload);
      this.$refs.messageRef.theLoading(true);
    },
  },
};
</script>
  
  <style scoped>
/* Add custom styles as needed */

.update-modal-text {
  text-align: right;
  font-weight: bold;
  font-size: 14pt;
}

.paginate-number {
  font-weight: bold;
  color: #fff;
}

.table {
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
}

.table th {
  font-weight: bold;
  font-size: 12pt;
  border-bottom: 1px solid #ccc;
}

.table td {
  text-align: center;
  vertical-align: middle;
}

.table th,
.table td {
  text-align: center;
  padding: 8px;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  margin-right: 10px;
  cursor: pointer;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  width: 50%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.dialog h2 {
  margin-top: 0;
}

.buttons {
  margin-top: 20px;
  text-align: center;
}
</style>
  