import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            categories: [
                { id: 1, name: 'Travel', icon: '🌍' },
                { id: 2, name: 'Music', icon: '🎵' },
                { id: 3, name: 'Movie', icon: '🎬' },
                { id: 4, name: 'Reading', icon: '📖' },
                { id: 5, name: 'Gaming', icon: '🎮' }
            ],
            hobbies: [
                { id: '1', categoryId: 1, title: 'travel around the world', description: 'so much fun!', rating: 10 },
                { id: '2', categoryId: 2, title: 'French love song', description: 'so good!', rating: 10 }
            ]
        }
    },
    mutations: {
        postNewHobby(state, payload) {
            state.hobbies.push(payload)
        }
    },
    actions: {
        addHobby(context, data) {
            const newHobby = {
                id: new Date().toISOString,
                categoryId: data.categoryId,
                title: data.title,
                description: data.description,
                rating: data.rating
            }
            context.commit('postNewHobby', newHobby)
        }
    },
    getters: {
        categories(state) {
            return state.categories
        },
        hobbies(state) {
            return state.hobbies
        }
    }
})

export default store