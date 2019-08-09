<template>
  <!-- Nav bar -->
  <div id="header-wrap">
    <div id="header">

      <ul id="site-navigation" class="nav pull-right">
        <li style="border-right:none;"><router-link to="/emergency-information">Emergency Information</router-link></li>
        <li style="border-right:none;"><router-link to="/logout">Logout</router-link></li>
      </ul>
      <img src="../images/m-logo.png" class="logo pull-left" />

    </div>
  </div>
</template>


<script>
  export default {
    name: 'Navbar'
  }
</script>


<style scoped>
</style>
