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
  },
  {
    path: '/Mes',
    name: 'Mes', 
    component: () => import('../views/Mes.vue')
  },
  {
    path: '/Mes-address',
    name: 'Mes-address', 
    component: () => import('../views/Mes-add.vue')
  },
  {
    path: '/Mes-Fac',
    name: 'Mes-Fac', 
    component: () => import('../views/Mes-Fac.vue')
  },
  {
    path: '/Page-Fac',
    name: 'Page-Fac', 
    component: () => import('../views/Page-Fac.vue')
  },
  {
    path: '/Nous',
    name: 'Nous', 
    component: () => import('../views/Nous.vue')
  },
  {
    path: '/Popup',
    name: 'Popup', 
    component: () => import('../views/Popup.vue')
  }
]

const router = createRouter({
//  history: createWebHashHistory(),
 history: createWebHistory(process.env.BASE_URL),
 routes
})

export default router
