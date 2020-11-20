export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId
        const coachData = {
                firstName: data.firstname,
                lastName: data.lastname,
                description: data.description,
                hourlyRate: data.rate,
                areas: data.areas
            }
            //send a (by default)get request:, with an object, is the data we will send to register:
        const response = await fetch(`https://vue-http-project-960b4.firebaseio.com/coaches/${userId}.json`, {
            //PUT：如果存在就更新，不存在就新建：（而POST是不停的新建）
            method: 'PUT',
            body: JSON.stringify(coachData)

        })

        //const responseData = await response.json()
        if (!response.ok) {
            //error
        }
        context.commit('registerCoach', {
            ...coachData, //copy all the coachData
            id: userId
        })
    }
}