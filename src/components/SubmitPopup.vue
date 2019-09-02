<template>
  <div id="submit-popup" v-if="showModal">
    <div id="page-shadow">
      <div id="popup">
        <h3 style="justify-content: center;">Form Submitted</h3>
        <div class="modal-footer">
          <button class="pull-right submit;" @click="showModal = false">
          OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitPopup',
  data: function () {
    return {
      showModal: false
    }
  },
  events: {
    submit: function() {
      showModal = true;
    }
  },
  mounted() {
    this.$root.$on('submit', () => {
      this.showModal = true;
    });
}
}
</script>

<style scoped>

h3{
  padding: 24px 24px 16px 24px;
  margin: 0px;
}

#popup{
  background-color: #ffffff;
  display: inline-block;
  position:absolute;
  top:50%;
  left:50%;
  margin: -120px;

  width: 240px;
  height: 104px;
}

#page-shadow{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

button {
    font-size:14px;
    font-weight: 500;
    letter-spacing:1px;
    color:#ffffff;
    height:36px;
    background-color:#28a745;
    padding-right:16px;
    padding-left:16px;
    border-radius:4px;
    box-sizing:border-box;
    margin-left:10px;
    margin-right:4px;
    float:right;
}
</style>