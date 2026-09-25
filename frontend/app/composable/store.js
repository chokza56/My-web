import { defineStore } from "pinia";
import { jwtDecode } from "jwt-decode";

export const useStore = defineStore("userstore",{
    state:()=>({
        token: null,
        user: null,
        id: null
    }),
    actions:{
        settoken(token) {
            if(typeof window != 'undefined'){
                localStorage.setItem("token",token)
                this.token = token
            }
        },
        loaduser(){
            if(typeof window != 'undefined'){
                this.token = localStorage.getItem("token")
                if(!this.token) return
                this.user = jwtDecode(this.token)
                console.log(this.user)
                this.id = this.user.id
            }
        },
        logout(){
            if(typeof window != 'undefined'){
                localStorage.removeItem("token")
                this.token = null
                this.user = null
                this.id = null
            }
        }
    }
})