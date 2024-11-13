import { createRouter, createWebHistory } from 'vue-router'
import FirstForm from '../views/firstForm/firstForm.vue'
import SecondForm from '../views/secondForm/secondForm.vue'
import ThirdForm from '../views/thirdForm/thirdForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/formulaire-1',
      name: 'formulaire-1',
      component: FirstForm,
    },
    {
      path: '/formulaire-2',
      name: 'formulaire-2',
      component: SecondForm,
    },
    {
      path: '/formulaire-3',
      name: 'formulaire-3',
      component: ThirdForm,
    },
    {
      path: '/**',
      redirect: '/formulaire-1',
    }
  ],
})

export default router
