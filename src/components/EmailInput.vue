<template>
  <div :id="id">
    <input
      v-model="email"
      v-on:input="validator"
      type="email"
      :name="id"
    />

    <p v-if="errors.length" class="error-message">
      Please correct the following error(s):
      <br/>
      <p v-for="error in errors" :key="error">
        {{ error }}
      </p>
    </p>

  </div>
</template>


<script>
export default {
  name: 'EmailInput',

  props: {
    id: String
  },

  data() {
    return {
      email: '',
      errors: []
    }
  },

  methods: {
    // This function takes the input field, finds the text, and checks for errors
    validator: function(e) {
      var vm = this;
      let text = e.currentTarget.value;

      vm.errors = [];
      if(!text.includes("@") && text.length > 0){
        // Add an error to the stack
        vm.errors.push("Not a valid email address");
      }

      // This tells our parent we've changed & pass errors up to them
      vm.$emit("change", vm._uid, vm.errors);
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
