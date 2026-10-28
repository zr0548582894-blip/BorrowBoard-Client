import { Link } from "react-router"
import type { WantedItemCard } from "../../types/wantedItem"

const WantedItemsCard = (p: WantedItemCard) => {
    // כתובת התמונה: ברירת מחדל, קישור מלא, או תמונה מהשרת
    const imageSrc = !p.imageUrl ? "/NO_IMG.jpg" : p.imageUrl.startsWith("http") ? p.imageUrl : `${import.meta.env.VITE_API_URL}${p.imageUrl}`

    return<Link to={`/wanted/${p.id}`} className="card-3d group flex flex-col rounded-[1.75rem] border border-white/80 bg-cream/90 p-3 backdrop-blur-sm">
        <div className="card-media relative overflow-hidden rounded-[1.3rem] bg-[var(--accent-soft)]">
            <span aria-hidden className="absolute -right-5 -top-5 z-10 h-14 w-14 rounded-2xl bg-[var(--accent)] transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110" />
            <img src={imageSrc} alt="" className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]" />
        </div>
        <div className="card-body flex flex-1 flex-col px-2 pb-1 pt-4">
        <p className="font-display text-xl font-bold leading-tight text-ink">{p.name}</p>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">{p.description}</p>
        <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-cream transition-colors duration-500 group-hover:bg-[var(--accent)] group-hover:text-ink">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-500 group-hover:bg-ink" />
            {p.status === "OPEN" ? "פתוחה" : "נסגרה"}
        </p>
        </div>
    </Link >

}
export default WantedItemsCard
