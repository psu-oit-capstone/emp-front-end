<template>
  <form
    id="input-form"
    action="https://stackexchange.com"
    method="post"
  >

    <div class="row">
      <p class="label">Email Address</p>
      <EmailInput @change="handleChange"/>
    </div>

    <div class="row">
      <p class="label">Alternate Email Address</p>
      <EmailInput @change="handleChange"/>
    </div>

    <div class="row">
      <p class="label">Phone Number</p>
      <PhoneNumberInput @change="handleChange"/>
    </div>

    <div class="row">
      <input type="checkbox" v-model="checked"/>
      <p class="label">This box signifies you want to be pestered in perpetuity.</p>
    </div>

    <br/>
    <input type="submit" class="submit-button" value="Submit"/>
  </form>
</template>


<script>
import PhoneNumberInput from '@/components/PhoneNumberInput.vue'
import EmailInput from '@/components/EmailInput.vue'

export default {
  name: 'InputForm',

  components: {
    EmailInput,
    PhoneNumberInput
  },

  data() {
    return {
      // Holds the checkbox state
      checked: false,

      // This list holds errors given by field validators in our children
      errors: []
    }
  },


  methods: {
    handleChange: function(childID, errors) {var vm = this;},
    formValidator: function() {alert("hey")}
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #input-form {
    max-width: 600px;

    /* This is an easy way to center the form*/
    margin-left: auto;
    margin-right: auto;

    /* This lets us fluidly space our children in a column */
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .row {
    /* This is an easy way to center ourselves */
    margin: auto;

    /* This lets us fluidly space our children in a row */
    display: flex;
    flex-direction: row;
  }

  .label  {
    /* This just gets the words where I want em. */
    margin:4px;
    margin-right:10px;
  }

  .submit-button {
    margin-left: auto;
    margin-right: auto;
    max-width: 100px;
  }

</style>
