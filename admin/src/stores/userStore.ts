
import { defineStore } from "pinia";
import { ref } from "vue";
import { type LoginRes } from "@/types/login"

export const useUserStore = defineStore('userStore', ()=>{

    let token    = ref("");
    let username = ref("");
    let email    = ref("");


    function setToken(value: string) {
        token.value = value
    }

    function setUsername(value: string) {
        username.value = value
    }
    function setEmail(value: string) {
        email.value = value
    }

    function saveAll(res: LoginRes){
        username.value = res.username
        email.value = res.email
    }

    return {
            token,
            username,
            email,
            setToken,
            setUsername,
            setEmail,
            saveAll,
        }
},{
    persist:{
        storage:localStorage,
        paths: ['token','username','email',]
    }
})


// export const useUserStore = defineStore('userStore',{

//     state: ()=>({
//         token: "",
//         username: "",
//         email: ""  
//     }),
//     getters: {
//         getToken():string{
            
//             return this.token
//         },
//         getUsername():string{
//             return this.username
//         },
//         getEmail():string{
//             return this.email
//         }
//     },
//     actions: {

//         setToken(value:string){
//             this.token = value
//             cache.setToken(this.token)
//         },
//         setUsername(value: string) {
//             this.username = value
//             cache.setUsername(this.username)
//         },
//         setEmail(value: string) {
//             this.email = value
//             cache.setUsername(this.email)
//         },

//     }



// })