<template>
  <section class="lg:grid hidden grid-cols-3 grid-rows-2 gap-5">
    <div
      v-for="(item, index) in 6"
      :key="index"
      class="bg-white shadow h-[22rem] w-80 rounded-2xl overflow-auto flex flex-col"
    >
      <div
        class="flex rtl:flex-row-reverse bg-white z-50 sticky top-0 items-center border-b gap-3 p-3 text-gray-500"
      >
      <icon name="wpf:airplane-takeoff" />
        <span>Tehran to</span>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="border-b p-3 text-center w-full"
          v-for="(item, index) in items"
          :key="index"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const items = ref([
  "Esfahan",
  "Kermanshah",
  "Mashhad",
  "Babol",
  "Istanbul",
  "Bubai",
  "Baghdad",
  "Dubai",
  "Jordan",
  "Azarbaijan",
  "Pakistan",
  "Afghanistan",
  "Russia",
])
</script>