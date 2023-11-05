import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// 되게 중요:  vue 2에서는 Vue.prototype으로 사용했지만 이렇게 안사용하고 app.config.global~~ 이렇게 사용. 


import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'





const app = createApp(App)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(BootstrapVue3)

app.config.globalProperties.$http= axios
app.use(router)
app.use(vuetify)
app.mount('#app')


