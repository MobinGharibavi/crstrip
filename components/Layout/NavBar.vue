<template>
  <Body :class="{ 'overflow-hidden': sideMenu }">
    <div class="p-5 md:px-10 hidden lg:flex justify-between items-center">
      <NuxtLink :to="`/${locale}`" class="flex text-3xl rtl:flex-row-reverse">
        <span class="text-orange-crs font-km_bold">C</span>
        <p class="font-km_bold text-black-crs">rs</p>
        <span class="text-orange-crs font-km_bold">T</span>
        <p class="font-km_bold text-black-crs">rip</p>
        <span class="text-orange-crs font-km_bold">.</span>
      </NuxtLink>

      <div class="flex items-center text-sm gap-5">
        <NuxtLink :to="`/${locale}`"> {{ $t("navBar.home") }} </NuxtLink>
        <NuxtLink :to="`/${locale}`" class="text-gray-400">
          {{ $t("navBar.contact") }}
        </NuxtLink>
        <NuxtLink :to="`/${locale}`" class="text-gray-400">
          {{ $t("navBar.about") }}
        </NuxtLink>
      </div>

      <div
        class="flex p-1 h-[2.5rem] bg-[#F7F7F9] rounded-[0.5rem] min-w-[13.25rem] text-xs text-[#514037] mobile:hidden"
      >
        <div
          :class="{ 'text-orange-crs bg-white': locale == 'fa' }"
          @click="handleRtlProject('fa')"
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
    </div>

    <div class="flex px-10 py-5 lg:hidden justify-between">
      <TransitionSlide>
        <LayoutSideMenu v-if="sideMenu" @side="(data) => (sideMenu = data)" />
      </TransitionSlide>
      <button>
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
      </button>

      <NuxtLink :to="`/${locale}`" class="text-orange-crs font-bold text-xl">
        CRSTRIP
      </NuxtLink>

      <button @click="sideMenu = !sideMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </Body>
</template>

<script setup>
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

const sideMenu = ref(false);
</script>
