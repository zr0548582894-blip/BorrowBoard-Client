import type { Category,CategoryInput } from "../types/category"
import { api } from "./api"

export const getCatergories=async()=>  {
    const response=await api.get<Category[]>("/categories")
    return response.data
}

export const addCatergories=async(c:CategoryInput)=>  {
    const response=await api.post<Category>("/categories",c)
    return response.data
}

export const editCatergories=async(c:CategoryInput,id:number)=>  {
    const response=await api.put<Category>(`/categories/${id}`,c)
    return response.data
}

export const delCatergories=async(id:number)=>  {
    const response=await api.delete<Category>(`/categories/${id}`)
    return response.data
}