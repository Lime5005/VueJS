export default {
    async contactCoach(context, payload) {
        const newRequest = {
            //id: new Date().toISOString(),
            //coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }
        const response = await fetch(`https://vue-http-project-960b4.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        })

        const responseData = await response.json()
        console.log(responseData);

        if (!response.ok) {
            const err = new Error(responseData.message || 'Failed to send request')
            throw err
        }
        //firebase will make an id automatically called name:
        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId

        context.commit('addRequest', newRequest)
    }
}