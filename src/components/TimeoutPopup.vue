<template>
  <div
    v-if="inactiveTime >= timeLimit"
    :class="inactiveTime > timeLimit ? 'active' : 'inactive'"
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
  position: fixed;
  transition: bottom 1.5s, opacity .5s;
}

/* Classes which mark page positions for the popup */
.active {
  bottom: 50%;
  opacity: 1;
}
.inactive {
  bottom: 100%;
  opacity: 0;
}

#timeout-popup {
  width: 400px;
  background-color: rgba(255,80,80,.95);
  color: white;
  font-size: 1.2rem;

  /* Give the contents breathing room */
  padding: 20px;

  /* Center the popup within the page*/
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

}
</style>
