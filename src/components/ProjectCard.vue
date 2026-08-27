<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  id: string
  title: string
  thumbnail: string
  techStack: string[]
  githubUrl?: string
  previewUrl?: string
}>()
</script>

<template>
  <article
    class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col"
  >
    <figure class="relative aspect-video overflow-hidden border-b border-zinc-800">
      <img :src="thumbnail" :alt="title" class="w-full h-full object-cover" />
    </figure>

    <div class="p-5 flex flex-col grow">
      <h3 class="text-lg font-bold text-zinc-100 mb-3 line-clamp-1" :title="title">
        {{ title }}
      </h3>

      <div class="flex flex-wrap gap-1.5 mb-5">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="px-2 py-0.5 bg-zinc-800/50 text-zinc-400 text-[11px] font-semibold rounded-md border border-zinc-700/50"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center gap-2 pt-3 mt-auto border-t border-zinc-800/80">
        <router-link
          :to="{ name: 'project-detail', params: { slug: id } }"
          class="flex-1 flex items-center justify-center gap-1.5 bg-zinc-700/50 hover:bg-zinc-600/50 text-zinc-200 text-xs font-bold py-2 px-3 rounded-lg transition-colors"
        >
          <Icon icon="mdi:eye" width="16" />
          Detail
        </router-link>

        <a
          :href="githubUrl"
          target="_blank"
          class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-2 rounded-lg transition-colors"
          title="Source Code Github"
        >
          <Icon icon="mdi:github" width="18" />
        </a>

        <a
          v-if="previewUrl"
          :href="previewUrl"
          target="_blank"
          class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-2 rounded-lg transition-colors"
          title="Live Preview"
        >
          <Icon icon="mdi:open-in-new" width="18" />
        </a>
      </div>
    </div>
  </article>
</template>
