<template>
  <div class="card">
    <div class="card__image">
      <img :src="content.image.url" :alt="content.image.alt">
    </div>
    <div class="card__body">
      <h3 class="headline headline--h3">{{ content.headline }}</h3>
      <div v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
