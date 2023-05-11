import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ViewCar from '../views/car/ViewCar'
import AddCar from '../views/car/AddCar'
import ViewBank from '../views/bank/ViewBank'
import AddBank from '../views/bank/AddBank'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/viewcar',
    name: 'viewCar',
    component: ViewCar
  },
  {
    path: '/addcar',
    name: 'addCar',
    component: AddCar
  },
  {
    path: '/viewbank',
    name: 'viewBank',
    component: ViewBank
  },
  {
    path: '/addbank',
    name: 'addBank',
    component: AddBank
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
