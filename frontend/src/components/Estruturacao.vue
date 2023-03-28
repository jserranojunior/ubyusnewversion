<template>
  <div>
    <TemplateNossaAtuacao :name="name" :image="image" :servicos="servicos">
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";

  const name = "Estruturação e Estratégia de Negócios";

  const servicos = [
    "Planejamento Estratégico",
    "Modelo de Negócio",
    "Governança",
    "Implementação",
    "Turnaround",
  ];

  const image = "/static/images/estruturacao.png";
</script>
