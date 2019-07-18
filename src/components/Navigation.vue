<template>
  <nav class="navigation">

    <div>
      <router-link :to="{ name: 'HomePage'}">
        <span><font-awesome-icon :icon="['fas', 'home']" :transform="{ rotate: 15 }" class="fa-3x" /></span>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'Projects'}">
        <span>Projects</span>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'AboutMe'}">
        <span>About&nbsp;Me</span>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'Recipes'}">
        <span>Recipes</span>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'Contact'}">
        <span>Contact</span>
      </router-link>
    </div>

  </nav>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faSpinner)

export default {
  name: 'Navigation',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .navigation {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    margin: 10vh;
    height: 80vh;
    width: 20%;
    background-color: rgba(100, 100, 100, .7);
    box-shadow: 0px 0px 10px grey;
  }

  .navigation a {
    color: white;
    background-color: transparent;
    margin: 5vh;
  }
</style>
