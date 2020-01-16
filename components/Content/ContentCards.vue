<template>
  <VGrid variant="container">
    <VRow>
      <VCol
        variant="md-4"
        v-for="(card, index) in content.cards"
        :key="index">
        <Card :content="card" />
      </VCol>
    </VRow>
  </VGrid>
</template>

<script>
  import Card from '@/components/Card.vue';

  export default {
    components: {
      Card
    },
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
