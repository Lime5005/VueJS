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
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch
        if (!lastFetch) {
            return true
        }
        const currentTimeStamp = new Date().getTime() //milliseconds
        return (currentTimeStamp - lastFetch) / 1000 > 60 //if it's greater than 1 minute, should update.
    }
}