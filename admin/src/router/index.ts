// 路由器 Router

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {
        //     name: 'home',
        //     path: '/home',
        //     component: ()=> import('@/views/Home.vue')
        // },
        
        {
            name: 'mainbox',
            path: '/mainbox',
            component:() => import('@/views/MainBox.vue'),
            children:[
                {
                    name: 'show',
                    path: 'show',
                    component: () => import('@/components/mainbox/Show.vue')
                },
                {
                    name: 'sharedCenter',
                    path: 'sharedCenter',
                    component: () => import('@/components/mainbox/sharedCenter.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: '/Mainbox/sharedCenter', // 重定向
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/:pathMacth(.*)*',
            name: 'NotFound',
            component: ()=> import('@/views/404.vue')
        }
    ]
})

export default router