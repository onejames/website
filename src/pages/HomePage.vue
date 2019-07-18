<template>
  <div id="homePage">
    <Navigation/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'HomePage',
  components: {
    Navigation
  }
}
</script>

<style scoped>
  #homePage {
    display: flex;
    background-image: url("/static/graffiti.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
