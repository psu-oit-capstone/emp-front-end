<template>
    <div class="contact-form">
        <div>
            <label for="fnamebox">First Name
                <input type="text" placeholder="" v-model="fnamebox" v-bind:id="fnamebox"/></label><br>
            <label for="mnamebox">Middle Name
                <input type="text" placeholder="" v-model="mnamebox" v-bind:id="mnamebox"/></label><br>
            <label for="lnamebox">Last Name
                <input type="text" placeholder="" v-model="lnamebox" v-bind:id="lnamebox"/></label><br>
            <p class="relationship_label">Relationship to Person
                <DropdownNoImg :options="relationshipArray"
                               :selected="selectedRel"
                               v-on:updateOption="currRel"
                               :placeholder="'Select a Relationship'">
                </DropdownNoImg><br>
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
    import DropdownData from "@/components/DropdownData.vue";

    export default {
        name: "EmergContactForm.vue",
        components: {
            Dropdown,
            DropdownNoImg,
            DropdownData,
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
            currRel(payload) {
                this.relbox = payload;
            },
            submit() {
                this.contact_out = this.makeContact();
                this.$emit('updateContact', this.contact_out);
                this.resetContact();
            },
            makeContact() {
                return {
                    name: {fnamebox: this.fnamebox, mnamebox: this.mnamebox, lnamebox: this.lnamebox, relbox: this.relbox},
                    address: {address1box: this.address1box, address2box: this.address2box, address3box: this.address3box},
                    area: {
                        countrybox: this.countrybox, countryCode: this.countryCode, phonebox: this.phonebox,
                        statebox: this.statebox, citybox: this.citybox, zipbox: this.zipbox
                    },
                    order: {orderbox: this.orderbox},
                }
            },
            setContact(payload) {
                this.fnamebox = payload.name.fnamebox;
                this.mnamebox = payload.name.mnamebox;
                this.lnamebox = payload.name.lnamebox;
                this.relbox = payload.name.relbox;
                this.selectedRel = payload.name.relbox;
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
            },
            resetContact() {
                this.fnamebox = "";
                this.mnamebox = "";
                this.lnamebox = "";
                this.relbox = "";
                this.selectedRel = {name: 'Select Relation'};
                this.address1box = "";
                this.address2box = "";
                this.address3box = "";
                this.citybox = "";
                this.statebox = "";
                this.selectedState = {name: 'State Select'}; // Here to set dropdown to default
                this.zipbox = "";
                this.countrybox = "USA";
                this.selectedCountry = {name: "U.S.A.", country: "USA", code: "1", svgimg: "us.svg",}; // Here to set the dropdown
                this.phonebox = "";
                this.countryCode = "1";
                this.selectedCountryCode = {name: "U.S.A. +1", country: "USA", code: "1", svgimg: "us.svg",}; //Here to set the dropdown
                this.orderbox = 1;
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
        },

        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            fnamebox: {type: String, default: ""},
            mnamebox: {type: String, default: ""},
            lnamebox: {type: String, default: ""},
            relbox: {type: String, default: ""},
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
            countryCodeArray: DropdownData.countryCodeArray,
            selectedCountryCode: DropdownData.selectedCountryCode,
            countryArray: DropdownData.countryArray,
            selectedCountry: DropdownData.selectedCountry,
            stateArray: DropdownData.stateArray,
            selectedState: DropdownData.selectedState,
            relationshipArray: DropdownData.relationshipArray,
            selectedRel: DropdownData.selectedRel,
        }},
        //This initializes the above declarations
        created: function() {
            this.resetContact()
        },
    }
</script>

<style scoped>

</style>