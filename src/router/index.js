import Vue from 'vue'
import Router from 'vue-router'
import Tables from '@/pages/tables/Tables'
import Authoring from '@/pages/authoring/Authoring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tables',
      component: Tables,
      props: true
    },
    {
      path: '/authoring',
      name: 'Authoring',
      component: Authoring,
      props: true
    },
  ],
})
