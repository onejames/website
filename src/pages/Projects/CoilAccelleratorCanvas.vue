<template>
  <div>
    <p>
      This is all about the Coil Accellerator here!
    </p>

    <div id="coilAccelleratorImageWrapper">
      <canvas id="coilCanvas" width="3570px" height="1727px">Sorry, your browser does not support the html canvas element.</canvas>
    </div>
  </div>
</template>

<script>
import config from '@/data/config.json'
import polys from '@/data/Projects/CoilAccellerator/polys.json'

import Footer from '@/components/Footer.vue'

// import ImageMap from 'image-map'

export default {
  name: 'ProjectCoilAccellerator',
  components: {
    Footer
  },
  methods: {
    drawPoly: function (canvas, poly) {
      var ctx = canvas.getContext('2d')

      ctx.fillStyle = 'rgba(200, 200, 200, .5)'
      ctx.strokeStyle = 'lightgray'
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.moveTo(poly.pos[0].x, poly.pos[0].y)
      for (var i = 1; i < poly.pos.length; i++) {
        ctx.lineTo(poly.pos[i].x, poly.pos[i].y)
      }

      ctx.closePath()
      ctx.fill()
    },
    drawOnImage: function () {
      var canvas = document.getElementById('coilCanvas')

      for (var i = 0; i < this.polys.length; i++) {
        this.drawPoly(canvas, this.polys[i])
      }

      canvas.addEventListener('mousemove', function (event) {
        if (event.region) {
          alert('hit region: ' + event.region)
        }
      })

      // var wrapper = document.getElementById('coilAccelleratorImageWrapper')
      // var computedStyle = getComputedStyle(wrapper)
      //
      // var width = parseInt(computedStyle.getPropertyValue('width'), 10)
      // // var height = parseInt(computedStyle.getPropertyValue('height'), 10)
      // console.log(width)
      //
      // canvas.width = width
    }
  },
  mounted: function () {
    var img = new Image()

    img.onload = function () {
      var canvas = document.getElementById('coilCanvas')
      var ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      this.drawOnImage()
    }.bind(this)

    img.src = 'static/projectImages/coilAccellerator/coilAccellerator.jpg'
  },
  data () {
    return {
      config: config,
      polys: polys
    }
  }
}
</script>

<style scoped>

</style>
