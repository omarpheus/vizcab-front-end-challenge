import { createRouter, createWebHistory } from 'vue-router'
import Buildings from './pages/Buildings.vue'
import BuildingDetails from './pages/BuildingDetails.vue'

const routes = [
  {
    // Page displaying the list of buildings
    path: "/",
    name: "Home",
    component: Buildings
  },
  {
    // Page displaying the details of a single building
    path: "/buildings/:idBuilding",
    name: "BuildingDetails",
    component: BuildingDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router