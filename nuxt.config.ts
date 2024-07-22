// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/css/main.css"],
});
