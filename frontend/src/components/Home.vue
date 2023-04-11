<template>
  <div>
    <section id="home" class="">
      <div>
        <div
          class="flex border-y my-auto border-ubyus-200 flex-wrap mt-0 sm:mt-12 justify-center sm:justify-between mx-4 sm:mx-8"
        >
          <div class="w-full sm:w-1/4 md:w-1/6 my-2">
            <img
              src="/static/images/consultoria.png"
              class="u--fadeInLeft my-auto"
            />
          </div>
          <div
            class="w-full sm:w-auto py-6 text-left mx-auto align-middle my-auto"
          >
            <h2
              class="text-center text-base sm:text-lg md:text-1xl lg:text-2xl xl:text-4xl prompt font-bold u--fadeInRight"
            >
              <span v-if="lang == 'portugues'">
                Consultoria em Gestão e Estratégia de Negócios
              </span>
              <span v-else>Business Management and Strategy Consulting</span>
            </h2>
          </div>
        </div>
      </div>
      <!-- 
      <section id="atuacao">
        <div class="flex flex-wrap mt-4 md:mt-28 mx-4 md:mx-8">
          <div
            class="w-full text-xl prompt font-bold tracking-wide u--fadeInLeft"
          >
            <span v-if="lang == 'portugues'">Nossa Atuação</span>
            <span v-else>Our Expertise</span>
          </div>
        </div>

        <div class="px-4 md:px-8">
          <div
            class="flex flex-wrap md:py- justify-center md:border-y border-ubyus-200"
          >
            <div
              class="w-full md:w-1/3 px-1 my-2 card card-side bg-base-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <router-link to="fusoeseaquisicoes">
                <div class="flex">
                  <div class="w-1/3">
                    <img
                      src="/static/images/fusoes.png"
                      class="u--fadeInLeft"
                    />
                  </div>
                  <div class="px-2 my-auto w-2/3">
                    <p class="u--fadeInUp text-md font-bold">
                      <span v-if="lang == 'portugues'"
                        >Fusões e Aquisições</span
                      >
                      <span v-else>Mergers and Acquisitions</span>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="w-full md:w-1/3 px-1 my-2 card card-side bg-base-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <router-link to="estruturacao">
                <div class="flex">
                  <div class="w-1/3">
                    <img
                      src="/static/images/estruturacao.png"
                      class="u--fadeInLeft"
                    />
                  </div>
                  <div class="px-2 my-auto w-2/3">
                    <p class="u--fadeInUp text-md font-bold">
                      <span v-if="lang == 'portugues'">
                        Estruturação e Estratégia de Negócios</span
                      >
                      <span v-else>Business Structuring and Strategy</span>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
            <div
              class="w-full md:w-1/3 px-1 my-2 card card-side bg-base-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <router-link to="sucessao">
                <div class="flex">
                  <div class="w-1/3">
                    <img
                      src="/static/images/sucessao.png"
                      class="u--fadeInLeft"
                    />
                  </div>
                  <div class="px-2 my-auto w-2/3">
                    <p class="u--fadeInUp text-md font-bold">
                      <span v-if="lang == 'portugues'"
                        >Sucessão e Governança Familiar</span
                      >

                      <span v-else>Succession and Family Governance</span>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="w-full md:w-1/3 px-1 my-2 card card-side bg-base-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <router-link to="gestao">
                <div class="flex">
                  <div class="w-1/3">
                    <img
                      src="/static/images/gestao.png"
                      class="u--fadeInLeft"
                    />
                  </div>
                  <div class="px-2 my-auto w-2/3">
                    <p class="u--fadeInUp text-md font-bold">
                      <span v-if="lang == 'portugues'">Gestão de Pessoas</span>
                      <span v-else>People Management</span>
                    </p>
                  </div>
                </div>
              </router-link>
            </div>

            <div
              class="w-full md:w-1/3 px-1 my-2 card card-side bg-base-100 shadow-xl grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <router-link to="solucoes">
                <div class="flex">
                  <div class="w-1/3">
                    <img
                      src="/static/images/solucoes.png"
                      class="u--fadeInLeft"
                    />
                  </div>
                  <div class="px-2 my-auto w-2/3">
                    <p class="u--fadeInUp text-md font-bold">
                      <span v-if="lang == 'portugues'"
                        >Soluções em Serviços Financeiros e Consórcio</span
                      >
                      <span v-else
                        >Financial Services and Consortium Solutions</span
                      >
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
 -->
      <section id="atuacao">
        <div class="flex flex-wrap mt-4 sm:mt-20 mx-4 sm:mx-8">
          <div
            class="w-full text-xl prompt font-bold tracking-wide u--fadeInLeft"
          >
            <span v-if="lang == 'portugues'">Nossa Atuação</span>
            <span v-else>Our Expertise</span>
          </div>
        </div>

        <div
          class="flex flex-wrap sm:py-24 justify-center sm:border-y border-ubyus-200 px-4"
        >
          <div
            class="card w-full sm:w-1/3 rounded-lg px-1 md:px-4 my-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            @click="$router.push({ path: 'fusoeseaquisicoes' })"
          >
            <div
              class="card-body bg-white shadow-xl border-t border-gray-200 p-2 sm:p-4 cursor-pointer"
            >
              <div class="mb-2">
                <img
                  src="/static/images/fusoes.png"
                  class="u--fadeInLeft object-center object-cover w-2/3 mx-auto"
                />
              </div>
              <div class="w-full my-auto text-center">
                <p class="font-bold my-2">
                  <span v-if="lang == 'portugues'">Fusões e Aquisições</span>
                  <span v-else>Mergers and Acquisitions</span>
                </p>
              </div>
            </div>
          </div>

          <div
            class="card w-full sm:w-1/3 rounded-lg px-1 md:px-4 my-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            @click="$router.push({ path: 'estruturacao' })"
          >
            <div
              class="card-body bg-white shadow-xl border-t border-gray-200 p-2 sm:p-4 cursor-pointer"
            >
              <div class="mb-2">
                <img
                  src="/static/images/estruturacao.png"
                  class="u--fadeInLeft object-center object-cover w-2/3 mx-auto"
                />
              </div>
              <div class="w-full my-auto text-center">
                <p class="font-bold my-2">
                  <span v-if="lang == 'portugues'">
                    Estruturação e Estratégia de Negócios</span
                  >
                  <span v-else>Business Structuring and Strategy</span>
                </p>
              </div>
            </div>
          </div>

          <div
            class="card w-full sm:w-1/3 rounded-lg px-1 md:px-4 my-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            @click="$router.push({ path: 'sucessao' })"
          >
            <div
              class="card-body bg-white shadow-xl border-t border-gray-200 p-2 sm:p-4 cursor-pointer"
            >
              <div class="mb-2">
                <img
                  src="/static/images/sucessao.png"
                  class="u--fadeInLeft object-center object-cover w-2/3 mx-auto"
                />
              </div>
              <div class="w-full my-auto text-center">
                <p class="font-bold my-2">
                  <span v-if="lang == 'portugues'"
                    >Sucessão e Governança Familiar</span
                  >

                  <span v-else>Succession and Family Governance</span>
                </p>
              </div>
            </div>
          </div>

          <div
            class="card w-full sm:w-1/3 rounded-lg px-1 md:px-4 my-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            @click="$router.push({ path: 'gestao' })"
          >
            <div
              class="card-body bg-white shadow-xl border-t border-gray-200 p-2 sm:p-4 cursor-pointer"
            >
              <div class="mb-2">
                <img
                  src="/static/images/gestao.png"
                  class="u--fadeInLeft object-center object-cover w-2/3 mx-auto"
                />
              </div>
              <div class="w-full my-auto text-center">
                <p class="font-bold my-2">
                  <span v-if="lang == 'portugues'">Gestão de Pessoas</span>
                  <span v-else>People Management</span>
                </p>
              </div>
            </div>
          </div>
          <div
            class="card w-full sm:w-1/3 rounded-lg px-1 md:px-4 my-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            @click="$router.push({ path: 'solucoes' })"
          >
            <div
              class="card-body bg-white shadow-xl border-t border-gray-200 p-2 sm:p-4 cursor-pointer"
            >
              <div class="mb-2">
                <img
                  src="/static/images/solucoes.png"
                  class="u--fadeInLeft object-center object-cover w-2/3 mx-auto"
                />
              </div>
              <div class="w-full my-auto text-center">
                <p class="font-bold my-2">
                  <span v-if="lang == 'portugues'"
                    >Soluções em Serviços Financeiros e Consórcio</span
                  >
                  <span v-else
                    >Financial Services and Consortium Solutions</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aubyus" class="my-24">
        <div
          class="border-ubyus-200 bg-base flex flex-wrap justify-center md:justify-between md:px-2"
        >
          <div class="w-full md:w-1/5 px-4 md:px-6 border-r order-ubyus-200">
            <div
              class="w-full text-xl my-4 prompt font-bold tracking-wide u--fadeInLeft"
            >
              <span v-if="lang == 'portugues'"> A UbyUS </span>
              <span v-else>The UbyUS</span>
            </div>

            <img
              src="/static/images/aempresa.png"
              class="mt-0 md:mt-12 u--fadeInUp"
            />
          </div>
          <div class="w-full md:w-4/5 text-letf text-base-content mt-4 px-4">
            <div>
              <p class="u--fadeInRight text-justify">
                <span class="text-ubyus-100 font-bold"
                  >U<span class="text-ubyus-300">by</span>US
                </span>
                <span v-if="lang == 'portugues'"
                  >expressa o princípio de REPRESENTATIVIDADE, materializado por
                  relações sinceras, profissionais e perenes com nossos
                  clientes.</span
                >
                <span v-else
                  >expresses the principle of REPRESENTATIVENESS, achieved
                  through sincere, professional and enduring relationships with
                  our clients.</span
                >
                <br /><br />
              </p>
              <p class="u--fadeInLeft text-justify">
                <span v-if="lang == 'portugues'"
                  >O cliente ("you") passa a ser representado por nossa
                  organização, com suas demandas e anseios sendo incorporados
                  por nós ("by us"), contando com a nossa PRESENÇA efetiva em
                  todas as etapas do Projeto.
                </span>
                <span v-else>
                  The client ("you") is represented by our organization, with
                  your demands and desires being incorporated "by us," relying
                  on our effective PRESENCE in all stages of the Project.
                </span>
                <br /><br />
              </p>

              <p class="u--fadeInRight text-justify">
                <span v-if="lang == 'portugues'"
                  >Temos como propósito a lógica COLABORATIVA no desenvolvimento
                  dos negócios, buscando DIVERSIDADE nas inteligências e
                  recursos aplicados, assegurando o aprendizado contínuo e a
                  INOVAÇÃO constante de nossas soluções.</span
                >
                <span v-else>
                  Our purpose is to form COLLABORATIVE logic in the development
                  of businesses, seeking DIVERSITY in the intelligence and
                  resources applied, ensuring continuous learning and the
                  constant INNOVATION of our solutions.
                </span>
                <br /><br />
              </p>

              <p class="u--fadeInLeft text-justify">
                <span v-if="lang == 'portugues'">Para nós da</span>
                <span v-else>For</span>
                <span class="text-ubyus-100 font-bold">
                  U<span class="text-ubyus-300">by</span>US</span
                >,
                <span v-if="lang == 'portugues'">
                  é essencial que nossa atuação represente uma contribuição para
                  a construção de um mundo cada vez mais plural, solidário e
                  humano.
                </span>
                <span v-else>
                  it is essential that our efforts represent a contribution to
                  the construction of an increasingly plural, inclusive and
                  human world.
                </span>
              </p>
            </div>
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
                      <div class="flex justify-center text-center">
                        <div>
                          <img
                            src="/static/images/vida.png"
                            width="20"
                            class="py-0 my-0"
                          />
                        </div>

                        <div class="mx-2">
                          <span v-if="lang == 'portugues'"> Os Sócios </span>
                          <span v-else> Partners </span>
                        </div>
                      </div>
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

<script setup lang="ts">
  import { useLang } from "../provides/use/useLang";

  const { lang, changeLang, verifyLangEnglish } = useLang();
</script>
