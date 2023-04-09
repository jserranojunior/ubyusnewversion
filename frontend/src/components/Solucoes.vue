<template>
  <div>
    <TemplateNossaAtuacao
      :name="state.name"
      :image="image"
      :servicos="state.servicos"
    >
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";
  import { useLang } from "../provides/use/useLang";
  import { watch, onBeforeMount, reactive } from "vue";
  const { lang, changeLang, verifyLangEnglish } = useLang();

  const state = reactive({
    name: "",
    servicos: [] as any,
  });

  function langChange() {
    if (lang.value == "portugues") {
      state.name = "Soluções em Serviços Financeiros e Consórcio";
      state.servicos = [
        "Análise de Mercado e Competidores",
        "Opções Estratégicas",
        "Modelo de Negócio",
        "Implementação",
      ];
    } else {
      state.name = "Financial Services and Consortium Solutions";
      state.servicos = [
        "Market and Competitors Analysis",
        "Strategic Options",
        "Business Model",
        "Implementation",
      ];
    }
  }

  watch(lang, () => {
    langChange();
  });

  onBeforeMount(() => {
    langChange();
  });

  const image = "/static/images/solucoes.png";
</script>
