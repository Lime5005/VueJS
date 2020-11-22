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
        //firebase will make an id automatically called name: we need the id and coachId locally, but NOT on the server:
        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId

        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId
        const token = context.rootGetters.token
        const res = await fetch(`https://vue-http-project-960b4.firebaseio.com/requests/${coachId}.json?auth=` + token)
        const resData = await res.json()

        if (!res.ok) {
            const err = new Error(resData.message || 'Failed to fetch requests.')
            throw err
        }

        //store the request as the form we need: id, coachId, userEmail, message
        const requests = []
        for (const idKey in resData) {
            const request = {
                id: idKey,
                coachId: coachId,
                userEmail: resData[idKey].userEmail,
                message: resData[idKey].message
            }
            requests.push(request)
        }
        context.commit('setRequestsFromFirebase', requests)
    }
}