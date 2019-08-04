<template>
    <div id="login">
        <form id="login-field" @submit.prevent="login" >
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
            password: ''
          }
        },

        methods: {
          login() {
            var vm = this;

            let bodyFormData = new FormData();
            bodyFormData.set('username', this.username);
            bodyFormData.set('password', this.password);
            this.$store.dispatch('login', bodyFormData)
            .then(() => {
              // Redirect to main page
              vm.$router.push('/emergency-information');
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

#login-greeting{
    margin-top: -20px;
}

#login-field{
    max-width: 350px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    padding: 50px;
}
</style>
