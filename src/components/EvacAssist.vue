<template>
    <div id="EA-registry" class="page-component">
        <h1 style="text-align:center">Evacuation Assistance Registry</h1>
        <h2 style="text-align:center">
            A resource for individuals with disabilities and others with access and functional needs.
        </h2>

        <div id="introduction-field">
            <h2>Introduction</h2>
            It may be necessary to evacuate a building, room, or space due to an emergency incident or hazardous, situation.
            Preparing for an evacuation is a shared responsibility among individuals, the University, and first responders.<br><br>
            All people, including individuals with disabilities and others with access and functional needs, are strongly encouraged to develop a personal emergency plan.
            PSU’s Environmental Health and Safety department offers a
            <a href="https://www.pdx.edu/environmental-health-safety/emergency-planning-for-people-needing-assistance" target="_blank" rel="noopener noreferrer">resource page</a>
            on their website, including
            <a href="https://www.pdx.edu/environmental-health-safety/sites/www.pdx.edu.environmental-health-safety/files/ada.emergency.guidelines_2.pdf" target="_blank" rel="noopener noreferrer">guidelines for developing a Personal Emergency Plan</a>
            that will help you to prepare. Included within the guidelines is information regarding evacuation strategies;
            areas of refuge; suggested guidelines for specific mobility limitations and additional on-campus resources.
        </div>

        <div id="about-field">
            <h2>About this registry</h2>
            <ul class="c">
                <b>Please note:</b>
                <ul class="b">
                    <li><b>This registry IS NOT a way to get advance notice of fire alarm tests or drills.</b></li>
                    <ul class="a">
                        <li>In PSU residence halls, fire drill tests are conducted once per term. Contact your residence hall
                            advisor if you need advance notice of those tests.</li>
                        <li>In all other PSU buildings, fire alarm testing is most often done outside of normal business hours.
                            Tests planned during normal business hours are often announced to the building occupants.</li>
                    </ul>
                </ul>

                <ul class="b">
                    <li><b>This registry IS NOT a guarantee of immediate assistance.</b></li>
                    <ul class="a">
                        <li>Emergency personnel will assess the specific incident that occurs and apply the appropriate
                            protocol for stabilizing the incident and providing assistance. This registry is one piece of
                            information they can consider in their overall assessment of the incident.</li>
                        <li>When instructed to evacuate, every individual, as they are able, should make as much progress
                            toward evacuation as possible. This may mean moving away from the hazard, informing others of
                            your need for assistance, initiating communication with first responders, etc.</li>
                    </ul>
                </ul>

                <ul>
                    <li><b>This registry is only ONE of SEVERAL WAYS to let first responders know of your need for evacuation assistance.</b></li>
                    <ul class="a">
                        <li>Other options include: making advance plans with your colleagues and co-workers, informing an
                            <a href="https://www.pdx.edu/environmental-health-safety/evacuation-wardens" target="_blank" rel="noopener noreferrer">resource page</a>
                            or a residence hall advisor in advance and/or in the moment, calling CPSO or 911, placing a sign in the window, etc.</li>
                    </ul>
                </ul>
            </ul>
        </div><br>

        <div id="registry-field">
        <h2>Registry</h2>
           <b>If you are a person with a disability, or someone with an access or functional need, to the extent that it
               could prevent or hinder you from providing for your own evacuation,</b>
            would you like your information to be available for use by emergency responders as someone who may need
            physical assistance during an evacuation?
            <div>
                <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
                <label for="regbox">Yes, make my information accessible to emergency responders.</label>
            </div>
        </div><br>
        <button type="button" v-on:click="reset()">Reset</button>
        <button type="button" v-on:click="submit()">Submit</button><br><br>

        <div id="helpful-links">
            <ul class="c">
                <li>Additional Resources for people with disabilities and others with access and functional needs:</li>
                <ul class="d">
                    <li><a href="https://www.pdx.edu/drc/" target="_blank" rel="noopener noreferrer">PSU Disability Resource Center</a></li>
                    <li><a href="https://www.pdx.edu/environmental-health-safety/emergency-planning-for-people-needing-assistance" target="_blank" rel="noopener noreferrer">PSU Environmental Health and Safety</a></li>
                    <li><a href="https://www.pdx.edu/diversity/" target="_blank" rel="noopener noreferrer">PSU Office of Global Diversity and Inclusion</a></li>
                    <li><a href="https://www.pdx.edu/hr/" target="_blank" rel="noopener noreferrer">PSU Human Resources</a></li>
                    <li><a href="https://www.pdx.edu/cpso/" target="_blank" rel="noopener noreferrer">PSU Campus Public Safety Office</a></li>
                    <li><a href="https://www.pdx.edu/housing/" target="_blank" rel="noopener noreferrer">PSU Housing and Residence Life</a></li>
                    <li><a href="https://www.portlandoregon.gov/oni/66305" target="_blank" rel="noopener noreferrer">City of Portland Emergency Preparedness for People with Disabilities</a></li>
                    <li><a href="https://www.redcross.org/prepare/location/home-family/disabilities" target="_blank" rel="noopener noreferrer">Red Cross</a></li>
                    <li><a href="https://www.nfpa.org/public-education/by-topic/people-at-risk/people-with-disabilities" target="_blank" rel="noopener noreferrer">National Fire Protection Agency</a></li>
                    <li><a href="https://www.ready.gov/individuals-access-functional-needs" target="_blank" rel="noopener noreferrer">Federal Emergency Management Agency</a></li>
                    <li><a href="https://www.nod.org/" target="_blank" rel="noopener noreferrer">National Organization on Disability</a></li>
                </ul>
            </ul>

          <br />
          <b>
              General information about
              <a href="https://www.pdx.edu/cpso/evacuation" target="_blank" rel="noopener noreferrer">evacuation</a>
              can be found online on the CPSO website.
          </b>
          <br><br>
          <p>
              <b>Additional resources for emergency planning and preparedness:</b><br>
              Individuals can take steps to prepare themselves to help ensure their own safety and comfort should an
              emergency incident occur while at home, at school, or at work. For general information about planning
              for emergencies, visit
              <a href="https://www.pdx.edu/emergency-management/" target="_blank" rel="noopener noreferrer">PSU Emergency Management's website,</a>
              or contact
              <a href="mailto:EmrMgmt@pdx.edu" target="_blank" rel="noopener noreferrer">PSU Emergency Management.</a>
          </p>
        </div>
    </div>
</template>

<script>
    export default {
        //This runs on instance creation
        data: function () {
            return {
                //Hold data for input fields here like this if it needs to be mutated
                regbox: {type: Boolean, default: false},
            }
        },
    }

</script>