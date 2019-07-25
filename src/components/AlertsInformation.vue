
<template>
  <div id="alert-info" class="page-component">
    <br>
    <div id="information-1">
      <h1 style="text-align:center">PSU Alert Emergency Notification System Registration</h1><br>
      PSU Alert is an emergency communications system designed to disseminate
      emergency messages via text messages, email, and phone calls. In the
      event of an emergency, PSU administration can use this system to share
      critical, and potentially lifesaving, information with the campus community.
      <br><br>
      <b>PSU ensures that all <i>@pdx.edu</i> email addresses are automatically
      subscribed to receive PSU Alert messages, but it is up to individual
      students, faculty, and staff to subscribe to receive PSU Alert messages via
      text, phone call, or email to their personal accounts.</b>
      <br><br>
      If you have any responsibilities for the welfare of staff, faculty,
      students, and/or visitors on campus, or if you supervise any such
      individuals on campus, we encourage you to subscribe to receive information
      in multiple ways (e.g., text, cell phone, home phone, personal email).
      <br><br>
      Your subscription information will be kept confidential. You will only be
      contacted via PSU Alerts in the event of an actual emergency or a test of
      the system.
    </div>
    <br><br>

    <div id="links-1">
    Visit the
    <a href="http://www.pdx.edu/emergency-management/psu-alert-emergency-notification-system" target="_blank">
      PSU Alert
      <sup style="color:Blue;">
        <i class="fa fa-external-link xsm" aria-label="opens in a new window" title="opens in a new window"></i>
      </sup>
    </a>
    <a href="http://www.pdx.edu/psualert" target="_blank">
      <sup style="color:Blue;"/>
    </a>
    webpage for more information about the PSU Alert system or contact
    <a href="http://www.pdx.edu/emergency-management" target="_blank">
      PSU Emergency Management
      <sup style="color:Blue;">
        <i class="fa fa-external-link xsm" aria-label="opens in a new window" title="opens in a new window"/>
      </sup>
    </a> or the
    <a href="http://www.pdx.edu/cpso" target="_blank">
      Campus Public Safety Office
      <sup style="color:Blue;">
        <i class="fa fa-external-link xsm" aria-label="opens in a new window" title="opens in a new window"/>
      </sup>
    </a>.
    <br><br>
    <b>Notes:</b>
    <br>
    <ul>
      <li>To receive text messages <i>and</i> phone calls, you must enter your
        number (even if it is the same number) into both sections of the form.
      </li>
      <li>The PSU Alert system cannot accommodate international phone numbers
        or Google Voice numbers at this time.
      </li>
    </ul>
  </div>

  <form action="/gen/alert/submit" method="post">
    <div id="text-information">
      <input type="hidden" name="SYNCHRONIZER_TOKEN" value="ff5b0d0c-6be6-4a67-b8a7-f0dafade3fd5" id="SYNCHRONIZER_TOKEN">
      <input type="hidden" name="SYNCHRONIZER_URI" value="/gen/alert/index" id="SYNCHRONIZER_URI">
      <h2>
        Subscribe to PSU Alert text messages<small><span style="color:red">*</span></small>:
      </h2>
      <small class="text-muted">
        Standard text message rates apply. Text messages will come from one of two IDs: 231-77 or 630-79.
        <br>
        <span style="color:red">*Required: </span>
          Either enter a text message number or opt-out by reading the notice and checking the box.
      </small>
      <br>

      <div class="row">
        <div class="col-md-3">
          <label for="smsDevice1" code="alert.index.textMessage#LABEL" alt="Text Message Number:" specialelement="true">Text Message Number:</label>
        </div>
        <div class="col-md-9">
            <input v-model="smsNumber" type="tel" class="form-control" id="smsDevice1" name="smsDevice1" maxlength="12" value="" pattern="\d{3}-?\d{3}-?\d{4}" title="10-digit phone number" onkeyup="this.value = formatTelephone(this.value);" aria-label="10-digit phone number">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <b>Text Message Opt Out:</b>
        </div>
        <div class="col-md-9">
          Text messages are an extremely effective way to distribute emergency
          notifications quickly. If you choose not to register your cell phone
          number to receive PSU Alert notifications via text message, you may
          not get necessary information to stay safe in emergency or threatening
          situations, such as campus closures or threats to your safety (e.g.
          active shooter, evacuation, etc.).
          <br>
          <label for="smsStatusInd" code="alert.index.textOptOut#LABEL" alt="I acknowledge that I have read and understand the risks described above and I choose to opt out of receiving PSU Alert notifications via text message." specialelement="true">
            <input v-model="smsStatusInd" type="checkbox" name="smsStatusInd" id="smsStatusInd" value="N" checked="">
            I acknowledge that I have read and understand the risks described
            above and I choose to opt out of receiving PSU Alert notifications
            via text message.
          </label>
          <br style="clear: both;">
        </div>
      </div>
    </div>

    <div id="voice-information">
      <h2>Subscribe to PSU Alert voice messages:</h2>
      <small class="text-muted">Standard rates apply. Calls will come from the phone number: 1-877-725-9111.</small>
      <br>

      <div class="row">
        <div class="col-md-3">
          <label for="mobilePhone" code="alert.index.businessPhone#LABEL" alt="Primary Phone Number:" specialelement="true">Primary Phone Number:</label>
        </div>
        <div class="col-md-9">
          <input v-model="phoneNumber" type="tel" class="form-control" id="mobilePhone" name="mobilePhone" maxlength="12" value="" pattern="\d{3}-?\d{3}-?\d{4}" title="10-digit phone number" onkeyup="this.value = formatTelephone(this.value);" aria-label="10-digit phone number">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <label for="businessPhone" code="alert.index.mobilePhone#LABEL" alt="Alternate Phone Number:" specialelement="true">Alternate Phone Number:</label>
        </div>
        <div class="col-md-9">
          <input v-model="alternatePhoneNumber" type="tel" class="form-control" id="businessPhone" name="businessPhone" maxlength="12" value="" pattern="\d{3}-?\d{3}-?\d{4}" title="10-digit phone number" onkeyup="this.value = formatTelephone(this.value);" aria-label="10-digit phone number">
        </div>
      </div>
      <br style="clear: both;">
    </div>

    <div id="email-information">
      <h2>Subscribe to PSU Alert emails:</h2>
      <small class="text-muted">
  All <i>@pdx.edu</i> email addresses are automatically subscribed to receive PSU Alert messages and Timely Warning notifications and cannot be unsubscribed.<br>
      If you choose to subscribe an additional email address, that email address will also receive both PSU Alert messages and Timely Warning notifications.

      </small><br>
      <div class="row">
        <div class="col-md-3">
          <label for="psuemail" code="alert.index.psuEmail#LABEL" alt="PSU email address:" specialelement="true">PSU email address:</label>
        </div>
        <div class="col-md-9">
          <input v-model="psuEmailAddress" type="email" class="form-control" id="psuemail" value="leake@pdx.edu">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <label for="emailAddress" code="alert.index.emailAddress#LABEL" alt="Alternate email address:" specialelement="true">Alternate email address:</label>
        </div>
        <div class="col-md-9">
          <input v-model="alternateEmailAddress" type="email" class="form-control" id="emailAddress" name="emailAddress" value="">
        </div>
      </div>
      <br style="clear: both;">
    </div>

    <fieldset class="form-group" id="formButtons">
       <label for="reset-btn" class="sr-only">Reset form data:</label>
       <input type="reset" value="Reset" class="btn btn-warning" id="reset-btn">
       &nbsp;&nbsp;
       <label for="submit-btn" class="sr-only">Submit form data:</label>
       <input v-on:click="submitAlertsInformation()" type="submit" value="Submit" class="btn btn-success" id="submit-btn">
     </fieldset>
   </form>
   <br>

   <div id="emergency-response-information">
     <h2>Emergency Response Planning:</h2>
     <small>
     Preparing for emergencies is a shared responsibility across the whole community.
     That includes individuals, campus departments and units, the PSU Administration, and the larger Portland community.
     Individuals can take steps to prepare themselves to help ensure their own safety and comfort should an emergency incident occur while at home, at school, or at work.
     For emergency planning information, visit <a href="http://www.pdx.edu/emergency-management" target="_blank">PSU Emergency Management’s website<sup style="color:Blue;"> <i class="fa fa-external-link xsm" aria-label="opens in a new window" title="opens in a new window"></i></sup></a>, or contact: <a href="mailto:EmrMgmt@pdx.edu">PSU Emergency Management</a>.
     </small>
   </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PSUAlertInformation',
  props: {},

  data() {
    return {
      smsNumber: '',
      smsStatusInd: '',
      phoneNumber: '',
      alternatePhoneNumber: '',
      psuEmailAddress: '',
      alternateEmailAddress: ''
    }
  },

  methods: {
    submitAlertsInformation() {
      var vm = this;

      // Update Registration checkbox state in the database
      let bodyFormData = new FormData();
      bodyFormData.set('external_email', vm.alternateEmailAddress);
      bodyFormData.set('campus_email', vm.psuEmailAddress);
      bodyFormData.set('primary_phone', vm.phoneNumber);
      bodyFormData.set('alternate_phone', vm.alternatePhoneNumber);
      if(vm.smsStatusInd)
        bodyFormData.set('sms_status_ind', 'Y');
      bodyFormData.set('sms_device', vm.smsNumber);

      axios({
        method: 'post',
        baseURL: 'http://127.0.0.1:8000/setEmergencyNotifications/',
        data: bodyFormData
      })
      .then(response => {
        alert(JSON.stringify(response))
      })
      .catch(error => alert(error))
    },
  },

  //TODO It seems Auth tokens are clearing or not working if we make repeat requests after a refresh. Don't know why.
  mounted() {
    var vm = this;

    axios({
      method: 'post',
      baseURL: 'http://127.0.0.1:8000/getEmergencyNotifications/',
    })
    .then(response => {
      let data = response.data[0];
      vm.psuEmailAddress = data['campus_email'];
      vm.alternateEmailAddress = data['external_email'];
      vm.phoneNumber = data['primary_phone'];
      vm.alternatePhoneNumber = data['alternate_phone'];
      vm.smsStatusInd = data['sms_status_ind'];
      vm.smsNumber = data['sms_device'];
      vm.activityDate = data['activity_date'];
    })
    .catch(error => alert("This" + error.toString()))
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>