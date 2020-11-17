export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, _, _2, rootGetters /* getters */ /* rootState */ ) {
        const coaches = state.coaches
        const userId = rootGetters.userId
            //this will return true if it find at least one coach:
        return coaches.some(coach => coach.id === userId)
    }
}