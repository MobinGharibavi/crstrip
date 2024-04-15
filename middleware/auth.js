export default defineNuxtRouteMiddleware(() => {
  const { userAuth } = useAuth();
  const { $i18n } = useNuxtApp();
  if (userAuth.value) {
    return navigateTo(`/${$i18n.locale.value}/search`);
  }
});
