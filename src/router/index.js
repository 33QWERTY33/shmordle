import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shmordle from '../views/DefaultShmordle.vue'
import BlueShmordle from '../views/BlueShmordle.vue'
import PinkShmordle from '../views/PinkShmordle.vue'
import SixLetters from '../views/SixLetters.vue'
import FourLetters from '../views/FourLetters.vue'
import ThreeLetters from '../views/ThreeLetters.vue'

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
    path: '/pink',
    name: 'pink',
    component: PinkShmordle
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
  {
    path: '/3',
    name: '3',
    component: ThreeLetters
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
