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
        this.set1 = values.map(val => val.value1)
        this.set2 = values.map(val => val.value2)
        this.renderGraph()
      }
    }
  },
  methods: {
    renderGraph () {
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            fill: false,
            data: this.set1
          },
          {
            label: 'GitHub Commits 2',
            fill: false,
            data: this.set2
          }
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
