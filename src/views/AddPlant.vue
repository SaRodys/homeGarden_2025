<template>
  <main class="py-5">
    <div class="container mt-5">
      <h1>Aggiungi una nuova pianta</h1>
      <h4 class="mt-3">
        Se nella serra non hai trovato la specie che cerchi, inseriscila tu!
      </h4>
      <div class="row">
        <div class="col-md-7">
          <AddPlantForm />
        </div>
        <div
          class="col-md-5 d-flex justify-content-center justify-content-md-start mt-4"
        >
          <div class="rounded ms-md-5 w-75">
            <img src="../assets/disegno.jpg" class="w-100 formImg" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AddPlantForm from "@/components/AddPlantForm.vue";

export default {
  components: { AddPlantForm },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: var(--text);
}
</style>
