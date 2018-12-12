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
          <span v-if="!isShowingInput(index, 1)" id="span1" @click="showInput(index, 1, $event)">{{ value.value1 }}</span>
          <input type="number" v-if="isShowingInput(index, 1)" id="input1" @blur="updateValue(index, 1, $event)" :value="value.value1">
        </td>
        <td>
          <span v-if="!isShowingInput(index, 2)" id="span2" @click="showInput(index, 2, $event)">{{ value.value2 }}</span>
          <input type="number" v-if="isShowingInput(index, 2)" id="input2" @blur="updateValue(index, 2, $event)" :value="value.value2">
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
    return {
      showingRow: null,
      showingCol: null
    }
  },
  computed: {

  },
  methods: {
    fullName (value) {
      return `${value.first} ${value.last}`
    },
    isShowingInput (rowIndex, colIndex) {
      return this.showingRow === rowIndex && this.showingCol === colIndex
    },
    showInput (rowIndex, colIndex, $event) {
      this.showingRow = rowIndex
      this.showingCol = colIndex
    },
    updateValue (rowIndex, colIndex, $event) {
      const value = $event.target.value
      const item = this.values[rowIndex]
      const body = {
        id: item.id,
        value1: item.value1,
        value2: item.value2
      }
      this.showingRow = null
      this.showingCol = null
      if (colIndex === 1) { body.value1 = value }
      if (colIndex === 2) { body.value2 = value }
      this.$emit('update-value', body)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
