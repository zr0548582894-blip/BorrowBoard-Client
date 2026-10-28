import { useNavigate, useParams } from "react-router";
import { WantedItemDtailsUseQuery } from "../hooks/useQuery";
import { useState } from "react";
import { AuthContext } from "../context/userContext";
import OfferForm from "../components/wantedItemsPage/offerForm";


const WantedItemDtails = () => {
  const { id } = useParams();
  const context = AuthContext();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading, error } = WantedItemDtailsUseQuery(id ? Number(id) : 0);

  if (isLoading)
    return <p className="flex min-h-[60vh] items-center justify-center text-lg font-semibold text-[#65536e]">טוען נתונים.....</p>;
  if (error)
    return <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data)
    return <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879]">הבקשה לא נמצאה</p>;

  const isOpen = data.status === "OPEN";
  const isMine = context.user?.id === data.requesterId;
  const canOffer = context.user?.role === "USER" && !isMine && isOpen;

  const imageSrc = !data.imageUrl
    ? "/NO_IMG.jpg"
    : data.imageUrl.startsWith("http")
      ? data.imageUrl
      : `${import.meta.env.VITE_API_URL}${data.imageUrl}`;

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbf7f2] px-4 py-8 sm:px-7 sm:py-12">
      <section className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#eee3dc] bg-white shadow-sm md:grid-cols-2">
        {/* תמונה */}
        <div className="relative bg-[#f6efe9]">
          <img
            src={imageSrc}
            onError={(e) => { e.currentTarget.src = "/NO_IMG.jpg"; }}
            alt={data.title}
            className="h-72 w-full object-cover md:h-full"
          />
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
              isOpen ? "bg-[#e6eefb] text-[#3b5f9e]" : "bg-[#eeeaef] text-[#6f6170]"
            }`}
          >
            {isOpen ? "מחפשת עכשיו" : "הבקשה נסגרה"}
          </span>
        </div>

        {/* פרטים */}
        <div className="flex flex-col gap-5 p-6 sm:p-9">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-[#b56d61]">{data.category?.name}</p>
            <h1 className="text-3xl font-black tracking-tight text-[#352c3b]">
              {data.title}
              <span className="text-[#d17d6b]">?</span>
            </h1>
            <p className="mt-2 text-sm text-[#8b7c8c]">מבקשת: {data.requester?.name}</p>
          </div>

          <p className="leading-7 text-[#6f6170]">{data.description}</p>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-[#fbf7f2] p-3">
              <dt className="text-xs text-[#8b7c8c]">עיר</dt>
              <dd className="font-bold text-[#392f40]">{data.city}</dd>
            </div>
            <div className="rounded-2xl bg-[#fbf7f2] p-3">
              <dt className="text-xs text-[#8b7c8c]">הצעות ממתינות</dt>
              <dd className="font-bold text-[#392f40]">{data.pendingOffersCount}</dd>
            </div>
            {data.neededFrom && (
              <div className="col-span-2 rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">מתי צריך</dt>
                <dd className="font-bold text-[#392f40]" dir="ltr">
                  {data.neededFrom} → {data.neededUntil ?? ""}
                </dd>
              </div>
            )}
          </dl>

          {canOffer && !showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-auto rounded-2xl bg-[#d17d6b] py-4 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#bf6a58] hover:shadow-lg"
            >
              יש לי את זה – שליחת הצעה
            </button>
          )}

          {!context.user && isOpen && (
            <button
              onClick={() => navigate("/login")}
              className="mt-auto rounded-2xl border-2 border-[#d17d6b] py-3.5 font-bold text-[#b5513d] transition hover:bg-[#fff1ec]"
            >
              התחברי כדי להציע
            </button>
          )}

          {isMine && (
            <p className="mt-auto rounded-2xl bg-[#f6efe9] p-4 text-center text-sm font-semibold text-[#6f6170]">
              זו הבקשה שלך. את ההצעות תמצאי באזור האישי.
            </p>
          )}
        </div>
      </section>

      {showForm && (
        <div className="mx-auto mt-6 w-full max-w-5xl">
          <OfferForm
            WantedItemId={data.id}
            onSuccess={() => navigate("/")}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
    </main>
  );
};

export default WantedItemDtails;