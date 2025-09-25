<template>
  <form class="row g-4" @submit.prevent="submitPlant">
    <div class="col-md-6">
      <label class="form-label text-light" for="product">Nome</label>
      <input
        v-model="plant.product"
        class="form-control campoForm"
        id="product"
        required
      />
    </div>
    <div class="col-md-6">
      <label class="form-label text-light" for="tipologia">Tipologia</label>
      <input
        v-model="plant.type"
        class="form-control campoForm"
        id="tipologia"
        required
      />
    </div>
    <div class="col-12">
      <label class="form-label text-light" for="descrizione">Descrizione</label>
      <div class="form-floating">
        <input
          v-model="plant.description"
          class="form-control campoForm"
          id="descrizione"
        />
      </div>
    </div>
    <div class="row g-3 ms-1">
      <div class="col-12 col-sm-6 col-md-6">
        <label class="form-label text-light" for="umidita"
          >Umidità richiesta</label
        >
        <div class="form-floating bg-transparent">
          <select
            v-model="plant.humidity"
            id="umidita"
            class="form-select selectForm text-light campoForm"
          >
            <option value="80">Sopra il 70%</option>
            <option value="50">Tra il 40 e il 70%</option>
            <option value="30">Sotto il 40%</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6">
        <label for="innaffiatura" class="form-label text-light"
          >Innaffiatura</label
        >
        <input
          type="text"
          v-model="plant.watering"
          class="form-control campoForm"
          id="innaffiatura"
          style="border: none"
          maxlength="50"
        />
      </div>
    </div>
    <div class="row g-3 ms-1">
      <div class="col-12 col-sm-6 col-md-6">
        <label class="form-label mb-2 text-light">Esposizione al sole</label>
        <div
          class="p-3 d-flex flex-column justify-content-center campoForm rounded text-light"
        >
          <div class="form-check form-switch">
            <input
              class="form-check-input bg-quarto"
              type="checkbox"
              v-model="plant.sun"
              id="soleSwitch"
            />
            <label class="form-check-label" for="sunSwitch">
              {{ plant.sun ? "Sì" : "No" }}
            </label>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6">
        <label for="prezzo" class="form-label text-light"
          >Fascia di prezzo</label
        >
        <div class="form-floating bg-transparent">
          <select
            v-model="plant.price"
            id="prezzo"
            class="form-select selectForm text-light campoForm"
          >
            <option value="50">Sopra i 50€</option>
            <option value="30">Tra i 30 e i 50€</option>
            <option value="10">Tra i 10 e i 30€</option>
            <option value="9">Sotto i 10€</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-12 text-end">
      <button type="submit" class="px-4 rounded p-3 bottone">Aggiungi</button>
    </div>
  </form>

  <div class="overlay" v-if="showCustomAlert">
    <div class="custom-alert">
      <h1>Aggiunta completata!</h1>
      <p>{{ lastAdded.product }} è stata aggiunta alla serra.</p>
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
  data() {
    return {
      plant: {
        id: Date.now(),
        product: "",
        type: "",
        description: "",
        image: "",
      },
      hover: false,
      showCustomAlert: false,
      lastAdded: {},
    };
  },
  methods: {
    async submitPlant() {
      const plantToAdd = {
        ...this.plant,
        id: Date.now(),
        image:
          "https://img.freepik.com/free-vector/botanic-herbs-wild-flowers-vintage-style_23-2148356390.jpg?semt=ais_hybrid&w=740&q=80",
      };
      await this.$store.dispatch("addPlant", plantToAdd);
      this.lastAdded = plantToAdd;
      this.showCustomAlert = true;
      this.plant = {
        id: Date.now(),
        product: "",
        type: "",
        description: "",
        image: "",
      };
    },
    closeAlert() {
      this.showCustomAlert = false;
      this.$router.push({ name: "catalogo" });
    },
  },
};
</script>
