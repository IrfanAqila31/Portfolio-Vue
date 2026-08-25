<script setup lang="ts">
import ContactInfo from './ContactInfo.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
  <section id="contact" class="pt-24 pb-26">
    <div class="w-full max-w-6xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
</template>
