
import { defineStore } from "pinia";
import { useUserStore } from "./userStore";
import { reactive } from "vue";
import type { phDataRec, phDataRecUpload } from "@/types/data";
import { useGetUserAllDataApi, useDeletePhDataApi, useUpdatePhDataApi, useGetAllDataApi, useUploadNewPhDataApi } from "@/api/phDataApi"
import { ElMessage } from "element-plus";

const userStore = useUserStore()

export const usePhStore = defineStore('PhStore', ()=>{


    let showData = reactive<phDataRec[]>([])

    function initialUser(){
       
        showData.splice(0, showData.length)
        if (userStore.username){
            showData.splice(0,showData.length)
            useGetUserAllDataApi(userStore.username).then(res => {
                showData.push(...res.data)
            })
        }
        
    }

    function deleteOne(index:number){
        
        const id = showData[index]._id
        useDeletePhDataApi(id).then(res=>{
            ElMessage.success(res.msg)
        })

        showData.splice(index, 1)

    }

    function updateOne(index:number,params: phDataRec) {

        const id = showData[index]._id
        useUpdatePhDataApi(id, params)

    }

    function getAllData() {

        showData.splice(0, showData.length)
        useGetAllDataApi().then(res => {
            showData.push(...res.data)
        })
    }

    function uploadOne( params: phDataRecUpload) {

        
        useUploadNewPhDataApi(params).then(res=>{
            showData.unshift(res.data)
            ElMessage({
                message: "submit!",
                grouping: true,
                type: 'success'
            })
        })

    }

    return { showData, initialUser, deleteOne, getAllData, updateOne, uploadOne }

})

    



