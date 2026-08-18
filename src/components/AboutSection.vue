<script setup lang="ts">
import GlareCard from '@/components/glare-card/GlareCard.vue'
// import { computed } from 'vue'

// interface Props {
//   label?: string
//   tone?: 'dark' | 'slate' | 'warm'
// }

// const props = withDefaults(defineProps<Props>(), {
//   label: 'Inspira UI',
//   tone: 'dark',
// })

// const toneClass = computed(() => {
//   if (props.tone === 'slate') return 'bg-slate-950'
//   if (props.tone === 'warm') return 'bg-stone-950'
//   return 'bg-neutral-950'
// })
</script>

<template>
  <section id="about" class="pt-32 pb-26">
    <div class="w-full max-w-6xl mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
        <figure class="md:col-span-5 flex justify-center lg:justify-start">
          <GlareCard class="flex flex-col items-center justify-center bg-zinc-900 ">
            <img src="../assets/img/saya.webp" alt="Foto Profil Irfan Aqila" />
          </GlareCard>
        </figure>
        <article class="md:col-span-7">
          <header class="mb-5">
            <span class="text-zinc-400 font-bold uppercase text-xs md:text-sm mb-3 block"
              >Tentang Saya</span
            >
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-300">
              Irfan Aqila Utama
            </h2>
            <p class="text-sm text-slate-400 mt-3 leading-relaxed max-w-lg">
              Fresh Graduate - Universitas Pendidikan Mandalika
            </p>
          </header>
          <p class="text-slate-300 text-base/relaxed">
            Lulusan S1 Pendidikan Teknologi Informasi dari Universitas Pendidikan Mandalika dengan
            fokus pengembangan Front-End. Memiliki keahlian dalam membangun arsitektur antarmuka web
            yang responsif dan interaktif menggunakan ekosistem Vue.js, React, dan Tailwind CSS.
            Memiliki pemahaman dasar dalam integrasi RESTful API dan memiliki portofolio proyek
            pribadi yang membuktikan kompetensi teknis serta kesiapan untuk berkontribusi langsung
            pada proyek nyata.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
