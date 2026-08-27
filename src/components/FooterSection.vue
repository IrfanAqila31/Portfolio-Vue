<script setup lang="ts">
import IconComponent from './IconComponent.vue'
</script>

<template>
  <footer class="pt-4 pb-8 px-4 w-full max-w-6xl mx-auto">
    <div class="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12 mb-6">
      <div class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
        <div class="lg:w-1/3 flex flex-col gap-4">
          <router-link to="/" class="text-2xl font-bold text-white tracking-wide"> Irfan Aqila Utama </router-link>
          <p class="text-zinc-400 text-sm leading-relaxed mt-2">
            Seorang Frontend Developer yang berfokus pada pembuatan website modern, responsif, dan
            interaktif dengan desain UI/UX yang elegan.
          </p>

          <div class="-mt-2">
            <IconComponent />
          </div>
        </div>

        <div class="lg:w-1/2 grid grid-cols-2 gap-8 md:gap-16">
          <div class="flex flex-col gap-4">
            <h4 class="text-zinc-100 font-semibold mb-2 text-sm">Navigasi</h4>
            <router-link to="/#home" class="text-zinc-400 hover:text-zinc-500 text-sm transition-colors"
              >Beranda</router-link
            >
            <router-link to="/#about" class="text-zinc-400 hover:text-zinc-500 text-sm transition-colors"
              >Tentang Saya</router-link
            >
            <router-link to="/#project" class="text-zinc-400 hover:text-zinc-500 text-sm transition-colors"
              >Project</router-link
            >
            <router-link to="/#skills" class="text-zinc-400 hover:text-zinc-500 text-sm transition-colors"
              >Keahlian</router-link
            >
            <router-link to="/#contact" class="text-zinc-400 hover:text-zinc-500 text-sm transition-colors"
              >Kontak</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8">
      <p class="text-zinc-500 text-xs text-center md:text-left">
        &copy; {{ new Date().getFullYear() }} Irfan Aqila Utama. All rights reserved.
      </p>

      <div class="flex gap-4 text-xs text-zinc-500">
        <span
          >Dibuat dengan <span class="text-zinc-300 font-medium">Vue.js</span> &
          <span class="text-zinc-300 font-medium"> TailwindCSS</span></span
        >
      </div>
    </div>
  </footer>
</template>
