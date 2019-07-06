<template>
  <div id="app">
    <div id="header-wrap">
      <div id="header">
        <ul class="nav pull-right">
          <li class="first"><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/emergency-information">Emergency Information</router-link></li>
          <li><router-link to="/emergency-contacts">Emergency Contacts</router-link></li>
        </ul>
        <img src="./images/m-logo.png" class="pull-left">
      </div>
    </div>
    <router-view/>
  </div>
</template>