import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    state() {
        return {
            //here is the rootState, the userId is for coach:
            userId: 'c4'
        }
    },
    mutations,
    getters,
    actions
}