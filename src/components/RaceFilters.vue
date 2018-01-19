<template>
  <div>
    <div class="block">
      <b-checkbox v-model="RaceFilters"
          native-value="Silver">
          Silver
      </b-checkbox>
      <b-checkbox v-model="RaceFilters"
          native-value="Flint">
          Flint
      </b-checkbox>
      <b-checkbox v-model="RaceFilters"
          native-value="Vane">
          Vane
      </b-checkbox>
      <b-checkbox v-model="RaceFilters"
          native-value="Billy">
          Billy
      </b-checkbox>
    </div>
    {{RaceFilters}}
  </div>
</template>

<script>
export default {
  name: 'RaceFilters',
  data () {
    return {
      filter: []
    }
  },
  methods: {
    RaceFilters() {
      this.filter
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
