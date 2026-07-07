<script setup lang="ts">
import SleekLineCursor from '@/components/SleekLineCursor.vue'

interface Props {
  friction?: number
  trails?: number
  size?: number
  dampening?: number
  tension?: number
}

const props = withDefaults(defineProps<Props>(), {
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
})
</script>

<template>
  <div class="bg-zinc-950 relative flex min-h-screen w-full flex-col items-center justify-center text-xl">
    <span class="hidden md:block">Move your mouse around</span>
    <span class="block md:hidden">Swipe anywhere to see the cursor</span>
    <SleekLineCursor
      :friction="props.friction"
      :trails="props.trails"
      :size="props.size"
      :dampening="props.dampening"
      :tension="props.tension"
    />
  </div>
</template>
