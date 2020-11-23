export default {
    // store all data in Vuex:
    setUser(state, payload) {
        state.token = payload.token
        state.userId = payload.userId
        state.redirectLogout = false
    },
    autoLogoutRedir(state) {
        state.redirectLogout = true
    }
}