<template>
    <div id="contact-form">
      <div id="form-body">

        <div class="text-box fnamebox">
          <label for="first-name">
            First Name
          </label>
          <input id="first-name" type="text" placeholder="First Name" v-model="firstName"/>
        </div>

        <div class="text-box mnamebox">
          <label for="middle-name">
            Middle Name
          </label>
          <input id="middle-name" type="text" placeholder="Middle Initial" v-model="middleName"/>
        </div>

        <div class="text-box lnamebox">
          <label for="last-name">
            Last Name
          </label>
          <input id="last-name" type="text" placeholder="Last Name" v-model="lastName"/>
        </div>

        <div class="select relation-box">
          <label>
            Relationship
          </label>
          <Dropdown
            :options="relationArray"
            :selected="selectedRelation"
            @updateOption="setRelation"
            displayField="description"
            placeholder="Relation"
          />
        </div>

        <div class="text-box address1box">
          <label for="street-line-1">
            Address 1
          </label>
          <input id="street-line-1" type="text" placeholder="Street Address" v-model="streetLine1"/>
        </div>

        <div class="text-box address2box">
          <label for="street-line-2">
            Address 2
          </label>
          <input id="street-line-2" type="text" placeholder="Apt/Bldg #" v-model="streetLine2"/>
        </div>

        <div class="text-box citybox">
          <label for="city">
            City
          </label>
          <input id="city" type="text" placeholder="City" v-model="city"/>
        </div>

        <div class="text-box zipbox">
          <label for="zip-code">
            Postal Code
          </label>
          <input id="zip-code" type="text" placeholder="97201" v-model="zipCode"/>
        </div>

        <div class="text-box address3box">
          <label for="street-line-3">
            Address 3
          </label>
          <input id="street-line-3" type="text" placeholder="Region" v-model="streetLine3"/>
        </div>

        <div class="select state-box">
          <label for="state-selector">
            State
          </label>
          <Dropdown
            id="state-selector"
            :options="stateArray"
            :selected="selectedState"
            @updateOption="setState"
            displayField="value"
            placeholder="State"
          />
        </div>

        <div class="select country-box">
          <label for="country-selector">
            Country
          </label>
          <Dropdown
            id="country-selector"
            :options="countryArray"
            :selected="selectedCountry"
            @updateOption="setNationCode"
            displayField="value"
            placeholder="Country"
          />
        </div>

        <div class="select country-code">
          <label id="phone-country-code">
            Country Code
          </label>
          <Dropdown
            id="phone-country-code"
            :options="countryArray"
            :selected="selectedCountryCode"
            @updateOption="setCountryCode"
            displayField="phone_code"
            placeholder="N/A"
          />
        </div>

        <div class="text-box phone-input">
          <label for="phone-number">
            Phone Number
          </label>
          <input id="phone-number" type="text" placeholder="555-555-5555" v-model="phoneNumber"/>
        </div>

        <div class="text-box orderbox">
            <label for="contact-priority">
              Contact Priority
            </label>
            <input id="contact-priority"  type="number" placeholder="" v-model.number="contactPriority" min="1"/>
        </div>

    </div>
    <div class="button-holder">
        <button type="button" class="submit" @click="updateContact()">Submit</button>
        <button type="button" class="reset" @click="resetContact()">Reset</button>
    </div>
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

        props: [
          'activeContact',
          'countryArray',
          'stateArray',
          'relationArray',
          'countryCodeArray',
          'isFetching'
        ],

        data: function() {
            return {

                contactCopy:            {type: Object},

                pidm:                   {type: String, default: ""},
                surrogateId:            {type: String, default: ""},
                relation:               {type: String, default: ""},
                phoneCountryCode:       {type: String, default: ""},
                phoneAreaCode:          {type: String, default: ""},
                phoneExtension:         {type: String, default: ""},

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
                contactPriority:        {type: Number},

                /*
                  Here we'll hold objects representing country, state, relation,
                  and phoneCountryCode. e.g. {name: "USA", code: "LUS", svgimg: "us.svg"}
                */
                selectedCountryCode:  null,
                selectedCountry:      null,
                selectedState:        null,
                selectedRelation:     null,

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
                },

                nullableFields: [
                  'country',
                  'state',
                  'phoneCountryCode',
                  'relation'
                ]
            }
        },

        watch: {
          // When our parent changes the active contact, update the form fields
          activeContact: function(contactObject) {
            // Deep clone the object in case we need a reset
            this.contactCopy = JSON.parse(JSON.stringify(contactObject))
            this.fillForm(contactObject)
          },

          isFetching: function(state) {
            // If we've just now fetched all the dropdown & contact data
            if(state === false)
              this.updateDropdowns()
          }
        },

        methods: {
            // Takes an object with contact attributes filled. Fills the Vue model with the contact data.
            fillForm(contactObject) {
              for(let key in contactObject) {
                // Attribute is nullable OR is a completed non-nullable key
                if(this.nullableFields.includes(key) || (contactObject[key] !== null && contactObject[key] !== 'null')) {
                  this[key] = contactObject[key]
                }
                else {
                  this[key] = ''
                }
              }

              this.updateDropdowns()
            },

            // Assign selected dropdown elements by mapping codes to their dropdown options
            updateDropdowns() {
              var vm = this;

              // Place the correct Dropdown options in our dynamically bound variables
              vm['selectedCountry']     = vm.findByNationCode(vm.country)
              vm['selectedState']       = vm.findStateByCode(vm.state)
              vm['selectedCountryCode'] = vm.findNationByPhoneCode(vm.phoneCountryCode)
              vm['selectedRelation']    = vm.findRelationByCode(vm.relation)
            },

            setState(stateObject) {
                this.state = stateObject.id;
                this['selectedState'] = this.findStateByCode(this.state)
            },

            setNationCode(countryObject) {
                this.country = countryObject.id;
                this['selectedCountry'] = this.findByNationCode(this.country)
            },

            setCountryCode(countryObject) {
                this.phoneCountryCode = countryObject.phone_code;
                this['selectedCountryCode'] = this.findNationByPhoneCode(this.phoneCountryCode)
            },

            setRelation(relationObject) {
                this.relation = relationObject.id;
                this['selectedRelation'] = this.findRelationByCode(this.relation)
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

            // Read the contact clone back into the form fields & dropdowns
            resetContact() {
              this.fillForm(this.contactCopy)
            },

            findByNationCode(nationCode) {
                for(let i=0; i<this.countryArray.length; ++i) {
                    if (this.countryArray[i].id === nationCode) {
                        return this.countryArray[i]
                    }
                }

                // The given code matches no country
                return null;
            },

            findRelationByCode(code) {
                for (let i = 0; i < this.relationArray.length; i++) {
                    if (this.relationArray[i].code === code){
                        return this.relationArray[i];
                    }
                }

                // The given code matches no relation
                return null;
            },

            findNationByPhoneCode(phoneCode) {
                for (let i = 0; i < this.countryArray.length; i++) {
                    if (this.countryArray[i].phone_code === phoneCode){
                        return this.countryArray[i];
                    }
                }

                // The given code matches no phone code
                return null;
            },

            findStateByCode(stateCode) {
                for (let i = 0; i < this.stateArray.length; i++) {
                    if (this.stateArray[i].id === stateCode){
                        return this.stateArray[i];
                    }
                }

                // The given code matches no state
                return null;
            }
        }
    }
</script>


<style>

.text-box label{
    display:block;
    font-size:12px;
}

.text-box input{
    border:1px solid black;
    border-radius:4px;
    padding:16px 8px 16px 14px;
    font-size: 16px;
    width: 100%;
    box-sizing : border-box;
}

.text-box{
    padding:0px 0px 0px 0px;
    margin:0px 0px 0px 0px;
}

.select label{
    display:block;
    font-size:12px;
}

.select{
    padding:0px 0px 0px 0px;
    margin:0px 0px 0px 0px;
}

.button-holder{
    margin-top:30px;
    height:15px;
}

.submit{
    font-size:14px;
    font-weight: 500;
    letter-spacing:1px;
    color:#ffffff;
    height:36px;
    background-color:#28a745;
    padding-right:16px;
    padding-left:16px;
    border-radius:4px;
    box-sizing:border-box;
    margin-left:10px;
    float:right;
}

.reset{
    font-size:14px;
    font-weight: 500;
    letter-spacing:1px;
    color:#5f3417;
    height:36px;
    background-color:transparent;
    padding-right:16px;
    padding-left:16px;
    border:1px solid #5f3417;
    border-radius:4px;
    float:right;
    box-sizing:border-box;
}

/* Large tablets and desktops */
@media (min-width: 735px) {
    #form-body{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        column-gap: 20px;
    }

    .fnamebox{
        grid-column:span 2;
    }

    .mnamebox{
        grid-column:span 2;
    }

    .lnamebox{
        grid-column:span 2;
    }

    .relation-box{
        grid-column:span 2;
    }

    .address1box{
        grid-column:span 3;
        grid-row:2;
    }

    .address2box{
        grid-column:span 3;
        grid-row:3;
    }

    .address3box{
        grid-column:span 3;
        grid-row:3;
    }

    .citybox{
        grid-column:span 2;
        grid-row:4;
    }

    .state-box{
        grid-row:4;
    }

    .zipbox{
        grid-row:4
    }

    .country-box{
        grid-column:span 2;
        grid-row:4;
    }

    .country-code{
        grid-row:5;
    }

    .phone-input{
        grid-column:span 2;
        grid-row:5;
    }

    .orderbox{
        grid-column:6;
        grid-row:5;
    }
}

/* Portrait phones and up */
@media (min-width: 451px) and (max-width: 734px) {

    #form-body{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 20px;
    }

    .fnamebox{
        grid-column:span 2;
        grid-row: 1;
    }

    .mnamebox{
        grid-column:span 2;
        grid-row: 1;
    }

    .lnamebox{
        grid-column:span 2;
        grid-row: 2;
    }

    .relation-box{
        grid-column:span 2;
        grid-row: 2;
    }

    .address1box{
        grid-column:span 4;
        grid-row: 3;
    }

    .address2box{
        grid-column:span 2;
        grid-row: 4;
    }

    .citybox{
        grid-column:span 2;
        grid-row: 5;
    }

    .zipbox{
        grid-row: 5;
    }

    .address3box{
        grid-column:span 2;
        grid-row: 4;
    }

    .state-box{
        grid-row:5;
    }

    .country-box{
        grid-row:6;
    }

    .country-code{
        grid-row:7;
    }

    .phone-input{
        grid-column:span 2;
        grid-row:7;
    }

    .orderbox{
        grid-row:7;
    }
}

/* Portrait phones and down */
@media (max-width: 450px) {

    #form-body{
        display:grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }

    .fnamebox{
        grid-column:span 2;
    }

    .mnamebox{
        grid-column:span 2;
    }

    .lnamebox{
        grid-column:span 2;
    }

    .relation-box{
        grid-column:span 2;
    }

    .address1box{
        grid-column:span 2;
    }


}
</style>
