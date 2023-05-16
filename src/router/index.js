import { createRouter, createWebHistory } from 'vue-router'
import AllStudents from '../views/AllStudents.vue'
import InfoView from '../views/InfoView.vue'
import AuthView from '../views/AuthView.vue'
import StudentView from '../views/StudentView.vue'
import AboutView from '../views/AboutView.vue'
import GroupView from '../views/GroupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AllStudents',
      component: AllStudents
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoView
    },
    {
      path: '/auth',  
      name: 'AuthView',
      component: AuthView
    },

    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/group',
      name: 'GroupView',
      component: GroupView
    },
    {
      path: '/student',
      name: 'StudentView',
      component: StudentView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
