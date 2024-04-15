<template>
  <Body :class="{ 'overflow-hidden': sideMenu }">
    <div class="w-full bg-orange-200">
      <header
        class="bg-white rounded-b-3xl z-30 sticky lg:static top-0 border-b"
      >
        <div class="max-w-7xl lg:flex justify-center hidden mx-auto w-full">
          <div
            class="flex justify-between items-center lg:container px-5 lg:px-0 mx-auto py-4 lg:py-6"
          >
            <NuxtLink
              :to="`/${locale}`"
              class="flex font-km_bold rtl:flex-row-reverse text-3xl"
            >
              <span class="text-orange-crs font-km_bold">C</span>
              <p class="text-black-crs font-km_bold">rs</p>
              <span class="text-orange-crs font-km_bold">T</span>
              <p class="text-black-crs font-km_bold">rip</p>
              <span class="text-orange-crs font-km_bold">.</span>
            </NuxtLink>
            <div class="flex gap-10 items-center">
              <div class="lg:flex hidden gap-10 items-center">
                <span class="text-black-crs">{{ $t("search.navBar.search_flight") }}</span>
                <span class="opacity-50">{{ $t("search.navBar.support") }}</span>
                <span class="opacity-50">{{ $t("search.navBar.contact") }}</span>
                <span class="opacity-50">{{ $t("search.navBar.about") }}</span>
              </div>
            </div>
            <div class="lg:flex hidden items-center gap-5">
              <div
                v-click-outside="clickshowProfile"
                @click="showProfile = !showProfile"
                class="relative text-[#514037] cursor-pointer py-1 gap-2 rounded-full flex items-center"
              >
                <Icon name="mingcute:down-line" size="1rem" />
                <span>Hossein.Ahmadian</span>
                <Icon name="ic:baseline-person" class="text-amber-950" />

                <div class="absolute">
                  <TransitionExpand :duration="500">
                    <div
                      class="flex flex-col w-72 gap-5 py-5 z-50 h-max -left-5 rtl:-right-5 top-5 px-5 absolute bg-white rounded-lg shadow"
                      v-if="showProfile"
                    >
                      <div
                        class="flex cursor-pointer items-center gap-4 text-amber-950"
                      >
                        <Icon name="fluent:person-24-regular" />
                        <span>{{ $t("search.navBar.profile.account") }}</span>
                      </div>
                      <div
                        class="flex cursor-pointer items-center gap-4 text-amber-950"
                      >
                        <Icon name="f7:tickets" />
                        <span>{{ $t("search.navBar.profile.tickets") }}</span>
                      </div>
                      <div
                        class="flex cursor-pointer items-center gap-4 text-amber-950"
                      >
                        <Icon name="icon-park-outline:transaction" />
                        <span>{{
                          $t("search.navBar.profile.transactions")
                        }}</span>
                      </div>

                      <div class="flex justify-between">
                        <div class="flex items-center gap-1">
                          <Icon name="mdi:dollar" />
                          <span>USD</span>
                          <p>12,000,000</p>
                        </div>

                        <span class="text-orange-crs whitespace-nowrap">{{
                          $t("search.navBar.profile.deposite")
                        }}</span>
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
                  </TransitionExpand>
                </div>
              </div>
              <p class="border h-6"></p>
              <div
                v-click-outside="clickshowNotif"
                @click="showNotif = !showNotif"
                class="relative cursor-pointer gap-2 rounded-full flex items-center"
              >
                <Icon name="mdi:bell" class="text-[#514037]" />
                <div class="absolute">
                  <TransitionExpand :duration="500">
                    <div
                      class="flex flex-col h-72 w-60 gap-5 overflow-auto pb-5 z-50 -left-32 rtl:-left-16 top-5 px-5 absolute bg-white rounded-lg shadow"
                      v-if="showNotif"
                    >
                      <div class="sticky top-0 bg-white w-full text-center">
                        <span class="text-blue-500">
                          {{ $t("search.navBar.notification.showMore") }}</span
                        >
                      </div>
                      <template v-for="(item, index) in 7" :key="index">
                        <main class="flex flex-col gap-1.5">
                          <div class="flex items-center gap-2">
                            <Icon name="map:airport" size="1.2rem" />
                            <span>{{
                              $t("search.navBar.notification.title")
                            }}</span>
                          </div>
                          <p class="text-gray-400">
                            {{ $t("search.navBar.notification.body") }}
                          </p>
                          <span class="text-gray-400 text-xs">
                            Today - 12:10
                          </span>
                        </main>
                      </template>
                    </div>
                  </TransitionExpand>
                </div>
              </div>
            </div>
            <button @click="sideMenu = !sideMenu" class="lg:hidden">
              <Icon name="solar:hamburger-menu-linear" size="2rem" />
            </button>
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
      </header>
    </div>
  </Body>
</template>

<script setup>
const showProfile = ref(false);
const clickshowProfile = () => {
  if (showProfile.value) {
    showProfile.value = false;
  }
};
const showNotif = ref(false);
const clickshowNotif = () => {
  if (showNotif.value) {
    showNotif.value = false;
  }
};

const sideMenu = ref(false);
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
</script>
