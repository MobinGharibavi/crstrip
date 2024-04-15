// https://nuxt.com/docs/api/configuration/nuxt-config
import lang from "./lang/language";

export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      api: "http://api.flymurshiid.ir/test/v1",
    },
  },
  modules: [
    "@morev/vue-transitions/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@samk-dev/nuxt-vcalendar",
  ],

  i18n: {
    locales: lang,
    defaultLocale: "en",
    defaultDirection: "ltr",
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
  },
});
