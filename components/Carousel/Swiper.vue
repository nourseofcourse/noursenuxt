<template>
  <div class="swiper-container  carousel" ref="js-swiper">
    <div class="swiper-wrapper  caroursel__wrapper">
      <SwiperSlide><div class="cover-slider" :style="{'background-image': 'url(' + require('@/assets/images/06_about_us.jpg') + ')'}"></div></SwiperSlide>
      <SwiperSlide><div class="cover-slider" :style="{'background-image': 'url(' + require('@/assets/images/08_open_menu.jpg') + ')'}"></div></SwiperSlide>
      <SwiperSlide><div class="cover-slider" :style="{'background-image': 'url(' + require('@/assets/images/9_news.jpg') + ')'}"></div></SwiperSlide>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="carousel__controls swiper-control">
			<div class="carousel__prev-button">
        <i class="fad fa-angle-up"></i>
			</div>
      <div class="carousel__next-button">
        <i class="fad fa-angle-down"></i>
			</div>
		</div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import SwiperSlide from '@/components/Carousel/SwiperSlide.vue';
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'

  export default {
    data() {
      return {
        image: ''
      }
    },
    components: {
      SwiperSlide
    },
    mounted() {
      let el = this.$refs['js-swiper']
      let mySwiper = new Swiper(el, {
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.carousel__next-button',
          prevEl: '.carousel__prev-button',
        },
      })
    }
  }
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 45vw;
}
.cover-slider {
      background-size: cover;
    background-position: center center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
</style>
