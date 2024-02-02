import instance from "@/util/axios.config";
import { type IResponse } from '@/types/base'
import type { phDataRec, phDataRecUpload } from "@/types/data";


export const useUploadNewPhDataApi = (params: phDataRecUpload) =>{
    return instance.post<any, IResponse<phDataRec>>("/webapi/ph",params)
    
}

export const useDeletePhDataApi = (id:string) => {
    return instance.delete<any, IResponse<phDataRec>>(`/webapi/ph/${id}`)

}

export const useUpdatePhDataApi = ( id:string, params: phDataRec) => {
    return instance.patch<any, IResponse<phDataRec>>(`/webapi/ph/${id}`, params)

}

export const useGetAllDataApi = () => {
    return instance.get<any, IResponse<phDataRec[]>>("/webapi/ph/all")

}

export const useGetUserAllDataApi = (username:string) => {
    return instance.get<any, IResponse<phDataRec[]>>(`/webapi/ph/${username}`)
}

// export const userRegisterApi = (params: RegisterInterface) => {
//     return instance.post<any, IResponse<any>>("/user/register", params)
// }