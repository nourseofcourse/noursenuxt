<template>
  <div class="site-head__toggle" id="js-toggle-nav" @click="toggleMenu" :class="[{active: isOpen}, currentStatus]">
    <div class="outer">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isOpen() {
        return this.$store.state.menu.menuOpen
      },
      currentStatus() {
        return this.$store.state.menu.status
      }
    },
    methods: {
      toggleMenu() {
        this.$store.dispatch('menu/toggleMenu')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
