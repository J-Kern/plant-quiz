<template>
  <div class="wrapper mx-16 my-6 bg-transparent antialiased text-gray-900 group">
    <div class="relative w-full z-auto h-350 w-350 object-cover object-center rounded-lg transition-all">
      <img :src="fetchImage(plant.images)" alt="{{ plant.germanName }}"
           class="w-full z-auto h-350 w-350 object-cover object-center rounded-lg shadow-none group-hover:shadow-md transition-all">
      <button @click.prevent class="absolute h-0 w-0 group-hover:w-[32px] group-hover:h-[32px] top-0 right-0 p-0.5 bg-white bg-glass-morphic rounded-bl-md rounded-tr-lg transition-all ease-out delay-300">
        <img class="text-white" src="@/assets/icons/maximize.svg" alt="">
      </button>
      <transition name="modal">
        <ImageModal v-if="showModal" @close="showModal = false">
          <!--
            you can use custom content here to overwrite
            default content
          -->
          <template v-slot:header>
            <h3>custom header</h3>
          </template>
        </ImageModal>
      </transition>
    </div>
    <div class="relative px-4 -mt-16 group-hover:-mt-4 transition-all duration-300">
      <div class="bg-white p-6 rounded-lg shadow-md group-hover:shadow-2xl transition-all">
        <h4 class="mt-1 text-xl text-meridian-gradient font-semibold leading-tight truncate">{{ plant.optionalGermanPrefix || '' }}{{ plant.germanName }}</h4>
        <div class="mt-1 text-gray-600 text-sm">{{ plant.latinName }}{{ plant.optionalLatinSuffix || '' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from "@/components/ImageModal/ImageModal";
export default {
  name: "PlantCard",
  props: ['plant'],
  data() {
    return {
      showModal: false
    }
  },
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
  },
  components: {
    ImageModal
  }
}
</script>

<style scoped>
/*.cls-1 {
  fill: none;
}*/
</style>