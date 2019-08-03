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
            @updateOption="setCountry"
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
                    {name: "U.S.A. +1", country: "USA", code: "1", svgimg: "us.svg",},
                    {name: "Japan +81", country: "Japan",  code: "81", svgimg: "jp.svg"},
                    {name: "U.K. +44", country: "UK",  code: "44", svgimg: "gb.svg"},
                    {name: "Germany +49", country: "Germany",  code: "49", svgimg: "de.svg"},
                    {name: "France +33", country: "France",  code: "7", svgimg: "fr.svg"},
                    {name: "Russia +7", country: "Russia",  code: "7", svgimg: "ru.svg"},
                    {name: "China +86", country: "China",  code: "86", svgimg: "cn.svg"},
                    {name: "South Korea +82", country: "South Korea",  code: "86", svgimg: "kr.svg"},
                ],
                selectedCountryCode: {
                    name: "U.S.A. +1",
                    code: "1",
                    svgimg: "us.svg",
                },

                countryArray: [
                    {name: "U.S.A.", country: "USA", code: "1", svgimg: "us.svg",},
                    {name: "Japan", country: "Japan",  code: "81", svgimg: "jp.svg"},
                    {name: "U.K.", country: "UK",  code: "44", svgimg: "gb.svg"},
                    {name: "Germany", country: "Germany",  code: "49", svgimg: "de.svg"},
                    {name: "France", country: "France",  code: "7", svgimg: "fr.svg"},
                    {name: "Russia", country: "Russia",  code: "7", svgimg: "ru.svg"},
                    {name: "China", country: "China",  code: "86", svgimg: "cn.svg"},
                    {name: "South Korea", country: "South Korea",  code: "86", svgimg: "kr.svg"},
                ],
                selectedCountry: {
                    name: "U.S.A.",
                    code: "1",
                    svgimg: "us.svg"
                },

                stateArray: [
                    {name: "Alabama"},
                    {name: "Alaska"},
                    {name: "Arizona"},
                    {name: "Arkansas"},
                    {name: "California"},
                    {name: "Colorado"},
                    {name: "Connecticut"},
                    {name: "Delaware"},
                    {name: "Florida"},
                    {name: "Georgia"},
                    {name: "Hawaii"},
                    {name: "Idaho"},
                    {name: "Illinois"},
                    {name: "Indiana"},
                    {name: "Iowa"},
                    {name: "Kansas"},
                    {name: "Kentucky"},
                    {name: "Louisiana"},
                    {name: "Maine"},
                    {name: "Maryland"},
                    {name: "Massachusetts"},
                    {name: "Michigan"},
                    {name: "Minnesota"},
                    {name: "Mississippi"},
                    {name: "Missouri"},
                    {name: "Montana"},
                    {name: "Nebraska"},
                    {name: "Nevada"},
                    {name: "New Hampshire"},
                    {name: "New Jersey"},
                    {name: "New Mexico"},
                    {name: "New York"},
                    {name: "North Carolina"},
                    {name: "North Dakota"},
                    {name: "Ohio"},
                    {name: "Oklahoma"},
                    {name: "Oregon"},
                    {name: "Pennsylvania"},
                    {name: "Rhode Island"},
                    {name: "South Carolina"},
                    {name: "South Dakota"},
                    {name: "Tennessee"},
                    {name: "Texas"},
                    {name: "Utah"},
                    {name: "Vermont"},
                    {name: "Virginia"},
                    {name: "Washington"},
                    {name: "West Virginia"},
                    {name: "Wisconsin"},
                    {name: "Wyoming"},
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
          }
        },

        methods: {
            setCountry(countryObject) {
              this.country = countryObject.country;
            },

            setCountryCode(countryCodeObject) {
                this.countryCode = countryCodeObject.code;
            },

            setState(stateObject) {
                this.state = stateObject.name;
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
            },



            findByCountry(country, targetCountries) {
                //Here we expect either a string containing a country name
                for (let i = 0; i < targetCountries.length; i++) {
                    if (targetCountries[i].country === country){
                        return targetCountries[i];
                    }
                }
            },
            findByCountryCode(countryCode, targetCodes) {
                //Here we expect either a string containing a country name
                for (let i = 0; i < targetCodes.length; i++) {
                    if (targetCodes[i].code === countryCode){
                        return targetCodes[i];
                    }
                }
            },
            findByStateName(name, targetCodes) {
                //Here we expect either a string containing a country name
                for (let i = 0; i < targetCodes.length; i++) {
                    if (targetCodes[i].name === name){
                        return targetCodes[i];
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
