import instance from "@/util/axios.config";
import {type IResponse} from '@/types/base'
import type { LoginInterface, RegisterInterface } from "@/types/login";

export const useLoginApi = (params:LoginInterface)=>{
    return instance.post<any,IResponse<any>>("/adminapi/user/login",params)
}

export const userRegisterApi = (params: RegisterInterface)=>{
    return instance.post<any,IResponse<any>>("/adminapi/user/register", params)
}