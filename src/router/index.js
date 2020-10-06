import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashboard from '../views/dashboard.vue'
import about from '../views/MAIN/about.vue'
import contact from '../views/MAIN/contact.vue'
import alertes from '../views/MAIN/alerts.vue'
import aides from '../views/MAIN/helps.vue'
import histoires from '../views/MAIN/histoires.vue'
import histoire from '../views/MAIN/histoire.vue'
import histoirescherche from '../views/MAIN/histoiressearched'
import bloodneed from '../views/need/bloodneed.vue'
import foodneed from '../views/need/foodneed.vue'
import moneyneed from '../views/need/moneyneed.vue'
import medicneed from '../views/need/medicneed.vue'
import materialneed from '../views/need/materialneed.vue'
import bloodhelp from '../views/help/bloodhelp.vue'
import foodhelp from '../views/help/foodhelp.vue'
import moneyhelp from '../views/help/moneyhelp.vue'
import medichelp from '../views/help/medichelp.vue'
import materialhelp from '../views/help/materialhelp.vue'
import signin from '../views/signin.vue'
import signup from '../views/signup.vue'
import logout from '../views/logout.vue'
import confirmprofile from '../views/MAIN/components/confirmprofile.vue'
import resetpassword from '../views/MAIN/components/resetpassword.vue'
import sang from '../views/components/showhelp/blood.vue'
import argent from '../views/components/showhelp/money.vue'
import materiel from '../views/components/showhelp/material.vue'
import repas from '../views/components/showhelp/food.vue'
import medicament from '../views/components/showhelp/medic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/alertes',
    name: 'alertes',
    component: alertes
  },
  {
    path: '/aides',
    name: 'aides',
    component: aides
  },
  {
    path: '/histoires',
    name: 'histoires',
    component: histoires
  },
  {
    path: '/histoire/:id',
    name: 'histoire',
    component: histoire
  },
  {
    path: '/recherche',
    name: 'histoirescherche',
    component: histoirescherche
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/confirmprofile/:email/:token',
    name: 'confirmprofile',
    component: confirmprofile
  },
  {
    path: '/resetpassword/:email/:token',
    name: 'resetpassword',
    component: resetpassword,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: logout
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/besoin-sang',
    name: '/bloodneed',
    component: bloodneed,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/besoin-repas',
    name: '/foodneed',
    component: foodneed,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/besoin-argent',
    name: '/moneyneed',
    component: moneyneed,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/besoin-medicament',
    name: '/medicneed',
    component: medicneed,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/besoin-materiel',
    name: '/materialneed',
    component: materialneed,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aider-repas',
    name: '/foodhelp',
    component: foodhelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aider-argent',
    name: '/moneyhelp',
    component: moneyhelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aider-medicament',
    name: '/medichelp',
    component: medichelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aider-materiel',
    name: '/materialhelp',
    component: materialhelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/aider-sang',
    name: '/bloodhelp',
    component: bloodhelp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show/sang/:id',
    name: 'sang',
    component: sang
  },
  {
    path: '/show/argent/:id',
    name: 'argent',
    component: argent
  },
  {
    path: '/show/materiel/:id',
    name: 'materiel',
    component: materiel
  },
  {
    path: '/show/repas/:id',
    name: 'repas',
    component: repas
  },
  {
    path: '/show/medicament/:id',
    name: 'medicament',
    component: medicament
  }
]
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../views/Error404.vue')
  })
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
