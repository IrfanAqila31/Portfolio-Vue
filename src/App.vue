<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <router-view />
  </main>

  <footer class="bg-zinc-950">
    <FooterSection />
  </footer>
</template>
