<template>
  <div>
    <TemplateNossaAtuacao :name="name" :image="image" :servicos="servicos">
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";

  const name = "Fusões e Aquisições";

  const servicos = [
    "Análise",
    "Perfil e Projeções do Negócio",
    "Valuation",
    "Prospecção de Mercado",
    "Due Diligence",
    "Negociação e Fechamento",
  ];

  const image = "/static/images/fusoes.png";
</script>
