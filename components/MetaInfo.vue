<template>
  <div class="meta-info">
    <div
      class="meta-info__item"
      v-for="(meta, index) in content"
      :key="index">
      <span class="meta-info__title" v-if="meta.title">{{ meta.title }}</span>
      <span class="meta-info__text" v-if="meta.type == 'text'">{{ meta.text }}</span>
      <span class="meta-info__text" v-if="meta.type == 'technology'">{{ meta.technology | generateList }}</span>
      <a
        :href="meta.button_link"
        :target="meta.button_target"
        v-if="meta.type == 'button'"
        class="btn  btn--link">
          {{ meta.button_text }}
          <span class="btn__icon">
            <i class="fad  fa-angle-right"></i>
          </span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MetaInfo',
    props: {
      content: {
        type: Array,
        required: true
      },
    },
    filters: {
      generateList(items) {
        return items.join(', ')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
