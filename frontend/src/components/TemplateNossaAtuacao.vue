<template>
  <div class="flex py-2 px-8 text-left order-t">
    <div class="w-auto flex justify-center border-y border-ubyus-200 py-4">
      <div
        class="itens-center align-middle my-auto ml-4 text-xl prompt font-bold border-green-800 text-ubyus-100 u--fadeInLeft"
      >
        Nossas Atuações
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="w-auto">
      <div
        class="card card-side bg-base-100 shadow-sm border-t border-gray-100"
      >
        <div class="flex">
          <img
            :src="props.image"
            alt="Movie"
            width="150"
            height="150"
            class="u--fadeInUp"
          />
          <div class="card-body text-xl u--fadeInDown my-auto">
            <p>{{ props.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mb-12">
    <div class="w-auto">
      <div class="mx-auto px-auto text-lg mt-6">
        <p class="mt-1" v-for="servico in servicos">
          <Icon class="px-1" icon="icon-park:loading-four" /><span
            class="u--fadeInLeft"
            >{{ servico }}</span
          >
        </p>
      </div>
    </div>
  </div>

  <section id="atuacao" class="py-12">
    <div class="flex flex-wrap my-4 justify-center mx-3">
      <div
        class="card card-side bg-base-100 shadow-xl u--fadeInLeft w-full md:w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/fusoeseaquisicoes'"
      >
        <router-link to="fusoeseaquisicoes">
          <div class="flex">
            <div class="w-1/3">
              <img src="/static/images/fusoes.png" class="u--fadeInLeft" />
            </div>
            <div class="px-2 my-auto w-2/3">
              <p class="u--fadeInUp text-sm font-bold">Fusões e Aquisições</p>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="w-full md:w-1/4 card card-side bg-base-100 shadow-xl u--fadeInRight"
        v-if="$router.currentRoute.value.fullPath !== '/estruturacao'"
      >
        <router-link to="estruturacao">
          <div class="flex">
            <div class="w-1/3">
              <img
                src="/static/images/estruturacao.png"
                class="u--fadeInLeft"
              />
            </div>
            <div class="px-2 my-auto w-2/3">
              <p class="u--fadeInUp text-sm font-bold">
                Estruturação e Estratégia de Negócios
              </p>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="w-full md:w-1/4 card card-side bg-base-100 shadow-xl u--fadeInLeft"
        v-if="$router.currentRoute.value.fullPath !== '/sucessao'"
      >
        <router-link to="sucessao">
          <div class="flex">
            <div class="w-1/3">
              <img src="/static/images/sucessao.png" class="u--fadeInLeft" />
            </div>
            <div class="px-2 my-auto w-2/3">
              <p class="u--fadeInUp text-sm font-bold">
                Sucessão e Governança Familiar
              </p>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="card card-side bg-base-100 shadow-xl u--fadeInLeft w-full md:w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/gestao'"
      >
        <router-link to="gestao">
          <div class="flex">
            <div class="w-1/3">
              <img src="/static/images/gestao.png" class="u--fadeInLeft" />
            </div>
            <div class="px-2 my-auto w-2/3">
              <p class="u--fadeInUp text-sm font-bold">Gestão de Pessoas</p>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="card card-side bg-base-100 shadow-xl u--fadeInLeft w-full md:w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/solucoes'"
      >
        <router-link to="solucoes">
          <div class="flex">
            <div class="w-1/3">
              <img src="/static/images/solucoes.png" class="u--fadeInLeft" />
            </div>
            <div class="px-2 my-auto w-2/3">
              <p class="u--fadeInUp text-sm font-bold">
                Soluções em Serviços Financeiros e Consórcio
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
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
