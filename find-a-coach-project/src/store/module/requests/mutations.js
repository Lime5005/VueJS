export default {
    addRequest(state, payload) {
        state.requests.push(payload)
    },
    setRequestsFromFirebase(state, payload) {
        state.requests = payload
    }
}