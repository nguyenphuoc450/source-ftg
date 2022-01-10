<template>
  <div v-if="allGames.length">
    <GamesRecommend
      v-bind:titleRecommend="titleRecommend"
    />
    <GamesFilter v-bind:totalGames="totalGames" />
    <GamesListCard/>
  </div>

  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      titleRecommend: "Best Free to Play Games for PC and Browser in 2022!",
      totalGames: null,
    };
  },
  computed: {
    ...mapGetters(['allGames', 'allGamesRecommend'])
  },
  methods: {
    ...mapActions(['fetchGames', 'randomGamesRecommend']),

    async handleWait() {
      await this.fetchGames()
      this.randomGamesRecommend()
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

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";
</style>
