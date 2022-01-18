<template>
  <div>
    <div>
      <b-table
        class
        :items="state.players"
        :fields="state.fields"
        :sort-by.sync="state.sortBy"
        :sort-desc.sync="state.sortDesc"
        no-sort-reset
        responsive="sm"
      >
        <!-- tie this to initial sort -->
        <template #cell(rank)="state">
          <!-- this isnT really what we want -->
          <!-- we want index of initial order -->
          {{ state.index + 1 }}
        </template>

        <template #cell(fullname)="state">
          <img
            width="30"
            height="30"
            class="player__avatar--thumb mr-2"
            alt="Player Avatar"
            loading="lazy"
            :src="`/avatars/${state.item.avatarThumb}`"
          />
          {{ state.item.first_name }} {{ state.item.last_name }}
        </template>

        <template #cell(winPercent)="state">{{ state.value }}</template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import foosballData from '@/assets/foosball_players.json'

export default {
  name: 'StandingsTable',
  setup() {
    const state = reactive({
      sortBy: 'wins',
      sortDesc: true,
      fields: [
        { key: 'rank', label: '#' },
        { key: 'fullname', label: 'Player' },
        { key: 'wins', sortable: true },
        { key: 'losses', sortable: true },
        {
          key: 'winPercent', label: 'Win%', formatter: (value, key, item) => {
            return Math.round(item.wins / (item.wins + item.losses) * 100)
          }, sortByFormatted: true, sortable: true
        },
        { key: 'last_played' }
      ],
      players: foosballData.foosball_players,
    })

    return {
      state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// again, a limitation of css custom properties is they canT be used in media query declaration
$breakpoint-lg: 992px;

.table {
  th,
  td {
    padding: 0.5rem;
    vertical-align: middle;
    /* white-space: nowrap; */
    @media (min-width: $breakpoint-lg) {
      padding: 0.5rem 1.25rem;
    }
  }
  th {
    border-top: none;
  }
  tbody {
    font-variation-settings: numeric;
    tr {
      // BootstrapVueS builtIn striped property darkens the odd rows and design calls for the even ones
      &:nth-child(even) {
        background-color: #f8f9fa;
      }
    }
  }
}
.player__avatar--thumb {
  width: 30px;
}
</style>
