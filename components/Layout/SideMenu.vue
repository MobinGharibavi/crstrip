<template>
  <div
    @click="emit('side', false)"
    class="fixed left-0 top-0 w-screen h-screen bg-[#0000004D] backdrop-blur-[0.125rem] z-[9999] flex"
  >
    <div
      class="w-[311px] h-full bg-white rounded-r-[2rem] rtl:rounded-l-[2rem] rtl:rounded-r-none flex flex-col justify-between"
    >
      <div>
        <div class="mt-8 flex gap-4 items-center px-6 font-bold text-[#1C0E07]">
          <svg
            class="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.3002 5.71022C17.9102 5.32022 17.2802 5.32022 16.8902 5.71022L12.0002 10.5902L7.11022 5.70021C6.72022 5.31021 6.09021 5.31021 5.70021 5.70021C5.31021 6.09021 5.31021 6.72022 5.70021 7.11022L10.5902 12.0002L5.70021 16.8902C5.31021 17.2802 5.31021 17.9102 5.70021 18.3002C6.09021 18.6902 6.72022 18.6902 7.11022 18.3002L12.0002 13.4102L16.8902 18.3002C17.2802 18.6902 17.9102 18.6902 18.3002 18.3002C18.6902 17.9102 18.6902 17.2802 18.3002 16.8902L13.4102 12.0002L18.3002 7.11022C18.6802 6.73022 18.6802 6.09022 18.3002 5.71022Z"
              fill="#5B4A42"
            />
          </svg>

          <div class="flex items-end gap-2.5">
            <span>Hossein.Ahmadian</span>
            <Icon name="mingcute:down-line" size="1rem" />
          </div>
        </div>
        <ul class="mt-10 text-[18px] text-xl text-[#5B4A42] px-6 space-y-3">
          <li
            class="text-orange-crs bg-[#FFDAC6] h-14 rounded-[0.75rem] flex gap-4 px-4 items-center cursor-pointer"
          >
            <svg
              class="h-14"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.48 13.7L13.5 9V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V9L2.52 13.7C2.2 13.88 2 14.23 2 14.6C2 15.3 2.67 15.8 3.34 15.61L10.5 13.51V19L8.24 20.35C8.09 20.44 8 20.61 8 20.78V21.28V21.36C8 21.69 8.31 21.93 8.62 21.85L11.54 21.12L12 21L12.38 21.09L12.8 21.2L14.7 21.68L15.37 21.85C15.69 21.93 15.99 21.69 15.99 21.36V20.99V20.78C15.99 20.6 15.9 20.44 15.75 20.35L13.5 19V13.5L20.66 15.6C21.33 15.8 22 15.3 22 14.6C22 14.23 21.8 13.88 21.48 13.7Z"
                fill="#FF5A00"
              ></path>
            </svg>
            جستجوی پرواز
          </li>
          <li
            class="h-14 rounded-[0.75rem] flex gap-4 px-4 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.4 1.01999C6.62 1.32999 3 5.51999 3 10.31V17C3 18.66 4.34 20 6 20H7C8.1 20 9 19.1 9 18V14C9 12.9 8.1 12 7 12H5V10.29C5 6.44999 7.96 3.10999 11.79 2.99999C15.76 2.88999 19 6.05999 19 9.99999V12H17C15.9 12 15 12.9 15 14V18C15 19.1 15.9 20 17 20H19V21H13C12.45 21 12 21.45 12 22C12 22.55 12.45 23 13 23H18C19.66 23 21 21.66 21 20V9.99999C21 4.82999 16.64 0.67999 11.4 1.01999Z"
                fill="#5B4A42"
              />
            </svg>
            پشتیبانی
          </li>
          <li
            class="h-14 rounded-[0.75rem] flex gap-4 px-4 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 1a2 2 0 0 0-1.98 2.284A7.003 7.003 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7.003 7.003 0 0 0-5.02-6.716A2 2 0 0 0 12 1m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
                clip-rule="evenodd"
              />
            </svg>
            نوتیفیکیشن
          </li>
          <li
            class="h-14 rounded-[0.75rem] flex gap-4 px-4 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.88 5.04977C16.06 5.44977 18.55 7.93976 18.95 11.1198C19.01 11.6298 19.44 11.9998 19.94 11.9998C19.98 11.9998 20.02 11.9998 20.06 11.9898C20.61 11.9198 21 11.4198 20.93 10.8698C20.42 6.77977 17.21 3.56977 13.12 3.05977C12.57 2.99977 12.07 3.38977 12.01 3.93977C11.94 4.48977 12.33 4.98977 12.88 5.04977ZM13.26 7.15977C12.73 7.01977 12.18 7.33977 12.04 7.87977C11.9 8.41977 12.22 8.95977 12.76 9.09977C13.81 9.36977 14.63 10.1898 14.91 11.2498C15.03 11.6998 15.43 11.9998 15.88 11.9998C15.96 11.9998 16.05 11.9898 16.13 11.9698C16.66 11.8298 16.98 11.2798 16.85 10.7498C16.38 8.97977 15.01 7.60977 13.26 7.15977ZM19.23 15.2598L16.69 14.9698C16.08 14.8998 15.48 15.1098 15.05 15.5398L13.21 17.3798C10.38 15.9398 8.06004 13.6298 6.62004 10.7898L8.47004 8.93976C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.63004 3.76977 7.78004 3.00977 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                fill="#5B4A42"
              />
            </svg>
            تماس با ما
          </li>
          <li
            class="h-14 rounded-[0.75rem] flex gap-4 px-4 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.61 8.34C16.68 8.34 17.54 9.2 17.54 10.27C17.54 11.34 16.68 12.2 15.61 12.2C14.54 12.2 13.68 11.34 13.68 10.27C13.67 9.2 14.54 8.34 15.61 8.34ZM9.61 6.76C10.91 6.76 11.97 7.82 11.97 9.12C11.97 10.42 10.91 11.48 9.61 11.48C8.31 11.48 7.25 10.42 7.25 9.12C7.25 7.81 8.3 6.76 9.61 6.76ZM9.61 15.89V19.64C7.21 18.89 5.31 17.04 4.47 14.68C5.52 13.56 8.14 12.99 9.61 12.99C10.14 12.99 10.81 13.07 11.51 13.21C9.87 14.08 9.61 15.23 9.61 15.89ZM12 20C11.73 20 11.47 19.99 11.21 19.96V15.89C11.21 14.47 14.15 13.76 15.61 13.76C16.68 13.76 18.53 14.15 19.45 14.91C18.28 17.88 15.39 20 12 20Z"
                fill="#5B4A42"
              />
            </svg>
            درباره ما
          </li>

          <!---->
        </ul>
      </div>

      <div class="flex flex-col">
        <div class="px-6">
          <div
            dir="rtl"
            class="flex p-1 text-sm h-[3rem] bg-[#F7F7F9] rounded-[0.5rem] min-w-[13.25rem] text-[#514037]"
          >
            <div
              @click="handleRtlProject('fa')"
              :class="{ 'text-orange-crs bg-white': locale == 'fa' }"
              class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
            >
              فارسی
            </div>
            <div
              @click="handleRtlProject('ar')"
              :class="{ 'text-orange-crs bg-white': locale == 'ar' }"
              class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
            >
              عربی
            </div>
            <div
              @click="handleLtrProject('en')"
              :class="{ 'text-orange-crs bg-white': locale == 'en' }"
              class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
            >
              English
            </div>
          </div>
          <!---->
        </div>

        <button
          @click="logout"
          class="flex py-4 justify-center text-[18px] font-semibold text-[#EE0035]"
        >
          خروج از حساب کاربری
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["side"]);
const { userAuth } = useAuth();
const showProfile = ref(false);
const clickshowProfile = () => {
  if (showProfile.value) {
    showProfile.value = false;
  }
};

const { setLocale, locale } = useI18n();
const handleRtlProject = (lang) => {
  setLocale(lang);
  document.documentElement.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("lang", lang);
};
const handleLtrProject = (lang) => {
  setLocale(lang);
  document.documentElement.setAttribute("dir", "ltr");
  document.documentElement.setAttribute("lang", lang);
};

const logout = async () => {
  try {
    await $fetch("/api/auth/logout", {
      headers: useRequestHeaders(["cookies"]),
      method: "POST",
    });

    userAuth.value = null;
    navigateTo(`/${locale.value}`);
  } catch (error) {
    console.log(error);
  }
};
</script>
