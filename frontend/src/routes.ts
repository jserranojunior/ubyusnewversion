import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import FusoesEAquisicoes from "./components/FusoesEAquisicoes.vue";
import Estruturacao from "./components/Estruturacao.vue";
import Sucessao from "./components/Sucessao.vue";
import Gestao from "./components/Gestao.vue";
import Solucoes from "./components/Solucoes.vue";

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
    {
      path: "/sucessao",
      name: "sucessao",
      component: Sucessao,
    },
    {
      path: "/gestao",
      name: "gestao",
      component: Gestao,
    },
    {
      path: "/solucoes",
      name: "solucoes",
      component: Solucoes,
    },
  ],
});

export default router;
