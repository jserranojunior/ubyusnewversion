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

  const image =
    "https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910";
</script>
