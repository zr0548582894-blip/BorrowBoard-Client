import { GetStats } from "../hooks/useQuery";
import { Link } from "react-router";

const AdminDashboard = () => {
  const { data, isLoading, error } = GetStats();

  if (isLoading)
    return (
      <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
        <span className="loader-dots"><i /><i /><i /></span>
        טוען נתונים...
      </p>
    );
  if (error)
    return (
      <p className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep animate-pop">
        {error.message}
      </p>
    );
  if (!data)
    return <p className="glass mx-auto mt-12 max-w-xl rounded-3xl p-10 text-center font-bold text-ink-soft">לא נמצאו תוצאות</p>;

  const stats = [
    { label: "משתמשות", value: data.users, color: "bg-coral" },
    { label: "מוצרים", value: data.products, color: "bg-sun" },
    { label: "מושאלים עכשיו", value: data.borrowed, color: "bg-sky" },
    { label: "בקשות ממתינות", value: data.pendingRequests, color: "bg-mint" },
  ];

  return (
    <main dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
      <section className="mx-auto w-full max-w-5xl">
        {/* כותרת */}
        <div className="mb-10 animate-rise">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-sm bg-coral" />
            ניהול
          </span>
          <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl">
            לוח <span className="marker">בקרה</span>
            <span className="text-coral">.</span>
          </h1>
        </div>

        {/* כרטיסי מספרים */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass relative overflow-hidden rounded-3xl p-6 animate-rise">
              <span className={`absolute -left-4 -top-4 h-16 w-16 rounded-2xl ${s.color} opacity-80`} />
              <p className="relative text-sm font-extrabold text-muted">{s.label}</p>
              <p className="relative mt-3 font-display text-5xl font-black tabular-nums text-ink">{s.value}</p>
            </div>
          ))}
        </div>

        {/* קישורים */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link
            to="/admin/users"
            className="glass flex items-center justify-between rounded-3xl p-6 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            ניהול משתמשות
            <span aria-hidden className="text-xl">←</span>
          </Link>
          <Link
            to="/admin/products"
            className="glass flex items-center justify-between rounded-3xl p-6 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            ניהול מוצרים
            <span aria-hidden className="text-xl">←</span>
          </Link>
          <Link
            to="/admin/categories"
            className="glass flex items-center justify-between rounded-3xl p-6 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            ניהול קטגוריות
            <span aria-hidden className="text-xl">←</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;