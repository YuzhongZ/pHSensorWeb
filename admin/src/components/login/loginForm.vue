<template>
    <ElForm class="login-form" ref="loginRef" :model="user" :rules="loginRules">
        <h1>Welcome back!</h1>
        
        <ElFormItem prop="username">
            <ElInput clearable size="large" placeholder="username" :prefix-icon="User" v-model="user.username"></ElInput>
        </ElFormItem>

        <ElFormItem prop="password">
            <ElInput size="large" placeholder="password" show-password :prefix-icon="Lock" v-model="user.password"></ElInput>
        </ElFormItem>

        <ElFormItem>
            <ElButton size="large" type="primary" @click="submit(loginRef)">Login</ElButton>
        </ElFormItem>

    </ElForm>

</template>


<script setup lang="ts" name="loginForm">
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
import { type LoginInterface } from '@/types/login'

// VERIFY
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import axios from 'axios'
import router from '@/router';
import {useLoginApi} from '@/api/userApi'
import {useUserStore} from '@/stores/userStore'

const UserStore = useUserStore()

const user = reactive<LoginInterface>({
    username: "",
    password: "",
})

const loginRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
    username:[{required: true, message: "username cannot be empty",trigger: 'blur'}],
    password:[{required: true, message: "password cannot be empty",trigger: 'blur'}]
})

function submit(formEl: FormInstance | undefined){
    if(!formEl){
        return false
    }
    formEl.validate((validate:boolean)=>{
        if(validate){
            
            useLoginApi(user).then(res=>{

                ElMessage({
                    message: res.msg,
                    type: 'success'
                })

                UserStore.saveAll(res.data)
                router.push("/Mainbox/show")

            })

            
        }
        else{
            return false
        }
    })
}


</script>




<style scoped>

.login-form{
    grid-row: 1;
    grid-column: 1;
    opacity: 1;
    transition: 1s ease-in-out;
    transition-delay: 0.5s;
    padding: 1% 25%;
    pointer-events: all;
    z-index: 1;
}

.login-form.sign-up-model{
    opacity: 0;
    transition: 1s ease-in-out;
    pointer-events: none;
    z-index: 0;
}





</style>