import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/listaInicio.vue')
    },
    {
      path: '/membro/:id',
      name: 'Membro',
      component: () => import('../views/membroEspec.vue')
    },
    {
      path: '/about',
      name: 'Sobre',
      component: () => import('../views/aboutTeam.vue')
    }
  ]
})

export default router
