<template>
  <div id="app">
    <Graph :values="values"/>
    <Table/>
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
    console.log('before')
    this.$http.get(process.env.SERVER + '/reading').then(response => {
      // get body data
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
