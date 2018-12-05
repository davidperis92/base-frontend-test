<template>
  <div id="app">
    <article class="graph-container">
      <div class="form-group">
        <label for="timeSelector">Example select</label>
        <select class="form-control" id="timeSelector">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <Graph :values="values"/>
    </article>
    <Table :values="values"/>
  </div>
</template>

<script>
import Graph from './components/Graph'
import Table from './components/Table'

export default {
  name: 'App',
  data: () => {
    return {
      values: []
    }
  },
  components: {
    Graph,
    Table
  },
  created () {
    const config = {
      params: {
        limit: 50
      }
    }
    this.$http.get(process.env.SERVER + '/reading', config).then(response => {
      this.values = response.body
      console.log(this.values)
    },
    error => {
      console.error(error)
    })
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
</style>
