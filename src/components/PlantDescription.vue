<template>
  <div v-if="plantDetail">
    <p class="mb-2">{{ plantDetail.description }}</p>
  </div>
</template>

<script>
export default {
  name: "PlantDescription",
  props: {
    plantDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>
