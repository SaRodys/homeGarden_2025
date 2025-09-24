<template>
  <div
    class="d-flex flex-column justify-content-start align-items-center text-center divHome"
  >
    <h1 class="fw-bold text-light w-75 mt-5">
      HomeGarden: la soluzione per le tue piante
    </h1>
    <h4 class="w-50 testo text-light mt-3 sezione">
      Scegli dalla serra le piante che hai in casa, aggiungile al tuo giardino
      personale e tieni i consigli per la cura delle tue piante sempre a portata
      di mano
    </h4>
    <div class="row justify-content-center mt-5 w-100">
      <div class="col-4 col-md-2 d-flex justify-content-center mb-2">
        <router-link
          :to="{ name: 'catalogo' }"
          class="bottoneHome bottone2 textColor rounded w-100 p-1 pt-3 pb-3"
          type="button"
        >
          Serra
        </router-link>
      </div>
      <div class="col-4 col-md-2 d-flex justify-content-center mb-2">
        <router-link
          :to="{ name: 'giardino' }"
          class="bottoneHome bottone2 textColor rounded w-100 p-1 pt-3 pb-3"
          type="button"
        >
          Giardino
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
