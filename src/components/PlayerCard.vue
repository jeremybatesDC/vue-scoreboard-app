<template lang="">
  <section :class="['player', load ]">
    <div class="player__imgWrapper">
      <img loading="lazy" encoding="async" class="player__image" :src="playerImage" alt="Player Avatar">
    </div>
    <div class="pt-3">
      <div class="lh-1 pb-1 font-weight-bold">{{playerName}}</div>
      <div v-if="showRecord" class="text-small">{{playerRecord}}</div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PlayerCard',
  props: {
    player: {
      type: Object,
    },
    load: {
      type: String,
    },
    showRecord: {
      type: String,
    },
  },
  data() {
    return {
      // placeholder for lazy loading without broken link icon
      playerImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      playerName: 'Waiting...',
      playerRecord: ' ',
    }
  },
  methods: {
    setPlayer() {
      this.playerImage = `/avatars/${this.player.avatar}`;
      this.playerName = `${this.player.first_name} ${this.player.last_name}`;
      this.playerRecord = `${this.player.wins}-${this.player.losses}`;
    },
    getRandomMS(max) {
      return Math.floor(Math.random() * max);
    },
    simulateUsersJoining() {
      // if had time would make a fill order
      // 1 then 3, then 2 or 4
      // because someone wouldnT join an empty team as 2nd player
      // that fill order would also haev to take into account team format: singles vs pair
      setTimeout(() => {
        this.setPlayer();
        this.$store.commit('incrementPlayerCount');
        //increment player count in store
      }, this.getRandomMS(4999));
    }
  },
  mounted() {
    if (this.load !== 'immediate') {
      this.simulateUsersJoining();
    }
    else {
      this.setPlayer();
      this.$store.commit('incrementPlayerCount');
    }
  },
}
</script>
<style lang="scss">
.player {
  display: inline-flex;
  flex-direction: column;
  width: 50%;
  max-width: 16rem;
  padding: 0 0.5rem;
  align-items: center;
  .view--game & {
    font-size: 0.75rem;
      max-width:6.625rem;
    }
  
  &__imgWrapper {
    position: relative; 
    width: 100%;
    &:before {
      content: counter(players);
      counter-increment: players;
      font-size: clamp(1.5rem, -1.5882rem + 10.2941vw, 5rem);
      color: #ADB5BD;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
  &__image {
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 1/1;
    background-image: url(/avatars/AvatarBackground.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  /* &.immediate {
    .player__imgWrapper {
      &:before {
        display: none;
      }
    }
  } */
}
</style>