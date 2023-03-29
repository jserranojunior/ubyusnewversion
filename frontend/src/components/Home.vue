<template>
  <div>
    <section id="home">
      <div
        class="flex flex-wrap mt-16 justify-center md:justify-between mx-4 md:mx-8"
      >
        <div class="w-full md:w-1/5">
          <img src="/static/images/consultoria.png" class="" />
        </div>
        <div class="w-full md:w-auto py-6 text-left mx-auto">
          <h2 class="text-4xl">
            Consultoria em Gestão e Estratégia de Negócios
          </h2>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 md:mt-8 mx-4 md:mx-8">
        <div class="w-full">Nossa Atuação</div>
      </div>

      <section id="atuacao">
        <div class="flex flex-wrap mt-4 md:py-4 justify-center px-4 md:px-8">
          <div class="w-full md:w-1/3 px-1">
            <div class="card card-side bg-base-100 shadow-xl">
              <router-link to="fusoeseaquisicoes">
                <div class="flex">
                  <img
                    src="/static/images/fusoes.png"
                    alt="Movie"
                    width="150px"
                    height="150px"
                    class="w-1/3"
                  />
                  <div class="card-body px-2">
                    <p>
                      Fusões e<br />
                      Aquisições
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-1">
            <div class="card card-side bg-base-100 shadow-xl">
              <router-link to="estruturacao">
                <div class="flex">
                  <img
                    src="/static/images/estruturacao.png"
                    alt="Movie"
                    width="150px"
                    height="150px"
                    class="w-1/3"
                  />
                  <div class="card-body px-2">
                    <p>Estruturação e Estratégia de Negócios</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-1">
            <div class="card card-side bg-base-100 shadow-xl">
              <router-link to="sucessao">
                <div class="flex">
                  <img
                    src="/static/images/sucessao.png"
                    alt="Movie"
                    width="150px"
                    height="150px"
                    class="w-1/3"
                  />
                  <div class="card-body px-2">
                    <p>Sucessão e Governança Familiar</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center py-2 md:py-8 mx-4 md:mx-8">
          <div class="w-full md:w-1/3 px-2">
            <router-link to="gestao">
              <div class="card card-side bg-base-100 shadow-xl">
                <img
                  src="/static/images/gestao.png"
                  alt="Movie"
                  width="150px"
                  height="150px"
                  class="w-1/3"
                />

                <div class="card-body px-2">
                  <p>Gestão de <br />Pessoas</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <router-link to="solucoes">
              <div class="card card-side bg-base-100 shadow-xl">
                <img
                  src="/static/images/solucoes.png"
                  alt="Movie"
                  width="150px"
                  height="150px"
                  class="w-1/3"
                />

                <div class="card-body px-2">
                  <p>Soluções em Serviços Financeiros e Consórcio</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <section id="aubyus">
        <div
          class="border-t border-b border-base-content bg-base flex flex-wrap justify-center md:justify-between md:px-8"
        >
          <div
            class="w-full md:w-1/5 px-4 md:px-6 my-auto border-r border-base-content mt-6"
          >
            <div class="w-full text-xl my-4">A Ubyus</div>

            <img src="/static/images/aempresa.png" />
          </div>
          <div class="w-full md:w-4/5 text-letf text-base-content py-6 px-4">
            <h2>
              UbyUS expressa o princípio de REPRESENTATIVIDADE, materializado
              por relações sinceras, profissionais e perenes com nossos
              clientes.<br /><br />
              O cliente ("you") passa a ser representado por nossa organização,
              com suas demandas e anseios sendo incorporados por nós ("by us"),
              contando com a nossa PRESENÇA efetiva em todas as etapas do
              Projeto.<br /><br />
              Temos como propósito a lógica COLABORATIVA no desenvolvimento dos
              negócios, buscando DIVERSIDADE nas inteligências e recursos
              aplicados, assegurando o aprendizado contínuo e a INOVAÇÃO
              constante de nossas soluções.<br /><br />
              Para nós da UbyUS, é essencial que nossa atuação represente uma
              contribuição para a construção de um mundo cada vez mais plural,
              solidário e humano.
            </h2>
          </div>
        </div>
      </section>

      <div class="flex flex-wrap justify-end py-6 px-6">
        <div class="w-auto justify-end">
          <!--    <div class="tabs text-base-content">
            <a class="tab tab-bordered text-base-content">João Rached</a>
            <a class="tab tab-bordered text-base-content">Eduardo Beadle</a>
            <a class="tab tab-bordered text-base-content">Nilton Junior</a>
          </div> -->
          <div class="mt-4 text-center mx-auto">
            <div class="btn btn-outline btn-sm">
              <router-link to="socios">
                <div class="w-auto">Sócios</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
