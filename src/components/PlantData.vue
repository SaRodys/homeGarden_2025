<template>
  <div v-if="plantDetail" class="w-100 h-100">
    <ul class="list-group list-group-flush">
      <li class="list-group-item info-row bg-transparent">
        <span class="label">Fascia di prezzo</span>
        <span class="value">
          <span v-if="plantDetail.price >= 50" class="notes badge text-dark"
            >Alto</span
          >
          <span
            v-else-if="plantDetail.price >= 30"
            class="notes badge text-dark"
            >Medio-alto</span
          >
          <span
            v-else-if="plantDetail.price >= 10"
            class="notes badge text-dark"
            >Medio-basso</span
          >
          <span v-else class="notes badge text-dark">Basso</span>
        </span>
      </li>

      <li class="list-group-item info-row bg-transparent">
        <span class="label">Frequenza innaffiatura</span>
        <span class="value notes badge text-dark">{{
          plantDetail.watering
        }}</span>
      </li>

      <li class="list-group-item info-row bg-transparent">
        <span class="label">Umidità richiesta</span>
        <span class="value">
          <span v-if="plantDetail.humidity >= 70" class="notes badge text-dark"
            >Molto alta</span
          >
          <span
            v-else-if="plantDetail.humidity > 40"
            class="notes badge text-dark"
            >Media</span
          >
          <span v-else class="notes badge text-dark">Bassa</span>
        </span>
      </li>

      <li class="list-group-item info-row bg-transparent">
        <span class="label">Esposizione al sole</span>
        <span class="value">
          <span v-if="plantDetail.sun" class="notes badge text-dark">Sì</span>
          <span v-else class="notes badge text-dark">No</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlantData",
  props: { plantDetail: { type: Object, required: true } },
};
</script>

<style scoped>
.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-bottom: 8px;
}

/* Mobile: etichetta sopra valore */
@media (max-width: 768px) {
  .info-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .info-row .value {
    margin-top: 4px;
  }
}
</style>
