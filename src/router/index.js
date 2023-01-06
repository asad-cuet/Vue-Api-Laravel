import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/skills',
    name: 'Skills',
    component: ()=> import('@/views/skills/Skills.vue')
  },
  {
    path: '/skills/create',
    name: 'SkillCreate',
    component: ()=> import('@/views/skills/SkillCreate.vue')
  },
  {
    path: '/skills/edit/:id',
    name: 'SkillEdit',
    component: ()=> import('@/views/skills/SkillEdit.vue'),
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
