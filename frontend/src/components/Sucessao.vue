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
      state.name = "Sucessão e Governança Familiar";
      state.servicos = [
        "Mapeamento de Perfis e Objetivos",
        "Estrutura de Governança",
        "Plano de Sucessão",
      ];
    } else {
      state.name = "Succession and Family Governance";
      state.servicos = [
        "Mapping of Profiles and Objectives",
        "Governance Structure",
        "Succession Plan",
      ];
    }
  }

  watch(lang, () => {
    langChange();
  });

  onBeforeMount(() => {
    langChange();
  });

  const image = "/static/images/sucessao.png";
</script>
