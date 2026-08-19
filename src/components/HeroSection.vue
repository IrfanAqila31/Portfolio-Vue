<script setup lang="ts">
import HeroAnimation from './HeroAnimation.vue'
// import IconComponent from './IconComponent.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <section id="home" class="pt-32 pb-14">
    <div class="w-full max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <header class="order-2 md:order-1">
          <h1 class="text-zinc-100 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-5">
            Saya Irfan Aqila Utama
          </h1>
          <p class="text-zinc-300 font-medium text-sm md:text-base mb-7 max-w-xl">
            Membangun antarmuka web modern dengan kode yang bersih dan performa optimal.
          </p>
          <nav
            aria-label="Tombol Wa dan Download CV"
            class="flex flex-wrap gap-3 md:gap-1 lg:gap-5 items-center justify-center md:justify-start"
          >
            <a
              href="https://wa.me/6287744884140"
              target="_blank"
              rel="noopener noreferrer"
              class="py-3 px-4 md:px-5 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium flex items-center gap-2 hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              <Icon icon="lucide:message-square-text" width="22" />

              Hubungi Saya
            </a>
            <a
              href="#paket-internet"
              class="py-3 px-4 md:px-5 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium flex items-center gap-2 hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              <Icon icon="mdi:file-download-outline" width="24" />
              Download CV
            </a>
          </nav>
          <!-- <nav aria-label="Social media">
            <IconComponent />
          </nav> -->
        </header>
        <figure class="px-4 flex justify-center order-1 md:order-2 mb-5 md:mb-0">
          <HeroAnimation />
        </figure>
      </div>
    </div>
  </section>
</template>
