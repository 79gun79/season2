import { createRouter, createWebHistory } from 'vue-router'

import FirstIn from '../vues/FirstIn.vue'
import CreateAccount from '../vues/CreateAccount.vue'
import MainDisplay from '@/vues/MainDisplay.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstIn',
      component: FirstIn
    },
    {
      path: '/cr',
      name: 'CreateAccount',
      component: CreateAccount
    },
    
    {
      path: '/main',
      name: 'MainDisplay',
      component: MainDisplay
    }
  ]
})

export default router
