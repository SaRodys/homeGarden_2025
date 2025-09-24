import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PlantsCatalog from "../views/PlantCatalog.vue";
import ProductPage from "../views/ProductPage.vue";
import AddPlantPage from "../views/AddPlant.vue";
import GardenView from "../views/GardenView.vue";
const routes = [
  {
    path: "/",
    name: "homePage",
    component: Home,
  },
  {
    path: "/prodotti",
    name: "catalogo",
    component: PlantsCatalog,
  },
  {
    path: "/pianta/:id",
    name: "pagina-product",
    component: ProductPage,
    props: true,
  },
  {
    path: "/create",
    name: "consiglia",
    component: AddPlantPage,
  },
  {
    path: "/giardino",
    name: "giardino",
    component: GardenView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
