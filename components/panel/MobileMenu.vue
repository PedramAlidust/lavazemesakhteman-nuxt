<template>
       <div class="d-lg-none row">
        <div class="col-12">
          <div class="bg-dark p-2 text-start">
            <nuxt-link to="/panel">
            <p class="rounded p-2 bg-success pe-2 mt-2 text-white">
              پنل مدیریت وب سایت
            </p>
            </nuxt-link>
             <nuxt-link to="/panel">
              <p class="rounded p-2 bg-success pe-2 mt-2 text-white">
               ایجاد دسته
              </p>
             </nuxt-link>
             <nuxt-link to="/panel/subcategory">
              <p class="rounded p-2 bg-success pe-2 mt-2 text-white">
              ایجاد زیر دسته
              </p>
             </nuxt-link>
            <p class="rounded p-2 bg-success pe-2 mt-2 text-white">
              ایجاد محصول
            </p>
            <p @click="SetSignOut" class="MobileExit ExitButton rounded p-2 bg-danger pe-2 mt-4 text-white">
              خروج از پنل
            </p>
          </div>
        </div>
      </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["SetSignOut"]),
    
  }
}
</script>


<style>
.ExitButton {
  cursor: pointer;
}
</style>