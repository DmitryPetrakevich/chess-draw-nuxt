export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],

  css: ["~/assets/css/global.less"],

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/css/variables.less";`,
        },
      },
    },
  },
});
