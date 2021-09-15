import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import _plants from "@/data/plants";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    props: { plants: _plants},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    props: { plants: _plants},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue'),
    children: [
      {
        path: '/quiz/:id',
        name: 'Question',
        props: {plant: true, plants: true},
        component: () => import(/* webpackChunkName: "about" */ '../views/Quiz/Question.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
