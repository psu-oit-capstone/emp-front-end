<!-- Authored by Ian L. Gore 2019, https://github.com/MushuYoWushu-->
<!-- This is a dumb login form that will accept a login if the username is 'mushu@pdx.edu' and the password is
'password' and can differentiate between bad logins, null logins, and successful logins. This form also notes where
an authentication call to a parent can be inserted to provide real functionality.-->

<template>
    <div id="login">
        <div class="login_greeting">
            <h1>Welcome to Mushu's dumbLogin</h1>
            <p>
                Here we log into nothing by providing a username and password,<br>
                check out my
                <a href="https://github.com/MushuYoWushu" target="_blank" rel="noopener">github</a>
                before you login below.
            </p>
        </div>

        <div id="login_field">
            <h3>Login Here</h3>
            <label>
                Username
                <input type="text" name="user" v-model="username" placeholder="mushu@pdx.edu" />
            </label>
            <label>
                Password
                <input type="password" name="pass" v-model="password" placeholder="********" />
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
    #login_field{
        width: 350px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        padding: 50px;
    }
</style>
