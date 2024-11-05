import { createRouter, createWebHistory } from 'vue-router'
import SiteStatusView from '@/views/SiteStatusView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SiteStatusView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
