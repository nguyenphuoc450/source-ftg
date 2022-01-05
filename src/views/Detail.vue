<template>
  <div>
    <GamesDetail v-bind:game="game" v-bind:badgeText="badgeText" />
  </div>
</template>

<script>
import GamesDetail from "../components/games/GamesDetail.vue";
export default {
  name: "Detail",
  components: {
    GamesDetail,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      game: [],
      badgeText: "FREE",
    };
  },
  mounted() {
    // Get data from api
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" +
        this.id,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "fc992028d5mshf0e2294d608259ep117215jsna8b9ca2ee164",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.game = data;
      })
      .catch((error) => console.log("Error:", error));
  },
};
</script>

<style></style>
