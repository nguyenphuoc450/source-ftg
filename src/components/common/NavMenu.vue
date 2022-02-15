<template>
  <nav id="nav-menu">
    <NavMenuDesktop/>
    <NavMenuMobile/>
  </nav>
</template>

<script>
import NavMenuDesktop from '../common/NavMenuDesktop.vue'
import NavMenuMobile from '../common/NavMenuMobile.vue'
export default {
  name: "NavMenu",
  components: {
    NavMenuDesktop,
    NavMenuMobile
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/color.scss";

#nav-menu {
  position: sticky;
  top: 0;
  padding: 6px 0;
  background: #272b30;
  border-bottom: 1px solid rgba(28, 28, 28, 0.6);
  z-index: 1000;
}

@media (min-width: 992px) {
  #nav-menu {
    .nav-menu-mobile{
      display: none;
    }
  }
}
@media (max-width: 991px) {
  #nav-menu {
    .nav-menu-desktop{
      display: none;
    }
    .nav-menu-mobile{
      display: grid;
    }
  }
}
</style>
