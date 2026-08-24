<script setup lang="ts">
import CertificateItem from './CertificateItem.vue'
import { ref, computed } from 'vue'

const certificates = [
  {
    id: 1,
    title: 'Belajar Dasar Pemrograman Javascript',
    issuer: 'Dicoding Indonesia',
    date: 'Mei 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/L4PQ92YEOPO1',
  },
  {
    id: 2,
    title: 'Belajar Javascript',
    issuer: 'CODEPOLITAN',
    date: 'Mei 2026',
    credentialUrl: 'https://www.codepolitan.com/c/Y23VGX1/',
  },
  {
    id: 3,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP7N5OQOZR0',
  },
  {
    id: 4,
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP8R40LLZQK',
  },
  {
    id: 5,
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'Mar 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/53XE1N1EVZRN',
  },
  {
    id: 6,
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP8J3MDLPQK',
  },
  {
    id: 7,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: 'Okt 2025',
    credentialUrl: 'https://www.dicoding.com/certificates/0LZ056L5NX65',
  },
  {
    id: 8,
    title: 'Belajar Bootstrap Framework',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2024',
    credentialUrl: 'https://www.codepolitan.com/c/UKZGQFS/',
  },
  {
    id: 9,
    title: 'Belajar Dasar CSS',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2024',
    credentialUrl: 'https://www.codepolitan.com/c/C0PU3NO/',
  },
  {
    id: 10,
    title: 'Belajar Dasar HTML',
    issuer: 'CODEPOLITAN',
    date: 'Jun 2024',
    credentialUrl: 'https://www.codepolitan.com/c/GOMIHJB/',
  },
]

const activeFilter = ref('Dicoding Indonesia')

const filteredCertificates = computed(() => {
  return certificates.filter((cert) => cert.issuer === activeFilter.value)
})
</script>

<template>
  <section id="sertifikat" class="pt-24 pb-26">
    <div class="w-full max-w-6xl mx-auto px-4">
      <header class="mb-10 text-left">
        <span class="text-zinc-400 font-bold uppercase text-xs md:text-sm mb-2 block">
          Pencapaian
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-zinc-100">Sertifikat & Lisensi</h2>
      </header>

      <div class="flex justify-center md:justify-start flex-wrap gap-3 mb-8">
        <button
          v-for="filter in ['Dicoding Indonesia', 'CODEPOLITAN']"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-5 py-2.5 rounded-full text-sm font-bold transition duration-300',
            activeFilter === filter
              ? 'bg-zinc-50 text-zinc-950 shadow-lg shadow-teal-500/20'
              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:bg-zinc-700 hover:text-zinc-200',
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <CertificateItem
          v-for="cert in filteredCertificates"
          :key="cert.id"
          :title="cert.title"
          :issuer="cert.issuer"
          :date="cert.date"
          :credential-url="cert.credentialUrl"
        />
      </div>
    </div>
  </section>
</template>
