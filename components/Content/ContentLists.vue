<template>
  <VGrid variant="container">
    <VRow>
      <VCol variant="lg-3">
        <span class="section__sub-headline text-mute" v-if="content.subheadline">{{ content.subheadline }}</span>
      </VCol>
      <VCol variant="lg-9">
        <VRow>
          <VCol
            v-for="(list, index) in content.lists"
            :key="index"
            variant="md-6">
            <component :is="list.list_headline_tag" class="headline" :class="'headline--' + list.list_headline_tag">{{ list.list_headline }}</component>
            <ul class="list-bare">
              <li
                class="list-bare__item"
                v-for="(item, itemIndex) in list.list"
                :key="itemIndex">{{ item.item }}</li>
            </ul>

          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VGrid>
</template>

<script>
  export default {
    name: 'ContentLists',
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
