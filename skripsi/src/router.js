import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Pementasan from './views/pementasan.vue'
import Taritarian from './views/taritarian.vue'
import Upacara from './views/upacara.vue'
import Visualisasi from './views/visualisasi.vue'
import DetailUpacara from './views/detailUpacara.vue'
import DetailWayang from './views/detailWayang.vue'
import MoreInfo from './views/moreInfo.vue'
import Wayang from './views/wayang.vue'
import Sendratari from './views/sendratari.vue'
import Dramatari from './views/dramatari.vue'
import Teater from './views/teater.vue'
import Details from './views/details.vue'
import DetailsTari from './views/detailsTari.vue'
import DetailAksesoris from './views/detailAksesoris.vue'
import DetailTokoh from './views/detailTokoh.vue'
import DetailCerita from './views/detailCerita.vue'
import DetailProperti from './views/detailProperti.vue'
import DetailGerakTari from './views/detailGerakTari.vue'
import Pencarian from './views/pencarian.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/pementasan',
      name: 'pementasan',
      component: Pementasan
    },
    
    {
      path: '/taritarian',
      name: 'taritarian',
      component: Taritarian
    },
    {
      path: '/upacara',
      name: 'upacara',
      component: Upacara
    },
    {
      path: '/visualisasi',
      name: 'visualisasi',
      component: Visualisasi
    },
    {
      path: '/detailUpacara/:id',
      name: 'detailUpacara',
      component: DetailUpacara
    },
    {
      path: '/detailWayang',
      name: 'detailWayang',
      component: DetailWayang
    },
    {
      path: '/moreInfo',
      name: 'moreInfo',
      component: MoreInfo
    },
    {
      path: '/wayang',
      name: 'wayang',
      component: Wayang
    },
    {
      path: '/sendratari',
      name: 'sendratari',
      component: Sendratari
    },
    {
      path: '/dramatari',
      name: 'dramatari',
      component: Dramatari
    },
    {
      path: '/teater',
      name: 'teater',
      component: Teater
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
      
    },
    {
      path: '/detailsTari/:id',
      name: 'detailsTari',
      component: DetailsTari
      
    },
    {
      path: '/detailAksesoris',
      name: 'detailAksesoris',
      component: DetailAksesoris
    },
    {
      path: '/detailTokoh',
      name: 'detailTokoh',
      component: DetailTokoh
    },
    {
      path: '/detailCerita',
      name: 'detailCerita',
      component: DetailCerita
    },
    {
      path: '/detailProperti',
      name: 'detailProperti',
      component: DetailProperti
    },
    {
      path: '/detailGerakTari',
      name: 'detailGerakTari',
      component: DetailGerakTari
    },
    {
      path: '/pencarian',
      name: 'pencarian',
      component: Pencarian
    },
    {
      path: '/alatmusik',
      beforeEnter() {location.href = 'https://app.alunalun.info/alatmusik/details?id_item='}
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
