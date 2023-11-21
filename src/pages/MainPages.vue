        <template>
  <div class="main">
    <header class="header"></header>
    <main class="main__card">
      <div
        class="card cursor-pointer"
        v-for="(card, index) in DateBackend.results"
        :key="index"
        @click="openCards(card)"
        
      >
        <img
          :src="card.images[0].image"
          :alt="`Изображение ${card.title}`"
    
        />
        <div>
          <div class="card-title flex justify-between mt-1">
            <p v-if="card && card.title">{{ card.title }}</p>
            <p v-if="card && card.price">{{ card.price }} руб</p>
          </div>
          <p class="card-seze">
            {{ card.params.weight }} * {{ card.params.height }}СМ
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

        <script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  computed: mapGetters(["DateBackend"]),
  methods: {
    ...mapActions(["DateFromBackend"]),
    ...mapMutations(["setCurrentCard"]),

    async openCards(card) {
      await this.setCurrentCard(card);
      this.$router.push({
        path: `/CardPages/${card.id}/${encodeURIComponent(
          card.title
        )}/${encodeURIComponent(card.price)}/${encodeURIComponent(
          card.material
        )}/${encodeURIComponent(card.size)}/${encodeURIComponent(
          card.color
        )}/${encodeURIComponent(card.images)}/`,
      });
    },
  },
  async mounted() {
    await this.DateFromBackend();
    console.log(this.DateBackend);
  },
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
  font-size: 7px;
}
.card-title {
  text-transform: uppercase;
  font-size: 10px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
header {
  background: rgb(190, 190, 190);
  width: 100%;
  max-width: 1246px;
  margin: 60px auto 0;
  height: 250px;
}
.main__card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 33px;
  padding: 40px 195px;
}

@media (max-width: 767px) {
  .main__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 17px 0 35px;
  }
}
</style>