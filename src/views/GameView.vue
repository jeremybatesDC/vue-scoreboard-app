<template>
  <div class="view--game">
    <PageHeader title="Game On!" hasBottomBorder="true" />
    <ScoreBoard/>
    <ActivePlayers loadPlayers="immediate"/>
    <PageFooter>
      <div class="text-center">
        <b-button class="primary" variant="link" size="md" @click="goToStandings">
          Cancel Game
        </b-button>
      </div>
    </PageFooter>
  </div>
</template>

<script>

import ActivePlayers from '@/components/ActivePlayers.vue';
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import ScoreBoard from '@/components/ScoreBoard.vue';

export default {
  name: 'GameView',
  components: {
    ActivePlayers,  
    PageHeader,
    PageFooter,
    ScoreBoard
  },
  methods: {
    goToStandings() {
      this.$store.commit('zeroPlayerCount');
      this.$router.push('/');
    },
  },
}
</script>

