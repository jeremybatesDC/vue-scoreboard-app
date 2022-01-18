<template lang="">
  <div class="text-center counters__wrapper roster">
    <b-row>
      <b-col :hidden="$store.state.winnerOfMostRecentGame === 'b'">
        <PlayerCard class="counter" :showRecord="showRecord" :load="'immediate'" :player="players[0]"/>
        <PlayerCard class="counter" :showRecord="showRecord" :load="loadPlayers" v-if="$store.state.teamFormat === 'pair'" :player="players[1]"/>
      </b-col>
      <b-col cols="1" class="col-vs" :hidden="winningTeam">
        <div class="d-flex text-center h-100 justify-content-center align-items-center">
          <div class="font-weight-bold" >VS</div>
        </div>
      </b-col>
      <b-col :hidden="$store.state.winnerOfMostRecentGame === 'a'">
        <PlayerCard class="counter" :showRecord="showRecord" :load="'immediate'" :player="players[2]"/>
        <PlayerCard class="counter" :showRecord="showRecord" :load="loadPlayers" v-if="$store.state.teamFormat === 'pair'" :player="players[3]"/>
      </b-col>
    </b-row>
  </div>
</template>
<script>

import PlayerCard from '@/components/PlayerCard.vue';
import foosballData from '@/assets/foosball_players.json'

export default {
  name: 'ActivePlayers',
  props: {
    winningTeam: {
      type: String,
    },
    loadPlayers: {
      type: String,
    },
    // not really a boolean
    showRecord: {
      type: String,
    },
  },
  components: {
    PlayerCard
  },
  data() {
    return {
      players: foosballData.foosball_players
    }
  },
}
</script>
<style lang="scss">
  .counters__wrapper {
    counter-reset: players;
  }
  .roster {
    padding-bottom: 4.5rem;
  }

  .col-vs {
    // scales up to the 40px shown in the design
    font-size: clamp(1.5rem, 0.6176rem + 2.9412vw, 2.5rem);
  }
</style>