<template>
  <div class="gallery">
    <PlantCard v-for="plant in plants" :key="plant.id" plant="plant" />
  </div>
</template>

<script>
import PlantCard from "@/components/PlantCard/PlantCard";
export default {
  name: 'Gallery',
  props: [
    'plants'
  ],
  components: [
      PlantCard
  ]
  // computed() {
  //   return this.plants[Math.floor(Math.random()*this.plants.length)].id;
  // },
  // mounted() {
  //   this.plant = this.plants[Math.floor(Math.random()*this.plants.length)];
  // }
};
</script>