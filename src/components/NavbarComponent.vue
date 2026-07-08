<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
    <nav
      aria-label="Navigasi Utama"
      class="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-full w-full max-w-6xl px-6 py-3 md:py-4 flex items-center justify-between"
    >
      <a href="#" class="text-lg md:text-xl font-bold text-slate-100" aria-label="Logo Mahreen"
        >Irfan Aqila Utama</a
      >
      <div class="hidden lg:flex items-center space-x-8">
        <a
          href="#home"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Beranda</a
        >
        <a
          href="#paket-internet"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Tentang Saya</a
        >
        <a
          href="#area-layanan"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Proyek</a
        >
        <a
          href="#sertifikat"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Sertifikat</a
        >
        <a
          href="#skill"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Skills</a
        >

        <a
          href="#kontak"
          class="text-sm font-bold text-slate-100 hover:text-violet-200 transition-colors"
          >Kontak</a
        >
      </div>

      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden text-slate-50 hover:text-slate-100 focus:outline-none relative w-9 h-9 flex items-center justify-center"
        aria-label="Buka Menu Utama"
      >
        <Transition name="rotate-fade">
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Transition>
      </button>
    </nav>
    <transition name="slide-down">
      <div
        v-show="isMobileMenuOpen"
        class="absolute top-16 left-4 right-4 bg-linear-to-bl from-violet-600/70 to-purple-600/70 backdrop-blur-md rounded-3xl shadow-xl p-5 lg:hidden flex flex-col space-y-2"
      >
        <a
          @click="isMobileMenuOpen = false"
          href="#home"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Beranda
        </a>
        <a
          @click="isMobileMenuOpen = false"
          href="#tentang-saya"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Tentang Saya
        </a>
        <a
          @click="isMobileMenuOpen = false"
          href="#proyek"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Proyek
        </a>
        <a
          @click="isMobileMenuOpen = false"
          href="#sertifikat"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Sertifikat
        </a>
        <a
          @click="isMobileMenuOpen = false"
          href="#skills"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Skills
        </a>
        <a
          @click="isMobileMenuOpen = false"
          href="#kontak"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Kontak
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Animasi Transisi Hamburger ke Tanda Silang */
.rotate-fade-enter-active,
.rotate-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.rotate-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.rotate-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

/* Animasi Dropdown Menu HP (Meluncur dari atas) */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.95);
}
</style>
