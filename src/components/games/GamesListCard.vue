<template>
  <div class="games-list-card container">
    <router-link
      class="card-game shadow"
      v-for="game in getGamesShow"
      :key="game.id"
      v-bind:to="{ name: 'GamesDetail', params: { id: game.id } }"
    >
      <img v-bind:src="game.thumbnail" v-bind:alt="game.thumbnail" loading="lazy" />
      <div class="card-game__body">
        <h4 class="card-game__body-name title text-line-clamp-1">
          {{ game.title }}
        </h4>
        <p class="card-game__body-description text-line-clamp-1">
          {{ game.short_description }}
        </p>
        <div class="card-game__body-info">
          <span class="card-game__body-info-genre">{{ game.genre }}</span>
          <span class="card-game__body-info-badge badge">{{ textBadge }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "GamesListCard",
  props: {
    allGames: Array
  },
  data() {
    return {
      gamesShow: [],
      limit: 12,
    };
  },
  computed: {
    ...mapGetters(['textBadge']),
    getGamesShow() {
      if(this.allGames)  return (this.gamesShow = this.allGames.slice(0, this.limit));
    },
  },
  methods: {
    // Increase limit to show more games
    increaseLimitGame() {
      if (
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      ) {
        this.limit += 12;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.increaseLimitGame);
  },
  destroyed() {
    window.addEventListener("scroll", this.increaseLimitGame);
  },
  mounted() {
    this.getGamesShow;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";

.games-list-card {
  padding: 12px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  .card-game {
    background: $color-dark;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    transition: all ease 0.3s;
    animation: fadeIn linear 0.3s;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0.9rem 1rem rgba(0, 0, 0, 0.199);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px 4px 0 0;
    }
    &__body {
      padding: 16px;
      &-name {
        font-size: 18px;
      }
      &-description {
        margin: 12px 0;
        color: $text-color;
        font-size: 14px;
      }
      &-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        &-genre {
          padding: 2px 4px;
          color: $text-dark;
          font-weight: 600;
          background-color: $color-gray;
          border-radius: 4px;
        }
        &-badge {
          padding: 4px;
        }
      }
    }
  }
}
</style>
