import axios from 'axios';
import { useRouter } from "vue-router"

export const service = () => {
    const router = useRouter()
    const login = async (u,p) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                username: u,
                password: p,
            });
            alert(res.data.message)
           console.log(res)
           if(res.data.Authorization){
            router.push('/user')
           }
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    const register = async (u,p,e,a) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username: u,
                password: p,
                email: e,
                address: a,
                
            });
            
           console.log(res)
        } catch (err) {
            console.error(err.response.data.message)
        }
    }

    return {
        register,
        login,
    }
}