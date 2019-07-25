<template>
  <div :id="id">
    <input
      v-model="phone"
      v-on:input="phoneNumberValidator"
      type="phone-number"
      :name="id"
    />

    <div v-if="errors.length">
      <p class="error-message">
        Please correct the following error(s):
      </p>
      <br/>
      <p v-for="error in errors" :key="error">
        {{ error }}
      </p>
    </div>

  </div>
</template>


<script>
export default {
  name: 'PhoneNumberInput',

  props: {
    id: String
  },

  data() {
    return {
      phone: null,
      errors: []
    }
  },

  // If funky errors come up, check 'this'
  watch: {
    phone: function(payload) {
      this.phone = payload;
      console.log("WRYYYYY");
    }
  },

  methods: {
    // This function takes the input field, finds the text, and checks for errors
    phoneNumberValidator: function(e) {
      var vm = this;
      let number = e.currentTarget.value;

      vm.errors = [];
      if(number.length > 10)
        vm.errors.push("Phone number too long");

      // This tells our parent we've changed & passes errors up to them
      this.$emit("change", vm._uid, vm.phone, vm.errors);
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-message {
  height:0;
  font-size: 12px;
  background: rgba(255,0,0,0.1);
  color:rgba(255,50,50,1);
}
</style>
