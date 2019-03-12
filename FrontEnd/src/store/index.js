import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      isLogin: false
    },
    mutations: {
      login (state) {
        state.isLogin=true
      },
      logout (state) {
        state.isLogin=false
      },
    },
    modules: {
      // example
    }
  })

  return Store
}
