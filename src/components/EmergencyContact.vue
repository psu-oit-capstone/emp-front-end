<template>
    <div class="row">



        <div>
            <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
            <label for="regbox">Yes, make my information accessible to emergency responders.</label>
        </div>
        <!-- Buttons are here -->
        <button type="button" v-on:click="reset()">Reset</button>
        <button type="button" v-on:click="$emit('emerg-info', regbox)">Update</button><br><br>
    </div>
</template>

<script>
    export default {
        name: "EmergencyContact",

        data: function() { return {
            //Hold data for input fields here like this if it needs to be mutated
            regbox: {type: Boolean, default: false},
        }
        },
        //This initializes the above declarations
        created: function() {
                this.regbox = false
        },
    }

</script>

<style scoped>

</style>