import Vue from 'vue'
import App from './App.vue'
import App1 from './App.1.vue'
import App2 from './App.2.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 1. 定义（路由）组件。
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 动态路由匹配
const User = {
  template: '<div>ID: {{ $route.params.id }} User: {{ $route.params.name }} {{ $route.query }}</div>',
  watch: {
    '$route' (from, to) {
      // 路由变化监听
      alert(from.path + '=>' + to.path)
    }
  }
}

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  // // 动态路径参数 以冒号开头
  { path: '/user/:name/:id(\\d+)', component: User }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


// The matching uses path-to-regexp, which is the matching engine used
// by express as well, so the same matching rules apply.
// For detailed rules, see https://github.com/pillarjs/path-to-regexp
const demoRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/' },
    // params are denoted with a colon ":"
    { path: '/params/:foo/:bar' },
    // a param can be made optional by adding "?"
    { path: '/optional-params/:foo?' },
    // a param can be followed by a regex pattern in parens
    // this route will only be matched if :id is all numbers
    { path: '/params-with-regex/:id(\\d+)' },
    // asterisk can match anything
    { path: '/asterisk/*' },
    // make part of th path optional by wrapping with parens and add "?"
    { path: '/optional-group/(foo/)?bar' }
  ]
})
// 4. 创建和挂载根实例。
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// new Vue({
//   router:router,
//   el: '#app',
//   render: h => h(App1)
// })

// new Vue({
//   router:demoRouter,
//   el: '#app',
//   render: h => h(App2)
// })