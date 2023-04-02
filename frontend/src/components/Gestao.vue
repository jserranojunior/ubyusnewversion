<template>
  <div>
    <TemplateNossaAtuacao :name="name" :image="image" :servicos="servicos">
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";

  const name = "Gestão de Pessoas";

  const servicos = [
    "Relações Sindicais e Trabalhistas",
    "Cultura Organizacional",
    "Desenvolvimento Humano",
  ];

  const image = "/static/images/gestao.png";
</script>
