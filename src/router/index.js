import Vue from 'vue'
import Router from 'vue-router'
import Tables from '@/pages/tables/Tables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tables',
      component: Tables,
      props: true
    },
  ],
})
