<template>
  <section id="games-content">
    <div class="container games-content">
      <div class="games-recently-added">
        <h3 class="games-recently-added__title title">Recenly Added</h3>
        <router-link
          class="games-recently-added__card shadow"
          v-for="game in gamesRecentlyAdded"
          :key="game.id"
          v-bind:to="{
            name: 'GamesDetail',
            params: {id: game.id },
          }"
        >
          <div class="games-recently-added__card-image">
            <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" />
          </div>
          <div class="games-recently-added__card-content">
            <h4
              class="games-recently-added__card-content-name text-line-clamp-1"
            >
              {{ game.title }}
            </h4>
            <p
              class="games-recently-added__card-content-description text-line-clamp-1"
            >
              {{ game.short_description }}
            </p>
            <span class="games-recently-added__card-content-genre">
              {{ game.genre }}
            </span>
          </div>
          <span class="games-recently-added__card-badge badge">{{
            badgeText
          }}</span>
        </router-link>

        <router-link
          v-bind:to="{ name: 'GamesList' }"
          class="games-recently-added__btn btn-secondary"
        >
          More Games <i class="fas fa-angle-right"></i>
        </router-link>
      </div>
      <div class="games-most-played">
        <h3 class="games-most-played__title title text-line-clamp-1">
          Most played today
        </h3>
        <router-link
          class="games-most-played__card"
          v-for="game in gamesMostPlayed"
          :key="game.id"
          v-bind:to="{
            name: 'GamesDetail',
            params: { id: game.id },
          }"
        >
          <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" />
          <span class="games-most-played__card-badge badge">
            {{ badgeText }}
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GamesContent",
  props: {
    badgeText: String,
    gamesRecentlyAdded: Array,
    gamesMostPlayed: Array,
    handleTextTitle: Function,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";
#games-content {
  padding: 24px 0;
}
.games-content {
  display: grid;
  grid-template: auto / auto auto;
  grid-gap: 15px;
  .games-recently-added {
    &__card {
      background-color: $color-dark;
      display: grid;
      grid-template: auto / 22% 68% 10%;
      grid-gap: 15px;
      align-items: center;
      margin-top: 12px;
      padding: 12px;
      border-radius: 4px;
      transition: all ease 0.3s;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0.9rem 1rem rgba(0, 0, 0, 0.199);
      }
      &-image {
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }
      &-content {
        &-name {
          font-size: 18px;
          font-weight: 600;
          color: $color-title;
        }
        &-description {
          margin: 6px 0;
          color: $color-gray;
          font-size: 16px;
        }
        &-genre {
          padding: 2px 4px;
          font-size: 12px;
          background-color: $color-gray;
          color: $text-dark;
          font-weight: 500;
          border-radius: 4px;
        }
      }
    }
    &__btn {
      display: block;
      max-width: 140px;
      margin: 24px 0 0 auto;
      padding: 8px 16px;
      font-size: 16px;
    }
  }
  .games-most-played {
    &__card {
      position: relative;
      display: block;
      margin-top: 12px;
      border-radius: 4px;
      transition: all ease 0.3s;
      &:hover {
        transform: scale(1.02);
      }
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
      &-badge {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    }
  }
}
</style>
