import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

// 引入mint
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'


Vue.use(mintUI)
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/goods'
    },
    ,
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    }
    ,
    {
      path: '/seller',
      component: seller
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
