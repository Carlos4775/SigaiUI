import axios from 'axios'

const getUser = () => {
    return JSON.parse(localStorage.getItem('AccessToken'))
}

const setUser = (user) => {
    localStorage.setItem('AccessToken', JSON.stringify(user.accessToken))
    localStorage.setItem('RefreshToken', JSON.stringify(user.refreshToken))
}

const getNewTokenCredentials = async () => {
    try {
        const refreshToken = getLocalRefreshToken()
        const res = await axios.post(`${process.env.REACT_APP_HOST_URL}/api/refreshToken`, {}, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        })
        setUser(res.data.response)
    } catch (error) {
        console.log(error)
    }
}

const getLocalAccessToken = () => {
    return JSON.parse(localStorage.getItem('AccessToken'))
}

const getLocalRefreshToken = () => {
    return JSON.parse(localStorage.getItem('RefreshToken'))
}

const removeUser = () => {
    localStorage.removeItem('AccessToken')
    localStorage.removeItem('RefreshToken')
}

const TokenService = {
    getUser,
    setUser,
    removeUser,
    getLocalRefreshToken,
    getLocalAccessToken,
    getNewTokenCredentials
}

export default TokenService
