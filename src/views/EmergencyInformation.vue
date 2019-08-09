<template>

  <div id="emergency-information" class="main-content">
    <StickyNavbar />
    <TimeoutPopup
      :timeLimit="9999"
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
import StickyNavbar from '@/components/StickyNavbar.vue'

export default {
  name: 'EmergencyInformation',
  components: {
    EvacAssist,
    AlertsInformation,
    EmergencyContactList,
    TimeoutPopup,
    StickyNavbar
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
