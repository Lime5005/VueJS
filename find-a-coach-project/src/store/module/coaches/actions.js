export default {
    registerCoach(context, data) {
        const coachData = {
            id: 'c4',
            firstName: data.firstname,
            lastName: data.lastname,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas
        }

        context.commit('registerCoach', coachData)
    }
}