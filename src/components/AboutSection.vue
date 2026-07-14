<script setup lang="ts">
import GlareCard from '@/components/glare-card/GlareCard.vue'
import { computed } from 'vue'

interface Props {
  label?: string
  tone?: 'dark' | 'slate' | 'warm'
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Inspira UI',
  tone: 'dark',
})

const toneClass = computed(() => {
  if (props.tone === 'slate') return 'bg-slate-950'
  if (props.tone === 'warm') return 'bg-stone-950'
  return 'bg-neutral-950'
})
</script>

<template>
  <section id="home" class="pt-32 pb-26">
    <div class="w-full max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="px-4 flex justify-center items-center">
          <GlareCard class="flex flex-col items-center justify-center" :class="toneClass">
            <img src="../assets/img/saya.webp" />
          </GlareCard>
        </div>
        <div class="px-4">
          <h1
            class="bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-extrabold text-3xl md:text-3xl mb-2"
          >
            Tentang Saya
          </h1>
          <p class="text-slate-300 text-base">
            Saya Irfan Aqila Utama, lulusan baru dari Universitas Pendidikan Mandalika jurusan S1
            Pendidikan Teknologi Informasi. Saya memiliki fokus karier sebagai Front-End Developer
            dengan pengalaman membangun antarmuka web responsif menggunakan Tailwind CSS, serta
            aktif mengembangkan kemampuan di ekosistem React dan Vue.js. Saya sangat antusias untuk
            membawa keahlian ini ke dunia profesional, berkolaborasi membuat produk digital yang
            bermanfaat, dan terus belajar hal-hal baru.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
