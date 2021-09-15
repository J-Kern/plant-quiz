<template>
  <TheHeader />
  <div class="min-h-full w-screen ">
    <div class="container mx-auto mt-8 bg-gray-100 rounded-3xl">
      <router-view v-bind:plants="this.$data._data.plants"/>
    </div>
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
    return {
      _data: staticData
    }
  },
  mounted() {
    console.log(staticData);
    console.log(this.$data._data);
  }
}
</script>

<style>
#app {
  background-image: url('./assets/bg.jpg');
  @apply min-h-screen w-screen bg-cover bg-center bg-fixed relative
}
nav .router-link-active {
  @apply bg-green-600 text-green-200 transition-all duration-300 !important
}
</style>
