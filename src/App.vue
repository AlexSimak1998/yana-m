<template>
  <div class="app">
    <NavbarHeader />
    <router-view></router-view>
    <NavbarFooter />
  </div>
</template>

<script>
import NavbarHeader from "./navbar/NavbarHeader.vue";
import NavbarFooter from "./navbar/NavbarFooter.vue";
export default {
  components: { NavbarHeader,
    NavbarFooter
  
  },
};
</script>

<style>
.app {
  margin: 0 40px;
  border-left: solid 1px rgba(85, 82, 77, 1);
  border-right: solid 1px rgba(85, 82, 77, 1);
  background: #f1f1ef;

}

@media (max-width: 767px) {
  .app {
    margin: 0 30px;
    padding: 0px;

  }
}
</style>