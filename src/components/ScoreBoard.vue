<template lang="">
	<div class="scoreBoard">
		<b-row class="text-center">
			<b-col>
				<b-button class="w-75 text-huge scoreBoard__button" variant="outline-primary" aria-label="Record Win" @click="incrementScore('a')">{{state.scoreA}}</b-button>
				<div class="pt-2 text-small">Click to record win</div>
			</b-col>
			<b-col cols="1" class="text-center lh-1">
				<div class="d-flex text-center h-100 text-huge justify-content-center align-items-center">
					<div>-</div>
				</div>
			</b-col>
			<b-col>
				<b-button class="w-75 text-huge scoreBoard__button" variant="outline-primary" aria-label="Record Win" @click="incrementScore('b')">{{state.scoreB}}</b-button>
				<div class="pt-2 text-small">Click to record win</div>
			</b-col>
		</b-row>
	</div>
</template>
<script>

import { reactive } from '@vue/composition-api'

export default {
  name: 'ScoreBoard',
  setup() {
    const state = reactive({
      scoreA: 0,
      scoreB: 0,
    })
    function incrementScore(team) {
      team === 'a' ? state.scoreA++ : state.scoreB++
      if (state.scoreA > 2) {
        this.$store.commit('setWinningTeam', 'a');
        this.$router.push('/victory')
      }
      else if (state.scoreB > 2) {
        this.$store.commit('setWinningTeam', 'b');
        this.$router.push('/victory')
      }
    }
    return {
      state, incrementScore
    }
  }
}
</script>
<style lang="scss" scoped>
.scoreBoard {
  padding: 4rem 0;
  transition: 0.15s all ease-in-out;
  .scoreBoard__button {
    position: relative;
    color: rgba(0, 0, 0, 1);
    font-weight: normal !important;
    max-width: 16rem;
    height: 100%;
    max-height: 26rem;
    line-height: 1;
    border: 1px dashed currentColor !important;
    border-radius: 0 !important;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: attr(aria-label);
      display: inline-block;
      font-size: 1rem;
      // says weight 600 in design but letS stick to loading 2 weights
      font-weight: 700;
      padding: 0.5rem 1rem;
      color: #343a40;
      border: 1px solid currentColor;
      background-color: #ffffff;
      border-radius: 0.25rem;
      opacity: 0;
      // matches bootstra button transition
      transform: translate(-50%, -50%);
      transition: 0.15s all ease-in-out;
    }
    &:hover {
      color: rgba(0, 0, 0, 0.1);
      &:after {
        opacity: 1;
      }
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem var(--primary);
    }
  }
}
</style>