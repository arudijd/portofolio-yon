// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: false,
   app: {
      head: {
         title: "Portfolio's Yon",
      },
      // pageTransition: { name: "page", mode: "out-in" },
      layoutTransition: { name: "layout", mode: "out-in" },
   },
   devtools: { enabled: true },
   modules: [
      "@nuxt/eslint",
      "@nuxtjs/google-fonts",
      "vue3-carousel-nuxt",
      "nuxt-icon",
   ],
   css: ["~/assets/css/main.css"],
   googleFonts: {
      families: {
         Rubik: {
            wght: "300..900",
            ital: "300..900",
         },
      },
   },
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
});
