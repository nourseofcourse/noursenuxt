<template>
  <VGrid variant="container">
    <VRow>
      <VCol variant="lg-3">
        <span class="section__sub-headline text-mute">{{ content.subheadline }}</span>
      </VCol>
      <VCol variant="lg-9">
        <h2 class="headline headline--h2">{{ content.headline }}</h2>
        <div v-html="content.content"></div>
      </VCol>
    </VRow>
  </VGrid>
</template>

<script>
  export default {
    name: 'ContentText',
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
