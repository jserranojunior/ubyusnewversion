<template>
  <section id="contato">
    <div class="py-4 px-8 mt-4 text-left">
      <span
        class="text-xl border-t border-b py-4 border-green-800 prompt font-bold text-green-800"
        >Contato</span
      >
    </div>

    <div class="flex flex-wrap justify-center px-12 pb-6">
      <div class="w-full md:w-1/2 px:0 md:px-6 pb-4">
        <div class="card mx-auto u--fadeInUp">
          <div class="card-body p-2 text-center">
            <div>
              <div class="p-2 md:p-4 shadow-2xl">
                <div class="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x bg-ubyus-100 text-white text-center placeholder-white focus:placeholder-transparent"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      v-model="inputsEmail.name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x bg-ubyus-100 text-white text-center placeholder-white focus:placeholder-transparent"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      v-model="inputsEmail.email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x bg-ubyus-100 text-white text-center placeholder-white focus:placeholder-transparent"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Celular"
                      v-model="inputsEmail.phone"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      class="rounded-xl input input-bordered w-full max-w-x h-full bg-ubyus-100 text-white placeholder-white focus:placeholder-transparent align-middle items-center flex placeholder-middle resize-none text-center"
                      name="message"
                      id="message"
                      rows="6"
                      v-model="inputsEmail.message"
                      required
                      placeholder="Mensagem"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      class="bg-ubyus-300 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      @click="sendEmail()"
                      v-if="statusSendmail !== 'enviandoEmail'"
                    >
                      Enviar
                    </button>
                  </div>

                  <div class="mt-1" v-if="statusSendmail !== 'enviandoEmail'">
                    <div class="flex alert alert-warning bg-ubyus-300">
                      <div class="w-full">
                        <label class="text-center w-full">
                          <i class="fas fa-circle-notch fa-spin mr-1">
                            <span>Enviando e-mail, por favor aguarde</span>
                          </i>

                          <!-- <span v-if="lang == 'portugues'">Enviando e-mail, por favor aguarde</span>
                      <span v-else>Sending email, please wait</span> -->
                          ...
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useEmail } from "../provides/use/useEmail";
  const { inputsEmail, sendEmail, statusSendmail } = useEmail();
</script>
