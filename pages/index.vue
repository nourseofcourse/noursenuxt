<template>
  <article :data-id="page.id">
    <PageHead :content="page.acf" :showMeta="false" />
    <section
      class="section"
      v-for="(section, index) in page.acf.sections"
      :key="index"
      :section="section">
      <component :is="'Content' + section.content_type" :content="section"></component>
    </section>
  </article>
</template>

<script>
  import PageHead from '@/components/PageHead.vue';
  import { mapState } from 'vuex'

  export default {
    name: 'about',
    components: {
      PageHead
    },
    computed: {
      ...mapState({
        page: state => state.pages.page
      })
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('pages/fetchPageBySlug', 'home')
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
