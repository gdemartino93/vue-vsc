import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CV from '../views/pages/CV.vue';
import About from '../views/pages/About.vue';
import Contacts from '../views/pages/Contacts.vue';
import Home from '../components/AppMainCode.vue';
import Projects from '../views/pages/Projects.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
        {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
  ]
})

export default router
