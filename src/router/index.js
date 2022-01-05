import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Games from '../views/Games.vue'
import Category from '../views/Category.vue'
import Detail from '../views/Detail.vue'
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
    name: 'Games',
    component: Games
  },
  {
    path: '/games/:category',
    name: 'Category',
    component: Category
  },
  {
    path: '/:name',
    name: 'Detail',
    component: Detail,
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
