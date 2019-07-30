<template>
  <div>
    <p class="projectTitle" >Capicator Array Details</p>
    <p>
      <img src="static/projectImages/coilAccellerator/capicatorBank.jpg" width="25%;"/>
      Capicators store and discharge electricity very quickly, and are often used to level out voltages in circuits, or to have power imeditly avaliable for sudden applications (think old-school flash camera). Infact this capicator bank was built from reclamed disposable cameras capicators.
    </p>

  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'ProjectCoilAccelleratorCapicators',
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
