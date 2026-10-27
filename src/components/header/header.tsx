import { Link, useLocation } from "react-router"

import { navLinks } from "./navLinks"
import { AuthContext } from "../../context/userContext"


const Header=()=>
{
    const {user,logout}=AuthContext()

    const role=user?.role
    const location=useLocation()

    const filterd=navLinks.filter(x=>x.rols.includes(role?role:'GUEST')&&x.to!=location.pathname)
    return<>
        <header dir="rtl" className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
            <div className="glass mx-auto flex max-w-7xl flex-wrap items-center gap-3 rounded-[1.4rem] px-4 py-3 sm:px-6 animate-rise">
                <div className="group flex items-center gap-2.5 text-xl font-black tracking-tight text-ink" dir="ltr">
                    <span aria-hidden className="grid h-9 w-9 grid-cols-2 grid-rows-2 gap-[3px] rounded-xl bg-ink p-[5px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-90">
                        <i className="rounded-[3px] bg-coral" />
                        <i className="rounded-[3px] bg-sun" />
                        <i className="rounded-[3px] bg-sky" />
                        <i className="rounded-[3px] bg-mint" />
                    </span>
                    <span className="font-display">BorrowBoard<span className="text-coral">.</span></span>
                </div>
                <nav className="ms-auto flex flex-wrap items-center gap-1">
                    {filterd.map(x=><Link className="nav-link" key={x.label} to={x.to}>{x.label}</Link>)}
                    {role&&role!="GUEST" &&<Link className="ms-2 rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream hover:shadow-[0_3px_0_0_var(--color-coral)]" to="/" onClick={logout}>logout</Link> }
                </nav>
            </div>
        </header>
    </>
}
export default Header
