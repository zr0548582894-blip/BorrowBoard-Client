
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { User, UserContextType } from "../types/user"
import { getCurrentUser } from "../api/auth"


export const userContext=createContext<UserContextType|undefined>(undefined)

const UserProvider=({children}:{children:ReactNode})=>
{
    const [user,setUser]=useState<User|null>(null)
    const [isLoading,setLoading]=useState<boolean>(true)
    const login=(user:User)=>setUser(user)
    const logout=()=>{setUser(null);localStorage.removeItem("token");}

    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(!token)
        {
            setLoading(false)
            return
        }
        getCurrentUser().then((u)=>setUser(u)).catch(()=>localStorage.removeItem("token")).finally(()=>setLoading(false))
    },[])

    return<>
    <userContext.Provider value={{user,isLoggedIn:!!user,login,logout,isLoading}}>
        {children}
    </userContext.Provider>
    </>
}
export default UserProvider

export const AuthContext=()=>
{
    const context=useContext(userContext)
    if(!context)
        {throw new Error("Header must be rendered inside UserProvider")}
    return context;
   
}