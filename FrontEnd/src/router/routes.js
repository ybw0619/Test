import store from '../store'

const requireAuth = () => (from, to, next) => {
  console.log(store.state);
  if (true) return next()
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/board', component: () => import('pages/Board.vue')},
      { path: '/board0', component: () => import('pages/Board0.vue')},
      { path: '/board1', component: () => import('pages/Board1.vue'), meta: {authRequired: true}},

    ]
  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
