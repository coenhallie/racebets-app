<template>
  <div>
    <div class="columns">
      <div class="column">
      <RaceFilter></RaceFilter>
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        <NextRace></NextRace>
      </div>
    </div>
  </div>
</template>

<script>
import NextRace from './NextRace'
import RaceFilter from './RaceFilter'

export default {
  name: 'Home',
  components: {
    RaceFilter,
    NextRace
  },
  data () {
    return {
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
