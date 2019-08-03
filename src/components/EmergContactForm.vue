<template>
    <div id="contact-form">
        <div class="input-field">
          <label for="first-name">
            First Name
          </label>
          <input id="first-name" type="text" placeholder="" v-model="firstName"/>
        </div>

        <div class="input-field">
          <label for="middle-name">
            Middle Name
          </label>
          <input id="middle-name" type="text" placeholder="" v-model="middleName"/>
        </div>

        <div class="input-field">
          <label for="last-name">
            Last Name
          </label>
          <input id="last-name" type="text" placeholder="" v-model="lastName"/>
        </div>

        <div class="input-field">
          <label for="street-line-1">
            Address 1
          </label>
          <input id="street-line-1" type="text" placeholder="" v-model="streetLine1"/>
        </div>

        <div class="input-field">
          <label for="street-line-2">
            Address 2
          </label>
          <input id="street-line-2" type="text" placeholder="" v-model="streetLine2"/>
        </div>

        <div class="input-field">
          <label for="street-line-3">
            Address 3
          </label>
          <input id="street-line-3" type="text" placeholder="" v-model="streetLine3"/>
        </div>

        <div class="input-field">
          <label for="city">
            City
          </label>
          <input id="city" type="text" placeholder="" v-model="city"/>
        </div>

        <div class="input-field">
          <label for="state-selector">
            State Select
          </label>
          <Dropdown
            id="state-selector"
            :options="stateArray"
            :selected="selectedState"
            @updateOption="setState"
          />
        </div>

        <div class="input-field">
          <label for="zip-code">
            Zip or Postal Code
          </label>
          <input id="zip-code" type="text" placeholder="" v-model="zipCode"/>
        </div>

        <div class="input-field">
          <label for="country-selector">
            Country Select
          </label>
          <Dropdown
            id="country-selector"
            :options="countryArray"
            :selected="selectedCountry"
            @updateOption="setNationCode"
          />
        </div>

        <div class="input-field">
          <label for="phone-number">
            Phone Number
          </label>
          <input id="phone-number" type="text" placeholder="555-555-5555" v-model="phoneNumber"/>
        </div>

        <div class="input-field">
          <label id="phone-country-code">
            Country Phone Number Code
          </label>
          <Dropdown
            id="phone-country-code"
            :options="countryCodeArray"
            :selected="selectedCountryCode"
            @updateOption="setCountryCode"
          />
        </div>

        <div class="input-field">
          <label for="contact-priority">
            Contact Priority
          </label>
          <input id="contact-priority" type="number" placeholder="" v-model.number="contactPriority" min="1"/>
        </div>

        <div class="input-field">
          <label for="remove-contact-checkbox">
            Remove Contact
          </label>
          <input id="remove-contact-checkbox" type="checkbox" v-model="removeContactCheckbox"/>
        </div>


        <button type="button" @click="resetContact()">
          Reset
        </button>

        <button type="button" @click="updateContact()">
          Submit
        </button>
    </div>
</template>



<script>
    import Dropdown from '@/components/Dropdown.vue'
    import axios from 'axios'

    export default {
        name: "EmergContactForm.vue",
        components: {
            Dropdown
        },

        props: ['activeContact'],

        data: function() {
            return {
                contactCopy:            {type: Object},

                pidm:                   {type: String, default: ""},
                surrogateId:            {type: String, default: ""},
                relation:               {type: String, default: ""},
                phoneCountryCode:       {type: String, default: ""},
                phoneAreaCode:          {type: String, default: ""},
                phoneExtension:         {type: String, default: ""},

                removeContactCheckbox:  {type: Boolean, default: false},
                firstName:              {type: String, default: ""},
                middleName:             {type: String, default: ""},
                lastName:               {type: String, default: ""},
                streetLine1:            {type: String, default: ""},
                streetLine2:            {type: String, default: ""},
                streetLine3:            {type: String, default: ""},
                city:                   {type: String, default: ""},
                state:                  {type: String, default: ""},
                zipCode:                {type: String, default: ""},
                country:                {type: String, default: ""},
                phoneNumber:            {type: String, default: ""},
                countryCode:            {type: String, default: ""},
                contactPriority:        {type: Number},

                countryCodeArray: [
                    {name: "U.S.A. +1",nationCode: "LUS", country: "USA", code: "1", svgimg: "us.svg",},
                    {name: "Japan +81",nationCode: "LUS", country: "Japan",  code: "81", svgimg: "jp.svg"},
                    {name: "U.K. +44",nationCode: "LUS", country: "UK",  code: "44", svgimg: "gb.svg"},
                    {name: "Germany +49",nationCode: "LUS", country: "Germany",  code: "49", svgimg: "de.svg"},
                    {name: "France +33",nationCode: "LUS", country: "France",  code: "7", svgimg: "fr.svg"},
                    {name: "Russia +7", nationCode: "LUS",country: "Russia",  code: "7", svgimg: "ru.svg"},
                    {name: "China +86", nationCode: "LUS",country: "China",  code: "86", svgimg: "cn.svg"},
                    {name: "South Korea +82", nationCode: "BTW", country: "South Korea",  code: "86", svgimg: "kr.svg"},
                ],
                selectedCountryCode: {
                    name: "U.S.A. +1",
                    code: "1",
                    nationCode: "LUS",
                    svgimg: "us.svg",
                },

                countryArray: [
                    {name: "U.S.A.", nationCode: "LUS", country: "USA", code: "1", svgimg: "us.svg",},
                    {name: "Japan", nationCode: "LUS", country: "Japan",  code: "81", svgimg: "jp.svg"},
                    {name: "U.K.", nationCode: "LUS", country: "UK",  code: "44", svgimg: "gb.svg"},
                    {name: "Germany", nationCode: "LUS",country: "Germany",  code: "49", svgimg: "de.svg"},
                    {name: "France", nationCode: "LUS",country: "France",  code: "7", svgimg: "fr.svg"},
                    {name: "Russia", nationCode: "LUS",country: "Russia",  code: "7", svgimg: "ru.svg"},
                    {name: "China", nationCode: "LUS",country: "China",  code: "86", svgimg: "cn.svg"},
                    {name: "South Korea", nationCode: "NMU", country: "South Korea",  code: "86", svgimg: "kr.svg"},
                ],

                // Default country until real contact data is received
                selectedCountry: {
                    name: "U.S.A.",
                    nationCode: "LUS",
                    code: "1",
                    svgimg: "us.svg"
                },


                stateArray: [
                    {stateCode:"AL", name: "Alabama"},
                    {stateCode:"AL", name: "Alaska"},
                    {stateCode:"AL", name: "Arizona"},
                    {stateCode:"AL", name: "Arkansas"},
                    {stateCode:"AL", name: "California"},
                    {stateCode:"AL", name: "Colorado"},
                    {stateCode:"AL", name: "Connecticut"},
                    {stateCode:"AL", name: "Delaware"},
                    {stateCode:"AL", name: "Florida"},
                    {stateCode:"AL", name: "Georgia"},
                    {stateCode:"AL", name: "Hawaii"},
                    {stateCode:"AL", name: "Idaho"},
                    {stateCode:"AL", name: "Illinois"},
                    {stateCode:"AL", name: "Indiana"},
                    {stateCode:"AL", name: "Iowa"},
                    {stateCode:"AL", name: "Kansas"},
                    {stateCode:"AL", name: "Kentucky"},
                    {stateCode:"AL", name: "Louisiana"},
                    {stateCode:"AL", name: "Maine"},
                    {stateCode:"AL", name: "Maryland"},
                    {stateCode:"AL", name: "Massachusetts"},
                    {stateCode:"AL", name: "Michigan"},
                    {stateCode:"AL", name: "Minnesota"},
                    {stateCode:"AL", name: "Mississippi"},
                    {stateCode:"AL", name: "Missouri"},
                    {stateCode:"AL", name: "Montana"},
                    {stateCode:"AL", name: "Nebraska"},
                    {stateCode:"AL", name: "Nevada"},
                    {stateCode:"AL", name: "New Hampshire"},
                    {stateCode:"AL", name: "New Jersey"},
                    {stateCode:"AL", name: "New Mexico"},
                    {stateCode:"AL", name: "New York"},
                    {stateCode:"AL", name: "North Carolina"},
                    {stateCode:"AL", name: "North Dakota"},
                    {stateCode:"AL", name: "Ohio"},
                    {stateCode:"AL", name: "Oklahoma"},
                    {stateCode:"OR", name: "Oregon"},
                    {stateCode:"AL", name: "Pennsylvania"},
                    {stateCode:"AL", name: "Rhode Island"},
                    {stateCode:"AL", name: "South Carolina"},
                    {stateCode:"AL", name: "South Dakota"},
                    {stateCode:"AL", name: "Tennessee"},
                    {stateCode:"AL", name: "Texas"},
                    {stateCode:"AL", name: "Utah"},
                    {stateCode:"AL", name: "Vermont"},
                    {stateCode:"AL", name: "Virginia"},
                    {stateCode:"AL", name: "Washington"},
                    {stateCode:"AL", name: "West Virginia"},
                    {stateCode:"AL", name: "Wisconsin"},
                    {stateCode:"AL", name: "Wyoming"},
                ],

                selectedState: {
                    name: 'State Select'
                },


                localToAPIMap: {
                  'surrogateId': 'surrogate_id',
                  'pidm': 'pidm',
                  'contactPriority': 'priority',
                  'firstName': 'first_name',
                  'middleName': 'mi',
                  'lastName': 'last_name',
                  'city': 'city',
                  'phoneNumber': 'phone_number',
                  'zipCode': 'zip',
                  'streetLine1': 'street_line1',
                  'streetLine2': 'street_line2',
                  'streetLine3': 'street_line3',
                  'relation': 'relt_code',
                  'state': 'stat_code',
                  'country': 'natn_code',
                  'phoneCountryCode': 'ctry_code_phone',
                  'phoneAreaCode': 'phone_area',
                  'phoneExtension': 'phone_ext'
                }
            }
        },

        watch: {
          // When our parent changes the activate contact, update the form fields
          activeContact: function(contactObject) {
            var vm = this

            // Deep clone the object in case we need a reset
            vm.contactCopy = JSON.parse(JSON.stringify(contactObject))

            for(let key in contactObject) {
              vm[key] = contactObject[key]
            }

            vm['selectedCountry']     = vm.findByNationCode(vm.country)
            vm['selectedState']       = vm.findStateByCode(vm.state)
            vm['selectedCountryCode'] = vm.findPhoneCodeByNationCode(vm.country)
          }
        },

        methods: {
            setNationCode(countryObject) {
                this.country = countryObject.nationCode;
                this['selectedCountry'] = this.findByNationCode(this.country)
            },

            setCountryCode(countryCodeObject) {
                this.phoneCountryCode = countryCodeObject.code;
                this['selectedCountryCode'] = this.findPhoneCodeByNationCode(this.country)
            },

            setState(stateObject) {
                this.state = stateObject.stateCode;
                this['selectedState'] = this.findStateByCode(this.state)
            },

            updateContact() {
              var vm = this;
              let contactObject = vm.toContactObject();

              // Deep clone the object in case we need a reset
              vm.contactCopy = JSON.parse(JSON.stringify(contactObject))

              // Tell our parent to update and submit us to the backend
              vm.$emit('updateContact', contactObject)
            },

            toContactObject() {
              var vm = this;

              let contactObject = {}
              for(let key in vm.localToAPIMap)
                contactObject[key] = vm[key];

              return contactObject
            },

            resetContact() {
              var vm = this;
              for(let key in vm.contactCopy) {
                vm[key] = vm.contactCopy[key]
              }

              vm['selectedCountry']     = vm.findByNationCode(vm.country)

              vm['selectedState']       = vm.findStateByCode(vm.state)
              vm['selectedCountryCode'] = vm.findPhoneCodeByNationCode(vm.country)
            },



            findByNationCode(nationCode) {
                for(let i=0; i<this.countryArray.length; ++i) {
                    if (this.countryArray[i].nationCode === nationCode) {
                        return this.countryArray[i]
                    }
                }
            },

            findPhoneCodeByNationCode(nationCode) {
                for (let i = 0; i < this.countryCodeArray.length; i++) {
                    if (this.countryCodeArray[i].nationCode === nationCode){
                        return this.countryCodeArray[i];
                    }
                }
            },

            findStateByCode(stateCode) {
                for (let i = 0; i < this.stateArray.length; i++) {
                    if (this.stateArray[i].stateCode === stateCode){
                        return this.stateArray[i];
                    }
                }
            }
        }
    }
</script>



<style scoped>
#contact-form > input::after {
  background-color:red;
  content: "\A";
  white-space: pre;
}
</style>
