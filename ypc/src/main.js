// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import layer from 'ywlayer';
import jsBridge from '1ywjsbridge';
import common from 'ywlayer/common';
import _ from 'underscore';
import setFontSize from '../src/assets/js/setFontSize';
import AlloyFinger from 'alloyfinger';
import 'ywlayer/common/layer.css';
// import ywPoint from 'ywlayer/common/ywPoint';

//require('../src/assets/js/ywConsole')


var BUS = new Vue();
window.BUS = BUS;
BUS.pickImage=true;
BUS.router="";
Vue.use(VueResource);
window.console ={
  log : new Function(),
  info:new Function(),
  warn:new Function()
};
Vue.http.options.emulateJSON = true;
Vue.prototype._ = _;
Vue.prototype.AlloyFinger = AlloyFinger;

//Vue.http.interceptors.push(Interceptor.httpInterceptor);

	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: { App }

})
