<template>
    <swiper
      :navigation="true"
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
    import 'swiper/css/navigation';
    import '../assets/stylesSlider.css';
    import {Navigation } from 'swiper/modules';
  
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
          modules: [ Navigation],
        };
      },
    };
  </script>
  
  <style scoped>

  </style>