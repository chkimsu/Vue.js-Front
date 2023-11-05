<template>
  <div class="about">
    <h1>This is an BootstrapVue Test page</h1>
  </div>

  <hr color="blue" size = "5">
    <h3> BootstrapVue Test</h3>
    
<!-- 1 -->
  <b-button size="sm" @click="toggle">
    {{ show ? 'Hide' : 'Show' }} Alert
  </b-button>
  <b-alert
    v-model="show"
    class="mt-3"
    dismissible
    @dismissed="dismissed"
  >
    Hello {{ name }}!
  </b-alert>
<!-- 2 -->
  <div>
  <b-button block variant="primary">Block Level Button</b-button>
  </div>
<!-- 3 -->
  <div class="text-center">
  <div class="w-25 p-3 mb-1 bg-secondary text-light">Width 25%</div>
  <div class="w-50 p-3 mb-1 bg-secondary text-light">Width 50%</div>
  <div class="w-75 p-3 mb-1 bg-secondary text-light">Width 75%</div>
  <div class="w-100 p-3 bg-secondary text-light">Width 100%</div>
</div>

<!-- 4 -->

<div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>

<!-- 5 -->


  <div>
    <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>

    <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>


<!-- 6-->

  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>



<v-switch label="Switch"></v-switch>


</template>





<script>

export default {
  name: 'HomeView', // 요건 import AboutView.vue로 바로 import 해오는 코드때문에 name 무시인듯.
  // index.js 가면 이 코드가 있거든     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
 
  data() {
    return {
      name: 'BootstrapVue',
      show: true,
      status: 'not_accepted',
      selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
    ],

    }
  },
  watch: {
    show(newVal) {
      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
    }
  },

  methods: {
    toggle() {
      console.log('Toggle button clicked')

      this.show = !this.show
    },
    dismissed() {
      console.log('Alert dismissed')
    }
  }
}


</script>
