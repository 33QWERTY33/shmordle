import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shmordle from '../views/DefaultShmordle.vue'
import BlueShmordle from '../views/BlueShmordle.vue'
import SixLetters from '../views/SixLetters.vue'
import FourLetters from '../views/FourLetters.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Shmordle',
    name: 'Shmordle',
    component: Shmordle
  },
  {
    path: '/blue',
    name: 'blue',
    component: BlueShmordle
  },
  {
    path: '/6',
    name: '6',
    component: SixLetters
  },
  {
    path: '/4',
    name: '4',
    component: FourLetters
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
