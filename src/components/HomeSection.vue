<script setup lang="ts">
import HeroAnimation from './HeroAnimation.vue'
import IconComponent from './IconComponent.vue'
</script>

<template>
  <section id="home" class="pt-32 pb-20">
    <div class="w-full max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <header class="px-4 order-2 md:order-1">
          <h1 class="text-slate-200 font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
            <span class="text-teal-500">Halo, </span>Saya Irfan Aqila Utama
          </h1>
          <p class="text-slate-400 font-medium text-sm md:text-base mb-4 max-w-xl">
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
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              Hubungi Saya
            </a>
            <a
              href="#paket-internet"
              class="py-3 px-4 md:px-5 text-sm rounded-full bg-zinc-900/50 border border-white/10 text-slate-100 font-medium flex items-center gap-2 hover:shadow-white/10 hover:border-white/30 hover:bg-white/10 transition duration-300"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
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
