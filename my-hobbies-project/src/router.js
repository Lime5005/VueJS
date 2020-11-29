import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './components/ui/WelcomePage.vue'
import Categories from './components/hobbies/Categories'
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