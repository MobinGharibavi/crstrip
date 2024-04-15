<template>
  <div class="border-t bg-orange-200">
    <footer
      class="max-w-7xl mx-auto w-full py-1 pb-5 flex flex-col lg:flex-row items-center justify-between"
    >
      <div
        class="flex flex-col items-center lg:items-start justify-center gap-8"
      >
        <div class="flex flex-col items-center lg:items-start gap-2">
          <h5 class="text-orange-crs text-3xl font-bold">
            {{ $t("footer.title") }}
          </h5>
          <p>{{ $t("footer.subTitle") }}</p>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3">
          <div class="flex gap-4 items-center">
            <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
              <Icon name="mdi:instagram" size="2rem" />
            </NuxtLink>
            <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
              <Icon name="mingcute:telegram-fill" size="2rem" />
            </NuxtLink>
            <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
              <Icon name="ic:baseline-whatsapp" size="2rem" />
            </NuxtLink>
          </div>

          <p class="font-bold hidden lg:inline">
            <span class="text-orange-crs">CRSTRIP</span>.COM
          </p>
        </div>
      </div>

      <div
        class="lg:flex grid grid-cols-2 gap-y-5 lg:gap-y-0 w-full justify-between lg:w-2/3 px-5 lg:px-0 py-10"
      >
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("search.footer.title.call_info") }}
          </h4>
          <ul class="flex flex-col justify-between lg:justify-start lg:gap-3">
            <div class="flex items-center gap-3">
              <p>CrsTrip.com@gmail.com</p>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="mage:phone-call" />
              <p class="rtl:flex-row-reverse flex gap-2">
                <span class="flex rtl:flex-row-reverse"><span>+</span>964</span
                ><span>780</span><span>814</span>
                <span>3063</span>
              </p>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="mingcute:location-fill" />
              <p>Najaf, Iraq</p>
            </div>
          </ul>
        </main>
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("search.footer.title.roadmap") }}
          </h4>

          <ul class="flex flex-col justify-between lg:justify-start lg:gap-3">
            <li>{{ $t("search.footer.call_info.charge") }}</li>
            <li>{{ $t("search.footer.call_info.call") }}</li>
            <li>{{ $t("search.footer.call_info.ticket") }}</li>
          </ul>
        </main>
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("search.footer.title.site_info") }}
          </h4>
          <div class="flex gap-5">
            <ul class="flex flex-col justify-between lg:justify-start lg:gap-3">
              <li>{{ $t("search.footer.site_info.op1") }}</li>
              <li>{{ $t("search.footer.site_info.op2") }}</li>
              <li>{{ $t("search.footer.site_info.op3") }}</li>
            </ul>
          </div>
        </main>
      </div>
      <p class="font-bold lg:hidden">
        <span class="text-orange-crs">CRSTRIP</span>.COM
      </p>
    </footer>
  </div>
  <div
    class="flex rtl:flex-row-reverse rtl:text-end bg-white items-center justify-center gap-2 py-5 w-full"
  >
    <Icon name="ic:baseline-copyright" />
    <p class="text-sm lg:text-center text-wrap text-[#1D1B20]">
      {{ $t("search.footer.copyright") }}
    </p>
  </div>
</template>

<script setup></script>
