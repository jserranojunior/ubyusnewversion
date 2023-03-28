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

  <section id="atuacao" class="py-12">
    <div class="flex gap-2 my-4 justify-center mx-8">
      <div
        class="w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/fusoeseaquisicoes'"
      >
        <div class="card card-side bg-base-100 shadow-xl">
          <router-link to="fusoeseaquisicoes">
            <div class="flex">
              <img
                src="/static/images/fusoes.png"
                alt="Movie"
                width="150px"
                height="150px"
                class="w-1/3"
              />
              <div class="card-body px-0">
                <p>
                  Fusões e<br />
                  Aquisições
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/estruturacao'"
      >
        <div class="card card-side bg-base-100 shadow-xl">
          <router-link to="estruturacao">
            <div class="flex">
              <img
                src="/static/images/estruturacao.png"
                alt="Movie"
                width="150px"
                height="150px"
                class="w-1/3"
              />
              <div class="card-body px-0">
                <p>Estruturação e Estratégia de Negócios</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/sucessao'"
      >
        <div class="card card-side bg-base-100 shadow-xl">
          <router-link to="sucessao">
            <div class="flex">
              <img
                src="/static/images/sucessao.png"
                alt="Movie"
                width="150px"
                height="150px"
                class="w-1/3"
              />
              <div class="card-body px-0">
                <p>Sucessão e Governança Familiar</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="w-1/4"
        v-if="$router.currentRoute.value.fullPath !== '/gestao'"
      >
        <router-link to="gestao">
          <div class="card card-side bg-base-100 shadow-xl">
            <img
              src="/static/images/gestao.png"
              alt="Movie"
              width="150px"
              height="150px"
              class="w-1/3"
            />

            <div class="card-body px-0">
              <p>Gestão de <br />Pessoas</p>
            </div>
          </div>
        </router-link>
      </div>
      <div
        class="w-1/3"
        v-if="$router.currentRoute.value.fullPath !== '/solucoes'"
      >
        <router-link to="solucoes">
          <div class="card card-side bg-base-100 shadow-xl">
            <img
              src="/static/images/solucoes.png"
              alt="Movie"
              width="150px"
              height="150px"
              class="w-1/3"
            />

            <div class="card-body px-0">
              <p>Soluções em Serviços Financeiros e Consórcio</p>
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
