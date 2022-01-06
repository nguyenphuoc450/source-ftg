<template>
  <div id="home" v-if="gamesList.length">
    <Banner />
    <GamesRecommend
      v-bind:badgeText="badgeText"
      v-bind:titleRecommend="titleRecommend"
      v-bind:gamesRecommend="gamesRecommend"
      v-bind:handleTextTitle="handleTextTitle"
    />
    <GamesContent
      v-bind:badgeText="badgeText"
      v-bind:gamesRecentlyAdded="gamesRecentlyAdded"
      v-bind:gamesMostPlayed="gamesMostPlayed"
      v-bind:handleTextTitle="handleTextTitle"
    />
    <GamesCommunityRecommend
      v-bind:badgeText="badgeText"
      v-bind:gamesCommunityRecommend="gamesCommunityRecommend"
    />
    <Reward />
  </div>
  <Loading v-else/>
</template>

<script>
import Banner from "../components/Banner.vue";
import GamesRecommend from "../components/games/GamesRecommend.vue";
import GamesContent from "../components/games/GamesContent.vue";
import GamesCommunityRecommend from "../components/games/GamesCommunityRecommend.vue";
import Reward from "../components/Reward.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Home",
  components: {
    Banner,
    GamesRecommend,
    GamesContent,
    GamesCommunityRecommend,
    Reward,
    Loading,
  },
  data() {
    return {
      badgeText: "FREE",
      titleRecommend: "Personalized Recommendations",
      gamesList: [],
      gamesRecommend: [],
      gamesRecentlyAdded: [],
      gamesMostPlayed: [],
      gamesCommunityRecommend: [],
    };
  },
  computed: {},
  methods: {
    // Get random games recommend
    getGamesRecommend() {
      let length = this.gamesList.length - 3;
      let startIndex = Math.floor(Math.random() * length + 1);
      let endIndex = Math.floor(startIndex + 3);
      return (this.gamesRecommend = this.gamesList.slice(startIndex, endIndex));
    },
    // Get games recentlyAdded
    getGamesRecentlyAdded() {
      return (this.gamesRecentlyAdded = this.gamesList.slice(-7).reverse());
    },
    // Get random games most played
    getGamesMostPlayed() {
      let length = this.gamesList.length - 4;
      let startIndex = Math.floor(Math.random() * length + 1);
      let endIndex = Math.floor(startIndex + 4);
      return (this.gamesMostPlayed = this.gamesList.slice(
        startIndex,
        endIndex
      ));
    },
    // Get random games community recommend
    getGamesCommunityRecommend() {
      let length = this.gamesList.length - 2;
      let startIndex = Math.floor(Math.random() * length + 1);
      let endIndex = Math.floor(startIndex + 2);
      return (this.gamesCommunityRecommend = this.gamesList.slice(
        startIndex,
        endIndex
      ));
    },
    // Handle title "Vampire Empire" to "vampire-empire"
    handleTextTitle(title) {
      return title.replace(/\s/g, "-").toLowerCase();
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
          this.getGamesRecommend();
          this.getGamesRecentlyAdded();
          this.getGamesMostPlayed();
          this.getGamesCommunityRecommend();
        }
      })
      .catch((error) => console.log("Error:", error));
  },
};
</script>
