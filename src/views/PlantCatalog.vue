<template>
  <main>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-3 mt-5">
        <h1 class="text-light mt-5">Piante in serra</h1>
      </div>
      <div class="row mb-5">
        <h6 class="col-md-8 text-light">
          Scegli la pianta che vuoi aggiungere al tuo giardino personale oppure
          per cui vuoi leggere le informazioni per la cura
        </h6>
        <div class="col-md-4 mt-3 mt-md-0">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cerca una pianta..."
            class="form-control"
          />
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-3 mb-4"
          v-for="plant in filterPlants"
          :key="plant.id"
        >
          <PlantsCard :plantProps="plant" class="card mb-5" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PlantsCard from "@/components/PlantCards.vue";

export default {
  components: { PlantsCard },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    arrayPlants() {
      return this.$store.getters.arrayPlants;
    },
    filterPlants() {
      return this.arrayPlants.filter((searchPlant) =>
        searchPlant.product
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {},
  created() {
    if (!this.$store.getters.arrayPlants.length) {
      this.$store.dispatch("dbPlants");
    }
  },
};
</script>
