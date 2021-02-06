<template>
  <div id="app">
    <div class="logo-img mx-auto">
      <img alt="Nasa logo" src="./assets/logo.png" />
    </div>
    <Nasa />
  </div>
</template>

<script>
import Nasa from "./pages/Nasa.vue";

export default {
  name: "App",
  components: {
    Nasa,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .logo-img {
    width: 200px;
    img {
      width: 100%;
    }
  }
}
</style>
