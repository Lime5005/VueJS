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
            ]
        }
    },
    getters: {
        categories(state) {
            return state.categories
        }
    }
})

export default store