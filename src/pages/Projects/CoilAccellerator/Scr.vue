<template>
  <div>
    <p class="projectTitle" >More information about SCRs</p>
    <p>
      <img src="//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thyristor_circuit_symbol.svg/150px-Thyristor_circuit_symbol.svg.png"/>
      A good overview of SCRs can be found at the <a href="https://en.wikipedia.org/wiki/Silicon_controlled_rectifier" >Wiki</a> page. These specific SCRs are the Silicon Power Cube 8935, model PP1049A. The general function of an SCR is to handle the switching of large amounts of power with out having to break contacts, or deal with the delay, like you would with a mechanical solution - e.g. a relay. They opperate with a four-layer p–n–p–n layout of transistors, and can function in three modes Reverse blocking mode, Forward blocking mode, and Forward conduction mode.
    </p>

  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'ProjectCoilAccelleratorScr',
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
