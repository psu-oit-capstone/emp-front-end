<template>
  <div id="app">

    <!-- Nav bar -->
    <div id="header-wrap">
      <div id="header">

        <ul id="site-navigation" class="nav pull-right">
          <li style="border-right:none;"><router-link to="/emergency-information">Emergency Information</router-link></li>
          <li style="border-right:none;"><router-link to="/logout">Logout</router-link></li>
        </ul>
        <img src="./images/m-logo.png" class="logo pull-left" />

      </div>
    </div>

    <div id="main" class="main-content-container">
      <ul id="app-navigation" class="nav">
        <li><router-link to="/login">Login</router-link></li>
      </ul>
      <router-view  />
    </div>

  </div>
</template>