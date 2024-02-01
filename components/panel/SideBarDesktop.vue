<template>
      <div class="LeftPanel bg-dark col-lg-2 d-none d-lg-block">
          <nuxt-link class="profile_title" to="/panel">
            <p class="rounded bg-success p-2 mt-5 me-2 text-start text-white">
              پنل مدیریت وب سایت
            </p>
          </nuxt-link>
          <nuxt-link to="/panel">
          <p class="rounded bg-success p-2 mt-5 me-2 text-start text-white">
            ایجاد دسته
          </p>
          </nuxt-link>
          <nuxt-link to="/panel/subcategory">
          <p class="rounded bg-success p-2 mt-3 me-2 text-start text-white">
            ایجاد زیر دسته
          </p>
          </nuxt-link>
          <p class="rounded bg-success p-2 mt-3 me-2 text-start text-white">
            ایجاد محصول
          </p>
          <p @click="SetSignOut" class="ExitButton rounded bg-danger p-2 mt-5 me-2 text-start text-white">
            خروج از پنل
          </p>
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