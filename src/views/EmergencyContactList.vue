<template>
    <div id="emergency-contacts">
        <b>Emergency Contact List</b>
        <div class="contact-list">
            <li v-for="item in contacts">
                {{ item }}
                <button v-on:click="editContact(item)">Edit</button>
            </li>
        </div>

        <div>
            <b>Emergency Contact Add Form</b>
            <EmergContactForm v-on:updateContact="contactsUpdate"
                              :contact_in="to_edit_contact"/>
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
        //This is for button clicks
        methods: {
            contactsUpdate(contact_payload) {
                this.contacts.push(contact_payload)
            },
            editContact(contact_payload) {
                this.to_edit_contact = contact_payload;
            },
        },

        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            contacts: [],
            to_edit_contact: {},
        }},
        //This initializes the above declarations
        created: function() {
        },
    }
</script>

<style scoped>

</style>