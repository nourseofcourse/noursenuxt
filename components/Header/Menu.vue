<template>
  <div class="site-menu" ref="js-site-menu">
    <div class="site-menu__wrapper">
      <nav class="site-menu__nav  site-nav" ref="js-site-nav">
        <ul class="site-nav__list list-bare">
          <li class="site-nav__item"
              v-for="(item, index) in items"
              :key="index"
              :item="item">
            <nuxt-link :to="{ name: item.slug }" class="site-nav__link"><span>{{ item.title }}</span></nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="site-menu__contact">
        <a href="tel:+1-111-1111" class="phone">+1 (813) 123-1234 –</a>
        <a href="mailto:hello@nourseofcourse.com" class="email"
          >hello@nourseofcourse.com –</a
        >
      </div>
      <div class="site-menu__hire">
        <span>Want to work together?</span>
        <nuxt-link :to="{ name: 'contact' }">Hire me</nuxt-link>
      </div>
    </div>
    <div class="site-menu__image">
      <div ref="js-site-nav-image"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { TweenMax, TimelineMax, Power4 } from 'gsap'
  const tl = new TimelineMax()

  export default {
    name: 'Menu',
    computed: {
      isOpen() {
        return this.$store.state.menu.menuOpen
      },
      ...mapState({
        items: state => state.menu.items
      })
    },
    watch: {
      isOpen(status) {
        if(status) {
          this.open()
        } else {
          this.close()
        }
      },
      '$route'() {
        if(this.isOpen) {
          this.close()
          this.$store.dispatch('menu/toggleMenu')
        }
      }
    },
    methods: {
      open() {
        let siteMenu = this.$refs['js-site-menu']
        let siteNavImage = this.$refs['js-site-nav-image']
        this.$store.dispatch('menu/statusUpdate', 'is-disabled')
        tl.to(siteMenu, 0.7, {
          right: 0,
          width: "100vw",
          ease: Power4.easeOut
        }).addCallback(() => {
          this.$store.dispatch('menu/statusUpdate', 'is-open')
        })
        tl.to(siteNavImage, 0.7, {
          left: "-100%",
          ease: Power4.easeOut
        }).addCallback(() => {
          siteNavImage.style.left = "100%";
          siteMenu.classList.add('is-open')
          document.body.classList.add('menu-open')
        })
      },
      close() {
        let siteMenu = this.$refs['js-site-menu']
        let siteNavImage = this.$refs['js-site-nav-image']
        siteMenu.classList.remove('is-open')
        document.body.classList.remove('menu-open')
        tl.to(siteNavImage, 0.7, {
          left: 0,
          ease: Power4.easeOut
        });
        this.$store.dispatch('menu/statusUpdate', 'is-disabled')
        tl.to(siteMenu, 0.5, {
          opacity: 0,
          ease: Power4.easeOut
        });
        // Todo: move the timeline below into a callback above and use el.style
        tl.to(siteMenu, 0, {
          width: 0,
          opacity: 1,
          right: "-100%"
        }).addCallback(() => {
          this.$store.dispatch('menu/statusUpdate', '')
        }, "+=.1");
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
