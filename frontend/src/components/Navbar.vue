<template>
  <LogoArea></LogoArea>
  <div class="navbar p-0 m-0 py-0 min-h-0">
    <div class="navbar-start w-auto">
      <div class="dropdown text-center mx-auto">
        <label
          tabindex="0"
          class="ml-4 mb-4 btn btn-primary bg-yellow-700 hover:bg-yellow-800 active:bg-yellow-800 text-gray-100 lg:hidden"
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
          <li><a href="/#aubyus">A Ubyus</a></li>
          <li><a href="/#atuacao">Nossa Atuação</a></li>
          <li><router-link to="contato"> Contato</router-link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end hidden lg:flex w-full">
      <ul class="menu menu-horizontal px-1">
        <li><a class="navbar-link" href="/">Home</a></li>

        <li>
          <a class="navbar-link" href="/#aubyus">A Ubyus</a>
        </li>
        <li><a class="navbar-link" href="/#atuacao">Nossa Atuação</a></li>
        <li>
          <router-link to="contato" class="navbar-link"> Contato</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import LogoArea from "./LogoArea.vue";
</script>
