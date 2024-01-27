<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
      <swiper-slide  v-for="img in images" :key="img.id">
        <img :src="img.image" alt="">
      </swiper-slide>
      
    </swiper>
  </template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css';

import 'swiper/css/pagination';

import '../assets/stylesSlider.css';

import { Pagination } from 'swiper/modules';

export default {
  props:{
    images:Array
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>