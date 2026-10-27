import type { MyProduct, Product,ProductDetails,ProductFilters,ProductInput } from "../types/product"
import { api } from "./api"

export const getProducts=async(filter:ProductFilters)=>  {
    const response=await api.get<{items:Product[]}>("/products", {
    params: { limit: 50, ...filter },
  })
    return response.data.items
}

export const getMyProducts = async () => {
  const res = await api.get<MyProduct[]>("/products/mine");
  return res.data;
};
export const getProductsById=async(id:number)=>  {
    const response=await api.get<ProductDetails>(`/products/${id}`)
    return response.data
}

 export const addProducts=async(p:ProductInput)=>  {
    const response=await api.post<Product>("/products",p)
    return response.data
}

export const editProducts=async(id:number,p:Partial<ProductInput>)=>  {
    const response=await api.put<Product>(`/products/${id}`,p)
    return response.data
}

export const delProducts=async(id:number)=>  {
    await api.delete(`/products/${id}`)
}