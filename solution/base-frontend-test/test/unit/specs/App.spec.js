import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('should init dropdown', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    // vm.$el.querySelector('.dropdown-toggle').click()
    expect(vm.$el.querySelector('.dropdown-toggle'))
      .to.be.not.null
    expect(vm.$el.querySelector('.dropdown-menu'))
      .to.be.null
  })

  it('should init data', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.selectOptions[0].value === 1)
      .to.be.true
    expect(vm.selectOptions[1].value === 6)
      .to.be.true
    expect(vm.valueSelected)
      .to.be.null
  })
})
