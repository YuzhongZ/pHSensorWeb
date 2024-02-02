
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/userStore"


const instance = axios.create({
    timeout: 60000,
    headers: { "Content-Type": "application/json" },
    // baseURL: ''
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // const token = localStorage.getItem("token")
    const userStore = useUserStore()
    const token = userStore.token
    config.headers.Authorization = `Bearer ${token}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const {authorization} = response.headers
    const userStore = useUserStore()
    authorization && userStore.setToken(authorization)
    // localStorage.setItem("token", authorization)

    if (response.status===200){
        if(response.data.code==="0000"){
            
            return response.data
        }
        ElMessage.error(response.data.msg)
    }

    return Promise.reject(response.statusText);
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status===401){
        localStorage.clear()
        window.location.href = "/login"
    }

    return Promise.reject(error);
});

export default instance


