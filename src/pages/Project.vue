<template>
  <div class="project">

    <h1 class="title has-text-centered">{{project.title}}</h1>

    <div class="introWrapper">
        <img :src="project.image" />
        <p>{{project.description}}</p>
    </div>

    <div>
        <component v-bind:is="currentProject" class="tab" ></component>
    </div>

  </div>
</template>

<script>
import config from '@/data/config.json'
import projectList from '@/data/projects.json'

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
  }
}
</script>

<style scoped>

  h3 {
    text-align: center;
  }

  .project {
    max-width: 95%;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 5px;
    margin: 2.5%;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
  }

  .project img {
    margin: 5%;
    max-width: 90%;
  }

  .introWrapper img {
      max-width: 300px;
  }
</style>
