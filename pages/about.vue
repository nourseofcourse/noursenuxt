<template>
  <article :data-id="page.id">
    <PageHead :content="page.acf" :showMeta="page.acf.show_meta" />
    <PageContent
      v-for="(section, index) in page.acf.sections"
      :content="section"
      :key="index" />
  </article>
</template>

<script>
  import PageHead from '@/components/PageHead.vue';
  import PageContent from '@/components/PageContent.vue';
  import { mapState } from 'vuex'

  export default {
    name: 'about',
    components: {
      PageHead,
      PageContent
    },
    computed: {
      ...mapState({
        page: state => state.pages.page
      })
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('pages/fetchPageBySlug', 'about')
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
