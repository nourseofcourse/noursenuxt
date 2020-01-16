<template>
  <article :data-id="post.id">
    <PageHead :content="post.acf" :showMeta="true" />
  </article>
</template>

<script>
  import { mapState } from 'vuex'
  import PageHead from '@/components/PageHead.vue';
  export default {
    name: 'post',
    head() {
      return {
        title: 'Web Design & Development Posts'
      }
    },
    components: {
      PageHead
    },
    computed: {
      ...mapState({
        post: state => state.posts.post
      })
    },
    async fetch({ store, error, params }) {
      try {
        await store.dispatch('posts/fetchPostBySlug', params.slug)
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
