<template>
  <section id="games-recommend">
    <div class="container games-recommend">
      <h3 class="games-recommend__title title">
        <!-- <i class="fas fa-robot"></i> -->
        {{titleRecommend}}
      </h3>
      <div class="games-card">
        <router-link
          class="games-card__item shadow"
          v-for="game in allGamesRecommend"
          :key="game.id"
          v-bind:to="{
            name: 'GamesDetail',
            params: {id: game.id },
          }"
        >
          <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" />
          <div class="games-card__item-body">
            <h4 class="games-card__item-body-name text-line-clamp-1">
              {{ game.title }}
            </h4>
            <span class="games-card__item-body-badge badge">{{
              textBadge
            }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "GamesRecommend",
  props: {
    titleRecommend: String,
    allGamesRecommend: Array,
  },
  computed: {
    ...mapGetters(['textBadge'])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

#games-recommend {
  padding: 48px 0 24px;
}
.games-recommend {
  &__title {
    margin-bottom: 12px;
  }
  .games-card {
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    grid-gap: 15px;
    &__item {
      display: grid;
      background-color: $color-dark;
      border-radius: 4px;
      transition: all ease 0.3s;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0.9rem 1rem rgba(0, 0, 0, 0.199);
      }
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 4px 4px 0 0;
      }
      &-body {
        padding: 18px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-name {
          color: $text-color;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
// Responsive
@media screen and (max-width: 767px) {
  .games-recommend {
    .games-card {
      display: flex;
      overflow-x: auto;
      &__item {
        flex-shrink: 0;
        flex-grow: 0;
        width: 260px !important;
      }
    }
  }
}
</style>
