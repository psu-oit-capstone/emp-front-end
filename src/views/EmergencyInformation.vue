<template>
  <div id="emergency-information">
    <TimeoutPopup :timeLimit="2" />

    <EvacAssist />
    <AlertsInformation />
  </div>
</template>

<script>
import TimeoutPopup from '@/components/TimeoutPopup.vue'

import EvacAssist from '@/components/EvacAssist.vue'
import AlertsInformation from '@/components/AlertsInformation.vue'

export default {
  name: 'EmergencyInformation',
  components: {
    EvacAssist,
    AlertsInformation,
    TimeoutPopup,
  }
}
</script>
