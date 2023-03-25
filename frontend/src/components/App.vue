<script setup lang="ts">
  import { onMounted } from "vue";
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
  import Home from "./Home.vue";
  import BtnToTop from "./BtnToTop.vue";

  onMounted(() => {});
</script>

<template>
  <div>
    <div class="bg-base-100">
      <div class="content px-0 md:px-0 lg:px-0 2xl:px-24">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
        <BtnToTop></BtnToTop>
      </div>
    </div>
  </div>
</template>
