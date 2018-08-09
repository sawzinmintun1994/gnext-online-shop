import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Man from '@/components/man/index'
import Woman from '@/components/woman/index'
import Kids from '@/components/kids/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/man',
      name: 'Man',
      component: Man
    },
    {
      path: '/woman',
      name: 'Woman',
      component: Woman
    },
    {
      path: '/kids',
      name: 'Kids',
      component: Kids
    }
  ]
})
