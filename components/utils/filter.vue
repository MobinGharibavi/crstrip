<template>
  <section class="flex flex-col gap-2.5">
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="search = !search"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.search.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': search }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="search" class="bg-white gap-2 rounded-lg flex flex-col">
          <div class="flex gap-5 items-center mt-2.5">
            <!-- radio btn -->
            <div class="flex items-center gap-2">
              <input
                type="radio"
                id="org"
                name="flight"
                checked
                class="w-4 h-4"
              />
              <label for="org">{{
                $t("search.main.search_flight.options.op1")
              }}</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="flight" id="des" class="w-4 h-4" />
              <label for="des">{{
                $t("search.main.search_flight.options.op2")
              }}</label>
            </div>
          </div>

          <!-- change flight -->
          <div class="justify-center flex flex-col gap-3 relative mt-2">
            <div class="relative w-full flex">
              <input
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
            </div>

            <button type="button" class="h-full">
              <Icon
                name="humbleicons:exchange-horizontal"
                class="w-[50px] text-gray-500 rotate-90 h-[50px] rounded-[50%] absolute bg-white border-2 right-5 rtl:right-auto rtl:left-5 -translate-y-1/2 top-1/2 p-3 flex z-50 justify-center items-center"
              />

              <div class="relative w-full flex">
                <input
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
              </div>
            </button>
          </div>

          <div
            class="border rounded-lg flex gap-2 text-gray-500 cursor-pointer px-5 py-3"
          >
            <Icon name="simple-line-icons:calender" />
            <span>{{ $t("search.main.search_flight.departure_date") }}</span>
          </div>
          <div
            class="border rounded-lg flex gap-2 text-gray-500 cursor-pointer px-5 py-3"
          >
            <Icon name="mdi:users" />
            <span>{{ $t("search.main.search_flight.persons") }}</span>
          </div>

          <button
            class="bg-orange text-white rounded-xl flex items-center justify-center gap-1 font-semibold py-3"
          >
            <Icon name="ic:outline-search" />
            <span>{{ $t("search.main.search_flight.btn") }}</span>
          </button>
        </div>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="slider = !slider"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.slider.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': slider }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <KeepAlive>
          <UtilsSlider v-if="slider" />
        </KeepAlive>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="stop = !stop"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.stop.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': stop }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="stop" class="flex mt-2.5 flex-col">
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
            />
            <span>{{ $t("filter.stop.non_stop") }}</span>
          </div>
          <div class="flex gap-10">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.stop.stops1") }}</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.stop.stops2") }}</span>
            </div>
          </div>
        </div>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="flightType = !flightType"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.flight_type.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': flightType }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="flightType" class="flex mt-2.5 flex-col">
          <div class="flex items-center gap-2">
            <input
              type="checkbox"
              class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
            />
            <span>{{ $t("filter.flight_type.op1") }}</span>
          </div>
          <div class="flex gap-10">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.flight_type.op2") }}</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.flight_type.op3") }}</span>
            </div>
          </div>
        </div>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="ticketType = !ticketType"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.ticket_type.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': ticketType }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="ticketType" class="flex mt-2.5 flex-col">
          <div class="flex gap-10">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.ticket_type.op1") }}</span>
            </div>
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.ticket_type.op2") }}</span>
            </div>
          </div>
        </div>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="period = !period"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">
              {{ $t("filter.period.title") }}</span
            >
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': period }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="period" class="flex mt-2.5 flex-col">
          <div class="flex justify-between items-center gap-2">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.period.op1") }}</span>
            </div>
            <span>0-6</span>
          </div>
          <div class="flex justify-between items-center gap-2">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.period.op2") }}</span>
            </div>
            <span>6-12</span>
          </div>
          <div class="flex justify-between items-center gap-2">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.period.op3") }}</span>
            </div>
            <span>12-18</span>
          </div>
          <div class="flex justify-between items-center gap-2">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.period.op4") }}</span>
            </div>
            <span>18-24</span>
          </div>
        </div>
      </TransitionExpand>
    </main>
    <main class="shadow rounded-xl bg-white p-2">
      <div
        class="flex cursor-pointer rounded-md transition-all hover:transition-all items-center justify-between"
        @click="airLine = !airLine"
      >
        <div class="flex gap-2 items-center">
          <button type="button">
            <span class="font-semibold text-lg">{{
              $t("filter.airline.title")
            }}</span>
          </button>
        </div>
        <div
          class="text-xl transition-all duration-500"
          :class="{ 'rotate-180': airLine }"
        >
          <Icon name="mingcute:down-line" />
        </div>
      </div>
      <TransitionExpand>
        <div v-if="airLine" class="flex mt-2.5 flex-col gap-2.5">
          <div
            v-for="(item, index) in 6"
            :key="index"
            class="flex justify-between items-center gap-2"
          >
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                class="relative peer shrink-0 w-5 h-5 border-2 border-blue-500 rounded-lg bg-white checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <span>{{ $t("filter.airline.op1") }}</span>
            </div>
            <main class="bg-orange-100 rounded-full p-2">
              <Icon name="emojione:airplane" />
            </main>
          </div>
        </div>
      </TransitionExpand>
    </main>
  </section>
</template>

<script setup>
const search = ref(false);
const stop = ref(false);
const slider = ref(false);
const flightType = ref(false);
const ticketType = ref(false);
const period = ref(false);
const airLine = ref(true);
const value = ref(0);
</script>
