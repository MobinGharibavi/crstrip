<template>
  <!-- desktop -->
  <section
    class="w-full hidden lg:flex p-10 gap-4 flex-col bg-orange text-white"
  >
    <h2 class="font-bold text-3xl">{{ $t("search.main.visa.title") }}</h2>
    <div class="grid gap-4 grid-cols-4 grid-rows-2">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white cursor-pointer h-max hover:shadow-2xl group rounded-lg hover:rounded-t-lg hover:rounded-none gap-3 text-black relative p-2 flex flex-col"
      >
        <div class="rounded-lg overflow-hidden">
          <img :src="item.img" class="h-52 w-full" alt="..." />
        </div>

        <div class="flex flex-col gap-2 5">
          <h6 class="font-bold text-lg">{{ item.title }}</h6>
          <p class="text-gray-400">{{ item.body }}</p>
        </div>

        <div
          class="bg-white z-50 shadow-2xl group-hover:opacity-100 h-20 opacity-0 absolute transition-all duration-500 flex items-end -bottom-[4.5rem] left-0 right-0 rounded-b-lg p-2"
        >
          <button
            class="text-white p-0 h-0 group-hover:h-auto transition-all duration-500 bg-blue-500 rounded-lg group-hover:py-2 w-full"
          >
            {{ $t("search.main.visa.btn") }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- mobile -->
  <section
    class="w-full lg:hidden flex px-5 py-2.5 gap-4 flex-col bg-orange-crs text-white"
  >
    <div class="flex items-center rtl:flex-row-reverse justify-between">
      <h2 class="text-[18px] font-km_bold">
        {{ $t("search.main.visa.titleMobile") }}
      </h2>
      <div class="items-center rtl:flex-row-reverse flex gap-5">
        <button @click="() => 0 < currentSlide && currentSlide--">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 7 16"
          >
            <path
              fill="currentColor"
              d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0s.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            />
          </svg>
        </button>
        <button
          @click="() => items?.length - 1 > currentSlide && currentSlide++"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.66rem"
            height="1.5rem"
            viewBox="0 0 7 16"
          >
            <path
              fill="currentColor"
              d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"
            />
          </svg>
        </button>
      </div>
    </div>

    <Carousel
      :itemsToShow="1.05"
      :dir="locale == 'en' ? 'ltr' : 'rtl'"
      v-model="currentSlide"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <div
          class="bg-white cursor-pointer h-max hover:shadow-2xl group rounded-2xl gap-3 text-black p-2 flex flex-col w-[328px]"
        >
          <div class="rounded-lg overflow-hidden">
            <img :src="item.img" class="h-52 w-full" alt="..." />
          </div>

          <div class="flex rtl:flex-row-reverse justify-between items-center">
            <div
              class="flex gap-2 rtl:flex-row-reverse text-blue-500 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M222 128a6 6 0 0 1-6 6H54.49l61.75 61.76a6 6 0 1 1-8.48 8.48l-72-72a6 6 0 0 1 0-8.48l72-72a6 6 0 0 1 8.48 8.48L54.49 122H216a6 6 0 0 1 6 6"
                />
              </svg>
              <span>مشاهده بیشتر</span>
            </div>

            <div class="flex flex-col items-start">
              <h6 class="font-bold text-lg">{{ item.title }}</h6>
              <p class="text-gray-400">{{ item.body }}</p>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
const { t, locale } = useI18n();
const currentSlide = ref(0);

const items = ref([
  {
    title: t("search.main.visa.op1.title"),
    body: t("search.main.visa.op1.body"),
    img: "/img/search-img/visa-7.jpg",
  },
  {
    title: t("search.main.visa.op2.title"),
    body: t("search.main.visa.op2.body"),
    img: "/img/search-img/visa-4.jpg",
  },
  {
    title: t("search.main.visa.op3.title"),
    body: t("search.main.visa.op3.body"),
    img: "/img/search-img/visa-1.jpg",
  },
  {
    title: t("search.main.visa.op4.title"),
    body: t("search.main.visa.op4.body"),
    img: "/img/search-img/visa-8.jpg",
  },
  {
    title: t("search.main.visa.op5.title"),
    body: t("search.main.visa.op5.body"),
    img: "/img/search-img/visa-2.jpg",
  },
  {
    title: t("search.main.visa.op6.title"),
    body: t("search.main.visa.op6.body"),
    img: "/img/search-img/visa-6.jpg",
  },
  {
    title: t("search.main.visa.op7.title"),
    body: t("search.main.visa.op7.body"),
    img: "/img/search-img/visa-3.jpg",
  },
  {
    title: t("search.main.visa.op8.title"),
    body: t("search.main.visa.op8.body"),
    img: "/img/search-img/visa-5.jpg",
  },
]);
</script>

<!-- <style scoped>
:deep(.carousel__slide) {
  width: 97.3333% !important;
}
</style> -->
