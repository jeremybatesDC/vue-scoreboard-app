<template>
  <div class="view--home">
    <PageHeader title="Game Over" hasBottomBorder="true" />
    <h2 class="text-center py-5">You win 🎉</h2>
    <ActivePlayers winningTeam="a"  loadPlayers="immediate"/>
    <PageFooter>
      <div class="text-center">
        <b-button @click="goToStandings">
           Go To Standings
          </b-button>
      </div>
    </PageFooter>
  </div>
</template>

<script>

import ActivePlayers from "@/components/ActivePlayers.vue";
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'VictoryView',
  props: {
    winningTeam: {
      type: String,
    }
  },
  components: {
    ActivePlayers,
    PageHeader,
    PageFooter
  },
  methods: {
    goToStandings() {
      this.$store.commit('zeroPlayerCount');
      this.$store.commit('clearWinner');
      this.$router.push('/');
    }
  },
}
</script>


<style lang="scss" scoped>

h2 {
  //maxes out at 150px
  font-size: clamp(3rem, -0.825rem + 12.75vw, 9.375rem);
  font-weight: 700;
  text-transform: uppercase;

}
</style>
