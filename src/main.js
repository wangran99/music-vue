import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';//自动将px转为rem

import router from './router';
import store from './store';

Vue.use(Antd)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
console.log(process.env)