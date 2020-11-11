import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import teamFooter from './components/teams/teamFooter.vue';
import userFooter from './components/users/userFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            //component: TeamsList,
            components: { default: TeamsList, footer: teamFooter },
            children: [{
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
            }]
        },
        {
            path: '/users',
            //component: UsersList 
            components: { default: UsersList, footer: userFooter }
        },
        //{ path: '/teams/:teamId', component: TeamMembers, props: true }, //when it's loaded, the dynamic :teamId will be passed as props into the component
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active', //overwrite 'router-link-active'
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 }
    }
})

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    //console.log(to, from);
    if (to.name === 'team-members') {
        next();
    } else {
        //阻止用户进入users页面：
        next({ name: 'team-members', params: { teamId: 't2' } })
    }
})
const app = createApp(App)
app.use(router);
app.mount('#app');