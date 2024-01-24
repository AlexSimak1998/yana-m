<template>
  <div class="main">
    <MyHeader />
    <main class="main__card">
      <div class="card cursor-pointer" v-for="(card, index) in DateBackend.results" :key="index" @click="openCards(card)">
        <img
          :src="formatImageUrl(card.images.find(image => image.general === true)?.image)"
          :alt="`Изображение ${card.title}`"
        />
        <div>
          <div class="card-title flex justify-between mt-1">
            <p>{{ card.title }}</p>
            <p>{{ card.price }} руб</p>
          </div>
          <p class="card-seze">
            {{ (card.params.weight).toString().slice(0, -1) }}*{{ (card.params.height).toString().slice(0, -1) }}СМ
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import MyHeader from '../elements/my-header.vue';

export default {
  computed: mapGetters(["DateBackend"]),
  methods: {
    ...mapActions(["DateFromBackend"]),
    ...mapMutations(["setCurrentCard"]),
    formatImageUrl(url) {
      if (!url) return '';
      if (url.startsWith('http://')) {
        return `https${url.substring(4)}`;
      }
      return url;
    },
    async openCards(card) {
      await this.setCurrentCard(card);
      this.$router.push({ path: `/CardPages` });
    },
  },
  async mounted() {
    await this.DateFromBackend();
    console.log(this.DateBackend.results);
  },
  components: { MyHeader },
};
</script>

  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-seze {
    color: #797979;
    font-size: 10px;
  }

  .card-title {
    text-transform: uppercase;
    font-size: 14px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 55px 20px 65px;

  }

  .main__card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 40px;
  }

  .main__card img {
    width: 279px;

    height: 349px;

  }

  @media (max-width: 1300px) {
    .main__card img {
      width: 100%;
      height: 100%;

    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .main__card {
      grid-template-columns: repeat(3, 1fr);


    }
  }

  @media (max-width: 767px) {
    .main__card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      padding: 17px 0 0;

    }

    .main {
      padding: 45px 15px 50px;
    }

    .card-seze {
      font-size: 7px;
    }

    .card-title {
      font-size: 10px;
    }
  }</style>