<template>
  <LogoArea></LogoArea>

  <footer class="bg-ubyus-100 text-base-100 p-8 mt-8 u--fadeInLeft">
    <div class="flex flex-wrap justify-between text-center">
      <div class="w-full md:w-1/3 mt-2 md mt-0">
        Avenida Dr. Chucri Zaidan, 1550 – cj. 1508 <br />
        Capital Corporate Office – São Paulo / SP <br />
        CEP: 04711-130
      </div>
      <div class="w-full md:w-1/3 mt-2 md mt-0">
        contato@ubyusadvisors.com <br />
        <div class="mx-auto text-center">
          <a
            href="https://www.linkedin.com/company/ubyus-advisors/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p class="text-center">
              <Icon
                class="flex-initial"
                width="24"
                icon="ph:linkedin-logo-bold"
              />
            </p>
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/3 mt-2 md mt-0">São Paulo / Brasil</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import LogoArea from "./LogoArea.vue";
</script>

<style scoped></style>
