import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    arrayPlants: [],
    userGarden: 0,
    garden: [],
    suggestions: {},
  },
  getters: {
    arrayPlants: (state) => state.arrayPlants,
    userGarden: (state) => state.userGarden,
    garden: (state) => state.garden,
  },
  mutations: {
    SET_PLANTS(state, arrayPlants) {
      state.arrayPlants = arrayPlants;
    },
    ADD_PLANT(state, plant) {
      state.arrayPlants.push(plant);
    },
    ADD_TO_GARDEN(state, plant) {
      const existingPlant = state.garden.find((p) => p.id === plant.id);
      if (existingPlant) {
        existingPlant.quantity++;
      } else {
        state.garden.push({ ...plant, quantity: 1 });
      }
      state.userGarden++;
    },
    ADD_SUGGESTION(state, { plantId, suggestion }) {
      if (!state.suggestions[plantId]) {
        state.suggestions[plantId] = [];
      }
      state.suggestions[plantId].push(suggestion);
    },
    REMOVE_FROM_GARDEN(state, index) {
      const plant = state.garden[index];
      if (plant.quantity > 1) {
        plant.quantity--;
      } else {
        state.garden.splice(index, 1);
      }
      state.userGarden = Math.max(0, state.userGarden - 1);
    },
  },
  actions: {
    async dbPlants({ commit }) {
      const response = await axios.get("/plants.json");
      commit("SET_PLANTS", response.data);
    },
    async addPlant({ commit }, plant) {
      commit("ADD_PLANT", plant);
    },
    addGarden({ commit }, plant) {
      commit("ADD_TO_GARDEN", plant);
    },
    addSuggestion({ commit }, { plantId, suggestion }) {
      commit("ADD_SUGGESTION", { plantId, suggestion });
    },
  },
  modules: {},
});
