import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CV from '../views/pages/CV.vue';
import About from '../views/pages/About.vue';
import Home from '../components/AppMainCode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    }
  ]
})

export default router
