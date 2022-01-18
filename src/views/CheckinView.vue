<template>
  <div class="view--checkin">
    <PageHeader title="Player Check-in" />
    <div class="pb-5">
      <!-- Bootstrap Vue Spinner not functioning as expected -->
      <span v-if="waitingForPlayers" class="spinner d-inline-block mr-2"></span>
      <span class="d-inline-block pb-1">{{ progText[$store.state.currentNumberOfPlayers] }}</span>
      <b-progress :value="$store.state.currentNumberOfPlayers" variant="primary" :max="$store.state.maxPlayers"></b-progress>
    </div>
    <ActivePlayers showRecord="showRecord"/>
    <PageFooter>
      <div class="text-center">
        <div v-show="!waitingForPlayers" class="pb-1">
         <b-button size="md" @click="goToGamePage">
            Start Game
          </b-button>
        </div>
        <div>
          <b-button class="primary" variant="link" size="md" @click="goToStandings">
            Cancel Game
          </b-button>
        </div>
      </div>
    </PageFooter>
  </div>
</template>

<script>
import ActivePlayers from '@/components/ActivePlayers.vue';
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'


export default {
  name: 'CheckinView',
  components: {
    ActivePlayers,
    PageHeader,
    PageFooter
  },
  data() {
    return {
      progText: [
      'Waiting for players to check-in',
      'One Player checked-in',
      'Half-way there!',
      'Waiting on one more player',
      'Game On!'
    ],
    }
  },
  computed: {
    waitingForPlayers() {
      return this.$store.state.currentNumberOfPlayers < this.$store.state.maxPlayers
    }
  },
  methods: {
    goToGamePage() {
      this.$router.push('/game');
    },
    goToStandings() {
      this.$store.commit('zeroPlayerCount');
      this.$router.push('/');
    }
  }
}
</script>
