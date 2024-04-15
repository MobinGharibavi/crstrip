<template>
  <div>
    <h2
      class="text-[3rem] font-black text-[#1C0E07] text-center leading-[3.625rem] mt-5 flex justify-center gap-3 rtl:flex-row-reverse"
      style="letter-spacing: -0.03rem"
    >
      <span class="text-orange font-km_black"> {{ $t('main.partners.our') }} </span>
      <span class="font-km_black">{{ $t('main.partners.partners') }} </span>
    </h2>
    <p
      class="mt-4 leading-[1.75rem] text-[#514037] text-center max-w-[30rem] mx-auto"
    >
    {{ $t('main.partners.description') }}
    </p>
    <div class="w-full mt-3 overflow-auto hideScroll">
      <div
        class="opacity-50 flex lg:justify-center items-center gap-6 md:gap-12"
      >
        <img class="h-[4.5rem]" src="/img/amadeus.png" alt="amadeus" /><img
          class="h-[2.5rem]"
          src="/img/sabre.png"
          alt="sabre"
        /><img class="h-[5rem]" src="/img/giata.png" alt="giata" /><img
          class="h-[4.5rem]"
          src="/img/iata.png"
          alt="iata"
        /><img
          class="h-[4.375rem]"
          src="/img/travelvision.png"
          alt="travelvision"
        /><img class="h-[5rem]" src="/img/iranair.png" alt="iranair" />
      </div>
    </div>
  </div>
</template>
