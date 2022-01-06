<template>
  <div v-if="gamesList.length">
    <GamesRecommend
      v-bind:titleRecommend="titleRecommend"
      v-bind:badgeText="badgeText"
      v-bind:gamesRecommend="gamesRecommend"
    />
    <GamesFilter v-bind:totalGames="totalGames" />
    <GamesListCard v-bind:badgeText="badgeText" v-bind:gamesList="gamesList" />
  </div>

  <Loading v-else />
</template>

<script>
import GamesRecommend from "../../components/games/GamesRecommend.vue";
import GamesFilter from "../../components/games/GamesFilter.vue";
import GamesListCard from "../../components/games/GamesListCard.vue";
import Loading from "../../components/Loading.vue";
export default {
  name: "Games",
  components: {
    GamesRecommend,
    GamesFilter,
    GamesListCard,
    Loading,
  },
  data() {
    return {
      gamesList: [],
      badgeText: "FREE",
      titleRecommend: "Best Free to Play Games for PC and Browser in 2022!",
      gamesRecommend: [],
      totalGames: null,
    };
  },
  methods: {
    // Get random games best free to play
    getGamesBestFreeToPlay() {
      let length = this.gamesList.length - 3;
      let startIndex = Math.floor(Math.random() * length + 1);
      let endIndex = Math.floor(startIndex + 3);
      return (this.gamesRecommend = this.gamesList.slice(startIndex, endIndex));
    },
  },
  mounted() {
    // Get data from api
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.gamesList = data;
        // Get games by condition
        if (this.gamesList.length) {
          this.getGamesBestFreeToPlay();
          this.totalGames = this.gamesList.length;
        }
      })
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";
</style>
