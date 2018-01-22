<template>
  <div>
    <h4 class="title is-4">Next Races</h4>
    <div v-for="race in nextRaces" :key="race.id">
      <h4>{{ race.raceId }}</h4>
      <h4>{{race.raceType}}</h4>
      <h4>{{race.racePurse}}</h4>
      <hr>
    </div>
      Race details {{ $store.state.race }}<br>
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
  computed: {
    ...mapGetters(['nextRaces', 'results', 'fetchRaceData'])
  },
  created () {
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

.h3 {
  font-size: 25px;
  font-weight: bold;
}
</style>
