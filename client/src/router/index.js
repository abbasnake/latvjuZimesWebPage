import Vue from 'vue'
import Router from 'vue-router'
import ViewHome from '@/components/views/ViewHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewHome',
      component: ViewHome
    }
  ]
})
