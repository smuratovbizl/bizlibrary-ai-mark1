// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    baseURL: '/bizlibrary-ai-mark1/',
    head: {
      title: 'BizLibrary AI — Personalized, AI-Powered Corporate Learning',
      meta: [
        {
          name: 'description',
          content: 'BizLibrary AI personalizes your existing course library with AI-driven recommendations, content search, skill tracking, and compliance alerts. Request a demo today.',
        },
      ],
    },
  },
  nitro: {
    preset: 'github_pages',
  },
})
