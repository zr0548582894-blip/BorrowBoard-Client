import { Link } from "react-router";
import { deleteProductUseMutation } from "../hooks/useMutation";
import { productsUseQuery } from "../hooks/useQuery";

const AdminProducts = () => {
    const { data, isLoading, error } = productsUseQuery("adminProducts");
    const deleteProduct = deleteProductUseMutation();

    if (isLoading)
        return (
            <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
                <span className="loader-dots"><i /><i /><i /></span>
                טוען מוצרים...
            </p>
        );
    if (error)
        return (
            <p className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep animate-pop">
                {error.message}
            </p>
        );
    if (!data || data.length === 0)
        return <p className="glass mx-auto mt-12 max-w-xl rounded-3xl p-10 text-center font-bold text-ink-soft">לא נמצאו מוצרים</p>;

    return (
        <main dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
            <section className="mx-auto w-full max-w-4xl">
                <div className="mb-10 animate-rise">
                    <span className="eyebrow">
                        <span className="h-2.5 w-2.5 rounded-sm bg-coral" />
                        ניהול
                    </span>
                    <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl">
                        <span className="marker">מוצרים</span>
                        <span className="text-coral">.</span>
                    </h1>
                </div>

                {deleteProduct.isError && (
                    <p className="mb-6 rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-4 text-center font-semibold text-coral-deep">
                        {deleteProduct.error.message}
                    </p>
                )}

                <div className="glass overflow-hidden rounded-3xl">
                    {data.map((p) => (
                        <div key={p.id} className="flex flex-wrap items-center gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:px-6">
                            <div className="min-w-0 flex-1">
                                <p className="font-bold text-ink">{p.name}</p>
                                <p className="text-sm text-muted">{p.city}</p>
                            </div>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-bold ${p.status === "AVAILABLE" ? "bg-[#e3f4ea] text-[#2f7a4f]" : "bg-[#fbe6df] text-[#b5513d]"
                                    }`}
                            >
                                {p.status === "AVAILABLE" ? "זמין" : "מושאל"}
                            </span>

                            <Link
                                to={`/products/${p.id}`}
                                className="rounded-2xl border border-[#e7dad2] px-5 py-2 text-sm font-bold text-[#6f6170] transition hover:bg-[#fbf7f2]"
                            >
                                צפייה
                            </Link>
                            <button
                                onClick={() => deleteProduct.mutate(p.id)}
                                className="rounded-2xl border border-red-200 px-5 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
                            >
                                מחיקה
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AdminProducts;