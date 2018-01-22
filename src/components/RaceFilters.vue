<template>
  <div>
    <h4 class="title is-4">Race Filter</h4>
    <div class="block">
      <div class="field has-addons">
        <p class="control">
          <a class="button" @click="viewRace(race)" v-for="race in raceFilters" :key="race.id">
            <span>{{race.type}}</span>
          </a>
        </p>
      </div>
    </div>

  <input type="checkbox" name="race" value="Race 1 data" v-model="race">Race 1<br>
  <input type="checkbox" name="race" value="Race 2 data" v-model="race">Race 2<br>
  <input type="checkbox" name="race" value="Race 3 data" v-model="race">Race 3<br>

  </div>
</template>

<script>
export default {
  name: 'RaceFilters',
  computed: {
    raceFilters () {
      return this.$store.getters.raceTypes
    },
    race: {
      get () {
        return this.$store.state.race
      },
      set (value) {
        this.$store.commit('SET_RACE', value)
      }
    }
  },
  methods: {
    viewRace (race) {
      this.$store.dispatch('viewRace', race.id)
      console.log('viewRace click Event')
    },
    removeRace (race) {
      this.$store.commit({
        type: 'removeRace',
        raceId: race.raceId
      })
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
