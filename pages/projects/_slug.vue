<template>
  <article :data-id="project.id">
    <PageHead :content="project.acf" :showMeta="project.acf.show_meta" />
    <PageContent
      v-for="(section, index) in project.acf.sections"
      :content="section"
      :key="index" />
  </article>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import PageHead from '@/components/PageHead.vue';
  import PageContent from '@/components/PageContent.vue';

  export default {
    name: 'project',
    head() {
      return {
        title: 'Web Design & Development Projects',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: ''
          }
        ]
      }
    },
    components: {
      PageHead,
      PageContent
    },
    computed: {
      ...mapState({
        project: state => state.projects.project
      })
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('projects/fetchProjectBySlug', params.slug)
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
