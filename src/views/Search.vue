<template>
  <div class="search">
    <div class="container">
      <h1 class="search__title title">
        <i class="fas fa-search mr-2"></i>
        Find Games
      </h1>
      <div class="border-line"></div>
      <div class="search__btn">
        <input type="text" placeholder="Search for games" v-model="onSearch" v-on:input="filterGamesBySearch">
      </div>
    </div>
    <GamesListCard v-bind:allGames="gamesFilter"/>
    <GamesRecommend 
      v-if="!gamesFilter.length"
      v-bind:allGamesRecommend="allGamesRecommend" 
      v-bind:titleRecommend="title" 
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GamesRecommend from '../components/games/GamesRecommend.vue'
import GamesListCard from '../components/games/GamesListCard.vue'
export default {
  name: 'GamesSearch',
  components: {
    GamesRecommend,
    GamesListCard
  },
  data() {
    return {
      title: 'You may like',
      onSearch: '',
      gamesFilter: []
    }
  },
  computed: {
    ...mapGetters(['allGames','allGamesRecommend']),
  },
    methods: {
    ...mapActions(['fetchGames', 'randomGamesRecommend']),
    async handleWait() {
      await this.fetchGames()
      this.randomGamesRecommend()
    },
    filterGamesBySearch() {
      return this.gamesFilter = this.allGames.filter(game => game.title.toLowerCase().includes(this.onSearch))
    }
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  mounted() {
    this.handleWait()
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/color.scss';

.search {
  padding: 48px 0;
  &__title {
    font-size: 36px;
  }
  &__btn {
    input {
      padding: 8px 16px;
      background-color: #1c1e22;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      outline: none;
      font-size: 24px;
      color: $text-color;
      transition: all ease 0.3s;
      &:focus {
        border-color: $color-blue;
      }
    }
  }
}
</style>