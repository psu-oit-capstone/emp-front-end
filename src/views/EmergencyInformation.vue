<template>

  <div id="emergency-information" class="main-content">
    <TimeoutPopup
      :timeLimit="9999"
      @timedOut.once="endSession"
    />
    <SubmitPopup />

    <EvacAssist />
    <AlertsInformation />
    <EmergencyContactList />
    <StickyNavbar />
  </div>
</template>

<script>
import TimeoutPopup from '@/components/TimeoutPopup.vue'
import SubmitPopup from '@/components/SubmitPopup.vue'
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
    SubmitPopup,
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
