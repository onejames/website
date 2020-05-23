<template>
  <div>
    <div class="recipe">

      <h1 class="title has-text-centered">{{recipe.title}}</h1>
      <div class="sexyLine"></div>

      <div class="recipeBody">

        <div class="ingredients">
          <h2 class="center">Ingredients</h2>
          <div v-for="(ingredientList, title) in recipe.ingredients" :key="title" class="ingredientList">
            {{title}} -
            <ul v-for="ingredient in ingredientList" :key="ingredient">
              <li >
                {{ingredient.amount}} {{ingredient.unit}} {{ingredient.item}}
              </li>
            </ul>
          </div>
        </div>

        <div class="markdown">
          <h2>Directions</h2>
          <div v-html="recipe.markdown"></div>
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
      'recipe': {}
    }
  },
  mounted () {
    import('@/data/Recipes/' + this.$route.params.recipeId + '.json').then((data) => {
      this.recipe = data
    })
  }
}
</script>

<style scoped>

  h1 {
    margin-top: 15px;
  }

  h2 {
    text-align: center;
  }

  .recipe {
    max-width: 1024px;
    padding: 15px;
    margin: auto;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
    text-align: left;
  }

  .recipeBody {
    display: flex;
  }

  .ingredients {
    flex-direction: column;
    flex-basis: 40%;
    justify-content: space-around;
  }

  .markdown {
    flex-basis: 50%;
    text-indent: 1em;
  }

  .makes {
      font-size: 1.25em;
  }

  .goback {
    padding-top: 15px;
    text-align: center;
  }

  .goback a {
    text-decoration: none;
  }

  .goback span {
    padding-right: 5px;
  }
</style>
