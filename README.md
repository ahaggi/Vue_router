Install via npm
`npm install vue-router@4`

routes: [
    { path: '/', name: 'home', component: SomeComponent },
    { path: '/users/:username/posts/:postId', component: UserPost },
    ],


router-link
    <router-link to="/home">Home</router-link>
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link to="/users/user1/posts/1"></router-link>
    <router-link :to="{ name: 'user', params: { username: 'user1' , postId:'post1'}}"></router-link>


router.push({ name: 'user', params: { username: 'user1' , postId:'post1'} })



Named views
<router-view  name="bar"></router-view>


***************************************************************************
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

 Passing Props to Route Components
  routes: [
    { path: '/', component: Hello }, // No props, no nothing
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
  ]


<li><router-link to="/">/</router-link></li>
<li><router-link to="/hello/you">/hello/you</router-link></li>
<li><router-link to="/static">/static</router-link></li>
<li><router-link to="/dynamic/1">/dynamic/1</router-link></li>

// goBack() {
//       window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
//     }



Navigation Guards
https://next.router.vuejs.org/guide/advanced/navigation-guards.html

Lazy Loading Routes
https://next.router.vuejs.org/guide/advanced/lazy-loading.html


History-Mode vs Hash-Mode
https://next.router.vuejs.org/guide/essentials/history-mode.html
