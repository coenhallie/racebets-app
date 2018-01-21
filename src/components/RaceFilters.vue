<template>
  <div>
    <div class="block" v-for="race in raceFilters" :key="race.id">
      <h4>{{race.type}}</h4>
      <button @click="viewRace(race)">View</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaceFilters',
  computed: {
    raceFilters() {
      return this.$store.getters.raceTypes
    }
  },
  methods: {
    viewRace(race) {
      this.$store.dispatch('viewRace', race.id)
    }
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
