import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
// Accessible globally 因为没有namespaced，所以以下四项数据到处可用
export default {
    state() {
        return {
            //here is the rootState, the userId is for coach:
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations,
    getters,
    actions
}