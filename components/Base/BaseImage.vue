<template>
  <figure class="image" :class="imageClasses" ref="js-reveal">
    <img class="jarallax-image cover" :class="image.image_position" :src="image.sizes.nocDesktop" :alt="image.alt">
  </figure>
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        required: false
      },
      animated: {
        type: Boolean,
        required: false
      },
      parallax: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {
        classes: ''
      }
    },
    computed: {
      imageClasses() {
        let cl = []

        if( this.type ) {
          cl.push('image--' + this.type)
        }
        if( this.animated ) {
          cl.push('js-reveal')
        }
        if( this.parallax ) {
          cl.push('js-jarallax')
        }

        return cl.join(' ');
      }
    },
    mounted() {
      const steps = document.querySelectorAll('.js-reveal')

      for(let i = 0; i < steps.length; ++i) {
        let scene = this.$scrollmagic.scene({
          triggerElement: steps[i],
          triggerHook: 'onEnter',
          reverse: false
        }).setClassToggle(steps[i], 'animated')
        this.$scrollmagic.addScene(scene)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
