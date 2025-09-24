<template>
  <div class="decorazione position-relative">
    <figure class="card-figure mt-5 rounded position-relative">
      <router-link
        :to="{ name: 'pagina-product', params: { id: plantInGarden.id } }"
        class="p-5"
      >
        <img
          :src="plantInGarden.image"
          :alt="plantInGarden.product"
          class="card-image"
        />
        <figcaption>
          <h5>{{ plantInGarden.product }}</h5>
        </figcaption>
      </router-link>
    </figure>
    <div class="row mt-3 px-3">
      <div
        v-if="plantInGarden.quantity >= 1"
        class="col-2 rimuovi2 rounded p-2"
      >
        {{ plantInGarden.quantity }}
      </div>
      <div class="col-10">
        <button class="rimuovi rounded w-100 p-2" @click="$emit('remove')">
          Rimuovi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userGarden",
  props: {
    plantInGarden: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h5 {
  color: var(--text);
  font-size: 150%;
}

* {
  text-decoration: none;
}
</style>
