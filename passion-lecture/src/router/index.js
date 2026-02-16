import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '@/views/CatalogueView.vue'
import DetailsView from '@/views/DetailsView.vue'

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
  ],
})

export default router
