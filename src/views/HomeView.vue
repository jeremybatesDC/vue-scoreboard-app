<template>
  <div class="view--home">
    <PageHeader title="Standings">
       <ModalStart />
    </PageHeader>
    <b-row>
      <b-col lg="10" xl="11" class="table__wrapper">
        <StandingsTable />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import StandingsTable from '@/components/StandingsTable.vue'
import ModalStart from '@/components/ModalStart.vue'

export default {
  name: 'HomeView',
  components: {
    PageHeader,
    StandingsTable,
    ModalStart
  },
}
</script>


<!-- try to keep styles out of  views -->
<style lang="scss">

</style>