export default defineEventHandler(async (e) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const token = getCookie(e, "token");

  try {
    const data = await $fetch(`${api}/register/get_user`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
});
