<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">

</style>
