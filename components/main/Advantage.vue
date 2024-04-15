<template>
    <Auth ref="child"/>
  <div>
    <h3  v-if="locale == 'fa'" class="text-sm leading-[1.5rem] text-center text-black-crs mt-[3.5rem]">
      {{ $t('main.advantage.why') }} <span class="text-orange-crs">  {{ $t('main.advantage.us') }} </span>  {{ $t('main.advantage.chose') }}
    </h3>
    <h3 v-else class="text-sm text-center leading-[1.5rem] text-black-crs mt-[3.5rem]">
      {{ $t('main.advantage.why') }}
      <span class="text-orange-crs">  {{ $t('main.advantage.us') }} </span>
    </h3>
    <h1
      class=" font-km_black text-[3rem] leading-[3.625rem] text-black-crs text-center mt-2"
      style="letter-spacing: -0.03rem"
    >
      <span class="text-orange-crs font-km_black">  {{ $t('main.advantage.CRSTRIP') }} </span>
      {{ $t('main.advantage.advantage') }}
    </h1>
    <p class="leading-[1.75rem] text-[#514037] w-1/2 mx-auto mt-4 text-center">
      {{ $t('main.advantage.description') }}
    </p>
    <div class="flex gap-2 mt-6 justify-center">
      <button      @click="childValue(1)"
        class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] bg-[#307FF8] text-white px-7"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="Diamonds (é»ç³)">
<path id="Vector" d="M6 4H18L22 9L12 21L2 9L6 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M2 9H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M12 21L8 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M12 21L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M4 6.5L2 9L12 21L22 9L20 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg> {{ $t('btn.register') }}
      </button>
      <button
      @click="childValue(2)"
        class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] text-[#307FF8] px-7"
      >
      <svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="2rem" height="2rem" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"></path></g></svg>       {{ $t('btn.login') }}
      </button>
    </div>
    <div
      class="flex gap-4 mt-8 lg:justify-center overflow-auto hideScroll"
    >
      <div
        class="bg-orange-crs text-white rounded-[0.75rem] min-w-[22rem] lg:min-w-0 pt-4 lg:w-[22rem] pb-8 px-5 cursor-pointer"
      >
        <div class="flex justify-between items-center">
          <div
            class="bg-[#FFFFFF33] flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11.4 1.01999C6.62 1.32999 3 5.51999 3 10.31V17C3 18.66 4.34 20 6 20H7C8.1 20 9 19.1 9 18V14C9 12.9 8.1 12 7 12H5V10.29C5 6.44999 7.96 3.10999 11.79 2.99999C15.76 2.88999 19 6.05999 19 9.99999V12H17C15.9 12 15 12.9 15 14V18C15 19.1 15.9 20 17 20H19V21H13C12.45 21 12 21.45 12 22C12 22.55 12.45 23 13 23H18C19.66 23 21 21.66 21 20V9.99999C21 4.82999 16.64 0.67999 11.4 1.01999Z" fill="white"/>
</svg>
          </div>
          <span
            class="opacity-[0.2] text-[3rem] font-km_black leading-[3.5rem] mt-1"
            >01</span
          >
        </div>
        <h3 class="mt-8 font-bold text-lg leading-[2rem] font-km_bold ">  {{ $t('main.advantage.options.op1.title') }}</h3>
        <p class="mt-2  leading-[1.75rem]">
          {{ $t('main.advantage.options.op1.body') }}
        </p>
      </div>
      <div
        class="bg-[#F7F7F9] text-black-crsrounded-[0.75rem] min-w-[22rem] lg:min-w-0 lg:w-[22rem] pt-4 pb-8 px-5 cursor-pointer"
      >
        <div class="flex justify-between items-center">
          <div
            class="bg-[#EEEEF0] flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.5001 6.9C14.2801 6.9 14.9401 7.75 15.0001 9H17.2101C17.1401 7.28 16.0901 5.7 14.0001 5.19V3H11.0001V5.16C10.4701 5.28 9.97006 5.46 9.52006 5.7L10.9901 7.17C11.4001 7 11.9001 6.9 12.5001 6.9ZM5.33006 4.06L4.06006 5.33L7.50006 8.77C7.50006 10.85 9.06006 11.98 11.4101 12.68L14.9201 16.19C14.5801 16.67 13.8701 17.1 12.5001 17.1C10.4401 17.1 9.63006 16.18 9.52006 15H7.32006C7.44006 17.19 9.08006 18.42 11.0001 18.83V21H14.0001V18.85C14.9601 18.67 15.8201 18.3 16.4501 17.73L18.6701 19.95L19.9401 18.68L5.33006 4.06Z" fill="#1C0E07"/>
</svg>
          </div>
          <span
            class="opacity-[0.2] font-km_black text-[3rem] font-black leading-[3.5rem] mt-1 text-[#E1E2E4]"
            >02</span
          >
        </div>
        <h3 class="mt-8 font-bold text-lg leading-[2rem] font-km_bold">{{ $t('main.advantage.options.op2.title') }}</h3>
        <p class="mt-2 leading-[1.75rem]">
          {{ $t('main.advantage.options.op2.body') }}
        </p>
      </div>
      <div
        class="bg-[#F7F7F9] text-black-crsrounded-[0.75rem] min-w-[22rem] lg:min-w-0 lg:w-[22rem] pt-4 pb-8 px-5 cursor-pointer"
      >
        <div class="flex justify-between items-center">
          <div
            class="bg-[#EEEEF0] flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15 9H9V15H15V9ZM13 13H11V11H13V13ZM21 11V9H19V7C19 5.9 18.1 5 17 5H15V3H13V5H11V3H9V5H7C5.9 5 5 5.9 5 7V9H3V11H5V13H3V15H5V17C5 18.1 5.9 19 7 19H9V21H11V19H13V21H15V19H17C18.1 19 19 18.1 19 17V15H21V13H19V11H21ZM17 17H7V7H17V17Z" fill="#1C0E07"/>
</svg>
          </div>
          <span
            class="opacity-[0.2] font-km_black text-[3rem] font-black leading-[3.5rem] text-[#E1E2E4] mt-1"
            >03</span
          >
        </div>
        <h3 class="mt-8 font-bold text-lg leading-[2rem] font-km_bold">{{ $t('main.advantage.options.op3.title') }}</h3>
        <p class="mt-2 leading-[1.75rem]">
          {{ $t('main.advantage.options.op3.body') }}
        </p>
      </div>
      <div
        class="bg-[#F7F7F9] text-black-crsrounded-[0.75rem] min-w-[22rem] lg:min-w-0 lg:w-[22rem] pt-4 pb-8 px-5 cursor-pointer"
      >
        <div class="flex justify-between items-center">
          <div
            class="bg-[#EEEEF0] flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM12 18C9.72 18 7.78 16.34 7 14H17C16.22 16.34 14.28 18 12 18ZM15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11Z" fill="#1C0E07"/>
</svg>
          </div>
          <span
            class="opacity-[0.2] text-[#E1E2E4] text-[3rem] font-black font-km_black leading-[3.5rem] mt-1"
            >04</span
          >
        </div>
        <h3 class="mt-8 font-bold text-lg leading-[2rem] font-km_bold">{{ $t('main.advantage.options.op4.title') }}</h3>
        <p class="mt-2 leading-[1.75rem]">
          {{ $t('main.advantage.options.op4.body') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const child = ref(null);
const {locale} = useI18n();

const childValue = (step) => {
  child.value.handleShowAuth(step)
}
</script>