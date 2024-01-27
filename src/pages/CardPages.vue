<template>
  <div class="card">
    <div class="card__lefr">
      <Slider :images="currentCard.images" :class="{ 'displey-none': windowWidth < 780 }" />
      <SliderMobil :images="currentCard.images" :class="{ 'displey-none': windowWidth >= 780 }" />
    </div>
    <div class="line"></div>
    <div class="card__rigth">
      <div class="card__rigth-header flex justify-between">
        <div class="card__rigth-title-price">
          <div class="card__rigth-title">
            <h4>{{ currentCard.title }}</h4>
          </div>
          <div class="card__rigth-price ">
            <p>{{ currentCard.price }} РУБ</p>
          </div>
        </div>
        <router-link :to="`/FormPages/${currentCard.title}`" class="self-end">
          <my-btn class="my-btn-card ">ХОЧУ КУПИТЬ</my-btn>
        </router-link>

      </div>
      <hr>

      <div class="card__rigth-body flex">

        <div class="card__rigth-size">
          <h3>РАЗМЕР</h3>
          <p>{{ currentCard.params.height }}*{{ currentCard.params.width }} СМ </p>
        </div>



        <div class="card__rigth-color">
          <h3>ЦВЕТ</h3>
          <div class="flex items-center">
            <p>{{ currentCard.params.colors[0].title }}</p>
          </div>
        </div>




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


        <div class="card__rigth-info">
          <h3>МАТЕРИАЛ</h3>
          <div class="flex">
            <p v-for="(material, index) in currentCard.params.materials" :key="material">
              {{ material.title }}
              <span v-if="index < currentCard.params.materials.length - 1">,
              </span>
            </p>
          </div>
          <div class="flex">
            <p v-for="(material, index) in currentCard.params.materials" :key="material">
              {{ material.title }}
              <span v-if="index < currentCard.params.materials.length - 1">,
              </span>
            </p>
          </div>
        </div>



        <div class="card__rigth-delivery">
          <h3>ДОСТАВКА</h3>
          <div>
            <p> Производится по всей России.</p>
            <p>Стоимость зависит от города, размера и количества предметов.</p>
            <p>Стоимость доставки будет рассчитана индивидуально при оформлении заказа.</p>
            <p>Посылки отправляются в течении 10 рабочих дней.</p>
            <p>Если у вас есть какие-либо вопросы, свяжитесь со мной по кнопке “хочу купить”</p>
          </div>

        </div>
      </div>
    </div>
    <MyModal v-model:show="modal" />
  </div>
</template>

<script>
import MyBtn from "../elements/MyBtn.vue";
import Slider from "../elements/Slider.vue";
import SliderMobil from "../elements/SliderMobil.vue";
import { mapState } from "vuex";
import MyModal from "../elements/MyModal.vue";

export default {
  data() {
    return {
      modal: false
    }
  },
  components: { MyBtn, Slider, SliderMobil, MyModal },
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

.card__lefr {
  width: 50%;
  display: block;
  justify-content: center;
  padding: 40px;
  min-height: 100vh;
}

.card__rigth {
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 50%;
  min-height: 100vh;
}

.card__rigth-header {
  margin-top: 40px;
  height: 132px;
}

hr {
  border-top: 0.5px solid #55524D;
  margin-top: 10px;
}

.card__rigth-body {
  flex-direction: column;
  height: 100%;
  padding: 0 0 33px;
}

.card h3 {
  color: #383838;
  font-family: "Zen Dots";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 60px;
}

.card p {
  color: #6B6B6B;
  font-family: "Zen Antique Soft";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

.card {
  display: flex;
  min-height: 100vh;
}

.my-btn-card {
  padding: 8px 48px 9px 47px;
  flex-shrink: 0;
  color: #F1F1EF;
  font-family: "Zen Dots";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  background: #383838;
}

@media (max-width: 767.98px) {

  .card__rigth-price p {
    margin-top: 1px;
    color: #6B6B6B;
    font-size: 10px;
  }

  .card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

  }

  .card__lefr {
    padding: 45px 0 0;
    width: 100%;
    min-height: 100%;
  }

  .line {
    display: none;
  }

  .card__rigth {
    min-height: 100%;
    padding: 0px 15px;
    width: 100%;

  }

  .card h3 {
    margin-top: 20px;
  }

  .card p {
    margin-top: 3px;
    color: #6B6B6B;
    font-size: 10px;
    font-weight: 400;
  }

  .card__rigth-header {
    margin: 10px 0 0;
    height: 70px;
  }


  h4 {
    color: #383838;
    font-family: "Zen Antique Soft";
    font-size: 18px;
    font-weight: 400;
  }

  .my-btn-card {
    width: 142px;
    height: 20px;
    padding: 0 6px 0 0;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 40px;
  }
}
</style>