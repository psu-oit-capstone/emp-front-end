<template>
  <div id="main">
    <EvacAssist />
    <AlertsInformation />
    <EmergencyContactList />
  </div>
</template>

<script>
import EvacAssist from '@/components/EvacAssist.vue'
import AlertsInformation from '@/components/AlertsInformation.vue'
import EmergencyContactList from '@/views/EmergencyContactList'

export default {
  name: 'EmergencyInformation',
  components: {
    EvacAssist,
    AlertsInformation,
    EmergencyContactList
  }
}
</script>

<style>

</style>