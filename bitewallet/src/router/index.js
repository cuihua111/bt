import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
import asssets from '@/components/myAssets'
import query from '@/components/query'
import realName from '@/components/realName'
import updatePassword from '@/components/updatePassword'
import googleAuthenticator from '@/components/googleAuthenticator'
import safeCenter from '@/components/safeCenter'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: index
    // },
    {
      path: '/',
      redirect: '/asssets',
      component: asssets
    },
    {
      path: '/asssets',
      component: asssets
    },
    {
      path: '/realName',
      component: realName
    },
    {
      path: '/updatePassword',
      component: updatePassword
    },
    {
      path: '/googleAuthenticator',
      component: googleAuthenticator
    },
    {
      path: '/query',
      component: query
    },
    {
      path: '/safeCenter',
      component: safeCenter
    }
  ]
})
