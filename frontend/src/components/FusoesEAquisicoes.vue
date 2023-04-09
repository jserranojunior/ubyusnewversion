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
      state.name = "Fusões e Aquisições";
      state.servicos = [
        "Análise",
        "Perfil e Projeções do Negócio",
        "Valuation",
        "Prospecção de Mercado",
        "Due Diligence",
        "Negociação e Fechamento",
      ];
    } else {
      state.name = "Mergers and Acquisitions";
      state.servicos = [
        "Analysis",
        "Business Profile and Projections",
        "Valuation",
        "Market Prospection",
        "Due Diligence",
        "Negotiation and Closing",
      ];
    }
  }

  watch(lang, () => {
    langChange();
  });

  onBeforeMount(() => {
    langChange();
  });

  const image = "/static/images/fusoes.png";
</script>
