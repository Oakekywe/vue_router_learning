import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/job/Jobs.vue'
import JobDetail from '../views/job/JobDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/job_detail/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catch all
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
