<template>
  <section
    class="section"
    :class="( content.section_style != '' ) ? 'section--' + content.section_style : ''">
    <component :is="'Content' + content.content_type" :content="content"></component>
  </section>
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
