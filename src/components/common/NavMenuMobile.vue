<template>
  <div class="container">
      <div class="nav-menu-mobile" v-bind:class="isActive ? 'active' : '' ">
          <div class="nav-menu-mobile__icon open"  v-on:click="ToggleMenu">
              <i class="fas fa-bars"></i>
          </div>
          <div class="nav-menu-mobile__wrapper">
              <div class="nav-menu-mobile__icon close" v-on:click="ToggleMenu">
                  <i class="fas fa-times" v-if="isActive"></i>
              </div>
            <ul>
                <li class="nav-menu-mobile__link">
                    <router-link
                        v-bind:to="{ name: 'GamesList' }"
                    > 
                    GameList
                    </router-link>
                </li>
                <li class="nav-menu-mobile__link">
                    <router-link
                        v-bind:to="{ name: 'Search' }"
                        title="Search"
                    >
                        Search
                    </router-link>
                </li>
                <li class="nav-menu-mobile__link">
                    <router-link
                        v-bind:to="{ name: 'Login' }"
                    >
                        Login
                    </router-link>
                </li>
                <li class="nav-menu-mobile__link">
                    <router-link
                        v-bind:to="{ name: 'Register' }"
                    >
                        Register
                    </router-link>
                </li>
            </ul>
          </div>
          <div class="nav-menu-mobile__logo">
            <router-link v-bind:to="{ name: 'Home' }">
            <img src="../../assets/logo.png" alt="" />
            </router-link>
        </div>
        <div class="overlay" v-on:click="ToggleMenu"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavMenuMobile',
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        ToggleMenu() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/color.scss';

.nav-menu-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
        .nav-menu-mobile__wrapper {
            transform: translateX(0);
            opacity: 1;
        }
        .overlay {
            display: block;
        }
    }
    &__icon {
        position: absolute;
        left: 25px;
        top: 10px;
        font-size: 36px;
        font-weight: 200;
        z-index: 1000;
        cursor: pointer;
        i {
            animation: fadeIn ease 0.3s;
        }
    }
    &__wrapper {
        width: 30%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        padding-top: 48px;
        background: $text-dark;
        transform: translateX(-100%);
        opacity: 0;
        transition: all ease 0.3s;
        z-index: 1000;
        ul {
            margin-top: 24px;
        }
        .nav-menu-mobile__link {
            display: block;
            padding: 24px 36px;
            background-color: transparent;
            border-top: 1px solid $text-color;
            transition: all ease 0.3s;
            &:hover {
                background-color: #3a3f44;
            }
            a {
                display: block;
                color: #fff;
                font-size: 18px;
                background: transparent;
            }
        }
        
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        animation: fadeIn ease 0.3s;
        cursor: pointer;
        display: none;
    }
}

</style>