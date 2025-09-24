<template>
  <div v-if="selectedPlant">
    <p>
      Se nel tuo giardino hai un bellissimo esemplare di
      <span class="fw-bold">{{ selectedPlant.product }}</span
      >, clicca il tasto qui sotto e aggiungilo al tuo spazio personale.
    </p>
    <button class="rounded mt-3 bottone" @click="addToGarden">
      Aggiungi al tuo giardino
    </button>

    <div class="overlay" v-if="showCustomAlert">
      <div class="custom-alert">
        <h1>Aggiunta completata!</h1>
        <p>{{ selectedPlant.product }} è stata aggiunta al tuo giardino.</p>
        <button
          class="rounded"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          @click="closeAlert"
          :style="{
            backgroundColor: hover ? 'var(--primo)' : 'var(--quarto)',
            color: 'white',
          }"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addToGarden",
  props: {
    selectedPlant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showCustomAlert: false,
      hover: false,
    };
  },
  methods: {
    addToGarden() {
      this.$store.dispatch("addGarden", this.selectedPlant);
      this.showCustomAlert = true;
    },
    closeAlert() {
      this.showCustomAlert = false;
    },
  },
};
</script>
