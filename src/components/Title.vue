<template>
  <div v-if="plantDetail" class="text-center">
    <h1 class="fs-1 fw-bold mb-0 pb-0">
      {{ plantDetail.product }}
    </h1>
    <h4 class="fs-4 mb-0 pb-4">
      {{ plantDetail.type }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "TitlePlant",
  props: {
    plantDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>
