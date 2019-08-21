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
import StickyNavbar from '@/components/StickyNavbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    StickyNavbar
  }
}

</script>
<style scoped>
#main{
  margin-bottom: 0px;
}
</style>
