<template>
  <div id="app" class="container">
    <article class="graph-container row">
      <div class="form-group offset-8 col-4">
        <v-select v-model="valueSelected" :options="selectOptions" :searchable="false"></v-select>
      </div>
      <Graph :values="values" class="col-12"/>
    </article>
    <article class="table-container row">
      <Table :values="values" @update-value="onUpdateValue" class="col"/>
    </article>
  </div>
</template>

<script>
import Graph from './components/Graph'
import Table from './components/Table'
import { SELECTOR_OPTIONS } from './core/constants/graph-selector-options.js'

export default {
  name: 'App',
  data: () => {
    return {
      values: [],
      valueSelected: null,
      selectOptions: SELECTOR_OPTIONS,
      readingsUrl: process.env.SERVER + '/reading'
    }
  },
  components: {
    Graph,
    Table
  },
  created () {
    this.fetchReadings()
  },
  watch: {
    valueSelected () {
      this.fetchReadings()
    }
  },
  methods: {
    fetchReadings () {
      this.$http.get(this.readingsUrl, this.getParamsConfig()).then(
        response => {
          this.values = response.body
        },
        error => {
          console.error(error)
        })
    },
    getParamsConfig () {
      const date = new Date()
      const params = {
        limit: 100
      }
      if (this.valueSelected) {
        const newDate = date.setHours(date.getHours() - this.valueSelected.value)
        params.start = this.$moment(newDate).format('YYYY-MM-DDTHH:mm:ss')
      }
      return {
        params
      }
    },
    onUpdateValue (body) {
      this.$http.put(this.readingsUrl, body).then(
        response => {
          this.fetchReadings()
        },
        error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.graph {
  height: 500px;
}
</style>
