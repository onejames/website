<template>
  <div>
    <p class="projectTitle" >Details on Coil Accellerator Bolts</p>
    <p>
        These bolts are ~60mm long, 3.5mm in diameter. These are formed out of a simple nail.
    </p>
    <img width="33%" src="static/projectImages/coilAccellerator/bolts.jpg" />
  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'ProjectCoilAccelleratorBolts',
  components: {
    Footer
  },
  methods: {

  },
  mounted: function () {

  },
  data () {
    return {
      config: config
    }
  }
}
</script>

<style scoped>
  @import '../../../assets/css/project.css'
</style>
