<template>
  <div
    class="flex items-center flex-col lg:flex-row justify-center gap-5 -mt-[15rem] lg:-mt-52 mb-10"
  >
    <div class="flex flex-col w-11/12 lg:w-auto gap-5">
      <div
        class="bg-white py-3 px-5 w-full lg:w-80 gap-2 rounded-2xl flex flex-col"
      >
        <h3 class="font-km_bold text-2xl">{{ $t("search.main.search_flight.title") }}</h3>
        <div class="flex gap-5 items-center">
          <!-- radio btn -->
          <div class="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              id="org"
              name="flight"
              v-model="way"
              value="1"
              class="w-4 h-4"
            />
            <label for="org">{{
              $t("search.main.search_flight.options.op1")
            }}</label>
          </div>
          <div class="flex cursor-pointer items-center gap-2">
            <input
              v-model="way"
              value="2"
              type="radio"
              name="flight"
              id="des"
              class="w-4 h-4"
            />
            <label for="des">{{
              $t("search.main.search_flight.options.op2")
            }}</label>
          </div>
        </div>

        <!-- change flight -->
        <div class="justify-center flex flex-col gap-3 relative mt-2">
          <div v-click-outside="clickOutOrigin" class="relative w-full flex">
            <input
              @focus="Origin = true"
              @blur="clickOutOrigin"
              class="peer transition-all px-5 py-3 w-full text-lg text-gray-600 bg-white rounded-md border outline-blue-300 select-all"
              type="text"
              placeholder=" "
            />

            <label
              class="z-2 text-gray-500 pointer-events-none absolute left-5 inset-y-0 bg-white h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 peer-focus:px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-white m-0 peer-focus:m-0 peer-placeholder-shown:m-auto rtl:right-5 gap-2 peer-focus:w-max -translate-y-1/2 peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-0"
            >
              <Icon name="carbon:circle-filled" size="1.2rem" />
              {{ $t("search.main.search_flight.origin") }}
            </label>

            <div
              class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
            >
              <TransitionExpand :duration="500">
                <div
                  v-if="Origin"
                  class="flex py-2 border-b h-72 overflow-auto flex-col"
                >
                  <main
                    v-for="(item, index) in 20"
                    :key="index"
                    class="flex p-2 justify-between"
                  >
                    <h6 class="font-bold">Dubai</h6>
                    <p class="text-gray-600">IMK</p>
                  </main>
                </div>
              </TransitionExpand>
            </div>
          </div>

          <button type="button" class="h-full">
            <Icon
              name="humbleicons:exchange-horizontal"
              class="w-[50px] text-gray-500 rotate-90 h-[50px] rounded-[50%] absolute bg-white border-2 right-5 rtl:right-auto rtl:left-5 -translate-y-1/2 top-1/2 p-3 flex z-10 justify-center items-center"
            />

            <div v-click-outside="clickOutDest" class="relative w-full flex">
              <input
                @focus="Dest = true"
                @blur="clickOutDest"
                class="peer transition-all px-5 py-3 w-full text-lg text-gray-600 bg-white rounded-md border outline-blue-300 select-all"
                type="text"
                placeholder=" "
              />

              <label
                class="z-2 text-gray-500 gap-2 pointer-events-none absolute left-5 inset-y-0 bg-white h-fit flex items-center select-none transition-all text-sm peer-focus:text-sm peer-placeholder-shown:text-lg px-1 peer-focus:px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-white m-0 peer-focus:m-0 peer-placeholder-shown:m-auto rtl:right-5 peer-focus:w-max -translate-y-1/2 peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-0"
              >
                <Icon name="mdi:location" />
                {{ $t("search.main.search_flight.destination") }}
              </label>

              <div
                class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
              >
                <TransitionExpand :duration="500">
                  <div
                    v-if="Dest"
                    class="flex py-2 border-b h-72 overflow-auto flex-col"
                  >
                    <main
                      v-for="(item, index) in 20"
                      :key="index"
                      class="flex p-2 justify-between"
                    >
                      <h6 class="font-bold">Dubai</h6>
                      <p class="text-gray-600">IMK</p>
                    </main>
                  </div>
                </TransitionExpand>
              </div>
            </div>
          </button>
        </div>

        <div
          v-click-outside="clickOutdateAir"
          class="border rounded-lg text-gray-500 relative cursor-pointer px-5 py-3"
        >
          <div @click="dateAir = !dateAir" class="flex gap-2">
            <Icon name="simple-line-icons:calender" />
            <span>{{ $t("search.main.search_flight.departure_date") }}</span>
          </div>

          <div
            class="absolute hidden lg:inline left-0 rtl:right-0 z-[999] h-max w-max bg-white shadow-xl rounded-lg px-4"
          >
            <TransitionExpand :duration="500">
              <div v-if="dateAir" class="flex flex-col">
                <div
                  class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center"
                >
                  <h6 class="text-xl font-bold">تاریخ رفت</h6>
                  <div class="flex items-center gap-3">
                    <span class="text-blue-500 font-semibold cursor-pointer"
                      >برو به امروز</span
                    >
                    <div class="flex items-center gap-2">
                      <div class="checkbox-wrapper-34">
                        <input
                          class="tgl tgl-ios"
                          id="toggle-34"
                          type="checkbox"
                        />
                        <label class="tgl-btn" for="toggle-34"></label>
                      </div>
                      <p class="text-gray-600">تاریخ برگشت</p>
                    </div>
                  </div>
                </div>
                <div class="m-2 border-b">
                  <ClientOnly>
                    <VDatePicker
                      :locale="loc"
                      v-model.range="range"
                      :columns="columns"
                      :expanded="expanded"
                    />
                  </ClientOnly>
                </div>
                <div
                  class="flex flex-col lg:flex-row justify-between mb-2 items-center"
                >
                  <div
                    class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg"
                  >
                    <button
                      @click="loc = 'en'"
                      :class="{ 'bg-white !text-blue-500': loc == 'en' }"
                      class="text-gray-700 p-2 rounded-lg"
                    >
                      میلادی
                    </button>
                    <button
                      @click="loc = 'fa'"
                      :class="{ 'bg-white !text-blue-500': loc == 'fa' }"
                      class="text-gray-700 p-2 rounded-lg"
                    >
                      شمسی
                    </button>
                  </div>

                  <div class="flex items-center gap-2 p-2.5">
                    <button
                      @click="clickOutdateAir"
                      class="btn-outline px-8 py-3"
                    >
                      انصراف
                    </button>
                    <button
                      @click="dateAir = !dateAir"
                      class="btn-primary px-8 py-3"
                    >
                      تایید
                    </button>
                  </div>
                </div>
              </div>
            </TransitionExpand>
          </div>
          <TransitionExpand :duration="500">
            <div
              v-if="dateAir"
              class="fixed lg:hidden top-0 left-0 rtl:right-0 z-[999] h-screen w-full bg-white px-4"
            >
              <div class="flex flex-col">
                <div
                  class="flex gap-3 justify-between border-b py-3 items-center"
                >
                  <div class="flex gap-2 items-center">
                    <button @click="clickOutdateAir">
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
                        ></path>
                      </svg>
                    </button>
                    <h6 class="text-xl font-bold">تاریخ رفت</h6>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-blue-500 font-semibold cursor-pointer"
                      >برو به امروز</span
                    >
                    <div class="flex items-center gap-2">
                      <div class="checkbox-wrapper-34">
                        <input
                          class="tgl tgl-ios"
                          id="toggle-34"
                          type="checkbox"
                        />
                        <label class="tgl-btn" for="toggle-34"></label>
                      </div>
                      <p class="text-gray-600">تاریخ برگشت</p>
                    </div>
                  </div>
                </div>
                <div class="m-2 border-b">
                  <ClientOnly>
                    <VDatePicker
                      :locale="loc"
                      v-model.range="range"
                      :columns="columns"
                      :rows="rows"
                      :expanded="expanded"
                    />
                  </ClientOnly>
                </div>
                <div
                  class="flex flex-col lg:flex-row justify-between mb-2 items-center"
                >
                  <div
                    class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg"
                  >
                    <button
                      @click="loc = 'en'"
                      :class="{ 'bg-white !text-blue-500': loc == 'en' }"
                      class="text-gray-700 p-2 rounded-lg"
                    >
                      میلادی
                    </button>
                    <button
                      @click="loc = 'fa'"
                      :class="{ 'bg-white !text-blue-500': loc == 'fa' }"
                      class="text-gray-700 p-2 rounded-lg"
                    >
                      شمسی
                    </button>
                  </div>

                  <div class="flex items-center gap-2 p-2.5">
                    <button
                      @click="clickOutdateAir"
                      class="btn-outline px-8 py-3"
                    >
                      انصراف
                    </button>
                    <button
                      @click="dateAir = !dateAir"
                      class="btn-primary px-8 py-3"
                    >
                      تایید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TransitionExpand>
        </div>
        <div
          v-click-outside="clickOutPassengerAir"
          class="border rounded-lg text-gray-500 relative cursor-pointer px-5 py-3"
        >
          <div @click="PassengerAir = !PassengerAir" class="flex gap-2">
            <Icon name="mdi:users" />
            <span>{{ $t("search.main.search_flight.persons") }}</span>
          </div>

          <div
            class="absolute hidden lg:inline-block left-0 rtl:right-0 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
          >
            <TransitionExpand :duration="500">
              <div v-if="PassengerAir">
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">بزگسال</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>

                    <span>0</span>
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">کودک</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>
                    <span>0</span>

                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">نوزاد</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>
                    <span>0</span>
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 p-2.5">
                  <button
                    @click="PassengerAir = false"
                    class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                  >
                    تایید مسافران
                  </button>
                  <button
                    @click="PassengerAir = false"
                    class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </TransitionExpand>
          </div>

          <TransitionExpand :duration="500">
            <div
              v-if="PassengerAir"
              @click.self="PassengerAir = !PassengerAir"
              class="fixed lg:hidden inset-0 z-[999] h-screen w-full bg-black/50 flex items-end"
            >
              <div
                class="h-2/5 w-full bg-white px-4 flex flex-col justify-between rounded-t-xl"
              >
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">بزگسال</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>

                    <span>0</span>
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">کودک</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>
                    <span>0</span>

                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center border-b p-2.5 justify-between">
                  <span class="font-semibold">نوزاد</span>
                  <div class="flex items-center gap-2">
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        />
                      </svg>
                    </button>
                    <span>0</span>
                    <button
                      class="rounded-lg flex items-center justify-center p-2.5 text-white bg-orange-crs opacity-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 p-2.5">
                  <button
                    @click="PassengerAir = false"
                    class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                  >
                    تایید مسافران
                  </button>
                  <button
                    @click="PassengerAir = false"
                    class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </div>
          </TransitionExpand>
        </div>

        <button
          @click="handleSearchFlight"
          class="bg-orange-crs text-white rounded-2xl flex items-center justify-center gap-1 py-3"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/></svg>
          <span class="font-km_thin font-semibold">{{ $t("search.main.search_flight.btn") }}</span>
        </button>
      </div>

      <div class="lg:flex hidden flex-col overflow-hidden rounded-t-xl">
        <!-- <img class="w-80" src="https://www.noavarantravel.com/uploads/tourpackages/istanbul-638270062804617017.jpg" alt=""> -->
        <img class="w-80" src="/img/search-img/visa.jpg" alt="" />

        <div
          class="bg-white rounded-t-3xl -mt-5 py-4 justify-center items-center flex flex-col"
        >
          <h4 class="text-orange-crs font-bold text-xl">
            {{ $t("search.main.banner.title") }}
          </h4>
          <p>{{ $t("search.main.banner.body") }}</p>

          <p class="font-bold mt-5">
            <span class="text-orange-crs">CRSTRIP</span>.COM
          </p>
        </div>
      </div>
    </div>

    <SearchMainSearchData />
    <SearchMainSearchDataMobile />

    <div class="flex lg:hidden w-11/12 flex-col overflow-hidden rounded-t-xl">
      <img src="/img/search-img/visa.jpg" alt="" />

      <div
        class="bg-white rounded-t-3xl -mt-5 py-4 justify-center items-center flex flex-col"
      >
        <h4 class="text-orange-crs font-bold text-xl">
          {{ $t("search.main.banner.title") }}
        </h4>
        <p>{{ $t("search.main.banner.body") }}</p>

        <p class="font-bold mt-5">
          <span class="text-orange-crs">CRSTRIP</span>.COM
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScreens } from "vue-screen-utils";
const router = useRouter();
const way = ref(1);
const loc = ref("en");
const { locale } = useI18n();
// calender
const months = ref([
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]);
const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
const columns = mapCurrent({ lg: 2 }, 1);
const rows = mapCurrent({ lg: 1 }, 2);
const expanded = mapCurrent({ lg: false }, true);
const range = ref({
  start: Date.now(),
  end: Date.now(),
});

const Origin = ref(false);
const clickOutOrigin = () => {
  if (Origin.value) {
    Origin.value = false;
  }
};
const Dest = ref(false);
const clickOutDest = () => {
  if (Dest.value) {
    Dest.value = false;
  }
};
const PassengerAir = ref(false);
const clickOutPassengerAir = () => {
  if (PassengerAir.value) {
    PassengerAir.value = false;
  }
};
const dateAir = ref(false);
const clickOutdateAir = () => {
  if (dateAir.value) {
    dateAir.value = false;
  }
};

const handleSearchFlight = () => {
  router.push({
    path: `/${locale.value}/filter`,
    query: {
      // origin: forSearchOrigin.value.Code,
      // destination: forSearchDest.value.Code,
      // departure_date_time: new Date(range.value.start).toISOString(),
      // return_date_time: returnDate.value
      //   ? ""
      //   : new Date(range.value.end).toISOString(),
      origin: "IKA",
      destination: "IST",
      departure_date_time: "2024-12-22T00:00:00Z",
      return_date_time: "",
    },
  });
};
</script>

<style scoped>
:deep(.vc-bordered) {
  @apply !border-none;
}
</style>
