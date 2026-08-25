<script setup lang="ts">
// import { Icon } from '@iconify/vue'
</script>

<template>
  <article class="lg:w-2/3">
    <div
      class="bg-zinc-900/40 border border-white/5 rounded-3xl p-7 md:p-10 relative overflow-hidden h-full"
    >
      <header>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-200 mb-8">
          Mulai Proyek Bersama
        </h2>
      </header>

      <form
        class="flex flex-col gap-5"
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
      >
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

        <button
          type="submit"
          class="w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-4 text-sm font-semibold transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  </article>
</template>
