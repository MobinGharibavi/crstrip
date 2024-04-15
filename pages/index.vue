<template>
  <div>
    <MainHeader />
    <MainAdvantage />
    <MainMobile />
    <MainPartners />
    <MainFeatures />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

