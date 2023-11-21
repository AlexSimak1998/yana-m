<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./navbar/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
.app {
  max-width: 1346px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: solid 1px rgba(85, 82, 77, 1);
  border-right: solid 1px rgba(85, 82, 77, 1);
  background: #f1f1ef;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .app {
    padding: 15px;
  }
}
</style>