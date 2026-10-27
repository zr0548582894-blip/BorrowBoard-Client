import { Navigate } from "react-router"
import { AuthContext } from "../context/userContext"
import type { ReactNode } from "react"


export const UserProtected=({children}:{children:ReactNode})=>{
    const {user,isLoading}=AuthContext()
    if(isLoading)
        return <p>loading.....</p>
    if(!user||user.role!="USER")
       return <Navigate to="/login"/>
    return children;
}
export const AdminProtected=({children}:{children:ReactNode})=>{
    const {user,isLoading}=AuthContext()
    if(isLoading)
        return <p>loading.....</p>
    if(!user||user.role!="ADMIN")
      return  <Navigate to="/login"/>
    return children;
}