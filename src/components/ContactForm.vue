<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref<HTMLFormElement | null>(null)
const isSubmitting = ref(false)
const statusMessage = ref('')

const sendEmail = () => {
  if (!form.value) return
  isSubmitting.value = true
  statusMessage.value = ''

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.value,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        statusMessage.value = 'Pesan berhasil terkirim! Terima kasih.'
        form.value?.reset()
      },
      (error) => {
        console.error('GAGAL...', error.text)
        statusMessage.value = 'Gagal mengirim pesan. Silakan coba lagi.'
      },
    )
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <article class="lg:w-2/3">
    <div
      class="bg-zinc-900/40 border border-white/5 rounded-3xl p-7 md:p-10 relative overflow-hidden h-full"
    >
      <header>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-200 mb-8">Mulai Proyek Bersama</h2>
      </header>

      <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-5">
        <fieldset class="flex flex-col md:flex-row gap-5 border-none p-0 m-0">
          <legend class="sr-only">Informasi Personal</legend>

          <div class="w-full">
            <label for="name" class="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name *"
              required
              class="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-4 text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900/80 transition-all"
            />
          </div>

          <div class="w-full">
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              required
              class="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-4 text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900/80 transition-all"
            />
          </div>
        </fieldset>

        <div>
          <label for="subject" class="sr-only">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Your Subject *"
            required
            class="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-4 text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900/80 transition-all"
          />
        </div>

        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message *"
            required
            rows="4"
            class="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-4 text-zinc-200 text-sm placeholder-zinc-500 focus:outline-none focus:border-zinc-500/50 focus:bg-zinc-900/80 transition-all resize-none"
          ></textarea>
        </div>

        <p
          v-if="statusMessage"
          class="text-sm font-medium mt-1"
          :class="statusMessage.includes('berhasil') ? 'text-green-400' : 'text-red-400'"
        >
          {{ statusMessage }}
        </p>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-4 text-sm font-semibold transition-colors cursor-pointer mt-2"
        >
          {{ isSubmitting ? 'Mengirim Pesan...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </article>
</template>
