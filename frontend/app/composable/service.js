import axios from 'axios'
import { useRouter } from "vue-router"
import { useStore } from "./store"
import { api } from './api'
import { req } from './request'

export const service = () => {

    const router = useRouter()
    const store = useStore()
    const http = api()

    // LOGIN
    const login = async (u, p) => {
        try {
            const res = await axios.post(
                'http://localhost:5000/api/auth/login',
                {
                    username: u,
                    password: p
                }
            )

            alert(res.data.message)
            console.log(res)

            if (res.data.Authorization) {
                store.settoken(res.data.Authorization)
                router.push('/user')
            }

        } catch (err) {
            console.error(err.response?.data?.message)
        }
    }

    // REGISTER
    const register = async (u, p, e, a) => {
        try {
            const res = await axios.post(
                'http://localhost:5000/api/auth/register',
                {
                    username: u,
                    password: p,
                    email: e,
                    address: a
                }
            )

            console.log(res)

        } catch (err) {
            console.error(err.response?.data?.message)
        }
    }

    // GET PROFILE
    const getprofile = async (id) => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/user/profile/${id}`
            )
            return res

        } catch (err) {
            alert(err.response?.data?.message)
        }
    }

    // EDIT PROFILE
    const editprofile = (u, e) => req(async () => {

        const res = await http.put(`/auth/edituser/${store.id}`,    
            {
                username: u,
                email: e
            }
        )

        return res.data
    })

    // GET PROFILE
    const profile = async () => {
        try {
            const res = await http.get(`/user/profile/${store.id}`             
            )
            return res.data.data

        } catch (err) {
            console.error(err.response?.data?.message)
        }
    }

    // GET USER
    const getuser = async () => {
        try {
            const res = await http.get(`/auth/user/${store.id}`           
            )
            return res

        } catch (err) {
            console.error(err.response?.data?.message)
        }
    }

    const upload = (f) => req(async () => {

        const fd = new FormData()

        fd.append("file", f)

        const res = await http.put( `/user/profile/${store.id}`,fd     
        )
        return res.data
    })

    return {
        register,
        login,
        getprofile,
        editprofile,
        profile,
        getuser,
        upload
    }
}