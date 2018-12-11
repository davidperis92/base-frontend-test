<script>
import { Line } from 'vue-chartjs'
import { GraphHelper } from '../core/helpers/graph'
import { GRAPH_OPTIONS } from '../core/constants/graph-options'

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
    }
  },
  mounted () {
    this.renderGraph()
  },
  methods: {
    renderGraph () {
      this.renderChart(GraphHelper.getDatasets(this.values), GRAPH_OPTIONS)
    }
  },
  watch: {
    values () {
      this.renderGraph()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.chartjs-render-monitor {
  height: 500px;
}
</style>
