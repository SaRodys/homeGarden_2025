<template>
  <main>
    <div
      class="car-hero position-relative text-white w-100"
      style="height: 500px; min-height: 300px"
    >
      <Carousel :plantDetail="plantView" class="w-100 h-100" />

      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end align-items-center bg-green-gradient"
      >
        <Title :plantDetail="plantView" class="fs-1 fw-bold m-5" />
      </div>
    </div>

    <div class="container" style="margin-top: 8rem">
      <div v-if="plantView">
        <div class="row mt-5 text-center g-4 m-5">
          <div class="col-12 col-lg-4 d-flex justify-content-center">
            <div class="p-5 informazioni rounded text-white w-100">
              <plantDescription :plantDetail="plantView" />
            </div>
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-center">
            <div
              class="p-1 pt-5 informazioni rounded w-100 d-flex align-items-center justify-content-center"
            >
              <plantData :plantDetail="plantView" />
            </div>
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-center">
            <div
              class="p-5 text-white informazioni rounded w-100 d-flex align-items-center justify-content-center"
            >
              <addGarden :selectedPlant="plantView" />
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12" style="margin-top: 10rem">
            <Suggestions :plantId="plantView.id" />
          </div>
        </div>

        <div class="row m-5">
          <div class="col-12 text-center">
            <router-link :to="{ name: 'catalogo' }">
              <button class="rounded p-3 bottone mt-5">Torna alla serra</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import plantData from "@/components/PlantData.vue";
import Suggestions from "@/components/SuggestionsBox.vue";
import Title from "@/components/Title.vue";
import plantDescription from "@/components/PlantDescription.vue";
import addGarden from "@/components/AddToGarden.vue";

export default {
  components: {
    Carousel,
    plantData,
    Suggestions,
    Title,
    plantDescription,
    addGarden,
  },
  props: ["id"],
  computed: {
    plantView() {
      return this.$store.getters.arrayPlants.find((p) => p.id == this.id);
    },
  },
};
</script>
