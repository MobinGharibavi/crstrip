<template>
  <div class="p-1 flex flex-col gap-5">
    <h5 class="p-3 text-2xl font-semibold">پرواز های تکمیل ظرفیت</h5>
    <main
      v-for="(item, index) in 3"
      :key="index"
      class="bg-white rounded-xl hidden lg:flex flex-col w-full h-max px-5 py-3 shadow gap-7"
    >
      <div class="flex items-center justify-between">
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

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-3">
            <button class="bg-gray-100 rounded-3xl px-3 py-1 text-[12px]">
              tag title
            </button>
            <button
              class="bg-gray-700 text-white rounded-3xl px-3 py-1 text-[12px]"
            >
              tag title
            </button>
          </div>
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
      </div>

      <div
        class="mt-3 flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between"
      >
        <div
          class="flex items-center justify-between w-full lg:w-auto gap-2 cursor-pointer font-semibold"
        >
          <div class="flex items-center text-[#307FF8]">
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
                  d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                />
              </g>
            </svg>
            <span>جزئیات پرواز</span>
          </div>
          <div class="flex items-center text-[#307FF8]">
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
                  d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                />
              </g>
            </svg>
            <span>قوانین پرواز</span>
          </div>
          <div class="flex items-center text-gray-500 gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 20V7C18 6.4477 17.5523 6 17 6H5C4.44771 6 4 6.4477 4 7V19C4 19.5523 4.44771 20 5 20H18Z"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V20"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V19"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V3C14 2.44771 13.5523 2 13 2H9C8.4477 2 8 2.44771 8 3V6"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p class="text-sm flex rtl:flex-row-reverse">
              <span>25</span> <span>Kg</span>
            </p>
          </div>
          <p class="text-sm text-orange">5 صندلی باقی مانده</p>
        </div>

        <div
          class="flex justify-between w-full lg:w-auto lg:justify-start items-center gap-4"
        >
          <div class="flex items-center gap-2">
            <p class="text-[#7D8590]">USD</p>
            <p class="font-bold text-[#0A77FF]">50</p>
          </div>
          <button
            class="h-10 w-[120px] cursor-pointer rounded-lg flex items-center justify-center text-sm text-white bg-[#81756F]"
          >
            انتخاب پرواز
          </button>
        </div>
      </div>
    </main>

    <!-- Mobile -->
    <main
      v-for="(item, index) in 3"
      :key="index"
      class="bg-white cursor-pointer rounded-xl lg:flex flex flex-col w-full h-max px-5 py-3 shadow gap-7"
    >
      <div class="flex flex-col-reverse items-end">
        <div class="flex items-center justify-center mx-auto gap-5">
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

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-3">
            <button class="bg-gray-100 rounded-3xl px-3 py-1 text-[12px]">
              tag title
            </button>
            <button
              class="bg-gray-700 text-white rounded-3xl px-3 py-1 text-[12px]"
            >
              tag title
            </button>
          </div>
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
      </div>

      <div class="mt-3 flex items-center justify-between">
        <div
          class="flex items-center w-full lg:w-auto gap-4 cursor-pointer font-semibold"
        >
          <div class="flex items-center text-gray-500 gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 20V7C18 6.4477 17.5523 6 17 6H5C4.44771 6 4 6.4477 4 7V19C4 19.5523 4.44771 20 5 20H18Z"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V20"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V19"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V3C14 2.44771 13.5523 2 13 2H9C8.4477 2 8 2.44771 8 3V6"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <p class="text-sm flex rtl:flex-row-reverse">
              <span>25</span> <span>Kg</span>
            </p>
          </div>
          <p class="text-sm text-gray-500">5 صندلی باقی مانده</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[#7D8590]">USD</p>
          <p class="font-bold text-[#0A77FF]">50</p>
        </div>
      </div>
    </main>
  </div>

  <p class="flex justify-center my-10">به انتهای لیست رسیدید</p>
</template>
