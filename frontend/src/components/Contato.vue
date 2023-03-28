<template>
  <section id="contato">
    <div class="py-4 px-8 mt-4 text-left">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        >Contato</span
      >
    </div>

    <div class="flex flex-wrap justify-center px-12 py-6">
      <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
        <div class="card mx-auto">
          <div class="card-body p-2 text-center">
            <div>
              <div class="p-10 bg-base-300 shadow-2xl">
                <form class="grid grid-cols-1 gap-6" action="#" method="POST">
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                  <div>
                    <input
                      class="rounded-full input input-bordered w-full max-w-x"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Celular"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      class="rounded-lg input input-bordered w-full max-w-x"
                      name="message"
                      id="message"
                      rows="12"
                      required
                      placeholder="Mensagem"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
