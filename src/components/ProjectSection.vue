<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projectList, generateSlug } from '@/data/project'
</script>

<template>
  <section id="project" class="pt-24 pb-26">
    <div class="w-full max-w-6xl mx-auto px-4">
      <header class="mb-10">
        <span class="text-zinc-400 font-bold uppercase text-xs md:text-sm mb-2 block"
          >Portofolio</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-100">Proyek Terbaru</h2>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="(project, index) in projectList"
          :key="index"
          :id="generateSlug(project.title)"
          :title="project.title"
          :thumbnail="project.thumbnail"
          :tech-stack="project.techStack"
          :preview-url="project.previewUrl"
          :github-url="project.githubUrl"
        />
      </div>
    </div>
  </section>
</template>
