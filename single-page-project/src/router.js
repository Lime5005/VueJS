import { createRouter, createWebHistory } from 'vue-router';
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
            meta: { needsAuth: true },
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
            components: { default: UsersList, footer: userFooter },
            // beforeEnter层层把关：
            beforeEnter(to, from, next) {
                console.log('before enter');
                console.log(to, from);
                next(
                    //Any route you want to lead to, eg: { name: 'team-members', params: { teamId: 't2' } }
                )
            }
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
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs Auth!!');
        next();
    } else {
        next();
    }
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     //阻止用户进入users页面：
    //     next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    //next();
})

router.afterEach(function(to, from) {
    // sending data to server:比如监控用户换页等
    console.log('Global afterEach');
    console.log(to, from);
})

export default router;