// Adapted code from https://github.com/mikerodham/vue-dropdowns under the MIT License

<template>
    <div class="btn-group">
        <!-- Null Selection -->
        <div
          v-if="selectedOption === null"
          id="null-option"
          class="dropdown-option"
          @click="toggleMenu()"
        >
          {{ placeholderText }}
        </div>


        <!-- Selected element -->
        <li
          v-else
          id="selected-option"
          class="dropdown-option"
          @click="toggleMenu()"
        >
          <!-- Display an image if one was passed 'svgimg' -->
          <img
            v-if="'svgimg' in selectedOption"
            height="24px"
            width="18px"
            :alt="selectedOption.value"
            :src="getImage(selectedOption.svgimg)"
          />
          {{ selectedOption.value }}
        </li>

        <ul class="dropdown-menu" v-if="showMenu">
            <li v-for="option in options" :key="option.id">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    <!-- Display an image if one was passed 'svgimg' -->
                    <img
                      v-if="'svgimg' in option"
                      height="24px"
                      width="18px"
                      :alt="option.value"
                      :src="getImage(option.svgimg)"
                    />
                    {{ option.value }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {},
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },

        props: {
            options:  {type: [Array, Object]},
            selected: {type: Object},
            placeholder: [String],
        },

        watch: {
            selected: function() {
                this.selectedOption = this.selected;
            }
        },

        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder) {
                this.placeholderText = this.placeholder;
            }
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;

                // Let parent Vue model know to update
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
                this.showMenu = !this.showMenu;
            },

            getImage(imageName) {
                // TODO: Check out Nigeria
                if(imageName === null)
                  return
                return require("../image-assets/4x3/" + imageName)
            }
        }
    }
</script>


<style scoped>
.btn-group {
  //min-width: 160px;
  height: 40px;
  position: relative;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
}
.btn-group a:hover {
  text-decoration: none;
}

.dropdown-option {
  color: #636b6f;
  //min-width: 180px;
  padding: 10px;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center calc(100% - 1px);
  background-color: transparent;
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
}
.dropdown-option:hover {
  background: #e1e1e1;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  //min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #E0E0E0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu > li > a {
  padding: 10px 10px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: #333333;
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: #efefef;
  color: #409FCB;
}

.dropdown-menu > li {
  overflow: hidden;
  //width: 100%;
  position: relative;
  margin: 0;
}

.caret {
  width: 0;
  position: relative;
  top: 10px;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  float: right;
}

li {
    list-style: none;
}

ul {
    height:200px;
    //width:18%;
    overflow:hidden;
    overflow-y:scroll;
}

img {
    vertical-align: middle;
}
</style>
