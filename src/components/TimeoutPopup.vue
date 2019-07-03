<template>
  <div class="boxed" id="timeout-popup">
    Due to inactivity, this session has expired. Please login in again...
    Also, please don't do anything, as you'll notice I didn't delete
    your JWT and you actually are still logged in.
  </div>
</template>


<script>
export default {
  name: 'TimeoutPopup'
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#timeout-popup {
  width: 400px;
  background-color: rgba(255,0,0,0.1);

  /* Give the contents breathing room */
  padding: 20px;

  /* Center the popup within its container */
  margin-left: auto;
  margin-right: auto;
}
</style>
