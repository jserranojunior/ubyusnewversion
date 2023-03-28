<template>
  <div>
    <TemplateNossaAtuacao :name="name" :image="image" :servicos="servicos">
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";

  const name = "Soluções em Serviços Financeiros e Consórcio";

  const servicos = [
    "Análise de Mercado e Competidores",
    "Opções Estratégicas",
    "Modelo de Negócio",
    "Implementação",
  ];

  const image = "/static/images/solucoes.png";
</script>
