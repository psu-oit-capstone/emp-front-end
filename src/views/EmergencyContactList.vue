<template>
    <div id="emergency-contacts">
        <b>Emergency Contact List</b>
        <div class="contact-list">
            <li v-for="contact in contacts">
                {{ contact }} <br><br>
            </li>
        </div>

        <b>Emergency Contact Add Form</b>
        <div class="contact-form">
            <div>
                <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
                <label for="regbox">Yes, make my information accessible to emergency responders.</label>
            </div>
            <!-- Buttons are here -->
            <button type="button" v-on:click="reset()">Reset</button>
            <button type="button" v-on:click="submit()">Submit</button><br><br>
        </div>
    </div>
</template>

<script>

    export default {
        name: "EmergencyContactList",

        //This is for button clicks
        methods: {
            submit() {
                //replace with functionality
                this.contacts.push(this.regbox);
                console.log("data submitted: User registration value is ", this.regbox); // eslint-disable-line no-console
            },
            reset() {
                //replace with functionality
                this.regbox = false;
                console.log("data reset: registration flag is ", this.regbox); // eslint-disable-line no-console
            },
        },


        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            contacts: [],
            regbox: {type: Boolean, default: false},
        }},
        //This initializes the above declarations
        created: function() {
            //This is one way to handle massive text blobs in a template but is not strictly necessary
            this.regbox = false
        },
    }
</script>

<style scoped>

</style>