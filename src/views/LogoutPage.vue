<template>
    <div id="logout">
        <h1>You have logged out.</h1>
    </div>
</template>

<script>
    export default {
        name: 'logout',
        created() {
          this.logout();
        },

        methods: {
          logout() {
            alert('Logging out')
            this.$store.dispatch('logout')
          }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #logout{
        width: 350px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        padding: 50px;
    }
</style>
