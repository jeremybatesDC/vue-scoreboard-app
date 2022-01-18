<template lang="">
    <div class="d-flex align-items-center">
      <b-button v-b-modal.modal-1 class="button--start">Start Game</b-button>
      <b-modal id="modal-1" title="Game Settings">
          <b-form-group
            label="Team Format"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              id="btn-radios-1"
              v-model="optionsTeamSelected"
              :options="optionsTeamFormat"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-primary"
              size="md"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
        </b-form-group>
        <b-form-group
            label="Number of Games"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              id="btn-radios-2"
              v-model="optionsGamesSelected"
              :options="optionsGamesNumber"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-primary"
              size="md"
              name="radio-btn-outline"
              buttons
            ></b-form-radio-group>
        </b-form-group>
        <b-form-checkbox
          id="checkbox-1"
          v-model="teamsRandomized"
          name="checkbox-1"
          value="teamsAreRandomized"
          unchecked-value="teamsNotRandomized"
        > Randomize Teams 
        </b-form-checkbox>
        <template #modal-footer="{ ok, cancel }">
          <b-button variant="tertiary" size="md" @click="cancel">
            Cancel
          </b-button>
          <b-button variant="primary" size="md" @click="goToCheckin">
            Next
          </b-button>
        </template>
      </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      optionsTeamSelected: 'pair',
      optionsTeamFormat: [
        { text: '2x2', value: 'pair' },
        { text: '1x1', value: 'single' },

      ],
      optionsGamesSelected: '5',
      optionsGamesNumber: [
        { text: '5', value: '5' },
        { text: '3', value: '3' },
        { text: '1', value: '1' },
      ],
      teamsRandomized: 'teamsAreRandomized',
    }
  },
  methods: {
    goToCheckin() {
      this.$router.push('/checkin')
    }
  },
}
</script>
<style lang="scss">
.btn-outline-primary {
  color: var(--primary);
  border-color: var(--primary) !important;
  &.active,
  &:hover {
    color: #fff;
    background-color: var(--primary) !important;
  }
}
.btn-primary {
  background-color: var(--primary) !important;
}
.btn-tertiary {
  background: transparent;
  color: var(--tertiary);
  border-color: var(--greyLightest) !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: var(--primary) !important;
}

.modal {
  &-header,
  &-footer {
    border-color: var(--greyLight);
  }
  &-title,
  .close {
    font-size: 1rem;
    color: #000;
  }
  .form-group {
    margin-bottom: 1.5rem;
  }
  .col-form-label {
    color: var(--tertiary);
    padding-bottom: 0.25rem;
  }
}

.modal-content {
  border-radius: 0.75rem;
}
</style>