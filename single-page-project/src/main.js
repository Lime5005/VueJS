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
    linkActiveClass: 'active' //overwrite 'router-link-active'
})

const app = createApp(App)
app.use(router);
app.mount('#app');