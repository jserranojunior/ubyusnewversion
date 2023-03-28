<template>
  <x class="flex my-4 px-8">
    <div class="w-full">
      <h1 class="text-xl">Nossas Atuações</h1>
    </div>
  </x>

  <div class="flex justify-center">
    <div class="w-auto">
      <div class="card card-side bg-base-100 shadow-xl">
        <router-link to="nossafuncao">
          <div class="flex">
            <img :src="props.image" alt="Movie" width="150" height="150" />
            <div class="card-body text-xl">
              <p>{{ props.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mb-12">
    <div class="w-auto">
      <div class="mx-auto px-auto text-lg mt-6">
        <p class="mt-1" v-for="servico in servicos">
          <Icon class="px-1" icon="icon-park:loading-four" />{{ servico }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    servicos: {
      type: Array,
      require: true,
    },
  });
</script>
