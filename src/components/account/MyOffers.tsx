import { AuthContext } from "../../context/userContext";
import { GetMyOffersUseQuery } from "../../hooks/useQuery";
import type { OfferStatus } from "../../types/offer";
import OfferStatusSelect from "./OfferStatusSelect";


const statusText: Record<OfferStatus, string> = {
  PENDING: "ממתינה",
  ACCEPTED: "התקבלה",
  REJECTED: "נדחתה",
  CANCELLED: "בוטלה",
};

const statusStyle: Record<OfferStatus, string> = {
  PENDING: "bg-[#fdf3dc] text-[#9a6b12]",
  ACCEPTED: "bg-[#e3f4ea] text-[#2f7a4f]",
  REJECTED: "bg-[#fbe6df] text-[#b5513d]",
  CANCELLED: "bg-[#eeeaef] text-[#6f6170]",
};

const conditionText = { NEW: "חדש", LIKE_NEW: "כמו חדש", USED: "משומש" };

const formatDate = (d: string) => d.slice(0, 10).split("-").reverse().join(".");

const MyOffers = ({ box }: { box: "sent" | "received" }) => {
  const { user } = AuthContext();
  const { data, isLoading, error } = GetMyOffersUseQuery(user?.id, { box });

  if (isLoading)
    return <p className="py-12 text-center text-lg font-semibold text-[#65536e]">טוען נתונים....</p>;
  if (error)
    return <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data || data.length === 0)
    return (
      <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879] shadow-sm">
        {box === "sent" ? "עוד לא שלחת הצעות" : "עוד לא קיבלת הצעות"}
      </p>
    );

  return (
    <section dir="rtl" className="mx-auto mb-10 w-full max-w-4xl">
      <h2 className="mb-6 text-2xl font-black text-[#352c3b]">
        {box === "sent" ? "הצעות ששלחתי" : "הצעות שקיבלתי"}
        <span className="text-[#d17d6b]">.</span>
      </h2>

      <div className="flex flex-col gap-4">
        {data.map((o) => (
          <article key={o.id} className="rounded-3xl border border-[#eee3dc] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-[#352c3b]">{o.wantedItem.title}</h3>
                <p className="text-sm text-[#8b7c8c]">
                  {box === "sent" ? "מבקשת: " : "מציעה: "}
                  {box === "sent" ? o.requester.name : o.offerer.name}
                </p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[o.status]}`}>
                {statusText[o.status]}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">מצב המוצר</dt>
                <dd className="font-bold text-[#392f40]">{conditionText[o.condition]}</dd>
              </div>
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">טלפון</dt>
                <dd className="font-bold text-[#392f40]" dir="ltr">
                  {(box === "sent" ? o.requester.phone : o.offerer.phone) ??
                    <span className="font-normal text-[#a597a6]">יוצג אחרי אישור</span>}
                </dd>
              </div>
            </dl>

            <p className="mt-3 rounded-2xl border border-[#f1e7e1] bg-[#fffdf9] p-3 text-sm text-[#6f6170]">
              {o.message}
            </p>

            {box === "received" && o.status === "PENDING" && <OfferStatusSelect id={o.id} />}

            <p className="mt-3 text-xs text-[#a597a6]">נשלחה ב־{formatDate(o.createdAt)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyOffers;