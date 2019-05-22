import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import EmailInput from '@/components/EmailInput.vue'

const badEmails = ["abc", "123", "$#!^"]
const goodEmails = ["a@c", "asdf@333.com"]

describe('EmailInput.vue', () => {
  it('updates the vue-model when text input is entered', () => {
    const parent = shallowMount(EmailInput);

    // Check that entering an email in the input, updates the vm
    for(let key in goodEmails) {
      let goodEmail = goodEmails[key];
      parent.find("input").setValue(goodEmail)

      expect(parent.vm.email).to.equal(goodEmail)
    }
  })
})


describe('EmailInput.vue', () => {
  it('detects errors in invalid emails when entered', () => {
    const parent = shallowMount(EmailInput);

    // Check that good emails are not given errors
    for(let key in goodEmails) {
      let goodEmail = goodEmails[key];
      parent.find("input").setValue(goodEmail)

      expect(parent.vm.errors.length).to.equal(0)
    }

    // Check that bad emails are given errors
    for(let key in badEmails) {
      let badEmail = badEmails[key];
      parent.find("input").setValue(badEmail)

      expect(parent.vm.errors.length).to.equal(1)
    }

  })
})
