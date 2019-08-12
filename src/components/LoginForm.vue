<template>
    <div id="login">
        <form id="login-field" @submit.prevent="login" :class="badLogin ? 'bad' : 'good'">
            <div id="login-greeting">
                <h2>PSU Emergency Management Portal</h2>
            </div>

            <div class="text-box">
                <label for="user">Username</label>
                <input type="text" id="user" name="user" v-model="username" placeholder="Username" />
            </div>
            <div class="text-box">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="password" placeholder="Password" />
            </div>

            <div v-show="badLogin">
              Incorrect username or password.
            </div>

            <button type="submit" class="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data: function() {
          return {
            username: '',
            password: '',
            badLogin: false
          }
        },

        methods: {
          login() {
            var vm = this;

            // Add username and password to the form data section in our request
            let bodyFormData = new FormData();
            bodyFormData.set('username', this.username);
            bodyFormData.set('password', this.password);
            this.$store.dispatch('login', bodyFormData)
            .then(() => {
              // Redirect to emergency information page
              vm.$router.push('/emergency-information')
            })
            .catch(err => {
              // Login failed
              this.badLogin = true
            })
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    margin-top:0px;
    color: #603417;
}

.bad {
  background-color: rgb(255, 230, 230);
}

.good {
  background-color: #FFFFFF;
}

#login-greeting{
    margin-top: -20px;
}

#login-field{
    max-width: 350px;
    border: 1px solid #CCCCCC;
    margin: auto;
    padding: 50px;
}
</style>
