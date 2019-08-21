<template>
  <!-- Nav bar -->
    <div id="sticky-navbar">
      <div id="nav-container">
        <a href="#EA-registry">Evacuation Assistance</a>
        <a href="#alert-info">PSU Alerts</a>
        <a href="#emergency-contacts-list">Emergency Contacts</a>
      </div>
      <div id="mobile-nav-container">
        <a href="#EA-registry">&#11044;</a>
        <a href="#alert-info">&#11044;</a>
        <a href="#emergency-contacts-list">&#11044;</a>
      </div>
    </div>
</template>


<script>
  export default {
    name: 'Navbar'
  }
</script>


<style scoped>

a {
  color: #ffffff;
}

#sticky-navbar {
  transition: background-color 1s;

  /* Make element obey sticky positioning */
  position: sticky;
  position: -webkit-sticky; /* Safari */
  bottom: 0px;
  width: 100vw;

  /* Set the fixed height of the footer here */
  height: 30px;

  /* Set the width to the whole veiwport */
  /* Even if the displaying language is rtl*/
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  /* Center contained links */
  display: flex;
  justify-content: space-around;

  /* Style */
  background-color: #8c9516;

}

#nav-container {
  display: flex;
  justify-content: space-around;

  margin: auto;
}

#mobile-nav-container{
  display: none;
}


@media (min-width: 980px) {
  #nav-container{
    width:960px;
  }
}

/* Landscape phone to landscape and desktop */
@media (min-width: 481px) and (max-width: 979px) {
  #nav-container{
    width:960px;
    margin:auto 8px auto 8px;
  }
}

/* Landscape phones and down */
@media (max-width: 500px) {
  #sticky-navbar{
    position:fixed;
    bottom:0px;
  }

  #nav-container{
    display: none;
  }
  #mobile-nav-container{
    width:100%;

    display: flex;
    justify-content: space-evenly;

    margin: 2.5px auto auto auto;

  }


}


</style>
