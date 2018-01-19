<template>
  <div>
    <div v-for="race in nextraces" :key="race.id" v-bind="RaceFilter">
      <ul>
        <li><img class="card-img-top" :src="'/static/silks/' + race.runners[0].silk">{{race.runners[0].name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import RaceFilter from './RaceFilter'

export default {
  name: 'NextRace',
  components: {
    RaceFilter
  },
  data () {
    return {
      nextraces: [],
      RaceFilter: [],
      baseUrl: 'localhost:8080'
    }
  },
  created () {
    fetch('/static/next_races.json')
      .then(r => r.json())
      .then(json => {
        this.nextraces = json.data.races
        console.log(this.nextraces)
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
