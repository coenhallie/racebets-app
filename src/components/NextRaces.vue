<template>
  <div>
    <div v-for="race in nextRaces" :key="race.id">
      <h4>{{ race.raceId }}</h4>
      <h4>{{race.raceType}}</h4>
      <h4>{{race.racePurse}}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import get from 'lodash/get'

export default {
  name: 'NextRaces',
  data () {
    return {
      get,
      formatDate: (date) => moment(date).format('MM-DD-YYYY')
    }
  },
  methods: {
    removeRace (race) {
      this.$store.commit({
        type: 'removeRace',
        raceId: race.raceId
      })
    }
  },
  computed: {
    ...mapGetters({
      nextRaces: 'nextRaces',
      results: 'results'
    })
  },
  created (response) {
    this.$store.dispatch('fetchRaceData').then(() => {
      console.log('Axios Call inside NextRace component')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
