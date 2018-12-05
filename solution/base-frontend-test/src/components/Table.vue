<template>
  <app-table>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date/time</th>
          <th scope="col">Value 1</th>
          <th scope="col">Value 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in values" :key="index">
          <td>{{ value.timestamp }}</td>
          <td>{{ value.value1 }}</td>
          <td>{{ value.value2 }}</td>
        </tr>
      </tbody>
    </table>
  </app-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    values: {
      default: []
    }
  },
  data () {
  },
  computed: {

  },
  methods: {
    fullName (value) {
      return `${value.first} ${value.last}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
