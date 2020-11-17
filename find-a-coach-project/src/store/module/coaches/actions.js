export default {
    registerCoach(context, data) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.firstname,
            lastName: data.lastname,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas
        }

        context.commit('registerCoach', coachData)
    }
}