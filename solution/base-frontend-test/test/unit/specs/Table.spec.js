import Vue from 'vue'
import Table from '@/components/Table'
import readings from '../mocks/readings';

describe('Table.vue', () => {
  it('should render table', done => {
    const Constructor = Vue.extend(Table)
    const vm = new Constructor({ values: readings }).$mount()
    vm.values = readings
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('table'))
        .to.be.defined
      expect(vm.$el.querySelectorAll('table tbody tr').length)
        .to.equal(3)
      done()
    })
  })
})
