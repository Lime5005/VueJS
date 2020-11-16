import { createRouter, createWebHistory } from 'vue-router';

import coachDetail from './pages/coaches/coachDetail.vue';
import coachesList from './pages/coaches/coachesList.vue';
import registration from './pages/coaches/registration.vue';

import contact from './pages/requests/contact.vue';
import reqReceived from './pages/requests/reqReceived.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesList },
        {
            path: '/coaches/:id',
            component: coachDetail,
            children: [
                { path: 'contact', component: contact }
            ]
        },
        { path: '/register', component: registration },
        { path: '/requests', component: reqReceived },
        { path: '/:notFound(.*)', component: NotFound },

    ]
});

export default router;