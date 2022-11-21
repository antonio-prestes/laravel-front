import {createStore} from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://localhost/api/v1"

export default createStore({
    state: {
        token: localStorage.getItem('accessToken') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        removeToken(state, token){
            state.token = null
        }
    },
    actions: {
        login(context, credentials: object) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    email: credentials.email,
                    password: credentials.password
                }).then(res => {
                    localStorage.setItem('accessToken', res.data.data.access_token)
                    context.commit('setToken', res.data.data.access_token)
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+context.state.token
            return new Promise((resolve, reject) => {
                axios.post('/logout').then(res => {
                    localStorage.removeItem('accessToken')
                    context.commit('removeToken')
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})