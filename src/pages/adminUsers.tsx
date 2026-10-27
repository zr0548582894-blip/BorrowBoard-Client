import { BlockUser, UnBlockUser } from "../hooks/useMutation";
import { GetUsers } from "../hooks/useQuery";

const AdminUsers = () => {
  const { data, isLoading, error } = GetUsers();
  const blockUser = BlockUser();
  const unBlockUser = UnBlockUser();

  if (isLoading)
    return (
      <p className="flex flex-col items-center gap-4 py-20 text-center text-lg font-bold text-ink-soft">
        <span className="loader-dots"><i /><i /><i /></span>
        טוען משתמשים...
      </p>
    );
  if (error)
    return (
      <p className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-coral-deep/20 bg-[#fff1ec] p-6 text-center font-semibold text-coral-deep animate-pop">
        {error.message}
      </p>
    );
  if (!data || data.length === 0)
    return <p className="glass mx-auto mt-12 max-w-xl rounded-3xl p-10 text-center font-bold text-ink-soft">לא נמצאו תוצאות</p>;

  return (
    <main dir="rtl" className="relative min-h-screen px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
      <section className="mx-auto w-full max-w-4xl">
        {/* כותרת */}
        <div className="mb-10 animate-rise">
          <span className="eyebrow">
            <span className="h-2.5 w-2.5 rounded-sm bg-coral" />
            ניהול
          </span>
          <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl">
            <span className="marker">משתמשות</span>
            <span className="text-coral">.</span>
          </h1>
        </div>

        {/* רשימה */}
        <div className="glass overflow-hidden rounded-3xl">
          {data.map((u) => (
            <div
              key={u.id}
              className="flex flex-wrap items-center gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:px-6"
            >
              {/* עיגול עם האות הראשונה */}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink font-display text-lg font-black text-sun">
                {u.name.charAt(0)}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-ink">{u.name}</p>
                <p className="truncate text-sm text-muted" dir="ltr">{u.email}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  u.isBlocked ? "bg-[#fbe6df] text-[#b5513d]" : "bg-[#e3f4ea] text-[#2f7a4f]"
                }`}
              >
                {u.isBlocked ? "חסומה" : "פעילה"}
              </span>

              {u.isBlocked ? (
                <button
                  onClick={() => unBlockUser.mutate(u.id)}
                  className="rounded-2xl border border-[#e7dad2] px-5 py-2 text-sm font-bold text-[#6f6170] transition hover:bg-[#fbf7f2]"
                >
                  ביטול חסימה
                </button>
              ) : (
                <button
                  onClick={() => blockUser.mutate(u.id)}
                  className="rounded-2xl border border-red-200 px-5 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
                >
                  חסימה
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminUsers;