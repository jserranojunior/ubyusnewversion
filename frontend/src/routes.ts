import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Home from "./components/Home.vue";
import FusoesEAquisicoes from "./components/FusoesEAquisicoes.vue";
import Estruturacao from "./components/Estruturacao.vue";
import Sucessao from "./components/Sucessao.vue";
import Gestao from "./components/Gestao.vue";
import Solucoes from "./components/Solucoes.vue";
import Contato from "./components/Contato.vue";
import Socios from "./components/Socios.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: "/contato",
      name: "contato",
      component: Contato,
    },
    {
      path: "/socios",
      name: "socios",
      component: Socios,
    },
  ],
});

export default router;
