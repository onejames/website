<template>
  <div>
      This is all about the Rockets here!
  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'ProjectRockets',
  components: {
    Footer
  },
  methods: {

  },
  data () {
    return {
      config: config
    }
  }
}
</script>

<style scoped>

</style>
