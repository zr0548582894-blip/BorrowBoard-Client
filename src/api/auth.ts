
import type { AuthResponse, User,RegisterInput,LoginInput,UpdateMeInput } from "../types/user"
import { api } from "./api"


// export const getHealth=async()=>{
//     const response=await api.get("/health")
//     return response.data
// }

export const register=async(user:RegisterInput)=>{
    const response=await api.post<AuthResponse>("/auth/register",user)
    return response.data
}

export const login=async(user:LoginInput)=>{
    const response=await api.post<AuthResponse>("/auth/login",user)
    return response.data
}

export const getCurrentUser=async()=>{
    const response=await api.get<User>("/auth/me")
    return response.data
}

export const editCurrentUser=async(user:UpdateMeInput)=>{
    const response=await api.put<User>("/auth/me",user)
    return response.data
}