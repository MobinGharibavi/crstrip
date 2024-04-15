<template>
  <Transition name="modal-animation">
    <div
      class="flex justify-center z-50 items-center h-screen w-screen fixed top-0 left-0 bg-black/50"
      v-show="modalActive"
      @click.self="close"
    >
      <Transition name="modal-animation-inner">
        <div
          class="relative max-w-2xl w-4/5 shadow bg-gray-100 rounded-xl pt-16 overflow-hidden"
          v-show="modalActive"
        >
          <!-- icon -->
          <div
            @click="close"
            class="absolute top-4 right-4 text-xl cursor-pointer hover:text-pink-600 transition-all hover:transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            </svg>
          </div>
          <!-- modal content -->
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps(["modalActive"]);
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
  document.querySelector("body").classList.remove("overflow-hidden");
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
</style>
