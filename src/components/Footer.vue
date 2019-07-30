<template>
  <nav class="footer">

    <router-link :to="{ name: 'HomePage'}">
      <span><font-awesome-icon :icon="['fas', 'home']" :transform="{ rotate: 15 }" /></span>
    </router-link>

  </nav>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import home from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(home)

export default {
  name: 'Footer',
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
  .footer {
    padding: 5px ;
    height: 25px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(155, 155, 155, 0.8);
    z-index: 3;
  }
</style>
