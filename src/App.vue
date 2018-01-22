<template>
  <div id="app">
    <div class="columns">
      <div class="column">
        <RaceFilters></RaceFilters>
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        <NextRaces></NextRaces>
      </div>
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

.column {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

</style>
