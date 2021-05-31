import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 1. Import components.
// import Home from './components/Home.vue'
// import Component1 from './components/Component1.vue'
// import Component2 from './components/Component2.vue'
// import Component3 from './components/Component3.vue'
// import DynamicObjRcvr from './components/DynamicObjRcvr.vue'

// It's more effecient to use a "lazy-loading"
// https://next.router.vuejs.org/guide/advanced/lazy-loading.html
const Home = () =>import ('./components/Home.vue')
const Component1 = () =>import ('./components/Component1.vue')
const Component2 = () =>import ('./components/Component2.vue')
const Component3 = () =>import ('./components/Component3.vue')
const DynamicObjRcvr = () =>import ('./components/DynamicObjRcvr.vue')

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'component1',
        component: Component1,
      },
      {
        path: 'foo',
        components: {
          default: Component2,
          helper: Component3,
        },
      },
    ],
  },
  {
    path: '/dynamicObjRcvr',
    name: 'dynamicObjRcvr',
    component: DynamicObjRcvr,
    props: (route) => {
      console.log(route.params)
      return { data: route.params }
    }
  },
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. 
  // History-Mode vs Hash-Mode
  // https://next.router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(),
  routes,
})

export default router

