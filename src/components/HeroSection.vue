<script setup lang="ts">
import HeroAnimation from './HeroAnimation.vue'
import IconComponent from './IconComponent.vue'
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
              href="#contact"
              rel="noopener noreferrer"
              class="group py-3 px-4 lg:px-7 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium flex items-center justify-center gap-3 hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              Hubungi Saya
              <Icon
                icon="lucide:move-right"
                width="18"
                class="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#project"
              class="group py-3 px-4 lg:px-7 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium flex items-center justify-center gap-3 hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              Lihat Project
              <Icon
                icon="lucide:chevron-down"
                width="18"
                class="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </nav>
          <nav aria-label="Social media">
            <IconComponent />
          </nav>
        </header>
        <figure class="px-4 flex justify-center order-1 md:order-2 mb-5 md:mb-0">
          <HeroAnimation />
        </figure>
      </div>
    </div>
  </section>
</template>
