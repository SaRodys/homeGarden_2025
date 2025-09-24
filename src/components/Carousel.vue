<template>
  <div
    v-if="images.length"
    id="FotoCarosello"
    class="carousel car-hero-bg rounded"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-inner rounded shadow">
      <div
        v-for="(img, idx) in images"
        :key="idx"
        :class="['carousel-item', { active: idx === 0 }]"
      >
        <img
          :src="img"
          class="d-block w-100"
          :alt="`Plant image ${idx + 1}`"
          style="object-fit: cover; height: 30rem"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#FotoCarosello"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Indietro</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#FotoCarosello"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Avanti</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BackgroundImg",
  props: {
    plantDetail: {
      type: Object,
      required: true,
    },
  },
  computed: {
    images() {
      if (
        Array.isArray(this.plantDetail.additional_images) &&
        this.plantDetail.additional_images.length
      ) {
        return this.plantDetail.additional_images;
      }
      return [
        this.plantDetail.image,
        "https://img.freepik.com/free-vector/botanic-herbs-wild-flowers-vintage-style_23-2148356390.jpg?semt=ais_hybrid&w=740&q=80",
      ];
    },
  },
};
</script>
