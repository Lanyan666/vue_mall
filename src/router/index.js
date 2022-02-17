import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/home/Home")
// const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")
const Detail = () => import("../views/detail/Detail")

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
