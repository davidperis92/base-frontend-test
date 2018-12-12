import Vue from 'vue'
import Graph from '@/components/Graph'

describe('Graph.vue', () => {
  it('should render graph', () => {
    const vm = new Vue(Graph).$mount()
    expect(vm.$el.querySelector('canvas'))
      .to.be.defined
  })
})
