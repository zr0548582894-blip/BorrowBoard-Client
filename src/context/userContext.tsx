
import { createContext, useContext, useState, type ReactNode } from "react"
import type { User, UserContextType } from "../types/user"


export const userContext=createContext<UserContextType|undefined>(undefined)

const UserProvider=({children}:{children:ReactNode})=>
{
    const [user,setUser]=useState<User|null>(null)
    const login=(user:User)=>setUser(user)
    const logout=()=>setUser(null)
    return<>
    <userContext.Provider value={{user,isLoggedIn:!!user,login,logout}}>
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