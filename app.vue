<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();
onMounted(() => {
  setLocale("en");
});
</script>