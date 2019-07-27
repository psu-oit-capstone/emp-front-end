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
                <input type="text" placeholder="555 555 5555" v-model="phonebox" v-bind:id="phonebox"/></label><br>
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
        <button type="button" v-on:click="submit()">Submit</button><br><br>
    </div>
</template>

<script>
    //For uses of Dropdown you MUST pass in all defaults
    import Dropdown from '@/components/Dropdown.vue'
    import DropdownNoImg from '@/components/DropdownNoImg.vue'

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
                //A countries
                {name: "Afghanistan", country: "Afghanistan",  code: "", svgimg: ".svg"}, {name: "Albania", country: "Albania",  code: "", svgimg: ".svg"},
                {name: "Algeria", country: "Algeria",  code: "", svgimg: ".svg"}, {name: "American Samoa", country: "American Samoa",  code: "", svgimg: ".svg"},
                {name: "Andorra", country: "Andorra",  code: "", svgimg: ".svg"}, {name: "Angola", country: "Angola",  code: "", svgimg: ".svg"},
                {name: "Anguilla", country: "Anguilla",  code: "", svgimg: ".svg"}, {name: "Antarctica", country: "Antarctica",  code: "", svgimg: ".svg"},
                {name: "Antigua and Barbuda", country: "Antigua and Barbuda",  code: "", svgimg: ".svg"}, {name: "Argentina", country: "",  code: "", svgimg: ".svg"},
                {name: "Armenia", country: "Armenia",  code: "", svgimg: ".svg"}, {name: "Aruba", country: "Aruba",  code: "", svgimg: ".svg"},
                {name: "Australia", country: "Australia",  code: "", svgimg: ".svg"}, {name: "Austria", country: "Austria",  code: "", svgimg: ".svg"},
                {name: "Azerbaijan", country: "Azerbaijan",  code: "", svgimg: ".svg"},
                //B countries
                {name: "Bahamas", country: "Bahamas",  code: "", svgimg: ".svg"}, {name: "Bahrain", country: "Bahrain",  code: "", svgimg: ".svg"},
                {name: "Bangladesh", country: "Bangladesh",  code: "", svgimg: ".svg"}, {name: "Barbados", country: "Barbados",  code: "", svgimg: ".svg"},
                {name: "Belarus", country: "Belarus",  code: "", svgimg: ".svg"}, {name: "Belgium", country: "Belgium",  code: "", svgimg: ".svg"},
                {name: "Belize", country: "Belize",  code: "", svgimg: ".svg"}, {name: "Benin", country: "Benin",  code: "", svgimg: ".svg"},
                {name: "Bermuda", country: "Bermuda",  code: "", svgimg: ".svg"}, {name: "Bhutan", country: "Bhutan",  code: "", svgimg: ".svg"},
                {name: "Bolivia", country: "Bolivia",  code: "", svgimg: ".svg"}, {name: "Bosnia-Herzegovna", country: "Bosnia-Herzegovna",  code: "", svgimg: ".svg"},
                {name: "Botswana", country: "Botswana",  code: "", svgimg: ".svg"}, {name: "Brazil", country: "Brazil",  code: "", svgimg: ".svg"},
                {name: "British Virgin Islands", country: "British Virgin Islands",  code: "", svgimg: ".svg"}, {name: "Brunei Darrusalam", country: "Brunei Darrusalam",  code: "", svgimg: ".svg"},
                {name: "Bulgaria", country: "Bulgaria",  code: "", svgimg: ".svg"}, {name: "Burkina Faso", country: "Burkina Faso",  code: "", svgimg: ".svg"},
                {name: "Burundia", country: "Burundia",  code: "", svgimg: ".svg"},
                //C countries
                {name: "Cambodia", country: "Cambodia",  code: "", svgimg: ".svg"}, {name: "Cameroon", country: "Cameroon",  code: "", svgimg: ".svg"},
                {name: "Canada", country: "",  code: "", svgimg: ".svg"}, {name: "Cape Verde", country: "",  code: "", svgimg: ".svg"},
                {name: "Cayman Islands", country: "Cayman Islands",  code: "", svgimg: ".svg"}, {name: "Central African Republic", country: "",  code: "", svgimg: ".svg"},
                {name: "Chad", country: "Chad",  code: "", svgimg: ".svg"}, {name: "Chile", country: "Chile",  code: "", svgimg: ".svg"},
                {name: "China", country: "China",  code: "", svgimg: ".svg"}, {name: "Cocos (Keeling) Islands", country: "Cocos (Keeling) Islands",  code: "", svgimg: ".svg"},
                {name: "Comoros", country: "Comoros",  code: "", svgimg: ".svg"}, {name: "Colombia", country: "Colombia",  code: "", svgimg: ".svg"},
                {name: "Costa Rica", country: "Costa Rica",  code: "", svgimg: ".svg"}, {name: "Cote D'ivoire", country: "Cote D'ivoire",  code: "", svgimg: ".svg"},
                {name: "Croatia", country: "Croatia",  code: "", svgimg: ".svg"}, {name: "Cuba", country: "Cuba",  code: "", svgimg: ".svg"},
                {name: "Cyprus", country: "Cyprus",  code: "", svgimg: ".svg"}, {name: "Czech Republic", country: "Czech Republic",  code: "", svgimg: ".svg"},
                {name: "Christmas Island", country: "Christmas Island",  code: "", svgimg: ".svg"}, {name: "Cook Island", country: "Cook Island",  code: "", svgimg: ".svg"},
                //D countries
                {name: "D.R. Congo", country: "D.R. Congo",  code: "", svgimg: ".svg"}, {name: "Denmark", country: "Denmark",  code: "", svgimg: ".svg"},
                {name: "Djibouti", country: "Djibouti",  code: "", svgimg: ".svg"}, {name: "Dominica", country: "Dominica",  code: "", svgimg: ".svg"},
                {name: "Dominican Republic", country: "Dominican Republic",  code: "", svgimg: ".svg"},
                //E countries
                {name: "East Timor", country: "East Timor",  code: "", svgimg: ".svg"}, {name: "Ecuador", country: "Ecuador",  code: "", svgimg: ".svg"},
                {name: "Egypt", country: "Egypt",  code: "", svgimg: ".svg"}, {name: "El Salvador", country: "El Salvador",  code: "", svgimg: ".svg"},
                {name: "Equatorial Guinea", country: "Equatorial Guinea",  code: "", svgimg: ".svg"}, {name: "Eritrea", country: "Eritrea",  code: "", svgimg: ".svg"},
                {name: "Estonia", country: "Estonia",  code: "", svgimg: ".svg"}, {name: "Ethiopia", country: "Ethiopia",  code: "", svgimg: ".svg"},
                //F countries
                {name: "Falkland Islands", country: "Falkland Islands",  code: "", svgimg: ".svg"}, {name: "Faore Islands", country: "Faore Islands",  code: "", svgimg: ".svg"},
                {name: "Fiji", country: "Fiji",  code: "", svgimg: ".svg"}, {name: "Finland", country: "Finland",  code: "", svgimg: ".svg"},
                {name: "France", country: "France",  code: "", svgimg: ".svg"}, {name: "French Guiana", country: "French Guiana",  code: "", svgimg: ".svg"},
                {name: "French Polynesia", country: "French Polynesia",  code: "", svgimg: ".svg"},
                //G countries
                {name: "Gabon", country: "Gabon",  code: "", svgimg: ".svg"}, {name: "Gambia", country: "Gambia",  code: "", svgimg: ".svg"},
                {name: "Georgia", country: "Georgia",  code: "", svgimg: ".svg"}, {name: "Germany", country: "Germany",  code: "", svgimg: ".svg"},
                {name: "Ghana", country: "Ghana",  code: "", svgimg: ".svg"}, {name: "Gibraltar", country: "Gibraltar",  code: "", svgimg: ".svg"},
                {name: "Greece", country: "Greece",  code: "", svgimg: ".svg"}, {name: "Greenland", country: "Greenland",  code: "", svgimg: ".svg"},
                {name: "Grenada", country: "Grenada",  code: "", svgimg: ".svg"}, {name: "Guadeloupe", country: "Guadeloupe",  code: "", svgimg: ".svg"},
                {name: "Guatemala", country: "Guatemala",  code: "", svgimg: ".svg"}, {name: "Guernsey", country: "Guernsey",  code: "", svgimg: ".svg"},
                {name: "Guinea", country: "Guinea",  code: "", svgimg: ".svg"}, {name: "Guinea-Bissau", country: "Guinea-Bissau",  code: "", svgimg: ".svg"},
                {name: "Guyana", country: "",  code: "", svgimg: ".svg"},
                //H countries
                {name: "Haiti", country: "Haiti",  code: "", svgimg: ".svg"}, {name: "Honduras", country: "Honduras",  code: "", svgimg: ".svg"},
                {name: "Hong Kong", country: "Hong Kong",  code: "", svgimg: ".svg"}, {name: "Hungary", country: "Hungary",  code: "", svgimg: ".svg"},
                //I countries
                {name: "Iceland", country: "Iceland",  code: "", svgimg: ".svg"}, {name: "India", country: "India",  code: "", svgimg: ".svg"},
                {name: "Indonesia", country: "Indonesia",  code: "", svgimg: ".svg"}, {name: "Iran", country: "Iran",  code: "", svgimg: ".svg"},
                {name: "Iraq", country: "Iraq",  code: "", svgimg: ".svg"}, {name: "Ireland", country: "Ireland",  code: "", svgimg: ".svg"},
                {name: "Israel", country: "Israel",  code: "", svgimg: ".svg"}, {name: "Italy", country: "Italy",  code: "", svgimg: ".svg"},
                //J countries
                {name: "Jamaica", country: "Jamaica",  code: "", svgimg: ".svg"}, {name: "Japan", country: "Japan",  code: "", svgimg: ".svg"},
                {name: "Jordan", country: "Jordan",  code: "", svgimg: ".svg"},
                //K countries
                {name: "Kazakhstan", country: "Kazakhstan",  code: "", svgimg: ".svg"}, {name: "Kenya", country: "Kenya",  code: "", svgimg: ".svg"},
                {name: "Kiribati", country: "Kiribati",  code: "", svgimg: ".svg"}, {name: "Kosovo", country: "Kosovo",  code: "", svgimg: ".svg"},
                {name: "Kuwait", country: "Kuwait",  code: "", svgimg: ".svg"}, {name: "Kyrgyzstan", country: "Kyrgyzstan",  code: "", svgimg: ".svg"},
                //L countries
                {name: "Laos", country: "Laos",  code: "", svgimg: ".svg"}, {name: "Latvia", country: "Latvia",  code: "", svgimg: ".svg"},
                {name: "Lebanon", country: "Lebanon",  code: "", svgimg: ".svg"}, {name: "Lesotho", country: "Lesotho",  code: "", svgimg: ".svg"},
                {name: "Liberia", country: "Liberia",  code: "", svgimg: ".svg"}, {name: "Libya", country: "Libya",  code: "", svgimg: ".svg"},
                {name: "Liechtenstein", country: "Liechtenstein",  code: "", svgimg: ".svg"}, {name: "Lithuania", country: "Lithuania",  code: "", svgimg: ".svg"},
                {name: "Luxembourg", country: "Luxembourg",  code: "", svgimg: ".svg"},
                //M countries
                {name: "Macau", country: "Macau",  code: "", svgimg: ".svg"}, {name: "Macedonia", country: "Macedonia",  code: "", svgimg: ".svg"},
                {name: "Madagascar", country: "Madagascar",  code: "", svgimg: ".svg"}, {name: "Malawi", country: "Malawi",  code: "", svgimg: ".svg"},
                {name: "Malaysia", country: "Malaysia",  code: "", svgimg: ".svg"}, {name: "Maldives", country: "Maldives",  code: "", svgimg: ".svg"},
                {name: "Mali", country: "Mali",  code: "", svgimg: ".svg"}, {name: "Malta", country: "Malta",  code: "", svgimg: ".svg"},
                {name: "Marshall Islands", country: "Marshall Islands",  code: "", svgimg: ".svg"}, {name: "Martinique", country: "Martinique",  code: "", svgimg: ".svg"},
                {name: "Mauritania", country: "Mauritania",  code: "", svgimg: ".svg"}, {name: "Mauritius", country: "Mauritius",  code: "", svgimg: ".svg"},
                {name: "Mexico", country: "Mexico",  code: "", svgimg: ".svg"}, {name: "Micronesia", country: "Micronesia",  code: "", svgimg: ".svg"},
                {name: "Moldova", country: "Moldova",  code: "", svgimg: ".svg"}, {name: "Monaco", country: "Monaco",  code: "", svgimg: ".svg"},
                {name: "Mongolia", country: "Mongolia",  code: "", svgimg: ".svg"}, {name: "Montenegro", country: "Montenegro",  code: "", svgimg: ".svg"},
                {name: "Morocco", country: "Morocco",  code: "", svgimg: ".svg"}, {name: "Mozambique", country: "Mozambique",  code: "", svgimg: ".svg"},
                {name: "Myanmar", country: "Myanmar",  code: "", svgimg: ".svg"},
                //N countries
                {name: "Namibia", country: "Namibia",  code: "", svgimg: ".svg"}, {name: "Nauru", country: "Nauru",  code: "", svgimg: ".svg"},
                {name: "Nepal", country: "Nepal",  code: "", svgimg: ".svg"}, {name: "Netherlands", country: "Netherlands",  code: "", svgimg: ".svg"},
                {name: "Netherlands Antilles", country: "Netherlands Antilles",  code: "", svgimg: ".svg"}, {name: "New Caledonia", country: "New Caledonia",  code: "", svgimg: ".svg"},
                {name: "New Zealand", country: "New Zealand",  code: "", svgimg: ".svg"}, {name: "Nicaragua", country: "Nicaragua",  code: "", svgimg: ".svg"},
                {name: "Niger", country: "Niger",  code: "", svgimg: ".svg"}, {name: "North Korea", country: "North Korea",  code: "", svgimg: ".svg"},
                {name: "Norway", country: "Norway",  code: "", svgimg: ".svg"},
                //O countries
                {name: "Oman", country: "Oman",  code: "", svgimg: ".svg"},
                //P countries
                {name: "Pakistan", country: "Pakistan",  code: "", svgimg: ".svg"}, {name: "Palau", country: "Palau",  code: "", svgimg: ".svg"},
                {name: "Pal. Ter. - Gaza Strip", country: "Pal. Ter. - Gaza Strip",  code: "", svgimg: ".svg"}, {name: "Pal. Ter. - West Bank", country: "Pal. Ter. - West Bank",  code: "", svgimg: ".svg"},
                {name: "Pal. Ter.", country: "Pal. Ter.",  code: "", svgimg: ".svg"}, {name: "Panama", country: "Panama",  code: "", svgimg: ".svg"},
                {name: "Papua New Guinea", country: "Papua New Guinea",  code: "", svgimg: ".svg"}, {name: "Paraguay", country: "Paraguay",  code: "", svgimg: ".svg"},
                {name: "Peru", country: "Peru",  code: "", svgimg: ".svg"}, {name: "Philippines", country: "Philippines",  code: "", svgimg: ".svg"},
                {name: "Poland", country: "Poland",  code: "", svgimg: ".svg"}, {name: "Portugal", country: "Portugal",  code: "", svgimg: ".svg"},
                {name: "Puerto Rico", country: "Puerto Rico",  code: "", svgimg: ".svg"},
                //Q countries
                {name: "Qatar", country: "Qatar",  code: "", svgimg: ".svg"},
                //R countries
                {name: "Rep. of the Congo", country: "Rep. of the Congo",  code: "", svgimg: ".svg"}, {name: "Reunion", country: "Reunion",  code: "", svgimg: ".svg"},
                {name: "Romania", country: "Romania",  code: "", svgimg: ".svg"}, {name: "Russia", country: "Russia",  code: "", svgimg: ".svg"},
                {name: "Rwanda", country: "Rwanda",  code: "", svgimg: ".svg"},
                //S countries
                {name: "Saint Helena", country: "Saint Helena",  code: "", svgimg: ".svg"}, {name: "Saint Kitts and Nevis", country: "Saint Kitts and Nevis",  code: "", svgimg: ".svg"},
                {name: "Saint Lucia", country: "Saint Lucia",  code: "", svgimg: ".svg"}, {name: "Saint Pierre and Miquelon", country: "Saint Pierre and Miquelon",  code: "", svgimg: ".svg"},
                {name: "Saint Vincent & the Grenadines", country: "Saint Vincent & the Grenadines",  code: "", svgimg: ".svg"}, {name: "Samoa", country: "Samoa",  code: "", svgimg: ".svg"},
                {name: "San Marino", country: "San Marino",  code: "", svgimg: ".svg"}, {name: "Sao Tome and Principe", country: "Sao Tome and Principe",  code: "", svgimg: ".svg"},
                {name: "Saudi Arabia", country: "Saudi Arabia",  code: "", svgimg: ".svg"}, {name: "Senegal", country: "Senegal",  code: "", svgimg: ".svg"},
                {name: "Serbia", country: "Serbia",  code: "", svgimg: ".svg"}, {name: "Seychelles", country: "Seychelles",  code: "", svgimg: ".svg"},
                {name: "Sierra Leone", country: "Sierra Leone",  code: "", svgimg: ".svg"}, {name: "Singapore", country: "Singapore",  code: "", svgimg: ".svg"},
                {name: "Slovakia", country: "Slovakia",  code: "", svgimg: ".svg"}, {name: "Slovenia", country: "Slovenia",  code: "", svgimg: ".svg"},
                {name: "Solomon Islands", country: "Solomon Islands",  code: "", svgimg: ".svg"}, {name: "Somalia", country: "Somalia",  code: "", svgimg: ".svg"},
                {name: "South Africa", country: "South Africa",  code: "", svgimg: ".svg"}, {name: "South Korea", country: "South Korea",  code: "", svgimg: ".svg"},
                {name: "South Sudan", country: "South Sudan",  code: "", svgimg: ".svg"}, {name: "Spain", country: "Spain",  code: "", svgimg: ".svg"},
                {name: "Sri Lanka", country: "Sri Lanka",  code: "", svgimg: ".svg"}, {name: "Sudan", country: "Sudan",  code: "", svgimg: ".svg"},
                {name: "Suriname", country: "Suriname",  code: "", svgimg: ".svg"}, {name: "Swaziland", country: "Swaziland",  code: "", svgimg: ".svg"},
                {name: "Sweden", country: "Sweden",  code: "", svgimg: ".svg"}, {name: "Switzerland", country: "Switzerland",  code: "", svgimg: ".svg"},
                {name: "Syria", country: "Syria",  code: "", svgimg: ".svg"},
                //T countries
                {name: "Taiwan", country: "Taiwan",  code: "", svgimg: ".svg"}, {name: "Tajikistan", country: "Tajikistan",  code: "", svgimg: ".svg"},
                {name: "Tanzania", country: "Tanzania",  code: "", svgimg: ".svg"}, {name: "Thailand", country: "Thailand",  code: "", svgimg: ".svg"},
                {name: "Togo", country: "Togo",  code: "", svgimg: ".svg"}, {name: "Tonga", country: "Tonga",  code: "", svgimg: ".svg"},
                {name: "Trinidad and Tobago", country: "Trinidad and Tobago",  code: "", svgimg: ".svg"}, {name: "Tunisia", country: "Tunisia",  code: "", svgimg: ".svg"},
                {name: "Turkey", country: "Turkey",  code: "", svgimg: ".svg"}, {name: "Turkmenistan", country: "Turkmenistan",  code: "", svgimg: ".svg"},
                {name: "Turks and Caicos Islands", country: "Turks and Caicos Islands",  code: "", svgimg: ".svg"}, {name: "Tuvalu", country: "",  code: "", svgimg: ".svg"},
                //U countries
                {name: "Uganda", country: "Uganda",  code: "", svgimg: ".svg"}, {name: "Ukraine", country: "Ukraine",  code: "", svgimg: ".svg"},
                {name: "United Arab Emirates", country: "United Arab Emirates",  code: "", svgimg: ".svg"}, {name: "United Arab Emirates", country: "",  code: "", svgimg: ".svg"},
                {name: "Uruguay", country: "Uruguay",  code: "", svgimg: ".svg"}, {name: "USA", country: "USA",  code: "", svgimg: ".svg"},
                {name: "USSR", country: "USSR",  code: "", svgimg: ".svg"}, {name: "Uzbekistan", country: "Uzbekistan",  code: "", svgimg: ".svg"},
                //V countries
                {name: "Vatican City", country: "Vatican City",  code: "", svgimg: ".svg"}, {name: "Venezuela", country: "Venezuela",  code: "", svgimg: ".svg"},
                {name: "Vietnam", country: "Vietnam",  code: "", svgimg: ".svg"},
                //W countries
                {name: "Wallis and Futuna", country: "Wallis and Futuna",  code: "", svgimg: ".svg"},
                //Y countries
                {name: "Yemen", country: "Yemen",  code: "", svgimg: ".svg"},
                //Z countries
                {name: "Zambia", country: "Zambia",  code: "", svgimg: ".svg"}, {name: "Zimbabwe", country: "Zimbabwe",  code: "", svgimg: ".svg"},
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
    }
</script>

<style scoped>

</style>