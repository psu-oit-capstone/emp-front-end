<template>
  <div id="emergency-information" class="main-content">
    <TimeoutPopup
      :timeLimit="2"
      @timedOut.once="endSession"
    />

    <EvacAssist />
    <AlertsInformation />
    <EmergencyContactList />
  </div>
</template>

<script>
import TimeoutPopup from '@/components/TimeoutPopup.vue'
import EvacAssist from '@/components/EvacAssist.vue'
import AlertsInformation from '@/components/AlertsInformation.vue'
import EmergencyContactList from '@/views/EmergencyContactList'


export default {
  name: 'EmergencyInformation',
  components: {
    EvacAssist,
    AlertsInformation,
    TimeoutPopup,
  },

  methods: {
    endSession() {
      alert("This is the part where I'd delete your JWT.")
    }
  }
}
</script>

<style>

</style>