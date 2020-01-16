<template>
  <header class="site-head site-head--fixed" ref="headroom">
    <Logo />
    <NavToggle />
    <Menu />
  </header>
</template>

<script>
  import Logo from '@/components/Header/Logo.vue';
  import NavToggle from '@/components/Header/NavToggle.vue';
  import Menu from '@/components/Header/Menu.vue';
  import Headroom from 'headroom.js'

  export default {
    name: 'Header',
    components: {
      Logo,
      NavToggle,
      Menu
    },
    mounted() {
      /**
       * Vue.nextTick
       *
       * Defer the callback to be executed after the next DOM update cycle. Use it immediately after you’ve changed some data to wait for the DOM update.
       * @see https://vuejs.org/v2/api/#Vue-nextTick
       */
      this.$nextTick(() => {
        this.initHeadroom()
      })
    },
    methods: {
      initHeadroom() {
        let _this = this
        let el = this.$refs['headroom']

        let headroom = new Headroom(el, {
          tolerance: 5,
          offset: 205
        })

        headroom.init()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
