import Vue from 'vue'
import Home from '../components/Home'
import VueRouter from "vue-router"
import VuePromiseBtn from 'vue-promise-btn'

import 'vue-promise-btn/dist/vue-promise-btn.css'
 
Vue.use(VuePromiseBtn)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
