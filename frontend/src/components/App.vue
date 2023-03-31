<script setup lang="ts">
  import Navbar from "./Navbar.vue";
  import Footer from "./Footer.vue";
  import BtnToTop from "./BtnToTop.vue";
</script>

<template>
  <div>
    <div class="flex justify-center bg-gray-200">
      <!--       <div class="content px-0 md:px-0 lg:px-0 2xl:px-24 ">
 -->
      <div
        class="w-full tab:w-full lap:w-10/12 des:w-8/12 ult:w-7/12 bg-base-100"
      >
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
        <BtnToTop></BtnToTop>
      </div>
    </div>
  </div>
</template>
