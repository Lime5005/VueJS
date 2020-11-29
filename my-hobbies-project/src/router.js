import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import WelcomePage from './components/ui/WelcomePage.vue'

const HobbiesList = defineAsyncComponent(() =>
        import ('./components/hobbies/HobbiesList'))
    //import HobbiesList from './components/hobbies/HobbiesList'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WelcomePage },
        {
            path: '/categories/:id',
            component: HobbiesList,
            props: true
        }
    ]

})

export default router