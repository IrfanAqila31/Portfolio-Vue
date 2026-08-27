<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectList, generateSlug } from '@/data/project'
import ProjectDetailContent from '@/components/ProjectDetailContent.vue'
import { Icon } from '@iconify/vue'

const route = useRoute()

// Mencari proyek yang slug-nya sama dengan yang ada di URL
const project = computed(() => {
  return projectList.find((p) => generateSlug(p.title) === route.params.slug)
})
</script>

<template>
  <main class="bg-zinc-950 min-h-screen pt-32 pb-20 px-4 md:px-8">
    <div v-if="project" class="max-w-6xl mx-auto">
      <!-- HEADER ATAS -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <!-- Tombol Back -->
          <router-link
            to="/#project"
            class="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-sm"
          >
            <Icon icon="mdi:arrow-left" width="16" />
            Back
          </router-link>

          <h1 class="text-4xl md:text-5xl text-white font-bold mb-2">
            Project — {{ project.title }}
          </h1>
          <p class="text-zinc-400">{{ project.description }}</p>
        </div>

        <!-- Tombol Preview & Github -->
        <div class="flex items-center gap-3">
          <a
            v-if="project.previewUrl"
            :href="project.previewUrl"
            target="_blank"
            class="bg-white text-black font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-zinc-200 transition-colors"
          >
            Preview
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="bg-zinc-900 border border-zinc-800 text-white flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-zinc-800 transition-colors"
          >
            <Icon icon="mdi:github" width="18" />
            Github
          </a>
        </div>
      </div>

      <!-- KONTEN BAWAH -->
      <ProjectDetailContent :project="project" />
    </div>

    <!-- JIKA PROYEK TIDAK DITEMUKAN -->
    <div v-else class="max-w-4xl mx-auto text-center py-20">
      <h1 class="text-4xl text-white font-bold mb-4">Proyek Tidak Ditemukan</h1>
      <p class="text-zinc-400 mb-8">Maaf, proyek yang Anda cari tidak ada.</p>
      <router-link to="/" class="bg-white text-black font-bold px-6 py-3 rounded-full"
        >Kembali ke Beranda</router-link
      >
    </div>
  </main>
</template>
