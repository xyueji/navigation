import Vue from 'vue'
import Router from 'vue-router'
import Index from 'VIEW/index'
// import UserPage from 'VIEW/user/userpage'
// import RepoList from 'VIEW/user/repos'
// import RepoDetail from 'VIEW/user/detail'
// import Github from 'VIEW/Index/github'
// import Novelty from 'VIEW/github/novelty'
// import Repos from 'VIEW/github/repos'
// import Owner from 'VIEW/github/owner'
// import Follow from 'VIEW/github/follow'
import Error from 'VIEW/404/404'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/Index'
      // redirect: '/User'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/404',
      name: 'Error',
      component: Error
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
