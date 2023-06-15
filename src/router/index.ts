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
      meta: { title: "登录", },
    },

    {
      path: "/homeIndex",
      name: "homeIndex",
      component: () => import("../views/Home/index.vue"),
      meta: { title: "监控大屏", },
    },
  ]
})

export default router
