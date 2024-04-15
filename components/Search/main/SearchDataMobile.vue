<template>
  <section class="flex shadow px-4 flex-col lg:hidden gap-5 w-full">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold">مقاصد پرطرفدار</h2>
      <div class="items-center rtl:flex-row-reverse text-orange-crs flex gap-3">
        <button @click="() => 0 < currentSlide && currentSlide--">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.66rem"
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
          @click="() => 5 > currentSlide && currentSlide++"
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
      :dir="locale == 'en' ? 'ltr' : 'rtl'"
      ref="carousel"
      v-model="currentSlide"
    >
      <Slide v-for="(item, index) in 6" :key="index">
        <div class="bg-white w-11/12 rounded-2xl overflow-auto flex flex-col">
          <div
            class="flex rtl:flex-row-reverse bg-white z-50 sticky top-0 items-center border-b gap-3 p-3 text-gray-500"
          >
            <icon name="wpf:airplane-takeoff" />
            <span>Tehran to</span>
          </div>

          <div class="flex flex-col items-center">
            <div
              class="border-b p-3 flex justify-between w-full"
              v-for="(item, index) in items"
              :key="index"
            >
              <span>{{ item }}</span>

              <span class="text-[#EE0035]">$ 1.200</span>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
const currentSlide = ref(0);
const { locale } = useI18n();

const items = ref([
  "Istanbul",
  "Bubai",
  "Baghdad",
  "Dubai",
  "Jordan",
  "Azarbaijan",
  "Pakistan",
  "Afghanistan",
  "Russia",
]);
</script>
