import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'

import Student from './components/Student'
import navigation from './components/navigation'
import sign1 from './components/sign1.vue'
import Work from './components/Work'
import CNNode from './components/CNNode.vue'
import SVIP from './components/SVIP.vue'



Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: '/student', component: Student },
  { path: '/navigation', component: navigation },
  { path: '/sign1', component: sign1 },
  { path: '/work', component: Work },
  { path: '/cnnode', component: CNNode },
  { path: '/svip', component: SVIP }
]



Vue.config.productionTip = false
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


