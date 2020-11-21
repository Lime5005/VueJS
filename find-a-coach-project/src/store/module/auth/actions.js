export default {
    async signup(context, payload) {
        //http POST request to sign up a new user:
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeRlfuJm9r8zg67oYVzb_9XHVleILlhJQ', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const responseData = await response.json()

        if (!response.ok) {
            console.log(responseData);
            const err = new Error(responseData.message || 'Failed to sign up.')
            throw err
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    login() {
        //
    }
}