<template>
  <div id="emergency-information">
    <EvacAssist />
  </div>
</template>

<script>
import EvacAssist from '@/components/EvacAssist.vue'
import AlertsInformation from '@/components/AlertsInformation.vue'

export default {
  name: 'EmergencyInformation',
  components: {
    EvacAssist,
    AlertsInformation
  }
}
</script>
