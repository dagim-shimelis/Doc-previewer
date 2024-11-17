// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon"],
  plugins: ["~/plugins/syncfusion.js"],
  runtimeConfig: {
    public: {
      mode: process.env.MODE,
      syncfusionLicense: process.env.SYNCFUSION_LICENSE,
    },
  },
});
