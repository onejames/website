import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from '@/pages/AboutMe.vue'
import Contact from '@/pages/Contact.vue'
import HomePage from '@/pages/HomePage.vue'
import Projects from '@/pages/Projects.vue'
import Project from '@/pages/Project.vue'
import Recipes from '@/pages/Recipes.vue'
import Recipe from '@/pages/Recipe.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue'

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
      path: '/Projects/:projectId/Details/:detailPage',
      name: 'ProjectDetails',
      component: ProjectDetails
    },
    {
      path: '/Recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/Recipes/:recipeId',
      name: 'RecipesDetails',
      component: Recipe
    }
  ]
})
