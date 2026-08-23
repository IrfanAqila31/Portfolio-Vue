<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'


const projects = [
  {
    id: 1,
    title: 'Website Sales Provider Internet',
    image:
      '/projects/web-sales.webp',
    techStack: ['Vue.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    previewUrl: 'https://preview.com',
    detailUrl: '#detail-1',
  },
  {
    id: 2,
    title: 'Aplikasi E-Commerce Minimalis',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    techStack: ['React', 'Next.js', 'Prisma'],
    githubUrl: 'https://github.com',
    previewUrl: 'https://preview.com',
    detailUrl: '#detail-2',
  },
  {
    id: 2,
    title: 'Aplikasi E-Commerce Minimalis',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    techStack: ['React', 'Next.js', 'Prisma'],
    githubUrl: 'https://github.com',
    previewUrl: 'https://preview.com',
    detailUrl: '#detail-2',
  },
  {
    id: 2,
    title: 'Aplikasi E-Commerce Minimalis',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    techStack: ['React', 'Next.js', 'Prisma'],
    githubUrl: 'https://github.com',
    previewUrl: 'https://preview.com',
    detailUrl: '#detail-2',
  },
]
</script>

<template>
  <section id="proyek" class="pt-24 pb-26">
    <div class="w-full max-w-6xl mx-auto px-4">
      <header class="mb-10">
        <span class="text-zinc-400 font-bold uppercase text-xs md:text-sm mb-2 block"
          >Portofolio</span
        >
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-100">Proyek Terbaru</h2>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :image="project.image"
          :tech-stack="project.techStack"
          :github-url="project.githubUrl"
          :preview-url="project.previewUrl"
          :detail-url="project.detailUrl"
        />
      </div>
    </div>
  </section>
</template>
