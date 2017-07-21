import Vue from 'vue'
import Router from 'vue-router'
const cart =resolve => require(['../components/cart'], resolve);

Vue.use(Router)

 const router = new Router({
  routes: [
     {
       path: '/',
       name:'cart',//默认展示购物车
       component:cart
     }

  ]
})

router.beforeEach((to, from, next) => {
  // ...
/*  console.log(to);
  console.log(from);*/
  next();
})
export default router;
