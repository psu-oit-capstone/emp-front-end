import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TimeoutPopup from '@/components/TimeoutPopup.vue'

describe('TimeoutPopup.vue', () => {

  it('popup not rendered if timeLimit is not reached', () => {
    // Initialize with timeLimit & inactiveTime set
    const parent = mount(TimeoutPopup, {
      propsData: {timeLimit: 10 },
      data() { return { inactiveTime: 0 }}
    })

    expect(parent.find(TimeoutPopup).isVisible()).to.equal(false);
  })


  it('popup renders when timeLimit is reached', () => {
    // Initialize with timeLimit & inactiveTime set
    const parent = mount(TimeoutPopup, {
      propsData: {timeLimit: 10 },
      data() { return { inactiveTime: 11 }}
    })

    expect(parent.find(TimeoutPopup).isVisible()).to.equal(true);
  })


  it('popup emits timedOut when timeLimit is reached', () => {
    // Initialize with timeLimit & inactiveTime set
    const parent = mount(TimeoutPopup, {
      propsData: {timeLimit: 10 },
      data() { return { inactiveTime: 11 }}
    })

    parent.find(TimeoutPopup).vm.tickAndCheckTimeout();
    expect(parent.find(TimeoutPopup).emitted().timedOut.length).to.equal(1);
  })

})
