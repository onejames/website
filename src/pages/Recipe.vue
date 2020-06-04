<template>
  <div class="footerSpace">
    <div class="recipe">

      <h1 class="title has-text-centered">{{recipe.title}}</h1>
      <div class="sexyLine"></div>

      <div class="recipeBody">

        <div class="ingredients">
          <h2 class="center">Ingredients</h2>
          <div v-for="(ingredientList, key) in recipe.ingredients" :key="key" class="ingredientList">
            {{ingredientList.title}} -
            <ul v-for="(ingredient, ikey) in ingredientList.list" :key="ikey">
              <li >
                {{ingredient.amount}} {{ingredient.unit}} {{ingredient.item}}
              </li>
            </ul>
          </div>
        </div>

        <div class="markdown">
          <h2>Directions</h2>
          <div v-html="recipe.markdown" class="directions"></div>
          <span class="makes"> Makes: {{recipe.quantity}} </span>
        </div>

      </div>

      <div class="goback">
          <router-link :to="{ name: 'Recipes'}">
              <span><font-awesome-icon :icon="['fas', 'backward']" /></span>Back to Recipes
          </router-link>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import config from '@/data/config.json'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontAwesome from '@fortawesome/fontawesome'
import backward from '@fortawesome/fontawesome-free-solid'

import Footer from '@/components/Footer.vue'

fontAwesome.library.add(backward)

export default {
  name: 'Recipe',
  components: {
    Footer,
    FontAwesomeIcon
  },
  data () {
    return {
      config: config,
      'recipeId': this.$route.params.recipeId,
      'recipe': {},
      'loaded': false
    }
  },
  created () {
    if (recipe === false) {
      this.loadRecipe()
      this.loaded = true
    }
  },
  methods: {
    loadRecipe () {
      import('@/data/Recipes/' + this.$route.params.recipeId + '.json').then((data) => {
        this.recipe = data
        if (this.recipe.hasOwnProperty('partials')) {
          data.partials.forEach(location => {
              import('@/data/Recipes/' + location).then((partial) => {
                partial.ingredients.forEach(list => {
                  this.recipe.ingredients.push(list)
                })
                if (partial.markdown !== '') {
                  this.recipe.markdown += ' ' + partial.markdown
                }
              })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/recipe.css'
</style>
