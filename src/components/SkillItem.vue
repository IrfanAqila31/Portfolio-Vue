<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <article
    class="group flex flex-col items-center justify-center gap-3 p-4 md:p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
  >
    <!-- Ikon -->
    <div
      class="w-10 h-10 md:w-10 md:h-10 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
    >
      <!-- Logika Pemilihan Ikon -->
      <img
        v-if="icon.includes('.svg') || icon.includes('.png')"
        :src="icon"
        :alt="name"
        class="w-full h-full object-contain"
      />
      <Icon
        v-else
        :icon="icon"
        class="w-full h-full text-zinc-400 group-hover:text-zinc-100 transition-colors"
      />
    </div>
    <!-- Teks Nama Skill -->
    <span
      class="text-xs font-semibold text-zinc-400 group-hover:text-zinc-200 transition-colors text-center"
    >
      {{ name }}
    </span>
  </article>
</template>
