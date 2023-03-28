<template>
  <div>
    <TemplateNossaAtuacao :name="name" :image="image" :servicos="servicos">
    </TemplateNossaAtuacao>
  </div>
</template>

<script setup lang="ts">
  import TemplateNossaAtuacao from "./TemplateNossaAtuacao.vue";

  const name = "Sucessão e Governança Familiar";

  const servicos = [
    "Mapeamento de Perfis e Objetivos",
    "Estrutura de Governança",
    "Plano de Sucessão",
  ];

  const image = "/static/images/sucessao.png";
</script>
