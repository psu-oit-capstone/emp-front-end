<template>
  <div
    :class="inactiveTime >= timeLimit ? 'active' : 'inactive'"
    class="boxed popup"
    id="timeout-popup"
  >
    Due to inactivity, this session has expired. Please login in again...
    Also, please don't do anything, as you'll notice I didn't delete
    your JWT and you actually are still logged in.
  </div>
</template>


<script>
export default {
  name: 'TimeoutPopup',
  props: {
    timeLimit: Number
  },

  data() {
    return {
      inactiveTime: 0
    }
  },

  created() {
    setInterval(() => this.inactiveTime += 1, 1000)
  }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.popup {
  position: sticky;
  transition: top 2s;
}

/* Classes which mark page positions for the popup */
.active {top: 30%;}
.inactive {top: -20%;}

#timeout-popup {
  width: 400px;
  background-color: rgba(255,80,80,.95);
  color: white;
  font-size: 1.2rem;

  /* Give the contents breathing room */
  padding: 20px;

  /* Center the popup within its container */
  margin-left: auto;
  margin-right: auto;
}
</style>
