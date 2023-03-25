import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/fusoeseaquisicoes",
      component: import("./components/FusoesEAquisicoes.vue"),
    },
    {
      path: "/estruturacao",
      component: import("./components/Estruturacao.vue"),
    },
  ],
});
