<template>
  <div>
    <div class="project">

      <h1 class="title has-text-centered">{{project.title}}</h1>

      <div class="sexyLine" ></div>

      <div id="introWrapper" class="introWrapper">
        <img :src="project.image" /> <span>{{project.description}}</span>
      </div>

      <div class="projectWrapper">
        <component v-bind:is="currentProject" class="tab" ></component>
      </div>

    </div>

    <Footer/>

  </div>
</template>

<script>
import config from '@/data/config.json'
import projectList from '@/data/Projects/projects.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Project',
  components: {
    Footer
  },
  methods: {

  },
  data () {
    let project = null

    Object.keys(projectList).forEach(key => {
      // eslint-disable-next-line
      if (projectList[key].id == this.$route.params.projectId) {
        project = projectList[key]
      }
    })

    return {
      config: config,
      project: project
    }
  },
  computed: {
    currentProject: function () {
      return () => import('@/' + this.project.component)
    }
  },
  mounted: function () {
    if ('hideOnProject' in this.project && this.project.hideOnProject === true) {
      document.getElementById('introWrapper').style.height = '0px'
      document.getElementById('introWrapper').style.margin = '0px'
      document.getElementById('introWrapper').style.padding = '0px'
      document.getElementById('introWrapper').style.visibility = 'hidden'
    }
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
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
    text-align: left;
  }

  .projectWrapper {
    padding: 5%;
  }

  .introWrapper img {
    max-width: 300px;
    max-height: 300px;
    float: left;
    margin-right: 5%;
  }

  .introWrapper {
    padding: 5%;
    display: flex;
    align-items:center;
  }

  .introWrapper p{
    margin: 2%;
    overflow: hidden;
  }
</style>
