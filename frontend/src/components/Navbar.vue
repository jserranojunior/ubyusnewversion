<template>
  <div class="flex justify-end mr-5 mt-4">
    <div>
      <img
        class="mx-2 cursor-pointer"
        src="/static/images/ptbr.png"
        width="22"
        height="10"
        @click="changeLang('portugues')"
      />
    </div>
    <div>
      <img
        class="cursor-pointer"
        src="/static/images/usa.png"
        width="22"
        height="10"
        @click="changeLang('english')"
      />
    </div>
  </div>
  <LogoArea></LogoArea>

  <div class="navbar p-0 m-0 py-0 min-h-0 my-4 sm:my :0">
    <div class="navbar-start w-auto flex sm:hidden">
      <div class="dropdown text-center mx-auto">
        <label
          tabindex="0"
          class="ml-4 mb-4 btn btn-primary bg-yellow-700 hover:bg-yellow-800 active:bg-yellow-800 text-gray-100 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a class="navbar-link" href="/">Home</a></li>

          <li>
            <a
              v-if="lang == 'portugues'"
              class="navbar-link"
              href="#aubyus"
              @click.prevent="scrollToSection('aubyus')"
              >A UbyUS</a
            >
            <a
              v-else
              class="navbar-link"
              href="#aubyus"
              @click.prevent="scrollToSection('aubyus')"
              >The UbyUS</a
            >
          </li>
          <li>
            <a
              v-if="lang == 'portugues'"
              class="navbar-link"
              href="#atuacao"
              @click.prevent="scrollToSection('atuacao')"
              >Nossa Atuação</a
            >
            <a
              v-else
              class="navbar-link"
              href="#atuacao"
              @click.prevent="scrollToSection('atuacao')"
              >Our Expertise</a
            >
          </li>
          <li>
            <router-link
              v-if="lang == 'portugues'"
              to="contato"
              class="navbar-link"
            >
              Contato</router-link
            >
            <router-link v-else to="contato" class="navbar-link">
              Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-end hidden sm:flex w-full">
      <ul class="menu menu-horizontal px-1">
        <li><a class="navbar-link" href="/">Home</a></li>

        <li>
          <a
            v-if="lang == 'portugues'"
            class="navbar-link"
            href="/#aubyus"
            @click.prevent="scrollToSection('aubyus')"
            >A UbyUSr</a
          >
          <a
            v-else
            class="navbar-link"
            href="/#aubyus"
            @click.prevent="scrollToSection('aubyus')"
            >The UbyUS</a
          >
        </li>
        <li>
          <a
            v-if="lang == 'portugues'"
            class="navbar-link"
            href="/#atuacao"
            @click.prevent="scrollToSection('atuacao')"
            >Nossa Atuação</a
          >
          <a
            v-else
            class="navbar-link"
            href="/#atuacao"
            @click.prevent="scrollToSection('atuacao')"
            >Our Expertise</a
          >
        </li>
        <li>
          <router-link
            v-if="lang == 'portugues'"
            to="contato"
            class="navbar-link"
          >
            Contato</router-link
          >
          <router-link v-else to="contato" class="navbar-link">
            Contact</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoArea from "./LogoArea.vue";
import { useLang } from "../provides/use/useLang";
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { nextTick } from "vue";

const { lang, changeLang, verifyLangEnglish } = useLang();
const router = useRouter();
const route = useRoute();
function scrollToSection(sectionId: any) {
  if (route.path !== "/") {
    // Redireciona para a página inicial se não estiver lá
    router.push("/").then(() => {
      // Aguarda o redirecionamento e dá tempo para o DOM renderizar
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Ajuste o tempo conforme necessário
    });
  } else {
    // Rola diretamente se já estiver na página inicial
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}
onBeforeMount(() => {
  verifyLangEnglish();
  console.log(lang.value);
});
</script>
