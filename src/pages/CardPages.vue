<template>
  <div class="card">
    <div class="card__lefr">
      <Slider :images="currentCard.images" :class="{'displey-none': windowWidth < 780}" />
      <SliderMobil :images="currentCard.images" :class="{'displey-none': windowWidth >= 780}" />
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
        <my-btn>ХОЧУ КУПИТЬ</my-btn>
      </div>
      <div class="card__rigth-body flex">
        <div class="card__rigth-material">
          <h3>МАТЕРИАЛ</h3>
          <div class="flex">
            <p v-for="(material, index) in currentCard.params.materials" :key="material.id">
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
          <p>{{ currentCard.params.height }} * {{ currentCard.params.width }} СМ </p>
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
import store from "../store/store";
import { mapState } from "vuex";

export default {
  components: { MyBtn, Slider,SliderMobil },
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
        console.log(this.windowWidth); // Ширина окна теперь обновляется динамически
      });
    },
},
};
</script>


<style scoped>
.displey-none{
  display: none;
}
.line{
  min-height:100vh;
  width: 2px;
  background: black;
}

.hex {
  border-radius: 50%;
  width: 15px;
  height: 15px; 
  margin:9px 0 0 9px;
}

.card__lefr{
  padding:0 27px;
}
.card__rigth {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 532px;
  padding:0 27px;
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
  align-items: center;
  justify-content: center;
}
@media (max-width: 767.98px) {
  .hex {
  margin:0px 0 0 9px;
}

  .card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .card__lefr{
  padding:35px 0 0;
}
  .line{
    display: none;
  }

  .card__rigth[data-v-866156b9]{
   max-height: 500px;
   height: 100%;
    padding:10px 0px 37px ;
  } 
  .card__rigth-header{
    margin-bottom: 26px;
  }
  .card p {
  font-size: 10px;
  margin: 0px;
}
.card h3 {
  font-size: 12px;
  margin-top: 7px;
}
}
</style>