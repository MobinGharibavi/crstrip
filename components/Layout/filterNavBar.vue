<template>
  <Body :class="{ 'overflow-hidden': sideMenu }">
    <div class="bg-orange h-80 w-full">
      <header
        class="bg-white h-max rounded-b-3xl z-30 sticky lg:static top-0 border-b"
      >
        <div class="max-w-7xl mx-auto w-full">
          <div
            class="flex justify-between items-center lg:container px-5 lg:px-0 mx-auto py-4 lg:py-6"
          >
            <NuxtLink
              :to="`/${locale}`"
              class="flex font-bold rtl:flex-row-reverse text-3xl"
            >
              <span class="text-orange-crs">C</span>
              <p>rs</p>
              <span class="text-orange-crs">T</span>
              <p>rip</p>
              <span class="text-orange-crs">.</span>
            </NuxtLink>
            <div class="flex gap-10 items-center">
              <div class="lg:flex hidden gap-10 items-center">
                <span>{{ $t("search.navBar.search_flight") }}</span>
                <span>{{ $t("search.navBar.support") }}</span>
                <span>{{ $t("search.navBar.contact") }}</span>
                <span>{{ $t("search.navBar.about") }}</span>
              </div>
            </div>
            <div class="lg:flex hidden items-center gap-5">
              <div
                v-click-outside="clickshowProfile"
                @click="showProfile = !showProfile"
                class="relative cursor-pointer py-1 gap-2 rounded-full flex items-center"
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

                        <span class="text-orange-crs">{{
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
                <Icon name="mdi:bell" class="text-amber-950" />
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
            <button class="lg:hidden" @click="sideMenu = !sideMenu">
              <Icon name="solar:hamburger-menu-linear" size="2rem" />
            </button>
          </div>
        </div>
      </header>

      
      <TransitionSlide>
        <LayoutSideMenu v-if="sideMenu" @side="(data) => (sideMenu = data)" />
      </TransitionSlide>
    </div>
  </Body>
</template>

<script setup>
const sideMenu = ref(false);
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
