<script setup lang="ts">
import GlareCard from '@/components/glare-card/GlareCard.vue'
// import IconComponent from './IconComponent.vue'
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
    <div class="w-full max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
        <figure class="md:col-span-5 flex justify-center lg:justify-start mb-10 md:mb-0">
          <GlareCard class="flex flex-col items-center justify-center bg-zinc-900">
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mt-6 mb-6 border-y border-zinc-800/80 py-6">
              <div>
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Lokasi</span>
                <p class="text-sm font-medium text-zinc-300 mt-1">Lombok Tengah, Nusa Tenggara Barat</p>
              </div>
              
              <div>
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Pendidikan</span>
                <p class="text-sm font-medium text-zinc-300 mt-1">Fresh Graduate - Univ. Pendidikan Mandalika</p>
              </div>

              <div>
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</span>
                <a href="mailto:irfanaqila31@gmail.com" class="text-sm font-medium text-zinc-300 mt-1 hover:text-zinc-400 transition-colors block">
                  irfanaqila31@gmail.com
                </a>
              </div>

              <div>
                <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</span>
                <p class="text-sm font-medium text-zinc-300 mt-1">Mencari Kerja, Magang & Freelance</p>
              </div>
            </div>

          </header>
          <p class="text-slate-300 text-base/relaxed">
            Lulusan S1 Pendidikan Teknologi Informasi dari Universitas Pendidikan Mandalika dengan
            fokus pengembangan Front-End. Memiliki keahlian dalam membangun arsitektur antarmuka web
            yang responsif dan interaktif menggunakan ekosistem Vue.js, React, dan Tailwind CSS.
            Memiliki pemahaman dasar dalam integrasi RESTful API dan memiliki portofolio proyek
            pribadi yang membuktikan kompetensi teknis serta kesiapan untuk berkontribusi langsung
            pada proyek nyata.
          </p>
          <!-- <nav aria-label="Social media">
            <IconComponent />
          </nav> -->
          <div class="flex flex-wrap justify-center md:justify-start gap-3 md:gap-1 lg:gap-5 items-center mt-10">
            <a
              href="#paket-internet"
              class="py-3 px-6 lg:px-7 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium inline-flex items-center justify-center hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#paket-internet"
              class="py-3 px-6 lg:px-7 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium inline-flex items-center justify-center hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              Ajak Diskusi
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
