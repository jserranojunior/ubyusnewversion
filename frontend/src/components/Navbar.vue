<template>
  <div class="flex">
    <div class="w-full px-6" mx-auto>
      <img
        src="https://img.freepik.com/fotos-gratis/texturas-de-parede-cinza-para-plano-de-fundo_74190-4389.jpg?w=740&t=st=1679609784~exp=1679610384~hmac=ffda5ff069da5bd954cedb5ef34b267c04d92fbc297766bb389c6dd4235da910"
        width="80"
        alt=""
        class="mx-auto my-4"
      />
    </div>
  </div>
  <div class="navbar bg-base-100">
    <div class="navbar-start w-auto">
      <div class="dropdown text-center mx-auto">
        <label
          tabindex="0"
          class="btn btn-primary text-gray-100 lg:hidden ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="#ubyus">A Ubyus</a></li>
          <li><a href="#atuacao">Nossa Atuação</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end hidden lg:flex w-full">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#ubyus">A Ubyus</a></li>
        <li><a href="#atuacao">Nossa Atuação</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
