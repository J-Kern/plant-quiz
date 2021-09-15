<template>
  <div class="wrapper mx-16 my-4 bg-transparent antialiased text-gray-900 group">
    <img :src="fetchImage(plant.images)" alt="{{ plant.germanName }}"
         class="w-full z-auto h-350 w-350 object-cover object-center rounded-lg shadow-none group-hover:shadow-sm transition-all">

    <div class="relative px-4 -mt-16 group-hover:-mt-4 transition-all duration-300">
      <div class="bg-white p-6 rounded-lg shadow-md group-hover:shadow-2xl transition-all">
        <h4 class="mt-1 text-xl font-semibold leading-tight truncate">{{ plant.germanName }}</h4>
        <div class="mt-1 text-gray-600 text-sm">{{ plant.latinName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlantCard",
  props: ['plant'],
  methods: {
    fetchImage(imgNames) {
      if (imgNames !== null) {
        console.log(imgNames[0]);
        let imgName = imgNames[0] || this.getDefaultPicture();
        return require(`@/assets/images/plants/` + imgName);
      }
    },
    getDefaultPicture() {
      return 'logo.png';
    }
  }
}
</script>

<style scoped>

</style>