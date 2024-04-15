<template>
  <main
    v-for="(item, index) in props.data.flights"
    :key="index"
    class="bg-white rounded-xl hidden lg:flex flex-col w-full h-max my-5 px-5 py-3 shadow gap-7"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-5">
        <div>
          <div>
            <p
              class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"
            >
              <span class="text-gray-500 font-bold">
                {{ format(item.outbound_group.departure_date_time, "H:mm A") }}
              </span>
            </p>
            <p class="text-[#7D8590]">
              IMK
              {{
                format(
                  item.outbound_group.departure_date_time,
                  "ddd MMM DD YYYY"
                )
              }}
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <Icon
            name="fluent:airplane-24-filled"
            class="rtl:rotate-180"
            color="gray"
          />
          <p class="text-center text-xs text-[#605D64]">بدون توقف</p>
        </div>
        <div>
          <div>
            <p
              class="font-bold flex gap-2 rtl:justify-end rtl:flex-row-reverse"
            >
              <span class="text-gray-500 font-bold">
                {{ format(item.outbound_group.arrival_date_time, "H:mm A") }}
              </span>
            </p>
            <p class="text-[#7D8590]">
              IMK
              {{
                format(item.outbound_group.arrival_date_time, "ddd MMM DD YYYY")
              }}
            </p>
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
      :class="{ 'border-b': isOpen[index] }"
      class="mt-3 flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between"
    >
      <div
        class="flex items-center justify-between w-full lg:w-auto gap-2 cursor-pointer font-semibold"
      >
        <div  @click="toggleOpenTicket2(index)" class="flex items-center text-[#307FF8]">
          <svg
          :class="{ 'rotate-180': isOpen2[index] }"
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
        <div
          @click="toggleOpenTicket(index)"
          class="flex items-center text-[#307FF8]"
        >
          <svg
            :class="{ 'rotate-180': isOpen[index] }"
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
            <span>
              {{ item.outbound_group.flight_segments[0].baggage_kg }}</span
            >
            <span>Kg</span>
          </p>
        </div>
        <p class="text-sm text-orange">
          {{ item.seats_remaining }} صندلی باقی مانده
        </p>
      </div>

      <div
        class="flex justify-between w-full lg:w-auto lg:justify-start items-center gap-4"
      >
        <div class="flex items-center gap-2">
          <p class="text-[#7D8590]">USD</p>
          <p class="font-bold text-[#0A77FF]">
            {{ item.price_detail.total_fare.payable }}
          </p>
        </div>
        <button
          @click="toogleModal"
          class="h-10 w-[120px] cursor-pointer rounded-lg flex items-center justify-center text-sm text-white bg-[#0A77FF]"
        >
          انتخاب پرواز
        </button>
      </div>
    </div>

    <TransitionExpand :duration="500">
      <div v-if="isOpen[index]"  class="flex bg-white gap-5 flex-col">
        <div class="flex flex-col">
          <h4 class="text-2xl">Tehran (IMK) to Torento (YYZ)</h4>
          <div class="flex text-gray-500 gap-2 items-center">
            <span
              >{{
                new Date(item.outbound_group.departure_date_time).getHours()
              }}h
              {{
                addZero(
                  new Date(item.outbound_group.departure_date_time).getMinutes()
                )
              }}m</span
            >
            <span>{{
              new Date(item.outbound_group.departure_date_time).toDateString()
            }}</span>
          </div>
        </div>

        <div class="bg-gray-100 rounded-xl px-3 py-2 flex flex-col gap-4">
          <div class="flex flex-col gap-3">
            <h5 class="text-xl font-semibold">تیتر قوانین پرواز</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-xl font-semibold">تیتر قوانین پرواز</h5>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </TransitionExpand>

    <TransitionExpand :duration="500">
      <div v-if="isOpen2[index]" class="flex bg-white gap-5 flex-col">
        <div class="flex flex-col">
          <h4 class="text-2xl">Tehran (IMK) to Torento (YYZ)</h4>
          <div class="flex text-gray-500 gap-2 items-center">
            <span
              >{{
                new Date(item.outbound_group.departure_date_time).getHours()
              }}h
              {{
                addZero(
                  new Date(item.outbound_group.departure_date_time).getMinutes()
                )
              }}m</span
            >
            <span>{{
              new Date(item.outbound_group.departure_date_time).toDateString()
            }}</span>
          </div>
        </div>

        <div class="flex px-7 py-5 rounded-xl bg-gray-100 gap-5 flex-col">
            <div class="flex items-center gap-2.5">
              <div class="flex-col items-center justify-center gap-3 flex">
                <span
                  class="stops__point_before flex relative justify-center flex-col items-center"
                ></span>
                <svg
                  class="rotate-180 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.05"
                    d="M20.5 10.537C20.5 6.514 22.833 4.503 24 4c1.167.503 3.5 2.514 3.5 6.537v7.543L43 31v4l-16-8v9l5 8l-8-3l-8 3l5-8v-9L5 35v-4l15.5-12.92z"
                  />
                </svg>
                <span
                  class="stops__point_after flex flex-col relative items-center"
                ></span>
              </div>
              <div class="flex-col gap-3 flex">
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold"
                    >{{
                      new Date(
                        item.outbound_group.departure_date_time
                      ).getUTCHours()
                    }}:{{
                      addZero(
                        new Date(
                          item.outbound_group.departure_date_time
                        ).getUTCMinutes()
                      )
                    }}</span
                  >
                  <p>
                    {{
                      item.outbound_group.flight_segments[0].departure_airport
                    }}, ({{
                      item.outbound_group.flight_segments[0].departure_airport
                    }})
                  </p>
                </div>
                <p class="text-gray-500">
                  {{
                    new Date(
                      item.outbound_group.journey_duration_in_minute
                    ).getHours()
                  }}h and
                  {{
                    addZero(
                      new Date(
                        item.outbound_group.journey_duration_in_minute
                      ).getMinutes()
                    )
                  }}m flight duration
                </p>
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold"
                    >{{
                      new Date(
                        item.outbound_group.arrival_date_time
                      ).getUTCHours()
                    }}:{{
                      addZero(
                        new Date(
                          item.outbound_group.arrival_date_time
                        ).getUTCMinutes()
                      )
                    }}</span
                  >
                  <p>
                    {{
                      item.outbound_group.flight_segments[0].arrival_airport
                    }}, ({{
                      item.outbound_group.flight_segments[0].arrival_airport
                    }})
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <main class="bg-gray-300 rounded-full p-5"></main>
              <span>Airline name</span>
            </div>
            <!-- <span class="text-blue-600 border-y py-2"
              >7h and 25m stop in Doha airport</span
            >
            <div class="flex items-center gap-2.5">
              <div class="flex-col items-center justify-center gap-3 flex">
                <span
                  class="stops__point_before flex relative justify-center flex-col items-center"
                ></span>
                <svg
                  class="rotate-180 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.05"
                    d="M20.5 10.537C20.5 6.514 22.833 4.503 24 4c1.167.503 3.5 2.514 3.5 6.537v7.543L43 31v4l-16-8v9l5 8l-8-3l-8 3l5-8v-9L5 35v-4l15.5-12.92z"
                  />
                </svg>
                <span
                  class="stops__point_after flex flex-col relative items-center"
                ></span>
              </div>
              <div class="flex-col gap-3 flex">
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold">22:45</span>
                  <p>Tehran, Imam Khomeini airport (IMK)</p>
                </div>
                <p class="text-gray-500">12h and 25m flight duration</p>
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold">22:45</span>
                  <p>Doha, Doha airport (DOHI)</p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <main class="bg-gray-300 rounded-full p-5"></main>
              <span>Airline name</span>
            </div> -->
            <main class="text-blue-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7rem"
                height="1.7rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3.385 19.385v-1h17.23v1zm1.615-3V7h4.615q0-.98.702-1.683q.702-.702 1.683-.702q.98 0 1.683.702q.702.702.702 1.683H19v9.385zm11.692-1H18V8h-1.308zM10.5 7h3q0-.65-.425-1.075T12 5.5q-.65 0-1.075.425T10.5 7m-3.192 8.385V8H6v7.385zM8.192 8v7.385h7.616V8zm-.884 7.385h.884zm9.384 0h-.884zm-9.384 0H6zm.884 0h7.616zm8.5 0H18z"
                />
              </svg>
              <span
                >2Bags ({{
                  item.outbound_group.flight_segments[0].baggage_kg
                }}
                kg)</span
              >
            </main>
          </div>
      </div>
    </TransitionExpand>
  </main>

  <!-- Mobile -->
  <main
    class="bg-white cursor-pointer rounded-xl lg:hidden flex flex-col w-full h-max px-5 py-3 shadow gap-7"
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
</template>

<script setup>
import { format } from "@formkit/tempo";
const props = defineProps(["data"]);
const isOpen = ref([]);
const isOpen2 = ref([]);
const toggleOpenTicket = (index) => {
  // if (isOpen.value[index]) {
  //   isOpen2.value[index] = !isOpen2.value[index];
  // }
  isOpen.value[index] = !isOpen.value[index];
};
const toggleOpenTicket2 = (index) => {
  // if (isOpen2.value[index]) {
  //   isOpen.value[index] = !isOpen.value[index];
  // }
  isOpen2.value[index] = !isOpen2.value[index];
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

<!-- <div>
          <div class="flex items-center justify-center">
            <div
              class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] -mr-5 rtl:mr-0"
            ></div>
            <div
              class="w-10 h-10 rounded-full border-2 border-white bg-[#D9D9D9] rtl:-mr-5"
            ></div>
          </div>
          <p class="text-xs text-[#938F96]">THR , MHD</p>
        </div> -->
