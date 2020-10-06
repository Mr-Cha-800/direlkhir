import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { dateFilter } from 'vue-date-fns'
import './quasar'
import * as moment from 'moment'
import 'moment/locale/fr'
// jerrold.lowe@example.com
// https://stackoverflow.com/questions/41833424/how-to-access-vuex-module-getters-and-mutations
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['auth/loggedIn']) {
      next({
        name: 'signin'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters['auth/loggedIn']) {
      next({
        name: 'dashboard'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
moment.locale('fr')
Vue.filter('date', dateFilter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
