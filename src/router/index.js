import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckinView from '../views/CheckinView.vue'
import GameView from '../views/GameView.vue'
import VictoryView from '../views/VictoryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Standings',
    component: HomeView
  },
  {
    path: '/checkin',
    name: 'CheckIn',
    component: CheckinView
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView
  },
  {
    path: '/victory',
    name: 'Victory',
    component: VictoryView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
