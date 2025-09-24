<template>
  <div class="container">
    <h2 class="text-light align-items-center text-center mb-5">
      Racconta la tua esperienza
    </h2>

    <div class="row g-4">
      <div class="col-12 col-md-6">
        <FormSuggestion :plantId="plantId" class="w-100 text-light" />
      </div>

      <div class="col-12 col-md-6">
        <div v-if="suggestions && suggestions.length">
          <ul class="list-group mb-3">
            <li
              v-for="(suggestion, idx) in suggestions"
              :key="idx"
              class="commento rounded mt-2 p-3"
              style="background-color: var(--secondo)"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{{ suggestion.author }}</strong>
                  <span class="ms-2">{{
                    "☘".repeat(suggestion.experience)
                  }}</span>
                </div>
                <small>{{ suggestion.date }}</small>
              </div>
              <p class="mb-0 mt-2">{{ suggestion.text }}</p>
            </li>
          </ul>
        </div>
        <div v-else class="p-5 mb-3 text-light rounded">
          Ancora nessun consiglio dalla community
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormSuggestion from "./SuggestionsFrom.vue";
export default {
  name: "SuggestionPlant",
  components: { FormSuggestion },
  props: {
    plantId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    suggestions() {
      return this.$store.state.suggestions &&
        this.$store.state.suggestions[this.plantId]
        ? this.$store.state.suggestions[this.plantId]
        : [];
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 200%;
}
</style>
