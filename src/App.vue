<template>
  <div id="app">
    <app-nextRaces></app-nextRaces>
    <app-raceFilters></app-raceFilters>
  </div>
</template>

<script>
import NextRaces from './components/NextRaces'
import RaceFilters from '/components/RaceFilters'

export default {
  name: 'App',
  components: {
    appNextRaces: NextRaces,
    appRaceFilters: RaceFilters
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
