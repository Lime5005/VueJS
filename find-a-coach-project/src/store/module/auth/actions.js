export default {
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })

    },
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode
        const APIKey =
            let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + APIKey

        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + APIKey
        }

        const response = await fetch(url, {
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
            const err = new Error(responseData.message || 'Failed to Sign-Up/Login, try again later.')
            throw err
        }

        // Stay login by using localStorage:
        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    stayLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        context.commit('setUser', {
            token: token,
            userId: userId,
            tokenExpiration: null
        })
    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        })
    }
}