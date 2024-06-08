// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt', "@nuxt/image"],


  runtimeConfig: {
    public: {
      serverUrl: 'http://localhost:8000',
      clientUrl: 'http://localhost:3000'
    }
  },

  // ui: {
  //   notifications: {
  //     position: 'top-0 bottom-auto'
  //   }
  // }
})