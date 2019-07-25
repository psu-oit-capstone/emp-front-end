<!-- Style notes: the general logic I tried to follow in styling this template was 1) large blocks of text are left justified
and lists, interactive elements and so forth are center justified.-->
<template>
    <div class="EA Registry">
        <h1>Evacuation Assistance Registry</h1>
        <h2>
            A resource for individuals with disabilities and others with access and functional needs.
        </h2>

        <div class="boxed" id="introduction-field">
            <h3>Introduction</h3>
        <p>
            It may be necessary to evacuate a building, room, or space due to an emergency incident or hazardous, situation.
            Preparing for an evacuation is a shared responsibility among individuals, the University, and first responders.<br><br>
            All people, including individuals with disabilities and others with access and functional needs, are strongly encouraged to develop a personal emergency plan.
            PSU’s Environmental Health and Safety department offers a
            <a href="https://www.pdx.edu/environmental-health-safety/emergency-planning-for-people-needing-assistance" target="_blank" rel="noopener noreferrer">resource page</a>
            on their website, including
            <a href="https://www.pdx.edu/environmental-health-safety/sites/www.pdx.edu.environmental-health-safety/files/ada.emergency.guidelines_2.pdf" target="_blank" rel="noopener noreferrer">guidelines for developing a Personal Emergency Plan</a>
            that will help you to prepare. Included within the guidelines is information regarding evacuation strategies;
            areas of refuge; suggested guidelines for specific mobility limitations and additional on-campus resources.
        </p>
        </div>

        <div class="boxed" id="about-field">
            <h3>About this registry</h3>
        <p>
            {{about_registry_text1}}
            <ul class="c">
                Please note:
                <ul class="b">
                    <li>This registry IS NOT a way to get advance notice of fire alarm tests or drills.</li>
                    <ul class="a">
                        <li>In PSU residence halls, fire drill tests are conducted once per term. Contact your residence hall
                            advisor if you need advance notice of those tests.</li>
                        <li>In all other PSU buildings, fire alarm testing is most often done outside of normal business hours.
                            Tests planned during normal business hours are often announced to the building occupants.</li>
                    </ul>
                </ul>

                <ul class="b">
                    <li>This registry IS NOT a guarantee of immediate assistance.</li>
                    <ul class="a">
                        <li>Emergency personnel will assess the specific incident that occurs and apply the appropriate
                            protocol for stabilizing the incident and providing assistance. This registry is one piece of
                            information they can consider in their overall assessment of the incident.</li>
                        <li>When instructed to evacuate, every individual, as they are able, should make as much progress
                            toward evacuation as possible. This may mean moving away from the hazard, informing others of
                            your need for assistance, initiating communication with first responders, etc.</li>
                    </ul>
                </ul>

                <ul class="b">
                    <li>This registry is only ONE of SEVERAL WAYS to let first responders know of your need for evacuation assistance.</li>
                    <ul class="a">
                        <li>Other options include: making advance plans with your colleagues and co-workers, informing an
                            <a href="https://www.pdx.edu/environmental-health-safety/evacuation-wardens" target="_blank" rel="noopener noreferrer">resource page</a>
                            or a residence hall advisor in advance and/or in the moment, calling CPSO or 911, placing a sign in the window, etc.</li>
                    </ul>
                </ul>
            </ul>
        </p> <!-- Parser is glitchy and this might wrongly throw an error -->
        </div><br>

        <div  class="boxed" id="registry-field">
        <h3>Registry</h3>
        <p>
           <b>If you are a person with a disability, or someone with an access or functional need, to the extent that it
               could prevent or hinder you from providing for your own evacuation,</b>
            would you like your information to be available for use by emergency responders as someone who may need
            physical assistance during an evacuation?
            <div>
                <input type="checkbox" name="register-checkbox" v-model="regbox" v-bind:id="regbox"/>
                <label for="regbox">Yes, make my information accessible to emergency responders.</label>
            </div>
        </p> <!-- Parser is glitchy and this might wrongly throw an error due to <div> above -->
        </div><br>
        <!-- Buttons are here -->
        <button type="button" v-on:click="reset()">Reset</button>
        <button type="button" v-on:click="submit()">Submit</button><br><br>

        <div  class="boxed" id="helpful_links">
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

            <b>
                General information about
                <a href="https://www.pdx.edu/cpso/evacuation" target="_blank" rel="noopener noreferrer">evacuation</a>
                can be found online on the CPSO website.
            </b><br><br>
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
    import axios from 'axios';

    export default {
        name: 'EvacAssist',
        //This runs on instance creation
        data: function() {
          return {
            //Hold data for input fields here like this if it needs to be mutated
            about_registry_text1: {type: String},
            regbox: {type: Boolean, default: false},
            }
        },

        //This initializes the above declarations
        created: function() {
            //This is one way to handle massive text blobs in a template but is not strictly necessary
            this.about_registry_text1 = "PSU has developed this registry as a mechanism for individuals with a disability" +
                " (or an access or functional need) that would prevent them from independently exiting a building during" +
                " an emergency evacuation. If you register, your information will become accessible to first responders" +
                " (information could include, as applicable: name, assigned residence hall room (PSU residents only)," +
                " location of registered courses (student or instructor/faculty), assigned office location (staff)," +
                " and/or contact information) The registry is confidential and is managed by CPSO. Data is refreshed weekly. ",
            this.regbox = false
        },

        //This is for button clicks
        methods: {
            submit() {
              // Update Registration checkbox state in the database
              let bodyFormData = new FormData();
              if(this.regbox)
                bodyFormData.set('evacuation_assistance', 'Y');

              axios({
                method: 'post',
                baseURL: 'http://127.0.0.1:8000/setEvacuationAssistance/',
                data: bodyFormData
              })
              .then(response => {
                alert(JSON.stringify(response))
              })
              .catch(error => alert(error))
            },
            reset() {
              axios({
                method: 'post',
                baseURL: 'http://127.0.0.1:8000/getEvacuationAssistance/',
              })
              .then(response => {
                let evacuation_assistance_state = response.data[0]['evacuation_assistance']
                if(evacuation_assistance_state == 'Y')
                  this.regbox = true;
              })
              .catch(error => alert("This" + error.toString()))
            }
        },

        //TODO It seems Auth tokens are clearing or not working if we make repeat requests after a refresh. Don't know why.
        mounted() {
          axios({
            method: 'post',
            baseURL: 'http://127.0.0.1:8000/getEvacuationAssistance/',
          })
          .then(response => {
            let evacuation_assistance_state = response.data[0]['evacuation_assistance']
            if(evacuation_assistance_state == 'Y')
              this.regbox = true;
            else
              this.regbox = false;
          })
          .catch(error => alert("This" + error.toString()))
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this only
in "margin" the pattern is top, right, bottom, left
and that is pretty standard amongst other CSS properties it seems-->
<style scoped>
    h2 {
        font-weight: normal;
        font-size: 20px;
        color: #36454f;
    }
    h3 {
        font-family: "Times New Roman", Times, serif;
        font-size: 40px;
        color: #36454f;
        margin: 10px 0 10px 0;
    }
    p { /*normal text formatting*/
        text-align: left;
        padding: 0;
        font-family: "Arial", Helvecta, sans-serif;
        font-size: 18px;
    }
    ul.a { /*unordered list*/
        list-style-type: circle; /*what are the bullets? Here they are empty circles*/
        font-weight: normal;
    }
    ul.b { /*unordered list*/
        list-style-type: disc; /*what are the bullets? Here they are filled circles*/
        font-weight: bold;
    }
    ul.c { /*unordered list*/
        list-style-type: none; /*what are the bullets? Here they are nothing*/
        font-weight: bold;
    }
    ul.d { /*unordered list*/
        list-style-type: disc; /*what are the bullets? Here they are filled circles*/
        font-weight: normal;
        text-align: left;
        padding-left: 70px;
    }
    a {
        color: #42b983;
    }

    #introduction-field{
        margin: auto;
        margin-bottom: 30px;
        padding: 20px;
    }

    #about-field{
        margin: auto;
        margin-bottom: 30px;
        padding: 20px;
    }

    #registry-field{
        margin: auto;
        margin-bottom: 30px;
        padding: 20px;
    }

    #helpful-links{
        margin: auto;
        padding: 20px;
    }
</style>
