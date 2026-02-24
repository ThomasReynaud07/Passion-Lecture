import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '@/views/CatalogueView.vue'
import DetailsView from '@/views/DetailsView.vue'
import Loginview from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Catalogue',
      name: 'catalogue',
      component: CatalogueView,
    },
    {
      path: '/livre/:id',
      name: 'BookDetails',
      component: DetailsView,
      props: true,
    },
    {
      path: '/Login',
      name: 'login',
      component: Loginview,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: SignupView,
    },
  ],
})

export default router
