<template>
  <div>
    <div class="summary">
            <h3>Registrations</h3>
            <h5>Total: {{ total }}</h5>
        </div>
    <div v-for="race in nextRaces" :key="race.id">
      <h4>{{ race.type }}</h4>
      <span @click="removeRace(activeRace)">(Unregister)</span>
      <ul>
        <li><img class="card-img-top" :src="'/static/silks/' + race.runners[0].silk">{{race.runners[0].name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NextRaces',
  methods: {
    removeRace(activeRace) {
      this.$store.commit({
        type: 'removeRace',
        raceId: activeRace.raceId
      })
    }
  },
  computed: {
    ...mapGetters({
        nextRaces: 'nextRaces',
        results: 'results'
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
