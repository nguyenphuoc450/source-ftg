<template>
  <div id="app">
    <NavMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavMenu from "./components/common/NavMenu.vue";
import Footer from "./components/common/Footer.vue";
export default {
  name: "App",
  components: {
    NavMenu,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/base.scss";
#app {
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
