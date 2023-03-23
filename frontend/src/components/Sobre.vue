<template>
  <section id="home">
    <div
      class="bg-gradient-to-r from-primary via-green-500 to-blue-400 flex flex-wrap mt-1"
    >
      <div class="w-full md:w-1/2">
        <link
          rel="preload"
          as="image"
          href="/static/img/home/1.png"
          class="w-full md:w-1/2 my-auto mx-auto"
          width="100"
          height="100"
        />
        <img
          src="/static/img/home/1.png"
          class="w-full md:w-1/2 my-auto mx-auto"
          width="100"
          height="100"
        />
      </div>
      <div class="w-full md:w-1/2 text-white px-12 py-6 mx-auto px-auto">
        <h2 class="text-3xl">Consultoria em Gestão e Estratégia de Negócios</h2>
      </div>
    </div>

    <div class="flex gap-2 my-4 justify-center">
      <div class="w-1/3" v-for="count in [1, 2, 3]">
        <div class="card card-side bg-base-100 shadow-xl">
          <img
            src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
            alt="Movie"
            width="150px"
            height="150px"
            class="w-1/3"
          />

          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-2 my-4 justify-center">
      <div class="w-1/3" v-for="count in [1, 2]">
        <div class="card card-side bg-base-100 shadow-xl">
          <img
            src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
            alt="Movie"
            width="150px"
            height="150px"
            class="w-1/3"
          />

          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-gradient-to-r from-primary via-green-500 to-blue-400 flex flex-wrap mt-1"
    >
      <div class="w-full md:w-1/2">
        <link
          rel="preload"
          as="image"
          href="/static/img/home/1.png"
          class="w-full md:w-1/2 my-auto mx-auto"
          width="100"
          height="100"
        />
        <img
          src="/static/img/home/1.png"
          class="w-full md:w-1/2 my-auto mx-auto"
          width="100"
          height="100"
        />
      </div>
      <div class="w-full md:w-1/2 text-white px-12 py-6 mx-auto px-auto">
        <h2 class="text-3xl">
          UbyUS expressa o princípio de REPRESENTATIVIDADE, materializado por
          relações sinceras, profissionais e perenes com nossos clientes. O
          cliente ("you") passa a ser representado por nossa organização, com
          suas demandas e anseios sendo incorporados por nós ("by us"), contando
          com a nossa PRESENÇA efetiva em todas as etapas do Projeto. Temos como
          propósito a lógica COLABORATIVA no desenvolvimento dos negócios,
          buscando DIVERSIDADE nas inteligências e recursos aplicados,
          assegurando o aprendizado contínuo e a INOVAÇÃO constante de nossas
          soluções. Para nós da UbyUS, é essencial que nossa atuação represente
          uma contribuição para a construção de um mundo cada vez mais plural,
          solidário e humano.
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
