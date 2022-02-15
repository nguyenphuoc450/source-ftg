<template>
  <section id="banner" class="banner">
    <h1 class="banner__title">
      Find & track the best
      <span class="banner__title-blue"> free-to-play </span> games!
    </h1>
    <p class="banner__description">
      Track what you've played and search for what to play next! Plus get free
      premium loot!
    </p>
    <div class="banner__links">
      <router-link
        v-bind:to="{ name: 'Register' }"
        class="banner__links-register btn-primary"
      >
        GET STARTED
      </router-link>
      <router-link
        v-bind:to="{ name: 'GamesList' }"
        class="banner__links-games btn-secondary"
      >
        Browse Games
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/color.scss";

#banner {
  background-image: url("../assets/banner.png");
}
.banner {
  padding: 60px 0;
  text-align: center;
  &__title {
    font-size: 32px;
    font-weight: 500;
    color: $color-title;
    &-blue {
      color: $color-blue;
    }
  }
  &__description {
    margin: 24px 0 36px;
    font-size: 18px;
    font-weight: 300;
    color: $color-gray;
  }
  &__links {
    display: flex;
    justify-content: center;
    &-register {
      padding: 12px 16px;
      font-weight: 700;
    }
    &-games {
      padding: 12px 16px;
      margin-left: 12px;
    }
  }
}
// Responsive
@media screen and (max-width: 767px) {
  .banner {
    padding: 32px 0;
    &__title {
      font-size: 26px;
    }
    &__description {
      margin: 18px 0 26px;
    }
  }
}
</style>
