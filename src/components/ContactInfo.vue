<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconComponent from './IconComponent.vue'
</script>

<template>
  <aside class="lg:w-1/3 flex flex-col gap-12">
    <section>
      <h3 class="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-8">Contact Info</h3>

      <address class="flex flex-col gap-8 not-italic">
        <article class="flex items-start gap-5">
          <div
            class="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 transition-colors"
          >
            <Icon icon="lucide:mail" class="w-6 h-6" />
          </div>
          <div class="pt-1">
            <h4 class="text-zinc-500 text-xs font-semibold uppercase mb-1">Email Saya</h4>
            <a
              href="mailto:irfanaqila31@gmail.com"
              class="text-zinc-200 text-sm hover:text-white transition-colors block mb-1"
              >irfanaqila31@gmail.com</a
            >
          </div>
        </article>

        <article class="flex items-start gap-5">
          <div
            class="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 transition-colors"
          >
            <Icon icon="lucide:phone" class="w-6 h-6" />
          </div>
          <div class="pt-1">
            <h4 class="text-zinc-500 text-xs font-semibold uppercase mb-1">Nomor WA/Telepon</h4>
            <p class="text-zinc-200 text-sm block mb-1">+62 87795528998</p>
            <p class="text-zinc-200 text-sm block mb-1">+62 85338564871</p>
          </div>
        </article>

        <article class="flex items-start gap-5">
          <div
            class="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 transition-colors"
          >
            <Icon icon="lucide:map-pin" class="w-6 h-6" />
          </div>
          <div class="pt-1">
            <h4 class="text-zinc-500 text-xs font-semibold uppercase mb-1">Lokasi</h4>
            <p class="text-zinc-200 text-sm leading-relaxed">
              Lombok Tengah, NTB<br />
              Siap Bekerja Remote
            </p>
          </div>
        </article>
      </address>
    </section>

    <section>
      <h3 class="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-6">Social Info</h3>
      <nav aria-label="Social media">
        <IconComponent />
      </nav>
    </section>
  </aside>
</template>
