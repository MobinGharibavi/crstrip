<template>
  <div>
    <SearchMainHeader />
    <SearchMainFilter />
    <SearchMainVisa />
    <SearchMainFAQ />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "search",
  middleware: 'guest'
});
</script>
