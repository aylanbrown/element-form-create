


import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import FormCreate from '../dist'


import 'element-ui/lib/theme-chalk/index.css'



Vue.use(ElementUI)
Vue.use(FormCreate)




new Vue({

	render: (h) => h(App)
}).$mount('#app')