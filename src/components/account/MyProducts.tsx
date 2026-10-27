import { Link } from "react-router";
import { AuthContext } from "../../context/userContext";
import { GetMyProductsUseQuery } from "../../hooks/useQuery";
import { deleteProductUseMutation } from "../../hooks/useMutation";


const conditionText = { NEW: "חדש", LIKE_NEW: "כמו חדש", USED: "משומש" };

const formatDate = (d: string) => d.slice(0, 10).split("-").reverse().join(".");

const MyProducts = () => {
  const { user } = AuthContext();
  const { data, isLoading, error } = GetMyProductsUseQuery(user?.id);
  const deleteMutation = deleteProductUseMutation();

  if (isLoading)
    return <p className="py-12 text-center text-lg font-semibold text-[#65536e]">טוען נתונים....</p>;
  if (error)
    return <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data || data.length === 0)
    return (
      <div className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879] shadow-sm">
        עוד לא הוספת מוצרים להשאלה
        <Link to="/products/new" className="font-bold text-[#b5513d] underline">הוספת מוצר</Link>
      </div>
    );

  return (
    <section dir="rtl" className="mx-auto w-full max-w-4xl">
      {deleteMutation.isError && (
        <p className="mb-4 rounded-2xl border border-red-100 bg-red-50 p-4 text-center text-red-700">
          {deleteMutation.error.message}
        </p>
      )}

      <div className="flex flex-col gap-4">
        {data.map((p) => (
          <article key={p.id} className="rounded-3xl border border-[#eee3dc] bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-[#352c3b]">{p.name}</h3>
                <p className="mt-0.5 text-sm text-[#8b7c8c]">{p.category?.name} · {p.city}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  p.status === "AVAILABLE" ? "bg-[#e3f4ea] text-[#2f7a4f]" : "bg-[#fbe6df] text-[#b5513d]"
                }`}
              >
                {p.status === "AVAILABLE" ? "זמין" : "מושאל"}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">מצב</dt>
                <dd className="font-bold text-[#392f40]">{conditionText[p.condition]}</dd>
              </div>
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">בקשות שממתינות</dt>
                <dd className="font-bold text-[#392f40]">{p.pendingRequestsCount}</dd>
              </div>
            </dl>

            <div className="mt-4 flex gap-3">
              <Link to={`/products/${p.id}`} className="rounded-2xl border border-[#e7dad2] px-5 py-2 text-sm font-bold text-[#6f6170] hover:bg-[#fbf7f2]">
                צפייה
              </Link>
              <Link to={`/products/${p.id}/edit`} className="rounded-2xl bg-[#d17d6b] px-5 py-2 text-sm font-bold text-white hover:bg-[#bf6a58]">
                עריכה
              </Link>
              <button
                onClick={() => deleteMutation.mutate(p.id)}
                disabled={deleteMutation.isPending}
                className="rounded-2xl border border-red-200 px-5 py-2 text-sm font-bold text-red-700 hover:bg-red-50 disabled:opacity-60"
              >
                מחיקה
              </button>
            </div>

            <p className="mt-3 text-xs text-[#a597a6]">נוסף ב־{formatDate(p.createdAt)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyProducts;