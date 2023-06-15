import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/login",
      // component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login/index.vue"),
      meta: { title: "龙大美食全流程监控台|登录", },
    },

    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home/index.vue"),
      meta: { title: "龙大美食全流程监控台", },
    },
    {
      path: "/summary",
      name: "summary",
      component: () => import("../views/summary.vue"),
      meta: { title: "龙大美食全流程监控台", },
    },
    {
      path: "/monitor",
      name: "monitor",
      component: () => import("../views/monitor.vue"),
      meta: { title: "龙大美食全流程监控台", },
    },
  ]
})

export default router
