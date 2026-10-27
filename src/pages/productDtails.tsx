import { useNavigate, useParams } from "react-router";
import { ProductDtailsUseQuery } from "../hooks/useQuery";
import { useState } from "react";

import { AuthContext } from "../context/userContext";
import BorrowRequestForm from "./borrowRequestForm";

const conditionText = { NEW: "חדש", LIKE_NEW: "כמו חדש", USED: "משומש" };

const ProductDtails = () => {
  const { id } = useParams();
  const context = AuthContext();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false)
  const { data, isLoading, error } = ProductDtailsUseQuery(id ? Number(id) : 0);

  if (isLoading)
    return <p className="flex min-h-[60vh] items-center justify-center text-lg font-semibold text-[#65536e]">טוען נתונים.....</p>;
  if (error)
    return <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data)
    return <p className="mx-auto mt-12 max-w-xl rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879]">המוצר לא נמצא</p>;

  const available = data.status === "AVAILABLE";

  return (
    <main dir="rtl" className="min-h-screen bg-[#fbf7f2] px-4 py-8 sm:px-7 sm:py-12">
      <section className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#eee3dc] bg-white shadow-sm md:grid-cols-2">
        {/* תמונה */}
        <div className="relative bg-[#f6efe9]">
          <img
            src={!data.imageUrl ? "/NO_IMG.jpg" : data.imageUrl.startsWith("http") ? data.imageUrl : `${import.meta.env.VITE_API_URL}${data.imageUrl}`}
            onError={(e) => { e.currentTarget.src = "/NO_IMG.jpg"; }}
            alt={data.name}
            className="h-72 w-full object-cover md:h-full"
          />
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${available ? "bg-[#e3f4ea] text-[#2f7a4f]" : "bg-[#fbe6df] text-[#b5513d]"
              }`}
          >
            {available ? "זמין עכשיו" : "מושאל כרגע"}
          </span>
        </div>

        {/* פרטים */}
        <div className="flex flex-col gap-5 p-6 sm:p-9">
          <div>
            <p className="mb-2 text-xs font-bold tracking-wide text-[#b56d61]">{data.category?.name}</p>
            <h1 className="text-3xl font-black tracking-tight text-[#352c3b]">
              {data.name}
              <span className="text-[#d17d6b]">.</span>
            </h1>
          </div>

          <p className="leading-7 text-[#6f6170]">{data.description}</p>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-[#fbf7f2] p-3">
              <dt className="text-xs text-[#8b7c8c]">עיר</dt>
              <dd className="font-bold text-[#392f40]">{data.city}</dd>
            </div>
            <div className="rounded-2xl bg-[#fbf7f2] p-3">
              <dt className="text-xs text-[#8b7c8c]">מצב</dt>
              <dd className="font-bold text-[#392f40]">{conditionText[data.condition]}</dd>
            </div>
            {data.maxDays && (
              <div className="col-span-2 rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">זמן השאלה מקסימלי</dt>
                <dd className="font-bold text-[#392f40]">עד {data.maxDays} ימים</dd>
              </div>
            )}
          </dl>

          {data.bookedPeriods?.length > 0 && (
            <div className="rounded-2xl border border-[#f1ddd5] bg-[#fff8f5] p-4">
              <p className="mb-2 text-sm font-bold text-[#b5513d]">תפוס בתאריכים:</p>
              <ul className="flex flex-wrap gap-2">
                {data.bookedPeriods.map((b) => (
                  <li key={b.startDate} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#6f6170] shadow-sm" dir="ltr">
                    {b.startDate} → {b.endDate}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {context.user?.role == "USER" && context.user.id !== data.ownerId && !showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-auto rounded-2xl bg-[#d17d6b] py-4 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#bf6a58] hover:shadow-lg"
            >
              בקשת המוצר
            </button>
          )}

          {!context.user && (
            <button
              onClick={() => navigate("/login")}
              className="mt-auto rounded-2xl border-2 border-[#d17d6b] py-3.5 font-bold text-[#b5513d] transition hover:bg-[#fff1ec]"
            >
              התחברי כדי לבקש להשאיל
            </button>
          )}
        </div>
      </section>

      {showForm && (
        <div className="mx-auto mt-6 w-full max-w-5xl">
          <BorrowRequestForm
            productId={data.id}
            maxDays={data.maxDays}
            onSuccess={() => { setShowForm(false); setSent(true) }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
      {sent && (
        <p className="mx-auto mt-6 max-w-5xl rounded-2xl border border-green-100 bg-green-50 p-4 text-center font-bold text-green-700">
          הבקשה נשלחה! תקבלי הודעה כשבעלת המוצר תאשר
        </p>
      )}
    </main>
  );
};

export default ProductDtails;