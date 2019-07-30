<template>
  <div>
    <div class="project">
      <div>
        <component v-bind:is="projectDetailPage"></component>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'ProjectDetails',
  components: {
    Footer
  },
  methods: {

  },
  data () {
    return {
      config: config
    }
  },
  computed: {
    projectDetailPage: function () {
      // console.log(this.$route.params)
      return () => import('@/pages/Projects/' + this.$route.params.projectId + '/' + this.$route.params.detailPage + '.vue')
    }
  },
  mounted: function () {

  }
}
</script>

<style scoped>

  h3 {
    text-align: center;
  }

  .project {
    max-width: 1024px;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 5px;
    margin: auto;
    margin-top: 5%;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
    text-align: left;
  }

  .project img {
    margin: 5%;
    max-width: 90%;
  }

  .introWrapper img {
      max-width: 300px;
  }
</style>
