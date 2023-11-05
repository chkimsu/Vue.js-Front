import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bata_bata from '../views/DataFrame.vue'
import CsvReader from '../views/CsvReader.vue'
// import CsvReader2 from '../views/CsvReader2.vue'
import CsvFinal from '../views/CsvFinal.vue'

import csb_button from '../components/button_datacheck.vue'
import BoardCreate from '../views/BoardCreate.vue'
import BoardList from '../views/BoardList.vue'
import BoardDetail from '../views/BoardDetail.vue'
import Index from '../components/MovieIndexPage.vue'
import Show from '../components/MovieShowPage.vue'
import PropsEmit from '../components/propsemitparent.vue'

// import Vue from 'vue'
// import BootstrapVue3 from 'bootstrap-vue-3'


// Vue.use(BootstrapVue3)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[

      {
        path: 'xx',
        name : 'ChildComponent',
        component : csb_button

      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/propsemit',
    name: 'propsemit',
    component: PropsEmit
  },
  {
    path: '/dataframe',
    name: 'dataframe',
    component: bata_bata
  },
  {
    path: '/csv_reader',
    name: 'csv_reader',
    component: CsvReader
  },
  {
    path: '/csv_final',
    name: 'csv_final',
    component: CsvFinal
  },
  {
    path: '/button_test',
    name: 'button_test',
    component: csb_button
  },

  {
    path: "/board",
    name: "BoardList",
    component: BoardList
  },
  {
    path: "/board/detail/:contentId",
    name: "BoardDetail",
    component: BoardDetail
  },
  {
    path: "/board/create/:contentId?",
    name: "BoardCreate",
    component: BoardCreate
  },
  {
    path: "/movie",
    name: "movie",
    component: Index
  },
  {
    path: "/movie/:id",
    name: "show",
    component: Show
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
