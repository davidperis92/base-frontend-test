<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'Graph',
  props: {
    values: {
      default: []
    }
  },
  data () {
    return {
      set1: [],
      set2: []
    }
  },
  mounted () {
    this.renderGraph()
  },
  watch: {
    values (values) {
      if (values) {
        this.set1 = values.map(val => this.getSetData(val.value1, val.timestamp))
        this.set2 = values.map(val => this.getSetData(val.value2, val.timestamp))
        this.renderGraph()
      }
    }
  },
  methods: {
    getSetData (value, time) {
      return {
        x: new Date(time),
        y: value
      }
    },
    renderGraph () {
      this.renderChart({
        datasets: [
          {
            label: 'Value 1',
            backgroundColor: 'rgba(255, 0, 255, 0.3)',
            borderColor: 'rgb(255, 0, 255)',
            fill: 'start',
            data: this.set1
          },
          {
            label: 'Value 2',
            backgroundColor: 'rgba(0, 255, 255, 0.3)',
            borderColor: 'rgb(0, 255, 255)',
            fill: 'bottom',
            data: this.set2
          }
        ]
      },
      {
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear'
          }]
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
