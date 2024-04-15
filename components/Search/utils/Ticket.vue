<template>
  <main class="bg-white rounded-xl hidden lg:flex flex-col w-full h-max px-5 py-3 shadow gap-7">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3 divide-x-2 rtl:divide-x-reverse">
        <span class="text-orange-500">پیشنهاد ویژه</span>
        <span class="pr-3">سیستمی</span>
      </div>
      <div class="flex items-center gap-5">
        <span class="text-pink-500">6 صندلی باقی مانده</span>
        <div class="flex items-end gap-1">
          <Icon name="mingcute:down-line" size="1rem" />
          <span>قوانین پرواز</span>
        </div>
        <div class="flex items-end gap-1">
          <Icon name="mingcute:down-line" size="1rem" />
          <span>جزئیات پرواز</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <div>
          <div class="flex items-center justify-center">
            <div
              class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"
            ></div>
            <div
              class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"
            ></div>
          </div>
          <p class="text-xs text-[#938F96]">THR , MHD</p>
        </div>
      </div>

      <div class="flex items-center gap-5">
        <div>
          <div>
            <p
              class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"
            >
              08:25 <span class="text-gray-500">PM</span>
            </p>
            <p class="text-[#7D8590]">IMK Mon Apr 01 2024</p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <Icon
            name="fluent:airplane-24-filled"
            class="rtl:rotate-180"
            color="gray"
          />
          <p class="text-center text-xs text-[#605D64]">بدون توقف</p>
          <p class="text-center text-xs text-[#605D64]">MHD</p>
        </div>
        <div>
          <div>
            <p
              class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"
            >
              08:25 <span class="text-gray-500">PM</span>
            </p>
            <p class="text-[#7D8590]">IMK Mon Apr 01 2024</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <p class="font-bold text-lg text-gray-400">تومان</p>
          <span class="text-blue-500 font-bold">16,200,000</span>
        </div>

        <button class="btn-outline">انتخاب پرواز</button>
      </div>
    </div>
  </main>
</template>

<script setup>
const props = defineProps(["data"]);
const isOpen = ref([]);
const toggleOpenTicket = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};

const modalActive = ref(false);
const toogleModal = () => {
  modalActive.value = !modalActive.value;
  document.querySelector("body").classList.add("overflow-hidden");
};

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function convertTime(time) {
  var date = new Date(time);
  return date.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script>
