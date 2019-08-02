<template>
    <div id="login">
        <div id="login-greeting">
            <h1>Login Form</h1>
        </div>

        <div id="login-field">
            <label>
                Username
                <input type="text" name="user" v-model="username" placeholder="youremail@pdx.edu" />
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
        data: function() {
          return {
            username: '',
            password: ''
          }
        },

        methods: {
          login() {
            var vm = this;

            let bodyFormData = new FormData();
            bodyFormData.set('username', this.username);
            bodyFormData.set('password', this.password);
            this.$store.dispatch('login', bodyFormData).
            then(() => {
              // Redirect to main page
              vm.$router.push('/emergency-information');
            })
          }
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
