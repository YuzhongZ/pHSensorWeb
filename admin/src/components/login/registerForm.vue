<template>
    <ElForm class="register-form" ref="registerRef" :model="newUser" :rules="registerRules">
        <h1>Welcome!</h1>
        <ElFormItem prop="username">
            <ElInput clearable size="large" placeholder="username" :prefix-icon="User" v-model="newUser.username"></ElInput>
        </ElFormItem>

        <ElFormItem prop="password">
            <ElInput size="large" placeholder="password" show-password :prefix-icon="Lock" v-model="newUser.password"></ElInput>
        </ElFormItem>

        <ElFormItem prop="email">
            <ElInput clearable size="large" placeholder="email" :prefix-icon="Message" v-model="newUser.email"></ElInput>
        </ElFormItem>

        <ElFormItem>
                <ElButton size="large" type="primary" @click="submit(registerRef)">Register</ElButton>
        </ElFormItem>
    </ElForm>
</template>


<script setup lang="ts" name="loginForm">
import { User, Lock, Message } from '@element-plus/icons-vue';


import { ref, reactive } from 'vue';

import { type RegisterInterface } from '@/types/login'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import axios from 'axios';
import router from '@/router';
import {userRegisterApi} from "@/api/userApi"

const newUser = reactive<RegisterInterface>({
    username: "",
    password: "",
    email: "",
})

const registerRef = ref<FormInstance>()
const registerRules = reactive<FormRules>({
    username: [{ required: true, message: "username cannot be empty", trigger: 'blur' }],
    password: [{ required: true, message: "password cannot be empty", trigger: 'blur' },
{required:true, message:'password length is in 6~20', min:6,max:20, trigger:'blur'}],
    email:    [{required: true, message: "email cannot be empty", trigger: 'blur'},
{type:'email', message: 'please enter correct email', trigger: ['blur','change']}]
})

function submit(formEl: FormInstance | undefined) {
    if (!formEl) {
        return false
    }
    formEl.validate((validate: boolean) => {
        if (validate) {
            
            userRegisterApi(newUser).then(res =>{
                if (res.code === "0000") {
                    ElMessage({
                        message: res.msg,
                        type: 'success'
                    })

                    router.push("/Mainbox/show")
                    // set cookie
                    // localStorage.setItem("token", user.username)

                } else {

                    ElMessage({
                        message: res.msg,
                        type: 'error',
                    })
                }
            })
        }
        else {
            return false
        }
    })
}










</script>




<style scoped>

.register-form{
    grid-row: 1;
    grid-column: 1;
    opacity: 0;
    transition: 1s ease-in-out;

    padding: 1% 25%;
    pointer-events: none;
    z-index: 0;
}

.register-form.sign-up-model{
    opacity: 1;
    transition: 1.25s ease-in-out;
    transition-delay: 0.5s;
    pointer-events: all;
    z-index: 1;
}



</style>