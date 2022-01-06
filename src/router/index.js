import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import GamesList from '../views/games/GamesList.vue'
import GamesCategory from '../views/games/GamesCategory.vue'
import GamesDetail from '../views/games/GamesDetail.vue'
import Search from '../views/Search.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/games',
    name: 'GamesList',
    component: GamesList
  },
  {
    path: '/games/:category',
    name: 'GamesCategory',
    component: GamesCategory
  },
  {
    path: '/:id',
    name: 'GamesDetail',
    component: GamesDetail,
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
