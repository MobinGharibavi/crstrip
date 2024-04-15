<template>
  <div class="flex gap-5 flex-col bg-white rounded-xl px-8 py-5">
    <div class="flex justify-between items-center">
      <h5 class="font-bold text-2xl">Tehran (IMK) to mashhad (All)</h5>

      <svg
        class="lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
        />
      </svg>

      <div class="lg:flex hidden pl-5 gap-10 items-center">
        <div class="flex items-center text-gray-500">
          <span>نتیجه</span>
          <span>252</span>
        </div>
        <div
          v-click-outside="clickOutOpenSort"
          @click="openSort = !openSort"
          class="flex relative cursor-pointer items-center bg-gray-100 gap-2 px-5 py-2 rounded-lg text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <span>مرتب سازی</span>

          <div
            class="absolute rtl:-right-20 right-0 -bottom-5 z-50 h-max bg-white shadow-xl rounded-lg px-4"
          >
            <TransitionExpand :duration="500">
              <div
                v-if="openSort"
                class="flex flex-col gap-2 rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0"
              >
                <span class="border-b py-2">ارزان ترین</span>
                <span class="border-b py-2">گران ترین</span>
                <span class="border-b py-2">زود ترین</span>
                <span class="border-b py-2">دیر ترین</span>
              </div>
            </TransitionExpand>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center text-gray-500">
      <div class="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
            />
          </g>
        </svg>
        <p>قیمت ها برای یک بزرگسال محاسبه شده است.</p>
      </div>

      <div class="flex lg:hidden items-center text-gray-500">
        <span>نتیجه</span>
        <span>252</span>
      </div>

      <div class="lg:flex hidden gap-1 items-center">
        <span>آفتابی</span>
        <span>-</span>
        <main class="flex rtl:flex-row-reverse">
          <span>35°</span> <span>C</span>
        </main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const openSort = ref(false);
const clickOutOpenSort = () => {
  if (openSort.value) {
    openSort.value = false;
  }
};
</script>
