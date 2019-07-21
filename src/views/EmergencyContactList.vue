<template>
    <div id="emergency-contacts" class="page-component">
        <b>Emergency Contact List</b>
        <div class="contact-list">
            <ol v-for="(item, index) in contacts">
                <li>{{ item.order.orderbox }}. {{ item.name.fnamebox }} {{ item.name.lnamebox }}
                    <button v-on:click="editContact(item, index)">Edit/Delete</button></li>
            </ol>
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
                if (contact_payload.order.orderbox <= this.contacts.length) {
                    this.contacts.splice(contact_payload.order.orderbox - 1, 1, contact_payload);
                } else {
                    contact_payload.order.orderbox = this.contacts.length + 1;
                    this.contacts.push(contact_payload);
                }
            },
            editContact(contact_payload, contact_index) {
                //This returns an array of one object, so we immediately index that out
                this.to_edit_contact = this.contacts.splice(contact_index, 1)[0];
            },
        },

        //This runs on instance creation
        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            contacts: [],
            to_edit_contact: {},
        }},
    }
</script>

<style scoped>

</style>