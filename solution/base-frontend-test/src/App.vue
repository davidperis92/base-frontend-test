<template>
  <div id="app">
    <Graph/>
    <Table/>
  </div>
</template>

<script>
import Graph from './components/Graph'
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    Graph,
    Table
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
