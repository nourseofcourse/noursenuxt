<template>
  <figure>
    <client-only placeholder="Loading...">
      <BaseImage :animated="true" :parallax="true" :type="'cut'" :image="content.image" v-if="content.image" />
    </client-only>
  </figure>
</template>

<script>
  export default {
    name: 'ContentImage',
    props: {
      content: {
        type: Object,
        requird: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
