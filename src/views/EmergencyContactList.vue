<template>
    <div id="emergency-contacts">
        <b>Emergency Contact List</b>
        <div class="contact-list">
            <li v-for="contact in contacts" v-bind:key="contact.id">
                {{ contact }} <br><br>
            </li>
        </div>

        <b>Emergency Contact Add Form</b>
        <div class="contact-form">
            <div>
                <label for="fnamebox">First Name
                    <input type="text" placeholder="Mushu" v-model="fnamebox" v-bind:id="fnamebox"/></label><br>
                <label for="mnamebox">Middle Name
                    <input type="text" placeholder="Yo" v-model="mnamebox" v-bind:id="mnamebox"/></label><br>
                <label for="lnamebox">Last Name
                    <input type="text" placeholder="Wushu" v-model="lnamebox" v-bind:id="lnamebox"/></label><br>
                <label for="address1box">Address 1
                    <input type="text" placeholder="2121 SW 4th Ave" v-model="address1box" v-bind:id="address1box"/></label><br>
                <label for="address2box">Address 2
                    <input type="text" placeholder="Apt/Bldg #" v-model="address2box" v-bind:id="address2box"/></label><br>
                <label for="address3box">Address 3
                    <input type="text" placeholder="Region" v-model="address3box" v-bind:id="address3box"/></label><br>
                <label for="citybox">City
                    <input type="text" placeholder="Portland" v-model="citybox" v-bind:id="citybox"/></label><br>
                <label for="statebox">State or Province <select name="state" v-bind:id="statebox">
                    <option value="state1">State1</option>
                    <option value="state2">State2</option>
                    <option value="state3">State3</option>
                    <option value="state4">State4</option>
                    </select></label><br>
                <label for="zipbox">Zip or Postal Code
                    <input type="text" placeholder="97201" v-model="zipbox" v-bind:id="zipbox"/></label><br>
                <p class="label">Country Select
                    <Dropdown :options="countryArray"
                              :selected="selectedCountry"
                              v-on:updateOption="currCountry"
                              :placeholder="'Select a country'">
                    </Dropdown>
                <p class="label">Phone Number
                    <PhoneNumberInput id="phone-input" @change="handleChange"/></p>
                <label for="orderbox">Contact Order
                    <input type="number" placeholder="" v-model.number="orderbox" v-bind:id="orderbox" min="1"/></label><br>

                <label for="regbox">
                    <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
                Remove Contact.</label>
            </div>
            <!-- Buttons are here -->
            <button type="button" v-on:click="reset()">Reset</button>
            <button type="button" v-on:click="submit()">Submit</button><br><br>
        </div>
    </div>
</template>

<script>
import PhoneNumberInput from '@/components/PhoneNumberInput.vue'
import Dropdown from '@/components/Dropdown.vue'

    export default {
        name: "EmergencyContactList",
        components: {
            PhoneNumberInput,
            Dropdown,
        },
        //This is for button clicks
        methods: {
            currCountry(payload) {
                this.currCountry = payload;
            },
            submit() {
                //replace with functionality
                this.contacts.push(this.makeContact());
            },
            reset() {
                //replace with functionality
                this.regbox = false;
            },
            handleChange: function(childID, errors) {var vm = this;},
            makeContact() {
                return {name: [this.fnamebox, this.mnamebox, this.lnamebox],
                        address: [this.address1box, this.address2box, this.address3box],
                        area: [this.countrybox, this.statebox, this.citybox, this.zipbox],
                        order: this.orderbox,
                        delete: this.regbox
                }
            }
        },


        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            contacts: [],
            regbox: {type: Boolean, default: false},
            fnamebox: {type: String, default: ""},
            mnamebox: {type: String, default: ""},
            lnamebox: {type: String, default: ""},
            address1box: {type: String, default: ""},
            address2box: {type: String, default: ""},
            address3box: {type: String, default: ""}, //Do we REALLY need 3 address lines? According to research this is city/district/state
            citybox: {type: String, default: ""},
            statebox: {type: String, default: ""},
            zipbox: {type: String, default: ""},
            countrybox: {type: String, default: ""},
            orderbox: 1,

            countryArray: [
                {name: "U.S.A. +1", svgimg: "us.svg"}, {name: "Japan +81", svgimg: "jp.svg"},
                {name: "U.K. +44", svgimg: "gb.svg"}, {name: "Germany +49", svgimg: "de.svg"},
                {name: "U.S.A. +7", svgimg: "ru.svg"}, {name: "China +86", svgimg: "cn.svg"},
            ],
            selectedCountry: {
                name: 'Please select your country'
            }
        }},
        //This initializes the above declarations
        created: function() {
            //This is one way to handle massive text blobs in a template but is not strictly necessary
            this.fnamebox = "";
            this.mnamebox = "";
            this.lnamebox = "";
            this.address1box = "";
            this.address2box = "";
            this.address3box = "";
            this.citybox = "";
            this.statebox = "";
            this.zipbox = "";
            this.countrybox = "";
            this.orderbox = 1;
            this.regbox = false;
        },
    }
</script>

<style scoped>

</style>