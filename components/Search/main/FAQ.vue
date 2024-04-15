<template>
  <section class="bg-[#FFEBE0] flex flex-col mt-10">
    <div class="flex flex-col py-10 justify-center items-center gap-5">
      <h2 class="text-3xl font-extrabold">{{ $t("search.main.FAQ.title") }}</h2>
      <p class="text-gray-600 w-11/12 lg:w-1/2 text-center">
        {{ $t("search.main.FAQ.description") }}
        <span class="text-orange-crs">{{ $t("search.main.FAQ.support") }}</span>
        {{ $t("search.main.FAQ.call") }}.
      </p>

      <div class="flex flex-col lg:flex-row items-center gap-5">
        <button
        class="text-white bg-orange-crs rounded-2xl flex items-center px-5 gap-3 py-3"
        >
        <span>{{ $t("search.main.FAQ.btn1") }}</span>
        <Icon name="streamline:customer-support-1-solid" />
      </button>
      <button
        class="text-white bg-blue-500 rounded-2xl flex items-center gap-3 px-5 py-3"
      >
        <span>{{ $t("search.main.FAQ.btn2") }}</span>
        <Icon name="ep:right" class="rtl:rotate-180" />
      </button>
      </div>
    </div>

    <section
      class="grid px-4 w-full lg:px-16 lg:grid-cols-2 pt-10 gap-5 lg:grid-rows-3 bg-white"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border-2 gap-2 rounded-lg cursor-pointer py-3 px-5 flex items-center"
      >
        <Icon name="ph:plus" class="text-blue-500" size="2rem" />
        <span>{{ item.title }}</span>
      </div>
    </section>
  </section>
</template>

<script setup>
const { t } = useI18n();
const items = ref([
  {
    title: t("search.main.FAQ.options.op1"),
    body: "",
  },
  {
    title: t("search.main.FAQ.options.op2"),
    body: "",
  },
  {
    title: t("search.main.FAQ.options.op3"),
    body: "",
  },
  {
    title: t("search.main.FAQ.options.op4"),
    body: "",
  },
  {
    title: t("search.main.FAQ.options.op5"),
    body: "",
  },
  {
    title: t("search.main.FAQ.options.op6"),
    body: "",
  },
]);
</script>
