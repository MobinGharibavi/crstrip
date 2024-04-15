<template>
  <main class="flex justify-around -mt-60 lg:-mt-52">
    <main class="flex-col lg:flex hidden gap-10 w-1/5">
      <UtilsFilter />

      <div class="flex flex-col overflow-hidden rounded-t-xl">
        <!-- <img class="w-80" src="https://www.noavarantravel.com/uploads/tourpackages/istanbul-638270062804617017.jpg" alt=""> -->
        <img class="w-full" src="/img/search-img/visa.jpg" alt="" />

        <div
          class="bg-white rounded-t-3xl -mt-5 py-4 justify-center items-center flex flex-col"
        >
          <h4 class="text-orange font-bold text-xl">
            {{ $t("search.main.banner.title") }}
          </h4>
          <p>{{ $t("search.main.banner.body") }}</p>

          <p class="font-bold mt-5">
            <span class="text-orange">CRSTRIP</span>.COM
          </p>
        </div>
      </div>
    </main>

    <div class="w-full lg:w-3/4">
      <!-- loader -->
      <UtilsLoading v-if="isFetching" />
      <!-- Booking -->
      <FilterBooking />
      <FilterBottomBooking />
      <!-- Date -->
      <FilterDate :execute="execute"/>
      <UtilsTicket :data v-if="isFinished"/>

      <UtilsCompeleteTicket />
    </div>
  </main>
</template>

<script setup>
import { useFetch } from "@vueuse/core";
definePageMeta({
  middleware: "check",
  layout: "filter",
});

const {
  public: { api },
} = useRuntimeConfig();
const route = useRoute();
const filtered = reactive({
  adults: 1,
  children: 0,
  infants: 0,
});

const cookies = useCookie("token");

const { data, isFetching, isFinished, execute } = useFetch(
  `${api}/flight/search/3`,
  {
    async beforeFetch({ url, options, cancel }) {
      if (!cookies.value) cancel();
      // if (!filtered.adults || !filtered.infants || !filtered.children) cancel();

      options.method = "POST";
      options.body = JSON.stringify({
        ...route.query,
        ...filtered,
      });
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${cookies.value}`,
      };

      return {
        options,
      };
    },
  },
  { refetch: true }
).json();
</script>
