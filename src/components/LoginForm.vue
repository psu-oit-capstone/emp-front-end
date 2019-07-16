<template>
    <div id="login">
        <div class="login-greeting">
            <h1>Login Form</h1>
        </div>

        <div id="login-field">
            <label>
                Username
                <input type="text" name="user" v-model="username" placeholder="username@example.com" />
            </label>
            <label>
                Password
                <input type="password" name="password" v-model="password" placeholder="********" />
            </label><br>

            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'login',
        data: function() { return{username: "", password: ""}},
        methods: {
          login() {
              if(this.username !== "" && this.password !== "") {
                  //This code should be replaced with a call to a secure authentication function in parent module
                  if(this.username === "mushu@pdx.edu" && this.password === "password"){
                    console.log("Successful login attempt!"); // eslint-disable-line no-console
                  } else {
                      console.log("Unsuccessful login attempt...") // eslint-disable-line no-console
                  }
              } else {
                  console.log("Username/Password not present."); // eslint-disable-line no-console
              }
          }
        },
        props: {
            msg: String
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 10px 0 10px 0;
    }
    a {
        color: #42b983;
    }
    label, input {
        display: inline-block;
    }
    label{
        margin: 0 0 10px 0
    }
    #login-field{
        width: 350px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        padding: 50px;
    }
</style>
