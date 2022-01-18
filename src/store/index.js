import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamFormat: 'pair',
    numberOfGames: 3,
    currentNumberOfPlayers: 0,
    maxPlayers: 4,
    player1TeamA:{},
    player2TeamA:{},
    player1TeamB:{},
    player2TeamB:{},
    scoreTeamA: 0,
    scoreTeamB: 0,
    winnerOfMostRecentGame: '',
    players:[],
  },
  mutations: {
    incrementPlayerCount(state){
      state.currentNumberOfPlayers++;
    },
    zeroPlayerCount(state){
      state.currentNumberOfPlayers = 0;
    },
    clearWinner(state){
      state.winnerOfMostRecentGame = '';
    },
    setWinningTeam(state, payload){
      state.winnerOfMostRecentGame = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
