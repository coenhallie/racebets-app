<template>
  <div class="container">
      <div class="grid header">
          <div class="col-2 race-item">
              <img class="flag" :src="'/static/flags/' + get(featuredRace, 'event.country') + '.png'" alt="Country">
          </div>
          <div class="col-10 race-item">
              <span class="title">{{ get(featuredRace, 'event.title') }}</span>
          </div>
          <hr class="header-hr">
          <div class="col race-item">
              <span class="num-runners">{{ get(featuredRace, 'num_runners') }} runners | </span>
          </div>
          <div class="col race-item">
              <span class="distance">{{ get(featuredRace, 'distance') }} m | </span>
          </div>
          <div class="col race-item">
              <span class="purse-amount">{{ get(featuredRace, 'purse.amount') }} </span>
              <span class="purse-currency">{{ get(featuredRace, 'purse.currency') }}</span>
          </div>
      </div>
    <div class="grid" v-for="runner in featuredRace.runners" :key="runner.id_runner">
        <div class="col-2 race-item" v-if="runner.silk">
          <img alt="silk" :src="'/static/silks/' + runner.silk"/>
        </div>
        <div class="col race-item">
          <span class="runner-name">{{ runner.name }}</span>
        </div>
        <div class="col-2 race-item">
          <div class="button-wrapper">
            <a class="button-odds" :href="'http://racebets.com/bet/' + featuredRace.id_race">
              {{ runner.odds }}
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import concat from 'lodash/concat'
import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import maxBy from 'lodash/maxBy'
import orderBy from 'lodash/orderBy'
export default {
  name: 'NextRaces',
  data: () => ({
    featuredRace: {},
    races: []
  }),
  methods: {
    get,
    getFeaturedRace () {
      let filteredRaces = []
      console.log(`
      hasDogFilter: ${this.hasDogFilter}
      hasTrotFilter: ${this.hasTrotFilter}
      hasGallopFilter: ${this.hasGallopFilter}
      hasJumpFilter: ${this.hasJumpFilter}
      `)
      if (this.hasDogFilter) {
        filteredRaces = concat(filteredRaces, filter(this.races, ['race_type', 'D']))
      }
      if (this.hasTrotFilter) {
        filteredRaces = concat(filteredRaces, filter(this.races, ['race_type', 'T']))
      }
      if (this.hasGallopFilter) {
        filteredRaces = concat(filteredRaces, filter(this.races, ['race_type', 'G']))
      }
      if (this.hasJumpFilter) {
        filteredRaces = concat(filteredRaces, filter(this.races, ['race_type', 'J']))
      }
      // We now have our filteredRaces, now we need to sort by purse amount (in GBP).
      const featuredRace = Object.assign({}, maxBy(filteredRaces, ['purseInGBP']) || {})
      featuredRace.runners = orderBy(featuredRace.runners, 'odds', 'asc')
      this.featuredRace = featuredRace
    }
  },
  computed: mapGetters([
    'hasDogFilter',
    'hasTrotFilter',
    'hasGallopFilter',
    'hasJumpFilter'
  ]),
  mounted () {
    // GET /next_races.json
    axios.get('../../static/next_races.json')
      .then((res) => {
        if (res.status !== 200) {
          console.error('Unable to make call for next races.')
          return
        }
        // Wait to store races until we get the currency conversion.
        const races = get(res, 'data.data.races', [])
        // GET conversion rate from GBP to EUR
        axios.get('https://api.fixer.io/latest?base=EUR&symbols=GBP')
          .then((res) => {
            if (res.status !== 200) {
              console.error('Unable to get latest conversion rate (EUR -> GBP).')
              return
            }
            // Yay, we have our rate!
            const rate = get(res, 'data.rates.GBP', 0.88)
            // Now let's add on a 'purseInGBP' property to each race and save it in state.
            this.races = map(races, (race) => {
              const currency = get(race, 'purse.currency')
              const amount = get(race, 'purse.amount')
              let purseInGBP = amount
              if (currency !== 'GBP') {
                purseInGBP = parseFloat(amount) * parseFloat(rate)
              }
              // Our new race now has a 'purseInGBP' property along with all of its previous properties.
              return {
                ...race,
                purseInGBP
              }
            })
            // Now that we have our formatted races, let's call getFeatured Race
            this.getFeaturedRace()
            // Get our new featured race every time we toggle a filter.
            this.$store.subscribeAction((action, state) => {
              if (includes(['toggleDog', 'toggleTrot', 'toggleGallop', 'toggleJump'], action.type)) {
                this.getFeaturedRace()
              }
            })
          })
      })
  }
}
</script>
<!-- Add scoped” attribute to limit CSS to this component only -->
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
  color: #fff;
  text-decoration: none;
  }
.h3 {
  font-size: 25px;
  font-weight: bold;
}

.header-hr {
  width: 100%;
  height: 1px;
  background-color: #666;
  border: none;
}

.container {
  padding: 0px 5px 5px 5px;
}

.header {
  color: #fff;
  background-color: #393939;
}

.grid {
  padding: 10px;
}

.button-wrapper {
  background-image: -webkit-gradient(linear,50% 0,50% 100%,color-stop(0,#ffdd86),color-stop(100%,#f8ae17));
  background-image: -moz-linear-gradient(#ffdd86,#f8ae17);
  background-image: -webkit-linear-gradient(#ffdd86,#f8ae17);
  background-image: linear-gradient(#ffdd86,#f8ae17);
  -moz-box-shadow: #ffe8ac 0 1px 0 inset;
  -webkit-box-shadow: #ffe8ac 0 1px 0 inset;
  box-shadow: #ffe8ac 0 1px 0 inset;
  border: 1px solid #f2c71c;
  cursor: pointer;
  border-color: #f2c71c;
  padding: 4px 0;
  border-radius: 3px;
}

.container span, img {
  float: left;
  padding: 5px 0 5px 0;
}

.title {
  font-weight: bold;
}

.grid .race-item {
  padding: 5px 5px 5px 0;
}

.purse-currency {
  padding: 5px;
}
.flag {
  width: 32px;
  height: 20px;
}
</style>
