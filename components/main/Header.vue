<template>
    <Auth ref="child"/>
  <div
    class="bg-[#FFF3EC] rounded-2xl flex justify-between items-center flex-col lg:flex-row text-center lg:text-start"
  >
    <div class="lg:px-10 pt-6 lg:pt-0 px-4">
      <h3 class="text-sm leading-[1.5rem] text-black-crs">
        {{ $t('main.header.welcome') }}
        <span class="text-orange-crs"> {{ $t('main.header.welCRS') }} </span>
      </h3>
      <h1
      v-if="!(locale == 'ar')"
        class="lg:text-[3rem] font-km_black font-bold lg:leading-[3.625rem] mt-2 text-[48px] leading-[3rem]"
        style="letter-spacing: -0.03rem"
      >
      {{ $t('main.header.whereThe') }}
        <span class="text-orange-crs font-km_bold font-bold">  {{ $t('main.header.Journey') }} </span>
        {{ $t('main.header.Begins_and') }}
        <span class="text-orange-crs font-km_bold font-bold">     {{ $t('main.header.Memories') }} </span>
        {{ $t('main.header.made') }}
      </h1>
      <h1
      v-else
        class="lg:text-[3rem] font-km_black font-bold lg:leading-[3.625rem] mt-2 text-[48px] leading-[4.5rem]"
        style="letter-spacing: -0.03rem"
      >
      {{ $t('main.header.whereThe') }}
        <span class="text-orange-crs font-km_bold font-bold">  {{ $t('main.header.Journey') }} </span>
        {{ $t('main.header.Begins_and') }}
        <span class="text-orange-crs font-km_bold font-bold">     {{ $t('main.header.Memories') }} </span>
      </h1>
      <p class="text-[#514037] leading-[1.75rem] mt-6">
        {{ $t('main.header.description') }}
      </p>
      <div class="flex gap-2 mt-6 justify-center lg:justify-start">
        <button
        @click="childValue(1)"
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
</svg>         {{ $t('btn.register') }}
        </button>
        <button @click="childValue(2)"
          class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] text-[#307FF8] px-7"
        >
        <svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="2rem" height="2rem" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"></path></g></svg> {{ $t('btn.login') }}
        </button>
      </div>
    </div>
    <img class="lg:w-1/2 my-[3rem] mx-4 w-full" src="/img/Header.png" alt="" />
  </div>
</template>


<script setup>
const child = ref(null);
const {locale} = useI18n()
const childValue = (step) => {
  child.value.handleShowAuth(step)
}
</script>