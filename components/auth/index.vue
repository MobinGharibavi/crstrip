<template>
  <Body :class="{ 'overflow-hidden': showAuth }">
    <Transition name="fade">
      <div
        v-if="showAuth"
        @click.self="showAuth = false"
        class="fixed left-0 top-0 w-full h-full bg-[#00000040] z-[10] flex items-center justify-center break-words"
      >
        <div
          class="lg:w-[451px] relative bg-white lg:rounded-[1rem] py-6 px-10 w-full h-full lg:h-max flex-col flex justify-center lg:pb-5 lg:py-5"
        >
          <div
            class="absolute top-0 left-0 w-full flex items-center px-4 gap-2 py-4 text-[#1C0E07] font-bold text-xl border-b-[0.25rem] lg:hidden"
          >
            <Icon @click="showAuth = false" class="cursor-pointer" name="eva:arrow-back-outline" />
            <span class="pt-0.5">{{ $t("main.auth.navBar") }}</span>
          </div>
          <!-- <button
          @click="showAuth = false"
            class="absolute top-0 left-0 p-5 text-[#1C0E07] lg:hidden"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2"/></svg>
          </button> -->
          <h1
            v-if="step == 1"
            class="text-[2rem] mt-16 lg:mt-0 font-km_bold font-bold leading-[3.5rem] text-[#1C0E07] text-center"
          >
            {{ $t("main.auth.register.title") }}
          </h1>
          <h1
            v-if="step == 2"
            class="text-[2rem] font-km_bold leading-[3.5rem] text-[#1C0E07] text-center"
          >
            {{ $t("main.auth.login.title") }}
          </h1>
          <h2 class="text-[#5B4A42] leading-[1.75rem] text-center">
            {{ $t("main.auth.welcome") }}
            <span class="text-orange-crs"> {{ $t("main.auth.CRS") }} </span>
          </h2>
          <div
            class="flex p-1 py-2 bg-[#F7F7F9] rounded-[0.5rem] text-xs text-[#514037] w-[13.25rem] mx-auto mt-4"
          >
            <button
              @click="step = 1"
              :class="{
                ' rounded-[0.5rem] text-orange-crs bg-white': step == 1,
              }"
              class="w-1/2 py-2 flex text-[12px] items-center justify-center rounded-[0.5rem]"
            >
              {{ $t("main.auth.register.title") }}
            </button>
            <button
              @click="step = 2"
              :class="{
                ' rounded-[0.5rem] text-orange-crs bg-white': step == 2,
              }"
              class="w-1/2 py-2 text-[12px] flex items-center justify-center"
            >
              {{ $t("main.auth.login.title") }}
            </button>
          </div>

          <AuthRegister @step="(n) => (step = n)" v-if="step == 1" />
          <AuthLogin @step="(n) => (step = n)" v-if="step == 2" />
        </div>
      </div>
    </Transition>
  </Body>
</template>

<script setup>
const showAuth = ref(false);
const step = ref(1);
const handleShowAuth = (number) => {
  showAuth.value = true;
  step.value = number;
};

defineExpose({
  handleShowAuth,
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
