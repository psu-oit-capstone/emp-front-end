<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <hr/>
    <h2> Check out our lovely input form </h2>
    <InputForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InputForm from '@/components/InputForm.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    InputForm
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {font-weight:lighter;}

  /* Stolen from Stack: https://stackoverflow.com/questions/14821087/horizontal-line-and-right-way-to-code-it-in-html-css*/
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
</style>
