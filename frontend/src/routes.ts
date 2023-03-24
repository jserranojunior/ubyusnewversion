import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import NossaAtuacao from "./components/NossaAtuacao.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/nossafuncao",
      component: NossaAtuacao,
    },
  ],
});
