<template>
  <section id="contato">
    <div class="flex py-2 px-8 text-left order-t">
      <div class="w-auto flex justify-center border-y border-ubyus-200 py-4">
        <div class="w-auto">
          <img src="/static/images/vida.png" width="50" class="py-0 my-0" />
        </div>
        <div
          class="itens-center align-middle my-auto ml-4 text-xl prompt font-bold border-green-800 text-ubyus-100 u--fadeInLeft"
        >
          <span v-if="lang == 'portugues'">Sócios </span>
          <span v-else> Partners </span>
        </div>
      </div>
    </div>

    <div class="flex px-8 py-4 md:py-8">
      <div class="w-full u--fadeInRight">
        <span v-if="lang == 'portugues'">
          Na
          <span class="text-ubyus-100 font-bold"
            >U<span class="text-ubyus-300">by</span>US
          </span>
          <span class="font-bold text-ubyus-100">Advisors</span>
          reunimos as diferentes competências obtidas ao longo de nossas
          histórias e as aplicamos em nossas soluções. Contudo, muito além das
          nossas histórias, habilidades e competências, o que nos importa é
          compartilhá-las com nossos clientes, produzindo soluções equilibradas
          e resultados sustentáveis.
        </span>

        <span v-else>
          At
          <span class="text-ubyus-100 font-bold"
            >U<span class="text-ubyus-300">by</span>US
          </span>
          <span class="font-bold text-ubyus-100">Advisors</span>
          we combine different skill sets, acquired over the course of our
          individual careers, and apply them to our solutions. However, far
          beyond our career paths, skills, and competencies, what matters to us
          is sharing them with our clients, producing balanced solutions and
          sustainable results.
        </span>
      </div>
    </div>

    <div
      class="flex flex-wrap justify-center mb-8 w-full md:w-1/2 mx-auto text-ubyus-200 u--fadeInUp"
    >
      <div class="w-full sm:w-1/3 text-center">
        <a
          href="https://www.linkedin.com/in/joao-rached-7b9a1281?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABFp6v0BeA07vaF99f80bRhWxamJRmAmFSE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B9bTX7rpxTlqk3%2FVJYhb6fA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/images/joao.png" alt="Movie" class="mx-auto" />
          <div class="text-center">João Rached</div>
        </a>
      </div>
      <div class="w-full sm:w-1/3 text-center">
        <a
          href="https://www.linkedin.com/in/eduardo-beadle-4234b62a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAYf9dsBfsF8bmEJEXGRbS0iQzksPNyb-Oc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B9bTX7rpxTlqk3%2FVJYhb6fA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/images/eduardo.png" alt="Movie" class="mx-auto" />
          <div class="text-center">Eduardo Beadle</div>
        </a>
      </div>
      <div class="w-full sm:w-1/3 text-center">
        <a
          href="https://www.linkedin.com/in/nilton-junior-nj?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAABIwBcBkGslDvoosnv-reDjbdhGHMQ08x4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3B9bTX7rpxTlqk3%2FVJYhb6fA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/static/images/nilton.png" alt="Movie" class="mx-auto" />
          <div class="text-center">Nilton Junior</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useLang } from "../provides/use/useLang";

  const { lang, changeLang, verifyLangEnglish } = useLang();
</script>
