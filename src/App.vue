<template>
  <div id="app">
    <div class="column-filter">
      <RaceFilters></RaceFilters>
    </div>
    <div class="column">
      <p> Second column</p>
    </div>
    <div class="column">
      <p>Third column</p>
    </div>
    <div class="column">
      <NextRaces></NextRaces>
    </div>
  </div>
</template>

<script>
import NextRaces from './components/NextRaces'
import RaceFilters from './components/RaceFilters'

export default {
  name: 'App',
  components: {
    NextRaces,
    RaceFilters
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

.column-filter {
  width: 300px;
  border: 3px solid #393939;
  display: inline-block;
  vertical-align: top;
  min-height:340px;
  margin:10px;
}

.column {
  width: 300px;
  border: 3px solid #393939;
  display: inline-block;
  vertical-align: top;
  min-height:340px;
  margin:10px;
}
</style>
