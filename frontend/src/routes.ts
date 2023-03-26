import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import FusoesEAquisicoes from "./components/FusoesEAquisicoes.vue";
import Estruturacao from "./components/Estruturacao.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/fusoeseaquisicoes",
      name: "Fusoes",
      component: FusoesEAquisicoes,
    },
    {
      path: "/estruturacao",
      name: "estruturacao",
      component: Estruturacao,
    },
  ],
});

export default router;
