<template>
  <Auth ref="child"/>
  <div
    class="bg-[#FFF3EC] rounded-[1rem] flex justify-between items-center mt-[3.5rem] flex-col-reverse lg:text-start lg:flex-row text-center"
  >
    <img
      class="lg:w-1/2 my-[3rem] mx-4 w-full"
      src="/img/mobile.png"
      alt=""
    />
    <div class="lg:px-10 lg:pt-0 pt-6 px-4">
      <h3 class="text-sm leading-[1.5rem] text-black-crs">
        <span class="text-orange-crs"> {{ $t('main.mobile.CRSTRIP') }} </span>
        {{ $t('main.mobile.on') }}
      </h3>
      <h1
        class="lg:text-[3rem] font-km_black lg:leading-[3.625rem] font-black mt-2 text-4xl leading-[3rem]"
        style="letter-spacing: -0.03rem"
      >
      {{ $t('main.mobile.with') }}
        <span class="text-orange-crs font-km_black"> {{ $t('main.mobile.version') }} </span>
        , {{ $t('main.mobile.we_can') }}
        <span class="text-orange-crs font-km_black"> {{ $t('main.mobile.easy') }} </span>
         {{ $t('main.mobile.reserve') }}
      </h1>
      <p class="text-[#514037] leading-[1.75rem] mt-6">
        {{ $t('main.mobile.description') }}
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
</svg> {{ $t('btn.register') }}
        </button>
        <button
        @click="childValue(2)"
          class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] text-[#307FF8] px-7 "
        >
        <svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2rem" height="2rem" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"></path></g></svg> {{ $t('btn.login') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const child = ref(null);

const childValue = (step) => {
  child.value.handleShowAuth(step)
}
</script>