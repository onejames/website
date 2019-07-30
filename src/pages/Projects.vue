<template>
  <div id="projects">

    <h1 class="title has-text-centered">Projects</h1>

    <div class="sexyLine"></div>

    <div id="projectListWrapper">

      <div class="project" v-for="(project, i) in projectsToShow" :index="i" :key="project.id" v-on:click="navigate(project)">

        <h3 class="projectThumbTitle">{{project.title}}</h3>
        <div class="projectThumbImgWrapper">
          <img :src="project.image">
        </div>

        <div class="description"><p>{{project.description}}</p></div>

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

  h1 {
      margin-top: 2%;
  }

  .projectThumbTitle {
    font-size: 1.3em;
    text-align: center;
  }

  #projects {
    display: flex;
    flex-direction: column;
  }

  #projectListWrapper {
    margin: auto;
    margin-bottom: 40px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgba(250, 250, 250, 0.5);
    max-width: 1024px;
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
    max-width: 100%;
    max-height: 100%;
  }

  .projectThumbImgWrapper {
    width: 180px;
    height: 180px;
    margin: auto;
    padding: 0px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .description {
    text-align: center;
    padding: 2px;
  }
</style>
