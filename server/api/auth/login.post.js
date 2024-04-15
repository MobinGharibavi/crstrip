export default defineEventHandler(async (e) => {
  const {
    public: { api },
  } = useRuntimeConfig();
  const body = await readBody(e);

  try {
    const data = await $fetch(`${api}/register/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body,
    });

    setCookie(e, "token", data?.token, {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, //1 WEEK
      path: "/",
    });
    setCookie(e, "refresh_token", data?.refresh_token, {
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, //1 WEEK
      path: "/",
    });
    return data;
  } catch (error) {
    return error;
  }
});
