import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/Se-connector',
    name: 'Se-connector', 
    component: () => import('../views/Se-connector.vue')
  },
  {
    path: '/Inscription',
    name: 'Inscription', 
    component: () => import('../views/Inscription.vue')
  },
  {
    path: '/Confirmer',
    name: 'Confirmer', 
    component: () => import('../views/Confirmer.vue')
  },
  {
    path: '/Passer',
    name: 'Passer', 
    component: () => import('../views/Passer.vue')
  },
  {
    path: '/PasserCom',
    name: 'PasserCom', 
    component: () => import('../views/PasserCom.vue')
  }
]

const router = createRouter({
//  history: createWebHashHistory(),
 history: createWebHistory(process.env.BASE_URL),
 routes
})

export default router
