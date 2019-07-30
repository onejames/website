<template>
  <div>

    <div id="titleBlock" ></div>

    <div id="coilAccelleratorImageWrapper">
      <img src="static/projectImages/coilAccellerator/coilAccellerator.jpg" />
      <svg id="coilSvg" viewBox="0 0 3570 1727" preserveAspectRatio="xMidYMid meet"> </svg>
      <div id="description"></div>
    </div>

    <div class="sexyLine"></div>

    <div class="projectText">
      <p>This is the completed V2 of my coil gun.</p>

      <p>Inspirations, resources, and further reading:</p>
      <ul>
        <li><a href="https://www.coilgun.info/about/home.htm">Barry's Coilgun Design Site</a></li>
        <li><a href="http://www.powerlabs.org/gaussgun.htm"> Power Labs gaussgun</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import config from '@/data/config.json'
import polys from '@/data/Projects/CoilAccellerator/polys.json'

export default {
  name: 'ProjectCoilAccellerator',
  components: {
  },
  methods: {
    drawPoly: function (svg, poly) {
      var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')

      polygon.id = poly.id
      polygon.onclick = function () {
        if (poly.href === null) {
          return null
        }
        this.navigate(poly.href)
      }.bind(this, poly)

      svg.appendChild(polygon)

      for (var i = 0; i < poly.pos.length; i++) {
        var point = svg.createSVGPoint()

        point.x = poly.pos[i].x
        point.y = poly.pos[i].y

        polygon.points.appendItem(point)
      }

      if ('positionalImage' in poly) {
        var img = new Image()
        img.id = poly.id + '_img'
        img.src = poly.positionalImage.src
        img.className = 'polyFlotingImage'
        img.style.left = poly.positionalImage.x + '%'
        img.style.top = poly.positionalImage.y + '%'
        img.style.width = poly.positionalImage.width + '%'
        document.getElementById('coilAccelleratorImageWrapper').appendChild(img)
      }

      return polygon
    },
    drawOnImage: function () {
      var svg = document.getElementById('coilSvg')

      for (var i = 0; i < this.polys.length; i++) {
        var polygon = this.drawPoly(svg, this.polys[i])
        this.addPolyEvents(polygon)
      }

      // svg.width = '98%'
    },
    addPolyEvents: function (polygon) {
      polygon.onmouseover = function (eve) {
        var data = this.getPolyDataById(eve.srcElement.id)
        document.getElementById('titleBlock').innerHTML = data.title

        var description = document.getElementById('description')
        description.innerHTML = data.description
        description.style.visibility = null
        description.style.left = data.descriptionLocation.x + '%'
        description.style.top = data.descriptionLocation.y + '%'

        if ('positionalImage' in data) {
          document.getElementById(data.id + '_img').style.visibility = null
        }
      }.bind(this)

      polygon.onmouseout = function (eve) {
        document.getElementById('titleBlock').innerHTML = null
        document.getElementById('description').style.visibility = 'hidden'
        document.getElementById('description').innerHTML = null
      }
    },
    getPolyDataById: function (id) {
      for (var i = 0; i < this.polys.length; i++) {
        if (this.polys[i].id === id) {
          return this.polys[i]
        }
      }

      return null
    },
    navigate (detailPage) {
      this.$router.push({ name: 'ProjectDetails', params: { projectId: 'CoilAccellerator', detailPage: detailPage } })
    }
  },
  mounted: function () {
    document.getElementById('description').style.visibility = 'hidden'

    var elements = document.getElementsByClassName('polyFlotingImage')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.visibility = 'hidden'
    }

    this.drawOnImage()

    document.getElementById('titleBlock').scrollIntoView()
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

#coilAccelleratorImageWrapper {
  position: relative;
  width: 100%;
  margin: 5px;
  padding: 2px;
}

#coilAccelleratorImageWrapper img{
  width: 99%;
  margin-bottom: 10px;
}

#coilAccelleratorImageWrapper svg{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 99%;
}

#description {
    position: absolute;
    border: 1px solid black;
    background-color: white;
    box-shadow: 5px 5px 5px;
    padding: 6px;
    border-radius: 5px;
    max-width: 33%;
}

#titleBlock {
  height: 1em;
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

.projectText {
    margin-left: 5%;
}

@import '../../../assets/css/project.css'

</style>

<style>
.polyFlotingImage{
    position: absolute;
    box-shadow: 0px 0px 30px;
    border: 2px solid white;
}

#coilAccelleratorImageWrapper svg polygon {
  stroke-linejoin: round;
  stroke-width: 10;
  stroke: black;
  stroke-opacity: .6;
  fill-opacity: .4;
}

#coilAccelleratorImageWrapper svg polygon:hover {
  fill: red;
}

.projectDetailLink {
  font-size: .7em;
  text-align: center;
}
</style>
