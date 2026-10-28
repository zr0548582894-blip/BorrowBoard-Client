import { Link } from "react-router"
import type { ProductCard as ProductCardProps } from "../../types/product"

const ProductCard = (p: ProductCardProps) => {
    // כתובת התמונה: ברירת מחדל, קישור מלא, או תמונה מהשרת
    const imageSrc = !p.imageUrl ? "/NO_IMG.jpg" : p.imageUrl.startsWith("http") ? p.imageUrl : `${import.meta.env.VITE_API_URL}${p.imageUrl}`


return (
    <Link
        to={`/products/${p.id}`}
        className="card-3d group block rounded-[1.6rem] border border-white/80 bg-cream/90 p-2.5 backdrop-blur-sm"
    >
        <div className="card-media relative overflow-hidden rounded-[1.2rem] bg-[var(--accent-soft)]">
            <span aria-hidden className="absolute -left-6 -top-6 z-10 h-16 w-16 rotate-12 rounded-2xl bg-[var(--accent)] opacity-90 transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:rotate-45" />
            <img
                src={imageSrc}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.07]"
            />
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="absolute bottom-2.5 right-2.5 z-10 max-w-[85%] truncate rounded-full bg-ink/85 px-3 py-1 text-[0.7rem] font-bold text-cream backdrop-blur-md">
                {p.status === "AVAILABLE" ? "זמין" : "מושאל"}
            </span>
        </div>

        <div className="card-body px-2 pb-1.5 pt-4">
            <p className="truncate font-display text-lg font-bold leading-tight text-ink">
                {p.name}
            </p>

            <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-muted">
                {p.description}
            </p>

            <div className="mt-4 flex items-center justify-between gap-2 border-t border-dashed border-line pt-3.5">
                <p className="truncate rounded-lg bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-bold text-ink-soft">
                    {p.condition}
                </p>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-sm text-cream shadow-[0_6px_14px_-6px_rgb(22_20_31/0.7)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-45 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-ink">
                    ↗
                </span>
            </div>
        </div>
    </Link>
);


}
export default ProductCard
