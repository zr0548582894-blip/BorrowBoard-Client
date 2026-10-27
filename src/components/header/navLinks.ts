import type { Role } from "../../types/user"

type NavItem = {
    to: string,
    label: string,
    rols: Role[]
}

export const navLinks: NavItem[] = [
    { to: "/", label: "דף הבית", rols: ["GUEST", "USER", "ADMIN"] },
    { to: "/wanted", label: "דף הבקשות", rols: ["GUEST", "USER", "ADMIN"] },
    { to: "/login", label: "התחברות", rols: ["GUEST"] },
    { to: "/register", label: "הרשמה", rols: ["GUEST"] },
    { to: "/me", label: "אזור אישי", rols: ["USER"] },
    { to: "/admin", label: "אזור אישי", rols: ["ADMIN"] },
    { to: "/products/new", label: "הוספת מוצר", rols: ["USER"] }
]