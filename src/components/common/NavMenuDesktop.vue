<template>
    <div class="container nav-menu-desktop">
      <div class="nav-menu-desktop__logo">
        <router-link v-bind:to="{ name: 'Home' }">
          <img src="../../assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="nav-menu-desktop__links">
        <!-- Link Left -->
        <div class="nav-menu-desktop__links-left">
          <router-link
            class="nav-menu-desktop__links-left-item"
            v-bind:to="{ name: 'GamesList' }"
          >
            GamesList
          </router-link>
        </div>
        <!-- Link right -->
        <div class="nav-menu-desktop__links-right">
          <router-link
            class="nav-menu-desktop__links-right-item"
            v-bind:to="{ name: 'Search' }"
            title="Search"
          >
            <i class="fas fa-search"></i>
          </router-link>
          <router-link
            class="nav-menu-desktop__links-right-item"
            v-bind:to="{ name: 'Login' }"
          >
            Login
          </router-link>
          <router-link
            class="nav-menu-desktop__links-right-item register"
            v-bind:to="{ name: 'Register' }"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "NavMenuDesktop",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

.nav-menu-desktop {
  display: grid;
  align-items: center;
  grid-template: auto / 165px 1fr;
  &__links {
    display: grid;
    grid-template: auto / 1fr 1fr;
    a {
      padding: 12px 16px;
      display: inline-block;
      color: $text-nav-color;
      transition: all ease 0.3s;
      &:hover {
        color: $color-hover;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &-item.register {
        border: 1px solid $color-blue;
        border-radius: 4px;
        color: $color-blue;
        &:hover {
          border-color: $color-hover;
        }
      }
    }
  }
}
</style>
