<template>
  <div id="app">

    <Navbar />
    

    <div id="main" class="main-content-container">
      <ul id="app-navigation" class="nav">
        <li><router-link to="/login">Login</router-link></li>
      </ul>
      <router-view  />
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {Navbar}
}

</script>
