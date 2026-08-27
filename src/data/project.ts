export interface ProjectDetails {
  client: string
  year: string
}

export interface ProjectItem {
  title: string
  description: string
  fullDescription: string
  thumbnail: string
  images: string[]
  details: ProjectDetails
  techStack: string[]
  githubUrl?: string
  previewUrl?: string
}

export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const projectList: ProjectItem[] = [
  {
    title: 'Website Sales Provider Internet',
    description: 'Platform penjualan layanan internet interaktif',
    fullDescription:
      'Proyek ini adalah pembuatan website penjualan untuk penyedia layanan internet. Website ini berfokus pada kecepatan, responsivitas, dan kemudahan pengguna untuk memesan paket internet secara langsung.',
    thumbnail: '/projects/web-sales/web-sales.webp',
    images: [
      '/projects/web-sales/web-sales.webp',
      '/projects/web-sales/web-sales-2.webp',
      '/projects/web-sales/web-sales-3.webp',
      '/projects/web-sales/web-sales-4.webp',
    ],
    details: {
      client: 'Klien Pribadi',
      year: '2026',
    },
    techStack: ['Vue.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/IrfanAqila31/web-sales',
    previewUrl: 'https://web-sales-eight.vercel.app/#kontak',
  },
  {
    title: 'Company Profile Vertex Living Residence',
    description: 'Website company profile elegan untuk perumahan',
    fullDescription:
      'Proyek pembuatan company profile untuk perumahan Vertex Living Residence dengan desain yang modern dan elegan, menonjolkan tipe-tipe rumah dan fasilitas perumahan.',
    thumbnail: '/projects/company-profile-vertex/company-profile-vertex.webp',
    images: [
      '/projects/company-profile-vertex/company-profile-vertex.webp',
      '/projects/company-profile-vertex/company-profile-vertex-2.webp',
      '/projects/company-profile-vertex/company-profile-vertex-3.webp',
      '/projects/company-profile-vertex/company-profile-vertex-4.webp',
    ],
    details: {
      client: 'Vertex Living Residence',
      year: '2026',
    },
    techStack: ['Vue.js', 'Typescript', 'Tailwind CSS', 'Vue Router'],
    githubUrl: 'https://github.com/IrfanAqila31/klien-company-profile',
    previewUrl: 'https://company-profile-vertex-theta.vercel.app/',
  },
  {
    title: 'Easy Caption',
    description: 'Aplikasi pembuat caption otomatis',
    fullDescription:
      'Aplikasi berbasis web untuk membantu konten kreator membuat caption media sosial secara otomatis dan mudah.',
    thumbnail: '/projects/easy-caption/easy-caption.webp',
    images: [
      '/projects/easy-caption/easy-caption.webp',
      '/projects/easy-caption/easy-caption-2.webp',
      '/projects/easy-caption/easy-caption-3.webp',
      '/projects/easy-caption/easy-caption-4.webp',
    ],
    details: {
      client: 'Personal Project',
      year: '2024',
    },
    techStack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vue Router'],
    githubUrl: 'https://github.com',
  },
]
