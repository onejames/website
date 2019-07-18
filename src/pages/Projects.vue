<template>
  <div id="projects">

    <h1 class="title has-text-centered">Projects</h1>

    <div id="projectListWrapper">
      <div class="project" v-for="(project, i) in projectsToShow" :index="i" :key="project.id" v-on:click="navigate(project)">

        <h3 class="projectTitle">{{project.title}}</h3>

        <img :src="project.image">

        <div class="description"><p>{{project.description}}</p></div>

      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import config from '@/data/config.json'
import projectList from '@/data/projects.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Projects',
  components: {
    Footer
  },
  methods: {
    navigate (project) {
      this.$router.push({ name: 'Project', params: { projectId: project.id } })
    }
  },
  computed: {
    projectsToShow: function () {
      return this.projectList.filter(function (project) {
        return project.show === true
      })
    }
  },
  data () {
    return {
      config: config,
      projectList
    }
  }
}
</script>

<style scoped>

  h3 {
    text-align: center;
  }

  #projects {
    display: flex;
    flex-direction: column;
  }

  #projectListWrapper {
    width: 730px;
    margin: auto;
    margin-bottom: 40px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(250, 250, 250, 0.5);
  }

  .project {
    max-width: 200px;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 5px;
    margin: 10px;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
    cursor: pointer;
  }

  .project img {
    margin: 5%;
    max-width: 90%;
  }
</style>
