export class GraphHelper {
  static getSet (value, time) {
    return {
      x: new Date(time),
      y: value
    }
  }

  static getDatasets (values) {
    const set1 = values.map(val => this.getSet(val.value1, val.timestamp))
    const set2 = values.map(val => this.getSet(val.value2, val.timestamp))

    return {
      datasets: [
        {
          label: 'Value 1',
          backgroundColor: 'rgba(255, 0, 255, 0.3)',
          borderColor: 'rgb(255, 0, 255)',
          fill: 'start',
          data: set1
        },
        {
          label: 'Value 2',
          backgroundColor: 'rgba(0, 255, 255, 0.3)',
          borderColor: 'rgb(0, 255, 255)',
          fill: 'bottom',
          data: set2
        }
      ]
    }
  }
}
