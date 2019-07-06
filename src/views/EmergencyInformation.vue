<template>
  <div id="emergency-information" class="main-content">
    <EvacAssist />
    <AlertsInformation />
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
