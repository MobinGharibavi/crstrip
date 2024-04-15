export default defineNuxtPlugin(async () => {
  const { userAuth } = useAuth();
  try {
    const user = await $fetch("/api/auth/me", {
      headers: useRequestHeaders(["cookie"]),
    });
    
    userAuth.value = user;
  } catch (error) {
    return error;
  }
});
