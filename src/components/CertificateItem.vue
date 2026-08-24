<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  issuer: string
  date: string
  credentialUrl: string
}>()
</script>

<template>
  <article
    class="group flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 md:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:shadow-lg hover:shadow-white/5 hover:border-white/30 hover:bg-white/10 transition duration-300"
  >
    <div class="flex items-center gap-5">
      <div
        class="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-zinc-300 transition-all duration-300"
      >
        <Icon icon="mdi:certificate-outline" width="24" />
      </div>

      <div>
        <h3 class="text-lg font-bold text-zinc-200">
          {{ title }}
        </h3>
        <div class="flex items-center gap-2 mt-1 text-sm font-medium text-zinc-400">
          <span>{{ issuer }}</span>
          <span class="w-1 h-1 rounded-full bg-zinc-600"></span>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>

    <a
      :href="credentialUrl"
      target="_blank"
      class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-white/10 text-zinc-300 text-sm font-bold rounded-xl transition duration-300"
    >
      <span>Lihat Kredensial</span>
      <Icon icon="mdi:open-in-new" width="18" />
    </a>
  </article>
</template>
