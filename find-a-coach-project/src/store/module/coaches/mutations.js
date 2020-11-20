export default {
    registerCoach(state, payload) {
        state.coaches.push(payload)
    },
    setCoachesFromFirebase(state, payload) {
        state.coaches = payload
    }

}