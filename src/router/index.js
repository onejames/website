import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from '@/pages/AboutMe.vue'
import Contact from '@/pages/Contact.vue'
import HomePage from '@/pages/HomePage.vue'
import Projects from '@/pages/Projects.vue'
import Project from '@/pages/Project.vue'
import Recipes from '@/pages/Recipes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Projects/:projectId',
      name: 'Project',
      component: Project
    },
    {
      path: '/Recipes',
      name: 'Recipes',
      component: Recipes
    }
  ]
})
