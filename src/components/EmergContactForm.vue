<template>
    <div class="contact-form">
        <div>
            <label for="fnamebox">First Name
                <input type="text" placeholder="" v-model="fnamebox" v-bind:id="fnamebox"/></label><br>
            <label for="mnamebox">Middle Name
                <input type="text" placeholder="" v-model="mnamebox" v-bind:id="mnamebox"/></label><br>
            <label for="lnamebox">Last Name
                <input type="text" placeholder="" v-model="lnamebox" v-bind:id="lnamebox"/></label><br>
            <label for="address1box">Address 1
                <input type="text" placeholder="" v-model="address1box" v-bind:id="address1box"/></label><br>
            <label for="address2box">Address 2
                <input type="text" placeholder="" v-model="address2box" v-bind:id="address2box"/></label><br>
            <label for="address3box">Address 3
                <input type="text" placeholder="" v-model="address3box" v-bind:id="address3box"/></label><br>
            <label for="citybox">City
                <input type="text" placeholder="" v-model="citybox" v-bind:id="citybox"/></label><br>
            <p class="state_label">State Select
                <DropdownNoImg :options="stateArray"
                               :selected="selectedState"
                               v-on:updateOption="currState"
                               :placeholder="'Select a state'">
                </DropdownNoImg><br>
                <label for="zipbox">Zip or Postal Code
                    <input type="text" placeholder="" v-model="zipbox" v-bind:id="zipbox"/></label><br>
            <p class="country_label">Country Select
                <Dropdown :options="countryArray"
                          :selected="selectedCountry"
                          v-on:updateOption="currCountry"
                          :placeholder="'Select a country'">
                </Dropdown><br>
            <label for="phonebox">Phone Number
                <input type="text" placeholder="555-555-5555" v-model="phonebox" v-bind:id="phonebox"/></label><br>
            <p class="country_code_label">Country Phone Number Code
                <Dropdown :options="countryCodeArray"
                          :selected="selectedCountryCode"
                          v-on:updateOption="currCountryCode"
                          :placeholder="'Select a country'">
                </Dropdown></p>
            <label for="orderbox">Contact Order
                <input type="number" placeholder="" v-model.number="orderbox" v-bind:id="orderbox" min="1"/></label><br>

            <label for="regbox">
                <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
                Remove Contact.</label>
        </div>

        <!-- Buttons are here -->
        <button type="button" v-on:click="resetContact()">Reset</button>
        <button type="button" v-on:click="submitEmergencyContactInformation()">Submit</button><br><br>
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
        //Whenever something in props is updated the matching function here executes
        watch: {
            contact_in: function(payload) {
                this.setContact(payload)
            }
        },
        //This is for button clicks
        methods: {
          fillEmergencyContactInformation() {
            var vm = this;

            axios({
              method: 'post',
              baseURL: 'http://127.0.0.1:8000/getEmergencyContacts/',
            })
            .then(response => {
              let data = response.data[0];
              vm.fnamebox = data['first_name'];
<<<<<<< HEAD
              vm.mnamebox = data['mi'];
              vm.lnamebox = data['last_name'];
              vm.citybox = data['city'];
              vm.statebox = data['stat_code'];
              vm.phonebox = data['phone_number'];
              vm.zipbox = data['zip'];


              vm.address1box = data['street_line1'];
              vm.address2box = data['street_line2'];
              vm.address3box = data['street_line3'];
=======
              vm.lnamebox = data['last_name'];
>>>>>>> 573d3d61bdb86071400f69600bcd6e917cfce721
            })
            .catch(error => console.log(error.toString()))
          },

          submitEmergencyContactInformation() {
            var vm = this;

            let bodyFormData = new FormData();
            bodyFormData.set('first_name', vm.fnamebox);
            bodyFormData.set('last_name', vm.lnamebox);

            axios({
              method: 'post',
              baseURL: 'http://127.0.0.1:8000/updateEmergencyContacts/',
              data: bodyFormData
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
                this.statebox = payload;
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
                this.selectedState = payload.area.statebox; // Here to set dropdown
                this.zipbox = payload.area.zipbox;
                this.countrybox = payload.area.countrybox;
                this.selectedCountry = this.findByCountry(payload.area.countrybox, this.countryArray); // Here to set the dropdown
                this.countryCode = payload.area.countryCode;
                this.selectedCountryCode = this.findByCountryCode(payload.area.countryCode, this.countryCodeArray); //Here to set the dropdown
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
                this.selectedState = {name: 'State Select'}; // Here to set dropdown to default of Oregon
                this.zipbox = "";
                this.countrybox = "USA";
                this.selectedCountry = {name: "U.S.A.", country: "USA", code: "1", svgimg: "us.svg",}; // Here to set the dropdown
                this.phonebox = "";
                this.countryCode = "1";
                this.selectedCountryCode = {name: "U.S.A. +1", country: "USA", code: "1", svgimg: "us.svg",}; //Here to set the dropdown
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

        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            regbox: {type: Boolean, default: false},
            fnamebox: {type: String, default: ""},
            mnamebox: {type: String, default: ""},
            lnamebox: {type: String, default: ""},
            address1box: {type: String, default: ""},
            address2box: {type: String, default: ""},
            address3box: {type: String, default: ""},
            citybox: {type: String, default: ""},
            statebox: {type: String, default: ""},
            zipbox: {type: String, default: ""},
            countrybox: {type: String, default: ""},
            phonebox: {type: String, default: ""},
            countryCode: {type: String, default: ""},
            orderbox: {type: Number},

            //Dropdown data and so forth
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
