<template>
    <div id="emergency-contacts">
        <b>Emergency Contact List</b>
        <div class="contact-list">
            <li v-for="contact in contacts" v-bind:key="contact.id">
                {{ contact }}  <button type="button" v-on:click="editContact(contact)">Edit</button><br><br>
            </li>
        </div>

        <div>
            <b>Emergency Cojntact Add Form</b>
            <EmergContactForm v-on:updateContact="contactsUpdate"
                              v-on:contact_in="editContact"/>
        </div>
    </div>
</template>

<script>
    import EmergContactForm from '@/components/EmergContactForm.vue'

    export default {
        name: "EmergencyContactList",
        components: {
            EmergContactForm,
        },
        props: {
        },
        //This is for button clicks
        methods: {
            contactsUpdate(contact_payload) {
                this.contacts.push(contact_payload)
            },
            editContact(contact_payload) {
                return {contact_payload}
            }
        },

        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            contacts: [],

        }},
        //This initializes the above declarations
        created: function() {
        },
    }
</script>

<style scoped>

</style>