import { createRouter, createWebHistory } from 'vue-router'
import FirstForm from '../views/firstForm/FirstForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstForm,
    },
  ],
})

export default router
