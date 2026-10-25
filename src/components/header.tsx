import { Link, useLocation } from "react-router"
import { AuthContext } from "../context/userContext"
import { navLinks } from "./navLinks"


const Header=()=>
{  
    const {user}=AuthContext()
    const role=user?.role
    const location=useLocation()

    const filterd=navLinks.filter(x=>x.rols.includes(role?role:'GUEST')&&x.to!=location.pathname)
    return<>
        {filterd.map(x=><Link key={x.label} to={x.to}>{x.label}</Link>)}
    </>
}
export default Header