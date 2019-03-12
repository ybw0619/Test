import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ store }/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(function (to, from, next) {
    console.log(store.state);
    if (to.matched.some(function(routeInfo) {
      return routeInfo.meta.authRequired;
    })) {
      if(store.state.isLogin){
        next()
      }else{
        // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
        alert('Login Please!');
      }
    } else {
      console.log("routing success : '" + to.path + "'");
      next(); // 페이지 전환
    };
  });
  return Router
}
