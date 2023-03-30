<template>
  <div>
    <section id="home" class="">
      <div>
        <div
          class="flex border-y border-ubyus-200 flex-wrap mt-8 justify-center md:justify-between mx-4 md:mx-8"
        >
          <div class="w-full md:w-1/6">
            <img src="/static/images/consultoria.png" class="" />
          </div>
          <div
            class="w-full md:w-auto py-6 text-left mx-auto align-middle my-auto"
          >
            <h2 class="text-4xl">
              Consultoria em Gestão e Estratégia de Negócios
            </h2>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 md:mt-8 mx-4 md:mx-8">
        <div class="w-full text-xl">Nossa Atuação</div>
      </div>

      <section id="atuacao">
        <div class="px-4 md:px-8">
          <div
            class="flex flex-wrap md:py-0 justify-center border-y border-ubyus-200"
          >
            <div class="w-full md:w-1/3">
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
          <div
            class="flex flex-wrap justify-center my-2 md:my-8 border-y border-ubyus-200"
          >
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
        </div>
      </section>

      <section id="aubyus" class="mb-8">
        <div
          class="border-ubyus-200 bg-base flex flex-wrap justify-center md:justify-between md:px-2"
        >
          <div class="w-full md:w-1/5 px-4 md:px-6 border-r order-ubyus-200">
            <div class="w-full text-xl my-4">A Ubyus</div>

            <img src="/static/images/aempresa.png" class="mt-12" />
          </div>
          <div class="w-full md:w-4/5 text-letf text-base-content mt-4 px-4">
            <h2>
              <span class="text-ubyus-100 font-bold"
                >U<span class="text-ubyus-300">by</span>US</span
              >
              expressa o princípio de REPRESENTATIVIDADE, materializado por
              relações sinceras, profissionais e perenes com nossos clientes.<br /><br />
              O cliente ("you") passa a ser representado por nossa organização,
              com suas demandas e anseios sendo incorporados por nós ("by us"),
              contando com a nossa PRESENÇA efetiva em todas as etapas do
              Projeto.<br /><br />
              Temos como propósito a lógica COLABORATIVA no desenvolvimento dos
              negócios, buscando DIVERSIDADE nas inteligências e recursos
              aplicados, assegurando o aprendizado contínuo e a INOVAÇÃO
              constante de nossas soluções.<br /><br />
              Para nós da
              <span class="text-ubyus-100 font-bold"
                >U<span class="text-ubyus-300">by</span>US</span
              >, é essencial que nossa atuação represente uma contribuição para
              a construção de um mundo cada vez mais plural, solidário e humano.
            </h2>
          </div>
          <div class="w-full">
            <div class="flex flex-wrap justify-end px-6">
              <div
                class="w-2/5 text-right justify-end border-b border-ubyus-200"
              ></div>
              <div class="w-1/5 text-right justify-end"></div>
              <div
                class="w-2/5 text-right justify-end border-b border-ubyus-200"
              >
                <div class="mt-4 text-center mx-auto">
                  <div class="font-bold btn-sm">
                    <router-link to="socios">
                      <div class="w-auto">Sócios</div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
