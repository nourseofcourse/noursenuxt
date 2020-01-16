<template>
  <div>
    <ul>
      <li v-for="(project, index) in projects" :key="index" :project="project">
        <nuxt-link :to="'/projects/' + project.slug">{{ project.title.rendered }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'projects',
    head() {
      return {
        title: 'Web Design & Development Projects'
      }
    },
    computed: {
      ...mapState({
        projects: state => state.projects.all
      })
    },
    // async fetch({ store }) {
    //   try {
    //     await store.dispatch('projects/fetchProjects')
    //   } catch (e) {

    //   }
    // }
  }
</script>

<style lang="scss" scoped>
ul {
  margin-top: 200px;
}
</style>
