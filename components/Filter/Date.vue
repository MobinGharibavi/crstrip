<template>
  <section class="py-4 px-5 bg-white hidden lg:block relative rounded-xl mt-5">
    <div class="flex justify-between items-center left-0 w-full absolute h-1/2">
      <button
        class="bg-white z-50 shadow -ml-2.5 rounded-full py-2 px-3"
        @click="() => 0 < currentSlide && currentSlide--"
      >
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
        class="bg-white z-50 shadow -mr-2.5 rounded-full py-2 px-3"
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
    <ClientOnly>
      <Carousel
        :loop="true"
        :wrapAround="true"
        :autoplay="2500"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(item, index) in date" :key="index">
          <div>
            <label
              class="select flex-col rounded-lg text-center border border-transparent transition-all hover:bg-orange-100 hover:border-[#ff5a00] hover:text-[#ff5a00] w-[129px] h-14 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center"
              :class="{
                '!text-[#ff5a00] !border-[#ff5a00] !bg-orange-100':
                  correctISO(`${item.date}/${new Date().getFullYear()}`) ===
                  openTab,
              }"
            >
              <input
                type="radio"
                v-model="openTab"
                :value="correctISO(`${item.date}/${new Date().getFullYear()}`)"
                @click="
                  changeDate(
                    correctISO(`${item.date}/${new Date().getFullYear()}`)
                  )
                "
                :checked="
                  correctISO(`${item.date}/${new Date().getFullYear()}`) ===
                  openTab
                "
                class="hidden"
              />
              <span class="text">{{ item.date }}</span>
              <span class="font-semibold">{{ item.day }}</span>
            </label>
          </div>
        </Slide>
      </Carousel>
    </ClientOnly>
  </section>
</template>

<script setup>
import { addDay, format } from "@formkit/tempo";
const { execute } = defineProps({
  execute: Function,
});
const currentSlide = ref(0);

const breakpoints = ref({
  400: {
    itemsToShow: 3,
  },
  576: {
    itemsToShow: 5,
  },
  768: {
    itemsToShow: 7,
  },
  992: {
    itemsToShow: 8,
  },
  1200: {
    itemsToShow: 9,
  },
});
const router = useRouter();
const route = useRoute();
const openTab = ref(route.query.departure_date_time);

const { locale } = useI18n();
const date = ref([]);

for (let i = 0; i < 20; i++) {
  if (locale.value == "en") {
    const tt = format(addDay(new Date().toISOString(), i), "ddd", locale.value);
    const dd = format(
      addDay(new Date().toISOString(), i),
      "MM/DD",
      locale.value
    );
    date.value.push({
      day: tt,
      date: dd,
    });
  } else {
    const tt = format(
      addDay(new Date().toISOString(), i),
      "dddd",
      locale.value
    );
    const dd = format(
      addDay(new Date().toISOString(), i),
      "MM/DD",
      locale.value
    );
    date.value.push({
      day: tt,
      date: dd,
    });
  }
}

const correctISO = (time) => {
  const changeTime = time.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  const [month, day, year] = changeTime.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  return date.toISOString();
};

const changeDate = (date) => {
  openTab.value = date;
  router.push({
    path: `/${locale.value}/Filter`,
    query: {
      origin: route.query.origin,
      destination: route.query.destination,
      departure_date_time: date,
      return_date_time: route.query.return_date_time,
    },
  });
  execute();
};
</script>
