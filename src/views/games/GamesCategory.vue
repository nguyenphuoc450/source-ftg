<template>
  <div class="" v-if="allGamesByFilter.length">
      <GamesRecommend 
        v-bind:allGamesRecommend="allRandomGamesByFilter"
        v-bind:titleRecommend="getTitle"
      />
      <GamesFilter v-bind:totalGames="getTotalGames" v-on:onSelectCategory="handleSelectCategory"/>
      <GamesListCard v-bind:allGames="allGamesByFilter"/>
  </div>
  <Loading v-else/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GamesRecommend from '../../components/games/GamesRecommend.vue'
import GamesListCard from '../../components/games/GamesListCard.vue'
import GamesFilter from '../../components/games/GamesFilter.vue'
import Loading from '../../components/common/Loading.vue'
export default {
  name: 'GamesCategory',
  components: {
    GamesRecommend,
    GamesListCard,
    GamesFilter,
    Loading
  },
  props: {
    category: null
  },
  data() {
    return {
      titleRecommend: '',
      url: ''
    }
  },
  computed: {
    ...mapGetters(['allGamesByFilter', 'allRandomGamesByFilter']),
    getTotalGames() {
      return this.allGamesByFilter.length
    },
    getTitle() {
      let category = this.category.toUpperCase();
      return  `Best Free ${category} for PC and Browser in 2022!`
    },
    getUrl(){
      if(this.category.includes('pc')) {
        return this.url = 'platform=pc'
      }
      else if(this.category.includes('browser')) {
        return this.url = 'platform=browser'
      }
      else if(this.category.includes('all-platform')) {
        return this.url = ''
      }
      else if( this.category.includes('relevance') ||
          this.category.includes('popularity') ||
          this.category.includes('release') ||
          this.category.includes('alphabetical')
      ) {
        return this.url = `sort-by=${this.category}`
      }
      else if(this.category.includes('all-Genres')) {
        return this.url = ''
      }
      else {
        return this.url = `category=${this.category}`
      }
    }
  },
  methods: {
    ...mapActions(['filterGames', 'randomGamesByFilter']),
    async handleWait() {
      await this.filterGames(this.category)
      this.randomGamesByFilter()
    },
    async handleSelectCategory(e) {
      await this.filterGames(e)
      this.randomGamesByFilter()
    }
  },
  created() {
    this.handleWait()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/color.scss';

</style>