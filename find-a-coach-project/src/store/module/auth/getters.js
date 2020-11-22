export default {
    userId(state) {
        return state.userId
    },
    token(state) {
        return state.token //这个token怎么用在register和reqReceived上？`endpoint.json?auth=` + token
    },
    isAuthenticated(state) {
        return !!state.token; // return a true Boolean
    }
}