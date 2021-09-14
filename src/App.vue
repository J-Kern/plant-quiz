<template>
  <TheHeader />
  <div class="min-h-full w-full">
    <router-view :key="this.staticData" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";

const staticData = require("@/data");
export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return staticData
  }
}
</script>

<style>
#app {
  background-image: url('./assets/bg.jpg');
  @apply min-h-screen w-screen bg-cover bg-center
}
nav .router-link-active {
  @apply bg-green-600 text-green-200 transition-all duration-300 !important
}
</style>
