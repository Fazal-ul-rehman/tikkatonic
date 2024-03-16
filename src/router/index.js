import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Main.vue')
    },  
     {
      path: '/menu',
      name: 'menu',
      component: () => import('@/components/Menu.vue')
    },
  ]
})

export default router
