<template>
  <section id="contato">
    <div class="py-4 px-8 mt-4 text-center">
      <span
        class="text-xl font-bold border-t border-b py-4 border-green-800 text-green-800"
        >Contato</span
      >
    </div>

    <div class="flex flex-wrap justify-between px-12 mt-6 py-6 bg-gray-500">
      <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
        <div class="card bg-white shadow-xl mx-auto">
          <div class="card-body p-2 text-center">
            <div>
              <span class="font-bold"
                ><Icon
                  icon="mdi:address-marker-outline"
                  width="20"
                  class="inline-block mx-1 my-auto mb-1"
                />
                Endereço:
              </span>
              <br />
              <a
                href="https://maps.google.com/maps?ll=-23.432199,-46.411828&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%20Guarulhos%20-%20SP%2007243-580"
                target="_blank"
              >
                <div class="text-center w-auto px-12">
                  <div
                    class="bg-gradient-to-r from-primary via-green-500 to-blue-400 text-white rounded-lg"
                  >
                    <span class="">
                      R. Prof. João Cavaleiro Salém, 310, <br />Parque das
                      Nacoes, Guarulhos, SP
                    </span>
                  </div>
                </div></a
              >
              <hr class="my-2" />
              <span class="font-bold"
                ><Icon
                  icon="bytesize:telephone"
                  width="20"
                  class="inline-block mx-1 my-auto mb-1"
                />Telefones:
              </span>
              <br />

              (11) 2413-0070 - (11) 2085-4830<br />
              <hr class="my-2" />

              <span class="font-bold">
                <Icon
                  icon="material-symbols:mail-outline-rounded"
                  width="20"
                  class="inline-block mx-1 my-auto mb-1"
                />Email:
              </span>

              <a href="mailto:feeder@feeder.com.br"
                >feeder@feeder.com.br

                <div class="mx-auto justify-center text-center">
                  <button class="btn btn-sm btn-secondary mt-2">
                    Entre em contato
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px:0 md:px-6 py-4">
        <div class="card bg-white shadow-xl mx-auto">
          <div class="card-body p-2">
            <iframe
              class="w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5144.524769267864!2d-46.413535747911055!3d-23.43142374324372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce89d86d79a521%3A0x187bf9bed7a1cc3!2sR.%20Prof.%20Jo%C3%A3o%20Cavaleiro%20Sal%C3%A9m%2C%20310%20-%20Parque%20das%20Nacoes%2C%20Guarulhos%20-%20SP%2C%2007243-580!5e0!3m2!1spt-BR!2sbr!4v1670944596928!5m2!1spt-BR!2sbr"
              height="210"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
