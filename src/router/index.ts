
import CompanaysPage from "@/page/owner/CompanaysPage.vue"
import DashbordPage from "@/page/owner/DashbordPage.vue"
import AuthPage from '@/page/user/AuthPage.vue'
import DemoPage from '@/page/user/DemoPage.vue'
import HomeView from '@/page/user/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
     {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
    },
      {
      path: '/demo',
      name: 'demo',
      component: DemoPage,
    },
    {
      path:"/company",
      name:"compamny",
      component:CompanaysPage,
    },
     {
      path:"/dashbord",
      name:"dashbord",
      component:DashbordPage,
    }
  ],
})

export default router
