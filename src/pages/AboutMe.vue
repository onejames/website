<template>
  <div id="aboutMe">
    <h1>About Me</h1>

    <p>  </p>

    <Footer/>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutMe',
  components: {
    Footer
  }
}
</script>

<style scoped>

  #aboutMe {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-top: 2%;
  }

  #aboutMe {
    display: flex;
  }
</style>
