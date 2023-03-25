import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: import("./components/Home.vue"),
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
