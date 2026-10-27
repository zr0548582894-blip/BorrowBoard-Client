import { Link } from "react-router";
import { AuthContext } from "../../context/userContext";
import { GetMyWantedItemsUseQuery } from "../../hooks/useMutation";


const formatDate = (d: string) => d.slice(0, 10).split("-").reverse().join(".");

const MyWantedItems = () => {
  const { user } = AuthContext();
  const { data, isLoading, error } = GetMyWantedItemsUseQuery(user?.id);

  if (isLoading)
    return <p className="py-12 text-center text-lg font-semibold text-[#65536e]">טוען נתונים....</p>;
  if (error)
    return <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data || data.length === 0)
    return (
      <div className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879] shadow-sm">
        עוד לא פרסמת בקשות למוצרים
        <Link to="/wanted/new" className="font-bold text-[#b5513d] underline">פרסום בקשה</Link>
      </div>
    );

  return (
    <section dir="rtl" className="mx-auto w-full max-w-4xl">
      <div className="flex flex-col gap-4">
        {data.map((w) => (
          <article key={w.id} className="rounded-3xl border border-[#eee3dc] bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-[#352c3b]">{w.title}</h3>
                <p className="mt-0.5 text-sm text-[#8b7c8c]">{w.category?.name} · {w.city}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  w.status === "OPEN" ? "bg-[#e3f4ea] text-[#2f7a4f]" : "bg-[#eeeaef] text-[#6f6170]"
                }`}
              >
                {w.status === "OPEN" ? "פתוחה" : "נסגרה"}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">מתי צריך</dt>
                <dd className="font-bold text-[#392f40]">
                  {w.neededFrom ? `${formatDate(w.neededFrom)} – ${w.neededUntil ? formatDate(w.neededUntil) : ""}` : "לא צוין"}
                </dd>
              </div>
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">הצעות שממתינות</dt>
                <dd className="font-bold text-[#392f40]">{w.pendingOffersCount}</dd>
              </div>
            </dl>

            <div className="mt-4 flex gap-3">
              <Link to={`/wanted/${w.id}`} className="rounded-2xl border border-[#e7dad2] px-5 py-2 text-sm font-bold text-[#6f6170] hover:bg-[#fbf7f2]">
                צפייה
              </Link>
              {w.status === "OPEN" && (
                <Link to={`/wanted/${w.id}/edit`} className="rounded-2xl bg-[#d17d6b] px-5 py-2 text-sm font-bold text-white hover:bg-[#bf6a58]">
                  עריכה
                </Link>
              )}
            </div>

            <p className="mt-3 text-xs text-[#a597a6]">פורסמה ב־{formatDate(w.createdAt)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyWantedItems;