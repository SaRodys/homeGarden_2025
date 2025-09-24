<template>
  <div class="elemento bg-transparent">
    <router-link
      :to="{ name: 'pagina-product', params: { id: plantProps.id } }"
      class="decorazione"
    >
      <figure class="card-figure rounded">
        <div class="title-mobile rounded p-2">
          <h5>{{ plantProps.product }}</h5>
        </div>

        <img
          :src="plantProps.image"
          :alt="plantProps.product"
          class="card-img"
        />
        <figcaption>
          <h5>{{ plantProps.product }}</h5>
          <h4>{{ plantProps.type }}</h4>
        </figcaption>
      </figure>
    </router-link>

    <button class="rounded mt-3 bottone w-100" @click="addToGarden">
      Aggiungi al tuo giardino
    </button>
  </div>

  <div class="overlay" v-if="showCustomAlert">
    <div class="custom-alert">
      <h1>Aggiunta completata!</h1>
      <p>{{ plantProps.product }} è stata aggiunta al tuo giardino.</p>
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
</template>

<script>
export default {
  props: {
    plantProps: Object,
  },
  data() {
    return {
      showCustomAlert: false,
      hover: false,
    };
  },
  methods: {
    addToGarden() {
      this.$store.dispatch("addGarden", this.plantProps);
      this.showCustomAlert = true;
    },
    closeAlert() {
      this.showCustomAlert = false;
    },
  },
};
</script>
