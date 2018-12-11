<template>
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
        <td>
          <span id="span1" @click="showInput(1)">{{ value.value1 }}</span>
          <input id="input1" @blur="updateValue(1, $event)" :value="value.value1">
        </td>
        <td>
          <span id="span2" @click="showInput(2)">{{ value.value2 }}</span>
          <input id="input2" @blur="updateValue(2, $event)" :value="value.value2">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    values: {
      default: []
    }
  },
  data: () => {
    return {}
  },
  computed: {

  },
  methods: {
    fullName (value) {
      return `${value.first} ${value.last}`
    },
    updateValue (index, event) {
      this.$emit('update-value', {index, value: event.value})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
