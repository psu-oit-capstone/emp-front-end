<template>
    <div class="contact-form">
        <label for="first-name">
          First Name
        </label>
        <input id="first-name" type="text" placeholder="" v-model="fnamebox"/>

        <label for="middle-name">
          Middle Name
        </label>
        <input id="middle-name" type="text" placeholder="" v-model="mnamebox"/>

        <label for="last-name">
          Last Name
        </label>
        <input id="last-name" type="text" placeholder="" v-model="lnamebox"/>

        <label for="street-line-1">
          Address 1
        </label>
        <input id="street-line-1" type="text" placeholder="" v-model="address1box"/>

        <label for="street-line-2">
          Address 2
        </label>
        <input id="street-line-2" type="text" placeholder="" v-model="address2box"/>

        <label for="street-line-3">
          Address 3
        </label>
        <input id="street-line-3" type="text" placeholder="" v-model="address3box"/>

        <label for="city">
          City
        </label>
        <input id="city" type="text" placeholder="" v-model="citybox"/>

        <label for="state-selector">
          State Select
        </label>
        <DropdownNoImg
          id="state-selector"
          :options="stateArray"
          :selected="selectedState"
          :placeholder="'Select a state'"
          v-on:updateOption="currState"
        />

        <label for="zip-code">
          Zip or Postal Code
        </label>
        <input id="zip-code" type="text" placeholder="" v-model="zipbox"/>

        <label for="country-selector">
          Country Select
        </label>
        <Dropdown
          :options="countryArray"
          :selected="selectedCountry"
          :placeholder="'Select a country'"
          v-on:updateOption="currCountry"
        />

        <label for="phone-number">
          Phone Number
        </label>
        <input id="phone-number" type="text" placeholder="555-555-5555" v-model="phonebox"/>

        <label id="phone-country-code">
          Country Phone Number Code
        </label>
        <Dropdown
          id="phone-country-code"
          :options="countryCodeArray"
          :selected="selectedCountryCode"
          :placeholder="'Select a country'"
          v-on:updateOption="currCountryCode"
        />

        <label for="contact-priority">
          Contact Priority
        </label>
        <input id="contact-priority" type="number" placeholder="" v-model.number="orderbox" min="1"/>

        <label for="remove-contact-checkbox">
          Remove Contact
        </label>
        <input id="remove-contact-checkbox" type="checkbox" v-model="regbox"/>


        <button type="button" v-on:click="fillEmergencyContactInformation()">
          Reset
        </button>

        <button type="button" v-on:click="submitEmergencyContactInformation()">
          Submit
        </button>
    </div>
</template>

<script>
    //For uses of Dropdown you MUST pass in all defaults
    import Dropdown from '@/components/Dropdown.vue'
    import DropdownNoImg from '@/components/DropdownNoImg.vue'
    import axios from 'axios'

    export default {
        name: "EmergContactForm.vue",
        components: {
            Dropdown,
            DropdownNoImg,
        },
        //Receives contact to be edited from parent
        props: [
            'contact_in'
        ],

        //This runs on instance creation
        data: function() { return {
            pidm: '',
            surrogateId: '',
            priority: '',
            relation: '',
            phoneCountryCode: '',
            phoneAreaCode: '',
            phoneExtension: '',

            regbox:       {type: Boolean, default: false},
            fnamebox:     {type: String, default: ""},
            mnamebox:     {type: String, default: ""},
            lnamebox:     {type: String, default: ""},
            address1box:  {type: String, default: ""},
            address2box:  {type: String, default: ""},
            address3box:  {type: String, default: ""},
            citybox:      {type: String, default: ""},
            statebox:     {type: String, default: ""},
            zipbox:       {type: String, default: ""},
            countrybox:   {type: String, default: ""},
            phonebox:     {type: String, default: ""},
            countryCode:  {type: String, default: ""},
            orderbox:     {type: Number},

            countryCodeArray: [
                {name: "U.S.A. +1", country: "USA", code: "1", svgimg: "us.svg",}, {name: "Japan +81", country: "Japan",  code: "81", svgimg: "jp.svg"},
                {name: "U.K. +44", country: "UK",  code: "44", svgimg: "gb.svg"}, {name: "Germany +49", country: "Germany",  code: "49", svgimg: "de.svg"},
                {name: "France +33", country: "France",  code: "7", svgimg: "fr.svg"},{name: "Russia +7", country: "Russia",  code: "7", svgimg: "ru.svg"},
                {name: "China +86", country: "China",  code: "86", svgimg: "cn.svg"}, {name: "South Korea +82", country: "South Korea",  code: "86", svgimg: "kr.svg"},
            ],
            selectedCountryCode: {
                name: "U.S.A. +1", code: "1", svgimg: "us.svg",
            },
            countryArray: [
                {name: "U.S.A.", country: "USA", code: "1", svgimg: "us.svg",}, {name: "Japan", country: "Japan",  code: "81", svgimg: "jp.svg"},
                {name: "U.K.", country: "UK",  code: "44", svgimg: "gb.svg"}, {name: "Germany", country: "Germany",  code: "49", svgimg: "de.svg"},
                {name: "France", country: "France",  code: "7", svgimg: "fr.svg"},{name: "Russia", country: "Russia",  code: "7", svgimg: "ru.svg"},
                {name: "China", country: "China",  code: "86", svgimg: "cn.svg"}, {name: "South Korea", country: "South Korea",  code: "86", svgimg: "kr.svg"},
            ],
            selectedCountry: {
                name: "U.S.A.", code: "1", svgimg: "us.svg",
            },
            stateArray: [
                {name: "Alabama"}, {name: "Alaska"}, {name: "Arizona"}, {name: "Arkansas"},
                {name: "California"}, {name: "Colorado"}, {name: "Connecticut"}, {name: "Delaware"},
                {name: "Florida"}, {name: "Georgia"}, {name: "Hawaii"}, {name: "Idaho"},
                {name: "Illinois"}, {name: "Indiana"}, {name: "Iowa"}, {name: "Kansas"},
                {name: "Kentucky"}, {name: "Louisiana"}, {name: "Maine"}, {name: "Maryland"},
                {name: "Massachusetts"}, {name: "Michigan"}, {name: "Minnesota"}, {name: "Mississippi"},
                {name: "Missouri"}, {name: "Montana"}, {name: "Nebraska"}, {name: "Nevada"},
                {name: "New Hampshire"}, {name: "New Jersey"}, {name: "New Mexico"}, {name: "New York"},
                {name: "North Carolina"}, {name: "North Dakota"}, {name: "Ohio"}, {name: "Oklahoma"},
                {name: "Oregon"}, {name: "Pennsylvania"}, {name: "Rhode Island"}, {name: "South Carolina"},
                {name: "South Dakota"}, {name: "Tennessee"}, {name: "Texas"}, {name: "Utah"},
                {name: "Vermont"}, {name: "Virginia"}, {name: "Washington"}, {name: "West Virginia"},
                {name: "Wisconsin"}, {name: "Wyoming"},
            ],
            selectedState: {
                name: 'State Select'
            }
        }},

        watch: {
            contact_in: function(payload) {
                this.setContact(payload)
            }
        },

        methods: {
          safeNull(str) {
            if(str === 'null')
              return ''
            return str
          },

          // Grab contacts via axios and bind to Vue model
          fillEmergencyContactInformation() {
            var vm = this;

            axios({
              method: 'post',
              baseURL: 'http://127.0.0.1:8000/getEmergencyContacts/',
            })
            .then(response => {

              let data = response.data[0];

              vm.surrogateId = data['surrogate_id']
              vm.pidm = data['pidm'];
              vm.priority = data['priority'];

              vm.fnamebox = data['first_name'];
              vm.mnamebox = this.safeNull(data['mi']);
              vm.lnamebox = data['last_name'];
              vm.citybox = data['city'];
              vm.statebox = data['stat_code'];
              vm.phonebox = data['phone_number'];
              vm.zipbox = data['zip'];
              vm.address1box = this.safeNull(data['street_line1']);
              vm.address2box = this.safeNull(data['street_line2']);
              vm.address3box = this.safeNull(data['street_line3']);

              /* TODO: Not form-bound data */
              vm.relation = data['relt_code']
              vm.statebox = data['stat_code']
              vm.nation = data['natn_code']
              vm.phoneCountryCode = data['ctry_code_phone']
              vm.phoneAreaCode = data['phone_area']
              vm.phoneExtension = data['phone_ext']
            })
            .catch(error => console.log(error.toString()))
          },

          submitEmergencyContactInformation() {
            var vm = this;

            let local_to_api_map = {
              'surrogateId': 'surrogate_id',
              'pidm': 'pidm',
              'priority': 'priority',
              'fnamebox': 'first_name',
              'mnamebox': 'mi',
              'lnamebox': 'last_name',
              'citybox': 'city',
              'phonebox': 'phone_number',
              'zipbox': 'zip',
              'address1box': 'street_line1',
              'address2box': 'street_line2',
              'address3box': 'street_line3',
              'relation': 'relt_code',
              'statebox': 'stat_code',
              'countrybox': 'natn_code',
              'phoneCountryCode': 'ctry_code_phone',
              'phoneAreaCode': 'phone_area',
              'phoneExtension': 'phone_ext'
            }

            let bodyFormData = new FormData();

            for (let key in local_to_api_map) {
              if(vm[key]) {
                bodyFormData.set(local_to_api_map[key], vm[key])
              }
            }


            axios({
              method: 'post',
              baseURL: 'http://127.0.0.1:8000/updateEmergencyContact/',
              data: bodyFormData
            })
            .then(response => {
              console.log(response)
              if(response['status'] == '200')
                console.log('User information was updated.')
              if(response['status'] == '422')
                console.log('Form fields incorrect or incomplete.')
            })
            .catch(error => console.log(error))
          },



            currCountry(payload) {
                this.countrybox = payload.country;
            },
            currCountryCode(payload) {
                this.countryCode = payload.code;
            },
            currState(payload) {
                this.statebox = payload.name;
            },
            submit() {
                this.contact_out = this.makeContact();
                this.$emit('updateContact', this.contact_out);
                this.resetContact();
            },
            makeContact() {
                return {
                    name: {fnamebox: this.fnamebox, mnamebox: this.mnamebox, lnamebox: this.lnamebox},
                    address: {address1box: this.address1box, address2box: this.address2box, address3box: this.address3box},
                    area: {
                        countrybox: this.countrybox, countryCode: this.countryCode, phonebox: this.phonebox,
                        statebox: this.statebox, citybox: this.citybox, zipbox: this.zipbox
                    },
                    order: {orderbox: this.orderbox},
                    delete: {regbox: this.regbox}
                }
            },
            setContact(payload) {
                this.fnamebox = payload.name.fnamebox;
                this.mnamebox = payload.name.mnamebox;
                this.lnamebox = payload.name.lnamebox;
                this.address1box = payload.address.address1box;
                this.address2box = payload.address.address2box;
                this.address3box = payload.address.address3box;
                this.citybox = payload.area.citybox;
                this.statebox = payload.area.statebox;
                this.selectedState = payload.area.statebox;
                this.zipbox = payload.area.zipbox;
                this.countrybox = payload.area.countrybox;
                this.selectedCountry = this.findByCountry(payload.area.countrybox, this.countryArray);
                this.countryCode = payload.area.countryCode;
                this.selectedCountryCode = this.findByCountryCode(payload.area.countryCode, this.countryCodeArray);
                this.phonebox = payload.area.phonebox;
                this.orderbox = payload.order.orderbox;
                this.regbox = payload.delete.regbox;
            },
            resetContact() {
                this.fnamebox = "";
                this.mnamebox = "";
                this.lnamebox = "";
                this.address1box = "";
                this.address2box = "";
                this.address3box = "";
                this.citybox = "";
                this.statebox = "";
                this.selectedState = {name: 'State Select'};
                this.zipbox = "";
                this.countrybox = "USA";
                this.selectedCountry = {name: "U.S.A.", country: "USA", code: "1", svgimg: "us.svg",};
                this.phonebox = "";
                this.countryCode = "1";
                this.selectedCountryCode = {name: "U.S.A. +1", country: "USA", code: "1", svgimg: "us.svg",};
                this.orderbox = 1;
                this.regbox = false;
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
            },
        },

        //This initializes the above declarations
        created: function() {
            this.resetContact()
        },

        mounted: function() {
            this.fillEmergencyContactInformation()
        }
    }
</script>

<style scoped>

</style>
