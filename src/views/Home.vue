<template>
  <div id="home" v-if="allGames.length">
    <Banner />
    <GamesRecommend
      v-bind:titleRecommend="titleRecommend"
      v-bind:allGamesRecommend="allGamesRecommend"
    />
    <GamesContent/>
    <GamesCommunityRecommend/>
    <Reward />
  </div>
  <Loading v-else/>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Banner from "../components/Banner.vue";
import GamesRecommend from "../components/games/GamesRecommend.vue";
import GamesContent from "../components/games/GamesContent.vue";
import GamesCommunityRecommend from "../components/games/GamesCommunityRecommend.vue";
import Reward from "../components/Reward.vue";
import Loading from "../components/common/Loading.vue";

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
      titleRecommend: "Personalized Recommendations",
    };
  },
  computed: {
    ...mapGetters(['allGames', 'allGamesRecommend'])
  },
  methods: {
    ...mapActions(['fetchGames', 'randomGamesRecommend', 'randomGamesRecentlyAdded', 'randomGamesMostPlayed', 'randomGamesCommunityRecommend']),

    async handleWait() {
      await this.fetchGames()
      this.randomGamesRecommend()
      this.randomGamesRecentlyAdded()
      this.randomGamesMostPlayed()
      this.randomGamesCommunityRecommend()
    }
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  mounted() {
    this.handleWait()
  },
};
</script>
