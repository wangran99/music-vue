import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/pages/About'
import Login from '@/pages/Login'

//const originalPush = VueRouter.prototype.push;
//VueRouter.prototype.push = function push(location) {
//  return originalPush.call(this, location).catch(err => err);
//};
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: { title: '首页', keepAlive: false, auth: false },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: '登录', keepAlive: false, auth: false },
    },
    {
        path: '/home1',
        name: 'home1',
        component: About
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
    // const userInfo = sessionStorage.getItem('userInfo') || null
    // if (!userInfo && to.meta.auth) {
    //     next('/login')
    // } else {
    //     next()
    // }
})
export default router;