<template>
  <form @submit.prevent="sendSuggestion" class="p-5 informazioni rounded">
    <h4 class="mb-3">Che consigli daresti per la cura di questa pianta?</h4>
    <p>
      Hai acquistato o provato a curare un esemplare di questa pianta? Scrivi la
      tua esperienza e aiuta altri appassionati come te a curare al meglio il
      prorpio giardino!
    </p>
    <div>
      <label class="form-label">Il tuo nome</label>
      <input
        v-model="author"
        class="form-control bg-transparent text-light"
        required
      />
    </div>
    <div class="mb-2">
      <label class="form-label"
        >Il tuo livello (1 principiante - 5 esperto)</label
      >
      <select v-model.number="experience" class="form-select formText" required>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} ☘</option>
      </select>
    </div>
    <div class="mb-2">
      <label class="form-label">Racconta com'è andata</label>
      <textarea
        v-model="text"
        class="form-control bg-transparent text-light"
        rows="2"
        required
      ></textarea>
    </div>
    <button type="submit" class="bottone rounded m-2">Invia</button>
  </form>
</template>

<script>
export default {
  name: "SuggestionsPlant",
  props: {
    plantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      author: "",
      experience: 5,
      text: "",
    };
  },
  methods: {
    sendSuggestion() {
      const suggestion = {
        author: this.author,
        experience: this.experience,
        text: this.text,
        date: new Date().toLocaleDateString(),
      };
      this.$store.dispatch("addSuggestion", {
        plantId: this.plantId,
        suggestion,
      });
      this.author = "";
      this.experience = 5;
      this.text = "";
    },
  },
};
</script>
