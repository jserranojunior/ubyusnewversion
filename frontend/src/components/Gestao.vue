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
      state.name = "Gestão de Pessoas";
      state.servicos = [
        "Relações Sindicais e Trabalhistas",
        "Cultura Organizacional",
        "Desenvolvimento Humano",
      ];
    } else {
      state.name = "People Management";
      state.servicos = [
        "Labor Relations",
        "Organizational Culture",
        "Human Development",
      ];
    }
  }

  watch(lang, () => {
    langChange();
  });

  onBeforeMount(() => {
    langChange();
  });

  const image = "/static/images/gestao.png";
</script>
