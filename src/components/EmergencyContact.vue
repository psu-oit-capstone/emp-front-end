<template>
    <div class="row">



        <div class="row">
            <input id="checkbox" name="checkbox" type="checkbox" v-model="checked"/>
            <p class="label">This box signifies you want to be pestered in perpetuity.</p>
        </div>


        <!-- Buttons are here -->
        <button type="button" v-on:click="reset()">Reset</button>
        <button type="button" v-on:click="submit()">Submit</button><br><br>
    </div>
</template>

<script>
    export default {
        name: "EmergencyContact",

        //This is for button clicks
        methods: {
            submit() {
                //replace with functionality
                console.log("data submitted: User registration value is ", this.regbox); // eslint-disable-line no-console
            },
            reset() {
                //replace with functionality
                this.regbox = false;
                console.log("data reset: registration flag is ", this.regbox); // eslint-disable-line no-console
            }
        }
    }

</script>

<style scoped>

</style>