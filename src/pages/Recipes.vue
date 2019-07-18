<template>
  <div>

    <carousel-3d
      :count="recipeList.length"
      :autoplay="true"
      :autoplayHoverPause="true"
      :onMainSlideClick="slideNavigation"
      :width="900"
      :height="600"
      :perspective="90"
      :display="7"
      :space="500"
      :autoplayTimeout="500000"
      >

      <slide v-for="(recipe, i) in recipeList" :index="i" :key="recipe.id" v-on:click="toggle">

        <h3>{{recipe.title}}</h3>

        <img :src="recipe.image">

        <div class="description"><p>{{recipe.description}}</p></div>

        <div v-for="(ingredientList, title) in recipe.ingredients" :key="title" class="ingredientList">
          {{title}}
          <ul v-for="ingredient in ingredientList" :key="ingredient">
            <li >
              {{ingredient}}
            </li>
          </ul>
        </div>

        <div class="markdown">
          <markdown/>
        </div>

      </slide>
    </carousel-3d>

    <Footer/>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

// import Recipe from '@/components/Recipe.vue'
import recipeList from '@/data/recipes.json'
import markdown from '@/data/Recipes/pancakes.md'

export default {
  name: 'Recipes',
  components: {
    Footer,
    markdown,
    Carousel3d,
    Slide
    // Recipe
  },
  methods: {
    toggle () {
      // this.toggleClass('showSection')
      console.log('foo')
    },
    slideNavigation () {
      console.log('navigation')
      console.log(this)
    }
  },
  computed: {
    // componentLoader () {
    //   return () => import('./${this.markdown}')
    // }
  },
  data () {
    return {
      recipeList
    }
  }
}

</script>

<style scoped>

  .carousel-3d-container {
    width: 100%;
    padding: 0px;
  }

  .carousel-3d-slide {
    display: flex;
    margin: auto;
    margin-top: 50px;
    max-width: 800px;
    /* max-height: 300px; */
    overflow: scroll;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    text-align: left;
    border: 1px solid black;
    padding: 15px;
    list-style-type: none;
    box-shadow: 0px 0px 40px grey;
  }

  h3 {
    margin-left: -10px;
    margin-right: -20%;
    padding: 10px;
    background-color: rgba(255, 99, 71, 0.5);
    flex-basis: 70%;
    z-index: 2;
  }

  img {
    max-width: 300px;
    max-height: 300px;
    z-index: 1;
    flex-basis: 30%;
    margin-top: 30px;
  }

  .ingredientList {
    flex-basis: 40%;
    justify-content: space-around;
  }

  .description {
    flex-basis: 100%;
    /* margin-top: -200px; */
  }

  .showSection {
    max-height: none;
  }
</style>
