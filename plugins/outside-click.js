import ClickOutside from "../assets/js/outside-click";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", ClickOutside);
});
