import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/base.css'

import { 
  Tabbar, 
  TabbarItem,
  Icon,
  Swipe, SwipeItem
} from 'vant'

Vue.use(Tabbar).use(TabbarItem);// 底部导航栏
Vue.use(Icon);// 图标
Vue.use(Swipe).use(SwipeItem);// 轮播图

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
