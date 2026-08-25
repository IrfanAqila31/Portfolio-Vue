<script setup lang="ts">
// import SleekLineCursor from '@/components/SleekLineCursor.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import CertificateSection from '@/components/CertificateSection.vue'
import SkillSection from '@/components/SkillSection.vue'

// interface Props {
//   friction?: number
//   trails?: number
//   size?: number
//   dampening?: number
//   tension?: number
// }

// const props = withDefaults(defineProps<Props>(), {
//   friction: 0.5,
//   trails: 20,
//   size: 50,
//   dampening: 0.25,
//   tension: 0.98,
// })
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <main class="bg-zinc-950">
    <!-- <SleekLineCursor
      :friction="props.friction"
      :trails="props.trails"
      :size="props.size"
      :dampening="props.dampening"
      :tension="props.tension"
    /> -->

    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <CertificateSection />
    <SkillSection />
  </main>
</template>
