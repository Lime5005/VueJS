import { createStore } from 'vuex'

import coachesModule from './module/coaches/index.js'
import requestsModule from './module/requests/index.js'

const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
            //here is the rootState, the userId is for coach:
            userId: 'c4'
        }
    },
    getters: {
        //here is the rootGetters
        userId(state) {
            return state.userId
        }
    }
})

export default store