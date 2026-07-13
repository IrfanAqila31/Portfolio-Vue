<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex gap-4 mt-4 justify-start">
    <a
      href="https://github.com/IrfanAqila31"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Github"
    >
      <Icon
        icon="mdi:github"
        :width="28"
        class="text-slate-200 hover:text-slate-50 transition duration-300"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/irfan-aqila-utama/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
    >
      <Icon
        icon="mdi:linkedin"
        :width="28"
        class="text-slate-200 hover:text-slate-50 transition duration-300"
      />
    </a>
    <a
      href="https://www.instagram.com/___quinncyy/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Icon
        icon="mdi:instagram"
        :width="28"
        class="text-slate-200 hover:text-slate-50 transition duration-300"
      />
    </a>
  </div>
</template>
