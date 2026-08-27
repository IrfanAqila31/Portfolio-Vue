<script setup lang="ts">
import type { ProjectItem } from '@/data/project'

const props = defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
    <div
      v-for="(img, index) in props.project.images"
      :key="index"
      class="w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800"
    >
      <img
        :src="img"
        :alt="props.project.title + ' image ' + index"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-8">
    <div class="lg:col-span-2 text-zinc-400 leading-relaxed text-base md:text-lg">
      <h2 class="text-2xl font-bold text-white mb-6">About {{ props.project.title }}</h2>
      <p class="whitespace-pre-line">{{ props.project.fullDescription }}</p>
    </div>
    <div class="w-full flex flex-col gap-10">
      <div>
        <h3 class="text-sm font-semibold text-white mb-4">Details</h3>
        <ul class="flex flex-col gap-3 text-zinc-400 text-sm">
          <li class="flex items-center gap-3">
            <span class="font-bold text-zinc-200">{{ props.project.details.year }}</span>
          </li>
          <li class="flex items-center gap-3">
            <span>{{ props.project.details.client }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-white mb-4">Tech Stack</h3>
        <ul class="flex flex-col gap-3 text-zinc-400 text-sm">
          <li v-for="tech in props.project.techStack" :key="tech" class="flex items-center gap-3">
            <span>{{ tech }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
