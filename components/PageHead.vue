<template>
  <header class="page-head">
    <div class="page-head__content">
      <VGrid variant="container">
        <VRow>
          <VCol>
            <h1 class="headline headline--eyebrow  headline--tail  text-mute" v-if="content">{{ content.headline_1 }}</h1>
            <h2 class="headline  headline--masthead" v-if="content">{{ content.headline_2 }}</h2>
            <MetaInfo :content="content.meta" v-if="showMeta" />
          </VCol>
        </VRow>
      </VGrid>
    </div>
    <client-only placeholder="Loading...">
      <BaseImage :animated="true" :parallax="true" :type="'cut-right'" :image="content.image" v-if="content.image" />
    </client-only>
  </header>
</template>

<script>
  import MetaInfo from '@/components/MetaInfo.vue';

  export default {
    props: {
      content: {
        type: Object
      },
      showMeta: {
        type: Boolean
      }
    },
    components: {
      MetaInfo
    }
  }
</script>

<style lang="scss" scoped>

</style>
