<template>
  <div>
    <div class="search">
      <span class="fa fa-search"></span>
      <input placeholder="Recipe Search" v-model="search">
    </div>
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

      <slide v-for="(recipe, i) in filteredList" :index="i" :key="recipe.id" >

        <h3>{{recipe.title}}</h3>

        <img :src="recipe.image">

        <div class="description"><p>{{recipe.description}}</p></div>

        <center>
          <router-link :to="{ name: 'RecipesDetails', params: { recipeId: recipe.id }}">Read the instructions</router-link>
        </center>

      </slide>
    </carousel-3d>

    <Footer/>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

import recipeList from '@/data/Recipes/recipeList.json'

export default {
  name: 'Recipes',
  components: {
    Footer,
    Carousel3d,
    Slide
    // Recipe
  },
  methods: {
    toggle () {
      console.log('foo')
    },
    slideNavigation () {
      console.log('navigation')
      console.log(this)
    }
  },
  computed: {
    filteredList () {
      return this.recipeList.filter(recipe => {
        return recipe.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data () {
    return {
      'search': '',
      'recipeList': recipeList
    }
  }
}

</script>

<style scoped>

@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

  .search {
    position: relative;
    color: #aaa;
    margin-top: 1em;
    font-size: 16px;
  }

  .search input {
    width: 250px;
    height: 32px;

    background: #fcfcfc;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
    padding-left: 32px;
  }

  .search .fa-search {
    position: relative;
    left: 32px;
  }

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

  .description {
    flex-basis: 100%;
    /* margin-top: -200px; */
  }

  .showSection {
    max-height: none;
  }
</style>
