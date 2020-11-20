export default {
    registerCoach(state, payload) {
        state.coaches.push(payload)
    },
    setCoachesFromFirebase(state, payload) {
        state.coaches = payload
    },
    setFetchTimeStamp(state) {
        state.lastFetch = new Date().getTime() //1970

    }

}