<template>
    <div id="recipes">
      <ul class="recipeList">
        <li v-for="recipe in recipeList" :key="recipe.id" v-on:click="toggle" class="recipeItem">
          <h3>{{recipe.title}}</h3>
          <img :src="recipe.image">
          <div class="description">{{recipe.description}}</div>
          <div v-for="(ingredientList, title) in recipe.ingredients" :key="title">
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
        </li>
      </ul>
      <Footer/>
    </div>
</template>

<script>

export default {
  name: 'RecipeTemplate',
  components: {
  },
  data () {
    return {
      // recipe: null
    }
  },
  props: ['recipe']
}

</script>

<style scoped>
  #recipes {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
