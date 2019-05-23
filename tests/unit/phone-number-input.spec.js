import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import PhoneNumberInput from '@/components/PhoneNumberInput.vue'

const goodNumbers = ["5038675309"]
const badNumbers = ["666-666-666666"]

describe('PhoneNumberInput.vue', () => {
  it('updates the vue-model when text input is entered', () => {
    const parent = shallowMount(PhoneNumberInput);

    // Check that entering an Number in the input, updates the vm
    for(let key in goodNumbers) {
      let goodNumber = goodNumbers[key];
      parent.find("input").setValue(goodNumber)

      expect(parent.vm.phone).to.equal(goodNumber)
    }
  })
})


describe('PhoneNumberInput.vue', () => {
  it('detects errors in invalid phone numbers when entered', () => {
    const parent = shallowMount(PhoneNumberInput);

    // Check that good numbers are not given errors
    for(let key in goodNumbers) {
      let goodNumber = goodNumbers[key];
      parent.find("input").setValue(goodNumber)

      expect(parent.vm.errors.length).to.equal(0)
    }

    // Check that bad Numbers are given errors
    for(let key in badNumbers) {
      let badNumber = badNumbers[key];
      parent.find("input").setValue(badNumber)

      expect(parent.vm.errors.length).to.equal(1)
    }

  })
})
