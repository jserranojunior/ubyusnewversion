<template>
  <div>
    <section id="home">
      <div class="flex flex-wrap mt-16 justify-between mx-8">
        <div class="w-full md:w-1/5">
          <img
            src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
            class=""
            width="150"
            height="150"
          />
        </div>
        <div class="w-full md:w-auto py-6 text-left mx-auto">
          <h2 class="text-4xl">
            Consultoria em Gestão e Estratégia de Negócios
          </h2>
        </div>
      </div>

      <div class="flex mt-16 mx-8">
        <div class="w-full">Nossa Atuação</div>
      </div>
      <div class="flex gap-2 my-4 justify-center mx-8">
        <div class="w-1/3" v-for="count in [1, 2, 3]">
          <div class="card card-side bg-base-100 shadow-xl">
            <router-link to="nossafuncao">
              <div class="flex">
                <img
                  src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
                  alt="Movie"
                  width="150px"
                  height="150px"
                  class="w-1/3"
                />
                <div class="card-body">
                  <p>Fusões e Aquisições</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex gap-2 justify-center py-8">
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
              <p>Fusões e Aquisições</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="border-t border-b border-base-content bg-base flex flex-wrap justify-between px-8"
      >
        <div class="w-full md:w-1/5 px-6 my-auto border-r border-base-content">
          <div class="w-full text-xl mb-4">A Ubyus</div>

          <img
            src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
          />
        </div>
        <div class="w-full md:w-4/5 text-letf text-base-content py-6 px-4">
          <h2>
            UbyUS expressa o princípio de REPRESENTATIVIDADE, materializado por
            relações sinceras, profissionais e perenes com nossos clientes.<br /><br />
            O cliente ("you") passa a ser representado por nossa organização,
            com suas demandas e anseios sendo incorporados por nós ("by us"),
            contando com a nossa PRESENÇA efetiva em todas as etapas do
            Projeto.<br /><br />
            Temos como propósito a lógica COLABORATIVA no desenvolvimento dos
            negócios, buscando DIVERSIDADE nas inteligências e recursos
            aplicados, assegurando o aprendizado contínuo e a INOVAÇÃO constante
            de nossas soluções.<br /><br />
            Para nós da UbyUS, é essencial que nossa atuação represente uma
            contribuição para a construção de um mundo cada vez mais plural,
            solidário e humano.
          </h2>
        </div>
      </div>

      <div class="flex flex-wrap justify-end py-6 px-6">
        <div class="w-auto justify-end">
          <div class="tabs text-base-content">
            <a class="tab tab-bordered text-base-content">João Rached</a>
            <a class="tab tab-bordered text-base-content">Eduardo Beadle</a>
            <a class="tab tab-bordered text-base-content">Nilton Junior</a>
          </div>
          <div class="mt-4 text-center mx-auto">
            <div class="btn btn-outline btn-sm">
              <div class="w-auto">Sócios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
