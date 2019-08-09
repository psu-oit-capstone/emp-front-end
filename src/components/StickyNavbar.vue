<template>
  <!-- Nav bar -->
  <div id="sticky-navbar">
    <a href="#EA-registry">Evacuation Assistance</a>
    <a href="#alert-info">PSU Alerts</a>
    <a href="#emergency-contacts-list">Emergency Contacts</a>
  </div>
</template>


<script>
  export default {
    name: 'Navbar'
  }
</script>


<style scoped>
#sticky-navbar {
  transition: background-color 1s;

  /* Make element obey sticky positioning */
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;

  /* Center the bar */
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  /* Center contained links */
  display: flex;
  justify-content: space-between;

  /* Style */
  background-color: rgba(255,255,255,.8);

}
</style>
