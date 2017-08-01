/* eslint-disable no-unused-vars */
import 'es6-promise/auto'
import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './route-config'
import ypc from '../src/index.js'
import {Lazyload} from '../src/index.js'
import App from './app.vue'
import './assets/reset.css'
/**
使用方法 首先 在package.json 中 引入  "ypc":"1.1.0"
然后在 main.js中
           import ypc from 'ypc'
            Vue.use(ypc)
**/


Vue.use(VueRouter)

Vue.use(ypc)

const router = new VueRouter(configRouter)
const app = new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
   components: { App }
})
