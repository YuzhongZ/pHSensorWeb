<template>
    <div :class="{ container:true, 'sign-up-model': isActive }">

        <div class="inner-left-container">
            <!-- "to login" button -->
            <div class="to-register">
                <h1>Are you new? Let's get started!</h1>
                <ElButton size="large" type="primary" @click="onClick">Register</ElButton>
            </div>
            
            <img src="@/assets/PatrickStar.png" class="image">

        </div>

        <div class="inner-right-container">
            <!-- "to register" button -->
            <div class="to-login">
                <h1>Have you registered? Let's login!</h1>
                <ElButton size="large" type="primary" @click="onClick">Login</ElButton>
            </div>

            <img src="@/assets/SpongeBob.png" class="image">

        </div>

        <div class="inner-sign-up-container">
            <loginForm :class="{'sign-up-model':isActive}"></loginForm>
            <registerForm :class="{ 'sign-up-model': isActive }"></registerForm>
        </div>
    </div>
</template>


<script setup lang="ts" name="Login">


import type { ElButton } from 'element-plus';
import { ref,reactive } from 'vue'
import loginForm from "@/components/login/loginForm.vue"
import registerForm from "@/components/login/registerForm.vue"


const isActive = ref(false)

function onClick(){
    isActive.value = !isActive.value
}



</script>




<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    position: relative;
}

.container::before {
    content: "";
    width: 2000px;
    height: 2000px;
    z-index: 2;
    background-color: skyblue;
    position: absolute;
    border-radius: 200%;
    transform: translateY(-50%);
    right:50%;
    top: -20%;
    transition: 1.5s ease-in-out;
}

.inner-left-container {
    width: 0;
    flex: 1;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    padding: 3rem 10% 2rem 10%;
    pointer-events: all;

}

.inner-right-container {
    width: 0;
    flex: 1;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    padding: 3rem 10% 2rem 10%;
    pointer-events: none;
}


.image{
    width: 65%;
    height: 65%;
}

.inner-sign-up-container{
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0%;
    top: 15%;
    transition: 1s ease-in-out;
    transition-delay: 0.2s;
    display: grid;
    grid-template-columns: 1fr;
    
}

.container.sign-up-model .inner-sign-up-container{
    width: 50%;
    height: 50%;
    position: absolute;
    /* only use the same props */
    right: 50%;
    top: 15%;
    transition: 1s ease-in-out;
    transition-delay: 0.3s;
    /* display: grid; */
    /* grid-template-columns: 1fr; */
}

.container .inner-right-container .to-login,
.container .inner-right-container .image{
    transform: translateX(800px);
    transition: 1s ease-in-out;
    transition-delay: 0.3s;
}

.container.sign-up-model .inner-right-container .to-login,
.container.sign-up-model .inner-right-container .image{
    transform: translateX(0px);
    transition: 1s ease-in-out;
    transition-delay: 0.3s;
}

.container .inner-left-container .to-register,
.container .inner-left-container .image{
    transform: translateX(0px);
    transition: 1s ease-in-out;
    transition-delay: 0.3s;
}

.container.sign-up-model .inner-left-container .to-register,
.container.sign-up-model .inner-left-container .image{
    transform: translateX(-1000px);
    transition: 1s ease-in-out;
    transition-delay: 0.3s;
}

.container.sign-up-model::before{
    transform: translate(100%, -50%);
    transition: 1s ease-in-out;

}

.container.sign-up-model .inner-left-container{
    pointer-events: none;
}

.container.sign-up-model .inner-right-container{
    pointer-events: all;
}


</style>