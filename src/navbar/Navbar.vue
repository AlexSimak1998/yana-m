<template>

</template>

<script>
export default {
  computed: {
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
    insta() {
      window.location.href = 'https://www.figma.com/file/wLXPYuSqGBN1oGasLvncOe/YANA.M?node-id=1%3A59&mode=dev'
    }
  }
};
</script>

<style scoped>
.display-none {
  display: none;
}

.navbar-bottom {
  margin: 0 auto;
  background: #f1f1ef;
}

.navbar-top {
  margin: 0 40px;
  background: #f1f1ef;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

.navbar-b {
  margin: 0 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px;
  color: #4b4b4b;
  font-size: 24px;
  border: solid 1px rgba(85, 82, 77, 1);
  border-bottom: none;
}

@media (max-width: 767px) {
  h1 {
    font-size: 20px;
  }

  .navbar-bottom,
  .navbar-top {
    width: 100%;
    margin: 0px;
  }

  .navbar-b {
    margin: 0 30px;
    justify-content: space-between;
    padding: 0 15px;
  }

  .navbar {
    margin: 0 30px;
    padding: 0px 15px;
  }
}</style>