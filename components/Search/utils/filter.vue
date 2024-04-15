<template>
  <section class="lg:flex hidden flex-col gap-5">
    <main class="shadow rounded-xl bg-white p-2 w-64">
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
    <main class="shadow rounded-xl bg-white p-2 w-64">
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
    <main class="shadow rounded-xl bg-white p-2 w-64">
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
    <main class="shadow rounded-xl bg-white p-2 w-64">
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
    <main class="shadow rounded-xl bg-white p-2 w-64">
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
const stop = ref(false);
const flightType = ref(false);
const ticketType = ref(false);
const period = ref(false);
const airLine = ref(false);
const value = ref(0);
</script>
