export default defineEventHandler(async (e) => {
  try {
    deleteCookie(e, "token");
    deleteCookie(e, "refresh_token");
    return "yes!";
  } catch (error) {
    return error;
  }
});
