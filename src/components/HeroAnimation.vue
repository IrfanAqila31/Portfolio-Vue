<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import DeveloperAnimation from '../assets/Developer.json'

const isHovered = ref(false)
</script>

<template>
  <div class="relative w-full flex items-center justify-center">
    <!-- Use aspect-square and responsive max-widths so it scales perfectly -->
    <div
      class="relative w-full max-w-80 sm:max-w-100 lg:max-w-125 xl:max-w-137.5 aspect-square flex items-center justify-center"
    >
      <!-- The Lottie Animation: We disable pointer events here so its large transparent canvas doesn't trigger anything -->
      <Vue3Lottie
        :animationData="DeveloperAnimation"
        :height="'100%'"
        :width="'100%'"
        class="z-10 grayscale drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transform transition-all duration-500 pointer-events-none"
        :class="isHovered ? 'opacity-100 scale-105 brightness-110' : 'opacity-75'"
      />

      <!-- THE MAGIC FIX: A smaller, invisible box placed exactly over the character's body to act as the ONLY hover trigger -->
      <div
        class="absolute z-20 w-[50%] h-[70%] top-[15%] cursor-pointer"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      ></div>
    </div>
  </div>
</template>
