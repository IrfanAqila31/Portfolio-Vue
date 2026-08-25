<script setup lang="ts">
import SkillItem from './SkillItem.vue'

// Data Skill yang dikelompokkan dalam Array
// Data Skill yang dikelompokkan dalam Array
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
    ],
  },
  {
    title: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'mdi:github' },
      { name: 'VS Code', icon: 'vscode-icons:file-type-vscode' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Vercel', icon: 'ion:logo-vercel' },
      { name: 'Figma', icon: 'logos:figma' },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'ChatGPT', icon: 'simple-icons:openai' },
      { name: 'Gemini', icon: '/gemini-logo.svg' },
      { name: 'Claude', icon: '/claude-logo.svg' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="pt-24 pb-26">
    <div class="w-full max-w-6xl mx-auto px-4">
      <!-- Judul & Deskripsi Utama -->
      <header class="mb-14 text-left">
        <span class="text-zinc-400 font-bold uppercase text-xs md:text-sm mb-2 block">
          Keahlian
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">Skills & Tech Stack</h2>
        <p class="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed">
          Beberapa teknologi dan alat bantu yang sering saya gunakan untuk membangun antarmuka
          website yang responsif, dinamis, dan modern.
        </p>
      </header>

      <!-- Daftar Kategori Skill -->
      <div class="space-y-12">
        <!-- Semantik: Setiap kategori adalah section tersendiri -->
        <section v-for="(category, index) in skillCategories" :key="category.title">
          <!-- Semantik: Header untuk judul kategori -->
          <header class="flex items-center gap-4 mb-6">
            <span class="text-zinc-400 font-mono font-bold text-sm">{{ index + 1 }}</span>
            <h3 class="text-sm md:text-base font-bold text-zinc-200 uppercase tracking-widest">
              {{ category.title }}
            </h3>
            <div class="flex-1 h-px bg-zinc-800/50"></div>
          </header>

          <!-- Grid Kotak-Kotak Logo -->
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            <SkillItem
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
            />
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
