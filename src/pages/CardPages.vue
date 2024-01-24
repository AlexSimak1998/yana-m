<template>
  <div class="card">
    <div class="card__lefr">
      <Slider :images="currentCard.images" :class="{ 'displey-none': windowWidth < 780 }" />
      <SliderMobil :images="currentCard.images" :class="{ 'displey-none': windowWidth >= 780 }" />
    </div>
    <div class="line"></div>
    <div class="card__rigth">
      <div class="card__rigth-header flex justify-between items-end">
        <div class="card__rigth-title-price">
          <div class="card__rigth-title">
            <h4>{{ currentCard.title }}</h4>
          </div>
          <div class="card__rigth-price">
            <h4>{{ currentCard.price }} РУБ</h4>
          </div>
        </div>
        <my-btn class="my-btn-card">ХОЧУ КУПИТЬ</my-btn>
      </div>
      <div class="card__rigth-body flex">
        <div class="card__rigth-material">
          <h3>МАТЕРИАЛ</h3>
          <div class="flex">
            <p v-for="(material, index) in currentCard.params.materials" :key="material">
              {{ material.title }}
              <span v-if="index < currentCard.params.materials.length - 1">,
              </span>
            </p>
          </div>
        </div>
        <div class="card__rigth-color">
          <h3>ЦВЕТ</h3>
          <div class="flex items-center">
            <p>{{ currentCard.params.colors[0].title }}</p>
            <div class="hex" :style="{ 'background-color': '#' + currentCard.params.colors[0].hex }"
              :title="'#' + currentCard.params.colors[0].hex">

            </div>
          </div>
        </div>
        <div class="card__rigth-size">
          <h3>РАЗМЕР</h3>
          <p>{{ currentCard.params.height }}*{{ currentCard.params.width }} СМ </p>
        </div>
        <div class="card__rigth-delivery">
          <h3>ДОСТАВКА</h3>
          <p>{{ currentCard.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MyBtn from "../elements/MyBtn.vue";
import Slider from "../elements/Slider.vue";
import SliderMobil from "../elements/SliderMobil.vue";
import { mapState } from "vuex";

export default {
  components: { MyBtn, Slider, SliderMobil },
  computed: {
    ...mapState(["currentCard"]),
    windowWidth() {
      return window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowWidth);
    this.updateWindowWidth();
  },
  methods: {
    updateWindowWidth() {
      this.$nextTick(() => {
        console.log(this.windowWidth);
      });
    },
  },
};
</script>


<style scoped>
.displey-none {
  display: none;
}

.line {
  min-height: 100vh;
  width: 0.5px;
  background: rgba(85, 82, 77, 1);
}

.hex {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 9px 0 0 9px;
}

.card__lefr {
  width: 50%;
  display: block;
  justify-content: center;
  padding: 40px;
}

.card__rigth {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 30px;
  width: 50%;
}

.card__rigth-body {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: 400px;
}

.card h3 {
  font-size: 14px;
}

.card p {
  font-size: 12px;
  margin-top: 9px;

}

.card {
  display: flex;
  height: calc(100vh - 80px);
  margin: 40px 0;
}

@media (max-width: 767.98px) {

  .card__rigth-price{
    margin-top: 8px;
  }
  .hex {
    margin: 0px 0 0 9px;
  }

  .card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

  }

  .card__lefr {
    padding: 45px 0 0;
    width: 100%;
  }

  .line {
    display: none;
  }

  .card__rigth {
    height: 100%;
    padding: 10px 15px 50px;
    width: 100%;
    
  }

  .card__rigth-header {
    margin-bottom:11px;
  }

  .card p {
    font-size: 10px;
    margin: 0px;
  }

  .card h3 {
    font-size: 12px;
    margin-top: 15px;
  }

  .card__rigth-title-price,
  .my-btn-card{
    font-size: 10px;
  }
}</style>