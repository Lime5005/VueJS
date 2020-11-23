import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

//import coachDetail from './pages/coaches/coachDetail.vue';
import coachesList from './pages/coaches/coachesList.vue';
//import registration from './pages/coaches/registration.vue';

//import contact from './pages/requests/contact.vue';
//import reqReceived from './pages/requests/reqReceived.vue';

import NotFound from './pages/NotFound.vue';

//import userAuth from './pages/auth/userAuth.vue';

import store from './store/index.js'

const coachDetail = defineAsyncComponent(() =>
    import ('./pages/coaches/coachDetail.vue'))

const registration = defineAsyncComponent(() =>
    import ('./pages/coaches/registration.vue'))

const contact = defineAsyncComponent(() =>
    import ('./pages/requests/contact.vue'))

const reqReceived = defineAsyncComponent(() =>
    import ('./pages/requests/reqReceived.vue'))

const userAuth = defineAsyncComponent(() =>
    import ('./pages/auth/userAuth.vue'))


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesList },
        {
            path: '/coaches/:id',
            component: coachDetail,
            props: true,
            children: [
                { path: 'contact', component: contact }
            ]
        },
        { path: '/register', component: registration, meta: { requiresAuth: true } }, //如果没登陆不可见
        { path: '/requests', component: reqReceived, meta: { requiresAuth: true } }, //如果没登陆不可见
        { path: '/auth', component: userAuth, meta: { requiresNotAuth: true } }, //如果已经登陆则不见
        { path: '/:notFound(.*)', component: NotFound },

    ]
});

//Add the global guard to every navigation: add a meta data to protect it
router.beforeEach(function(to, _, next) { //(to, from, next)
    //to.meta.requiresAuth 我要去的页面有auth要求，并且我没有auth
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth') //next() 程序继续； next(false)程序终止；
    } else if (to.meta.requiresNotAuth && store.getters.isAuthenticated) {
        next('/coaches')
    } else {
        next()
    }
})

export default router;