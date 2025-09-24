import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../public/style.css";

const app = createApp(App);

store.dispatch("dbPlants").then(() => {
  app.use(store).use(router).mount("#app");
});
