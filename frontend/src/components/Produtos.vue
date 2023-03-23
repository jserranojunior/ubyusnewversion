<template>
  <div v-if="state.showProdutos">
    <ProdutosModalVue></ProdutosModalVue>
  </div>
  <section id="produtos">
    <div class="py-4 px-2 md:px-8 mt-4 text-center">
      <span
        class="text-base md:text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        >Tecnologia, qualidade e comprometimento</span
      >
    </div>
    <div class="flex flex-wrap px-12 mt-6">
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/1.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/2.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/3.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/4.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/5.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
      <div class="w-full md:w-1/3 px-1">
        <img
          src="../assets/images/produtos/6.png"
          class="mx-auto mt-1"
          width="500"
          height="500"
          style="width: 100%"
        />
      </div>
    </div>

    <div class="flex mt-1 justify-end">
      <div class="mt-4 mr-12">
        <label
          for="my-modal-produtos"
          class="btn animate-bounce"
          @click="changeProdutos()"
          >Mais Produtos</label
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProdutosModalVue from "./ProdutosModal.vue";
  import { reactive } from "vue";

  const state = reactive({
    showProdutos: false,
  });
  function changeProdutos() {
    console.log("JOi");
    state.showProdutos = true;
  }
</script>

<style scoped></style>
