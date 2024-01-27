<template>
  <section class="slider">
    <div class="slider__flex">
      <div class="slider__col">
        <div class="slider__prev" @click="slidePrev" v-if="images.length >= 5">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="24" y="24" width="24" height="24" transform="rotate(-180 24 24)" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_115_5" transform="scale(0.0416667)" />
              </pattern>
              <image id="image0_115_5" width="24" height="24"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nGNgGAWjYBQMCChnYGD4Tyaup6Ul9bT0ST3J4USCJfXkGk6MJfWUGo7PEqoZjs0SqhsOAw1QPApGwXACABD8P4Or4XXCAAAAAElFTkSuQmCC" />
            </defs>
          </svg>
        </div>
        <div class="slider__thumbs">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(img, index) in images" :key="index">
                <div class="slider__image imgCol">
                  <img :src="img.image" alt="" @click="selectImage(index)" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider__next" @click="slideNext" v-if="images.length >= 5">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="24" height="24" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_115_2" transform="scale(0.0416667)" />
              </pattern>
              <image id="image0_115_2" width="24" height="24"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nGNgGAWjYBQMCChnYGD4Tyaup6Ul9bT0ST3J4USCJfXkGk6MJfWUGo7PEqoZjs0SqhsOAw1QPApGwXACABD8P4Or4XXCAAAAAElFTkSuQmCC" />
            </defs>
          </svg>
        </div>
      </div>
      <div class="slider__images">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img, index) in images" :key="index">
              <div class="slider__image">
                <img :src="img.image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    images: Array
  },
  data() {
    return {
      sliderThumbs: null,
      sliderImages: null,
    };
  },
  methods: {
    slidePrev() {
      this.sliderThumbs.slidePrev();
    },
    slideNext() {
      this.sliderThumbs.slideNext();
    },
    selectImage(index) {
      this.sliderImages.slideTo(index);
    },
  },
  async mounted() {
    console.log(this.images.length);
    this.sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 40,

      navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",
      },
      freeMode: true,
      breakpoints: {
        0: {
          direction: "horizontal",
        },
        768: {
          direction: "vertical",
        },
      },
    });

    this.sliderImages = new Swiper(".slider__images .swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 40,
      mousewheel: true,
      navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev",
      },
      grabCursor: true,
      thumbs: {
        swiper: this.sliderThumbs,
      },
      breakpoints: {
        0: {
          direction: "horizontal",
        },
        768: {
          direction: "vertical",
        },
      },
    });
  },
};
</script>

<style>

.slider {
  height: calc(100vh - 80px);
  position: fixed;
  top: 40px;
  left: 80px;
  width: calc(50% - 120px);
}

.slider .swiper-container {
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

.slider__flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slider__col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  max-width: 168px;
  height: 78.3vh;
}

.swiper-slide img {
  width: 100%;
  height: 100%;

}

.slider__prev,
.slider__next {
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 6px;
  margin: 3.3vh;
}

.slider__prev:focus,
.slider__next:focus {
  outline: none;
}

.slider__thumbs {
  height: 61.8vh;
}

.slider__thumbs .slider__image {
  transition: 0.25s;
  -webkit-filter: grayscale(100%);
  filter: none;
  opacity: 0.5;
}

.slider__thumbs .slider__image:hover {
  opacity: 1;
  cursor: pointer;
}

.slider__thumbs .swiper-slide-thumb-active .slider__image {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  opacity: 1;
}

.slider__images {
  flex-grow: 1;
  height: calc(100% - 80px);
}

.slider__images .slider__image img {
  transition: 3s;
  border-radius: 0px;
}

.slider__image {
  width: 100%;
  height: 100%;
  border-radius: 0px;
  overflow: hidden;
}

.slider__image img {
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

}

.imgCol {
  flex-grow: 1;
  height: 17.6vh;
  width: 17.6vh;
}
</style>