<template>
  <div class="container flex flex-wrap items-center justify-center">
    <div v-for="plant in plants" :key="plant.id">
      <PlantCard class="plant-card" :plant="plant" />
    </div>
  </div>
</template>

<script>
import PlantCard from "@/components/PlantCard/PlantCard";
const _plants = require("@/data/plants");
export default {
  name: 'Gallery',
  props: {
    plants: {
      type: Object,
    }
  },
  components: {
      PlantCard
  }
};
</script>

<style scoped>
  .plant-card {
    @apply max-w-xs mx-8 my-12
  }
</style>