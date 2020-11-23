let timer

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

        //请求登陆时，设定未来到期时：
        const expiresIn = +responseData.expiresIn * 1000 //+把句子变数字,3600秒变成微秒
            //const expiresIn = 5000 //测试，5秒后自动退出登陆
        const expirationTime = new Date().getTime() + expiresIn //current time + expiration time

        // Stay login by using localStorage:
        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)
        localStorage.setItem('tokenExpiration', expirationTime)

        // set a timer whenever the user is loggedin, so we can log him out when the timer expires, (trigger the timer wherever we want!)

        timer = setTimeout(function() {
            context.dispatch('logout')
        }, expiresIn)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        })
    },
    stayLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokenExpirationTime = localStorage.getItem('tokenExpiration')

        //算出还剩下多少时间 （将来的时间减去现在的时间）in milliseconds:
        const expiresIn = +tokenExpirationTime - new Date().getTime()
            //10000 === 10秒钟
        if (expiresIn < 0) {
            return
        }

        timer = setTimeout(function() {
            context.dispatch('logout')
        }, expiresIn)

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            })
        }
    },
    logout(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId') //How to logout the user automatically when the token expired?
        localStorage.removeItem('tokenExpiration')

        clearTimeout(timer) //当用户点击退出时，timer失效
        context.commit('setUser', {
            token: null,
            userId: null
        })
    }
}