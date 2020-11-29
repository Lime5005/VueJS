import { defineAsyncComponent } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

const Categories = defineAsyncComponent(() =>
    import ('./components/hobbies/Categories'))

import WelcomePage from './components/ui/WelcomePage.vue'

import HobbiesList from './components/hobbies/HobbiesList'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WelcomePage },
        { path: '/categories', component: Categories },
        {
            path: '/categories/:id/hobbies',
            component: HobbiesList
        }
    ]

})

export default router