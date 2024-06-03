import { createRouter, createWebHistory } from 'vue-router'
// Здесь пути привязываются к компонентам страниц
const routes = [
  {
    path: '/',
    name: 'menu',
    component: () => import('../views/MainMenuView.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/ScreenView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('../views/AuthorizationView.vue')
  },

  {
    path: '/saves',
    name: 'saves',
    component: () => import('../views/SavesView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
