<template>
  <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="2"
      :space-between="50"
      :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :breakpoints="{
      '640': {
        slidesPerView: 3
      }
    }"
  >
    <swiper-slide v-for="(logo, index) in logos" :key="index">
      <img :src="logo.src" :alt="logo.alt" class="logo-image"/>
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, A11y} from 'swiper/modules';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      logos: [
        {src: require('@/assets/logos/logo1.svg'), alt: 'Logo 1'},
        {src: require('@/assets/logos/logo2.svg'), alt: 'Logo 2'},
        {src: require('@/assets/logos/logo3.svg'), alt: 'Logo 3'},
        {src: require('@/assets/logos/logo4.svg'), alt: 'Logo 4'},
        {src: require('@/assets/logos/logo5.svg'), alt: 'Logo 5'},
        {src: require('@/assets/logos/logo6.svg'), alt: 'Logo 6'},
        {src: require('@/assets/logos/logo7.svg'), alt: 'Logo 7'},
        {src: require('@/assets/logos/logo8.svg'), alt: 'Logo 8'}
      ]
    };
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination, A11y],
    };
  },
};
</script>

<style>
.swiper-slide {
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 2rem;

  img {
    margin: auto;
    align-self: center;
    display: flex;
    max-height: 3rem;
    height: 100%;
  }
}

.swiper-pagination {
  top: 3.5rem !important;
}
</style>
