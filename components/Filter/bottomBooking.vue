<template>
  <section class="flex items-center lg:hidden my-5 justify-center gap-3">
    <button class="bg-white rtl:rotate-180 py-2 px-5 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="currentColor"
            d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
          />
        </g>
      </svg>
    </button>

    <button
      v-click-outside="clickOutOpenSort"
      @click="sort = !sort"
      class="bg-white relative py-2 px-5 flex items-center gap-3 rounded-lg"
    >
      <span>مرتب سازی</span>
      <svg
        v-if="locale == 'en'"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m6 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
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

      <div
        class="absolute right-0 -bottom-2 z-50 h-max bg-white shadow-xl rounded-lg px-4"
      >
        <TransitionExpand :duration="500">
          <div
            v-if="sort"
            class="flex flex-col gap-2 rounded-lg px-5 w-[15rem] z-50 bg-white shadow absolute right-0 top-0"
          >
            <span class="border-b py-2">ارزان ترین</span>
            <span class="border-b py-2">گران ترین</span>
            <span class="border-b py-2">زود ترین</span>
            <span class="border-b py-2">دیر ترین</span>
          </div>
        </TransitionExpand>
      </div>
    </button>

    <button
      @click="showFilter"
      class="bg-white py-2 px-5 flex items-center gap-3 rounded-lg"
    >
      <span>فیلتر ها</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="currentColor"
            d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v2.086A2 2 0 0 1 20.414 8L15 13.414v7.424a1.1 1.1 0 0 1-1.592.984l-3.717-1.858A1.25 1.25 0 0 1 9 18.846v-5.432L3.586 8A2 2 0 0 1 3 6.586zM5 5v1.586l5.56 5.56a1.5 1.5 0 0 1 .44 1.061v5.175l2 1v-6.175c0-.398.158-.78.44-1.06L19 6.585V5z"
          />
        </g>
      </svg>
    </button>
    <TransitionExpand :duration="500">
      <div
        v-if="filter"
        class="fixed lg:hidden top-0 left-0 overflow-auto rtl:right-0 z-[999] h-screen w-full bg-gray-100 space-y-5"
      >
        <div
          class="flex bg-white sticky top-0 gap-2 w-full items-center border-b py-4 px-4"
        >
          <button @click="closeFilter">
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
          <span>فیلتر ها</span>
        </div>

        <UtilsFilter class="mb-10 px-4" />

        <div class="bg-white p-4 w-full bottom-0 sticky">
          <button class="btn-primary w-full">
            اعمال فیلتر ها
          </button>
        </div>
      </div>
    </TransitionExpand>

    <button class="bg-white rotate-180 rtl:rotate-0 py-2 px-5 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
          />
          <path
            fill="currentColor"
            d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
          />
        </g>
      </svg>
    </button>
  </section>
</template>

<script setup>
const filter = ref(false);
const sort = ref(false);
const { locale } = useI18n();
const clickOutOpenSort = () => {
  if (sort.value) {
    sort.value = false;
  }
};
const showFilter = () => {
  filter.value = true;
  document.querySelector("body").classList.add("overflow-hidden");
};
const closeFilter = () => {
  filter.value = false;
  document.querySelector("body").classList.remove("overflow-hidden");
};
</script>
