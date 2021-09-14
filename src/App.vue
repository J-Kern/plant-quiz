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
#app{
  background-image: url('./assets/bg.jpg');
  @apply min-h-screen bg-cover bg-center
}
.glass-morphism {
  @apply bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg
}
.primary-button {
  @apply text-transparent bg-clip-text bg-gradient-to-r from-meridian-start to-meridian-end
}
</style>
