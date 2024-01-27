<template>
    <div class="navbar-top">
    <div class="navbar">
      <router-link to="/">
        <h1>YANA.M</h1>
      </router-link>

      <div class="burger flex items-center cursor-pointer">
        <svg width="30" height="11" viewBox="0 0 30 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="30" y2="0.5" stroke="#55524D" />
          <line y1="5.5" x2="30" y2="5.5" stroke="#55524D" />
          <line y1="10.5" x2="30" y2="10.5" stroke="#55524D" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.display-none {
  display: none;
}

.navbar-top {
  background: #f1f1ef;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 40px;
  right: 40px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #4b4b4b;
  font-size: 24px;
  border: solid 1px rgba(85, 82, 77, 1);
  border-top: none;
  background: #f1f1ef;
  height: 40px;
}


@media (max-width: 767px) {

  h1 {
    font-size: 20px;
  }

  .navbar-top {
  background: #f1f1ef;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
}

  .navbar {
    margin: 0 30px;
    padding: 0px 15px;
    height: 30px;
  }
}</style>