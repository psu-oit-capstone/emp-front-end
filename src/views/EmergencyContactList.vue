<template>
    <div id="emergency-contacts-list" class="page-component">
        <h1 style="text-align:center">
          Emergency Contact List
        </h1>

        <ul v-for="(contactObject, index) in contacts">
            <li>
                {{ contactObject.contactPriority }}. {{ contactObject.firstName }} {{ contactObject.lastName }}
                <button @click="editContact(contactObject, index)">
                  Edit
                </button>
                <button @click="deleteContact(contactObject, index)">
                  Delete
                </button>
            </li>
        </ul>

        <div>
            <b>
              Emergency Contact Form
            </b>
            <EmergContactForm
              id="emergency-contact-form"
              :activeContact="contacts[activeIndex]"
              :countryArray="countryArray"
              :relationshipArray="relationshipArray"
              :stateArray="stateArray"
              :countryCodeArray="countryCodeArray"
              :isFetching="isFetching"
              @updateContact="updateContact"
            />
        </div>
    </div>
</template>

<script>
    import EmergContactForm from '@/components/EmergContactForm.vue'
    import axios from 'axios'

    import DropdownData from '@/components/DropdownData.vue'

    export default {
        name: "EmergencyContactList",
        components: {
            EmergContactForm,
            DropdownData

        },

        mounted() {
          // Retrieve contacts from backend and store in this.contacts[]
          this.getEmergencyContactInformation()

          this.getStateDropdownOptions()
        },

        methods: {
            getStateDropdownOptions() {
              axios({
                method: 'get',
                baseURL: 'http://127.0.0.1:8000/getStateCodes/',
              })
              .then(response => {
                var stateCodes = response.data
                this.stateArray = stateCodes

                this.resourcesToFetch -= 1
              })
              .catch(error => console.log(error.toString()))
            },


            // Grab contacts via axios and bind to Vue model
            async getEmergencyContactInformation() {
                var vm = this;

                await axios({
                  method: 'post',
                  baseURL: 'http://127.0.0.1:8000/getEmergencyContacts/',
                })
                .then(response => {
                  let receivedContacts = response.data;

                  for(let index in receivedContacts) {
                    let data = receivedContacts[index]

                    // Create object to hold contact information
                    let contactObject = {}

                    // Fill object mapping from API names to more readable names
                    for(let APIKey in data) {
                      let localKey = vm.APIToLocal(APIKey)
                      contactObject[localKey] = data[APIKey]
                    }

                    vm.contacts.push(contactObject)
                    vm.resourcesToFetch -= 1
                  }
                })
                .catch(error => console.log(error.toString()))
            },


            // Handler for updateContact events emitted by EmergContactForm components
            updateContact(contactObject) {
              var vm = this;

              // Update contact in memory
              vm.contacts[vm.activeIndex] = contactObject;

              // Update contact in database
              let bodyFormData = new FormData();

              for (let key in vm.localToAPIMap) {
                  if(key in contactObject) {
                      bodyFormData.set(vm.localToAPIMap[key], contactObject[key])
                  }
              }

              axios({
                method: 'post',
                baseURL: 'http://127.0.0.1:8000/updateEmergencyContact/',
                data: bodyFormData
              })
              .then(response => {
                console.log(response)
                if(response['status'] == '200')
                  console.log('User information was updated.')
                if(response['status'] == '422')
                  console.log('Form fields incorrect or incomplete.')
              })
              .catch(error => console.log(error))
            },

            editContact(contactObject, index) {
              this.activeIndex = index;
            },

            deleteContact(contactObject, index) {
              this.activeIndex = 0;
              this.contacts.splice(index, 1);


              // TODO: Add Delete.
              /*
              axios({
                method: 'post',
                baseURL: 'http://127.0.0.1:8000/updateEmergencyContact/',
                data: bodyFormData
              })
              */
            },


            localToAPI(key) { return this.localToAPIMap[key] },

            APIToLocal(key) {
              let APIToLocalMap = {}
              for(let localKey in this.localToAPIMap)
                APIToLocalMap[this.localToAPIMap[localKey]] = localKey

              return APIToLocalMap[key]
            },

            safeNull(str) {
              if(str === 'null')
                return ''
              return str
            }
        },

        watch: {
          resourcesToFetch: function(count) {this.isFetching = count === 0}
        },

        data: function() {
            return {
                isFetching: true,
                resourcesToFetch: 2,

                // List which holds all contact objects
                contacts: [],


                stateArray: [],


                // The contact which occupies the form
                activeIndex: 0,

                localToAPIMap: {
                  'surrogateId': 'surrogate_id',
                  'pidm': 'pidm',
                  'contactPriority': 'priority',
                  'firstName': 'first_name',
                  'middleName': 'mi',
                  'lastName': 'last_name',
                  'city': 'city',
                  'phoneNumber': 'phone_number',
                  'zipCode': 'zip',
                  'streetLine1': 'street_line1',
                  'streetLine2': 'street_line2',
                  'streetLine3': 'street_line3',
                  'relation': 'relt_code',
                  'state': 'stat_code',
                  'country': 'natn_code',
                  'phoneCountryCode': 'ctry_code_phone',
                  'phoneAreaCode': 'phone_area',
                  'phoneExtension': 'phone_ext'
                },
                countryCodeArray: DropdownData.countryCodeArray,


                countryArray: [
                    {name: "Country", nationCode: null, code: null},
                    {name: "U.S.A.", nationCode: "LUS", country: "USA", code: "1", svgimg: "us.svg",},
                    {name: "Japan", nationCode: "JAP", country: "Japan",  code: "81", svgimg: "jp.svg"},
                    {name: "U.K.", nationCode: "UKA", country: "UK",  code: "44", svgimg: "gb.svg"},
                    {name: "Germany", nationCode: "GER",country: "Germany",  code: "49", svgimg: "de.svg"},
                    {name: "France", nationCode: "FR",country: "France",  code: "33", svgimg: "fr.svg"},
                    {name: "Russia", nationCode: "RU",country: "Russia",  code: "7", svgimg: "ru.svg"},
                    {name: "China", nationCode: "CH",country: "China",  code: "86", svgimg: "cn.svg"},
                    {name: "South Korea", nationCode: "SK", country: "South Korea",  code: "86", svgimg: "kr.svg"},
                ],
                relationshipArray: DropdownData.relationshipArray,

            }
        },
    }
</script>

<style scoped>
</style>
