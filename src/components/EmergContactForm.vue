<template>
    <div class="contact-form">
        <div id="form-body">
            <div class="text-box fnamebox">
                <label for="fnamebox">First Name</label>
                    <input type="text" placeholder="First Name" v-model="fnamebox" v-bind:id="fnamebox"/>
            </div>
            <div class="text-box mnamebox">
                <label for="mnamebox">Middle Name</label>
                    <input type="text" placeholder="Middle Name" v-model="mnamebox" v-bind:id="mnamebox"/>
            </div>
            <div class="text-box lnamebox">
                <label for="lnamebox">Last Name</label>
                    <input type="text" placeholder="Last Name" v-model="lnamebox" v-bind:id="lnamebox"/>
            </div>
            <div class="text-box address1box">
                <label for="address1box">Address 1</label>
                    <input type="text" placeholder="Street Address" v-model="address1box" v-bind:id="address1box"/>
            </div>
            <div class="text-box address2box">
                <label for="address2box">Address 2</label>
                    <input type="text" placeholder="Apt/Bldg #" v-model="address2box" v-bind:id="address2box"/>
            </div>
            <div class="text-box citybox">
                <label for="citybox">City</label>
                    <input type="text" placeholder="City" v-model="citybox" v-bind:id="citybox"/>
            </div>
            <div class="text-box zipbox">
                <label for="zipbox">Postal Code</label>
                    <input type="text" placeholder="97201" v-model="zipbox" v-bind:id="zipbox"/>
            </div>
            <div class="select state-box">
                <label>State</label>
                    <DropdownNoImg :options="stateArray"
                                   :selected="selectedState"
                                   v-on:updateOption="currState"
                                   :placeholder="'Select a state'">
                    </DropdownNoImg>
            </div>
            <div class="text-box address3box">
                <label for="address3box">Address 3</label>
                    <input type="text" placeholder="Region" v-model="address3box" v-bind:id="address3box"/>
            </div>
            <div class="select country-box">
                <label>Country</label>
                    <Dropdown :options="countryArray"
                              :selected="selectedCountry"
                              v-on:updateOption="currCountry"
                              :placeholder="'Select a country'">
                    </Dropdown>
            </div>
            <div class="select country-code">
                <label>Country Code</label>
                    <Dropdown :options="countryCodeArray"
                              :selected="selectedCountryCode"
                              v-on:updateOption="currCountryCode"
                              :placeholder="'Select a country'">
                    </Dropdown>
            </div>
            <div class="text-box phone-input">
                <label>Phone Number</label>
                    <PhoneNumberInput id="phone-input" @change="handleChange"/>
            </div>
            <div class="text-box orderbox">
                <label for="orderbox">Contact Order</label>
                    <input type="number" placeholder="" v-model.number="orderbox" v-bind:id="orderbox" min="1"/>
            </div>
        </div>
        <div class="button-holder">
            <button type="button" id="submit" v-on:click="submit()">Submit</button>
            <button type="button" id="reset" v-on:click="resetContact()">Reset</button>
        </div>
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
                {name: "+1", country: "USA", code: "1", svgimg: "us.svg",}, {name: "Japan +81", country: "Japan",  code: "81", svgimg: "jp.svg"},
                {name: "+44", country: "UK",  code: "44", svgimg: "gb.svg"}, {name: "Germany +49", country: "Germany",  code: "49", svgimg: "de.svg"},
                {name: "+33", country: "France",  code: "7", svgimg: "fr.svg"},{name: "Russia +7", country: "Russia",  code: "7", svgimg: "ru.svg"},
                {name: "+86", country: "China",  code: "86", svgimg: "cn.svg"}, {name: "South Korea +82", country: "South Korea",  code: "86", svgimg: "kr.svg"},
            ],
            selectedCountryCode: {
                name: "+1", code: "1", svgimg: "us.svg",
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
                name: 'State'
            }
        }},
        //This initializes the above declarations
        created: function() {
            this.resetContact()
        },
    }
</script>

<style scoped>

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

#submit{
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

#reset{
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

    .address1box{
        grid-column:span 2;
    }


}
</style>