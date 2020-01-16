<template>
  <div>
    <ul>
      <li v-for="(post, index) in posts" :key="index" :post="post">
        <nuxt-link :to="'/blog/' + post.slug">{{ post.title.rendered }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'posts',
    head() {
      return {
        title: 'Web Design & Development Projects'
      }
    },
    computed: {
      ...mapState({
        posts: state => state.posts.all
      })
    },
    // async fetch({ store }) {
    //   try {
    //     await store.dispatch('posts/fetchPosts')
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
