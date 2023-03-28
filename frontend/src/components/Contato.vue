<template>
  <section id="contato">
    <div class="py-4 px-8 mt-4 text-left">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        >Contato</span
      >
    </div>

    <div class="flex flex-wrap justify-center px-12 mt-2 py-6">
      <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
        <div class="card bg-base-content shadow-xl mx-auto">
          <div class="card-body p-2 text-center">
            <div>
              <div class="p-10 bg-base-content">
                <form class="grid grid-cols-1 gap-6" action="#" method="POST">
                  <div>
                    <label class="block mb-2 font-bold" for="name">
                      Nome
                    </label>
                    <input
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      type="text"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 font-bold" for="email">
                      E-mail
                    </label>
                    <input
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 font-bold" for="phone">
                      Celular
                    </label>
                    <input
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 font-bold" for="message">
                      Mensagem
                    </label>
                    <textarea
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      name="message"
                      id="message"
                      rows="4"
                      required
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
