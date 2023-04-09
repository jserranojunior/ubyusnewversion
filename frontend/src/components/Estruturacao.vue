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
      state.name = "Estruturação e Estratégia de Negócios";
      state.servicos = [
        "Planejamento Estratégico",
        "Modelo de Negócio",
        "Governança",
        "Implementação",
        "Turnaround",
      ];
    } else {
      state.name = "Business Structuring and Strategy";
      state.servicos = [
        "Strategic Planning",
        "Business Model",
        "Governance",
        "Implementation",
        "Turnaround",
      ];
    }
  }

  watch(lang, () => {
    langChange();
  });

  onBeforeMount(() => {
    langChange();
  });

  const image = "/static/images/estruturacao.png";
</script>
