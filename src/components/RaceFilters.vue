<template>
  <div>
    <div class="block">
      <div class="field has-addons">
        <p class="control">
          <a class="button" @click="viewRace(race)" v-for="race in raceFilters" :key="race.id">
                  <svgicon icon="/race-type-G" width="22" height="18" color="#0f2"></svgicon>
            <span>{{race.type}}</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaceFilters',
  computed: {
    raceFilters () {
      return this.$store.getters.raceTypes
    }
  },
  methods: {
    viewRace (race) {
      this.$store.dispatch('viewRace', race.id)
      console.log('viewRace click Event')
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
