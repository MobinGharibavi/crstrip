export default defineNuxtRouteMiddleware((to, from) => {
  const { $i18n } = useNuxtApp();
  if (!to.query.origin) {
    return navigateTo(`/${$i18n.locale.value}/`);
  }
});
