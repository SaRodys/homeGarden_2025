<template>
  <main>
    <div class="container mt-5">
      <h1>Il tuo giardino</h1>
      <h4 class="mt-3">
        Qui trovi le piante che hai aggiunto al tuo giardino, cliccando sulla
        scheda di ognuna potrai vederne le informazioni per prendertene cura al
        meglio.
      </h4>
      <div class="row">
        <userGarden
          v-for="(plant, index) in garden"
          :key="index"
          :plantInGarden="plant"
          class="col-md-3 mb-4"
          @remove="removeGarden(index)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import userGarden from "@/components/UserGarden.vue";

export default {
  components: {
    userGarden,
  },
  computed: {
    garden() {
      return this.$store.getters.garden;
    },
  },
  methods: {
    removeGarden(index) {
      this.$store.commit("REMOVE_FROM_GARDEN", index);
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--text);
  margin-top: 25%;
}

@media only screen and (min-width: 768px) {
  h1 {
    margin-top: 15%;
  }
}

@media only screen and (min-width: 992px) {
  h1 {
    margin-top: 10%;
  }
}
</style>
