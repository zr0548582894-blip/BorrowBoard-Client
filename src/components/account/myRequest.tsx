import { AuthContext } from "../../context/userContext";
import { GetMyRequestsUseQuery } from "../../hooks/useQuery";
import type { BorrowRequestStatus } from "../../types/borrowRequest";
import ReceivedRequests from "./RequestStatusSelect";

const statusText: Record<BorrowRequestStatus, string> = {
  PENDING: "ממתינה לאישור",
  APPROVED: "אושרה",
  REJECTED: "נדחתה",
  RETURNED: "הוחזר",
  CANCELLED: "בוטלה",
};

const statusStyle: Record<BorrowRequestStatus, string> = {
  PENDING: "bg-[#fdf3dc] text-[#9a6b12]",
  APPROVED: "bg-[#e3f4ea] text-[#2f7a4f]",
  REJECTED: "bg-[#fbe6df] text-[#b5513d]",
  RETURNED: "bg-[#e6eefb] text-[#3b5f9e]",
  CANCELLED: "bg-[#eeeaef] text-[#6f6170]",
};

// "2026-11-01" → "01.11.2026"
const formatDate = (d: string) => d.slice(0, 10).split("-").reverse().join(".");

const MyRequest = ({ box }: { box: "sent" | "received" }) => {
  const { user } = AuthContext();
  const { data, isLoading, error } = GetMyRequestsUseQuery(user?.id, { box });

  if (isLoading)
    return <p className="py-12 text-center text-lg font-semibold text-[#65536e]">טוען נתונים....</p>;
  if (error)
    return <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-red-100 bg-red-50 p-5 text-center text-red-700">{error.message}</p>;
  if (!data || data.length === 0)
    return (
      <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-[#eee3dc] bg-[#fffdf9] p-8 text-center text-[#756879] shadow-sm">
        {box === "sent" ? "עוד לא שלחת בקשות השאלה" : "עוד לא קיבלת בקשות על המוצרים שלך"}
      </p>
    );

  return (
    <section dir="rtl" className="mx-auto w-full max-w-4xl">
      <h2 className="mb-6 text-2xl font-black text-[#352c3b]">
        {box === "sent" ? "בקשות ששלחתי" : "בקשות שקיבלתי"}
        <span className="text-[#d17d6b]">.</span>
      </h2>

      <div className="flex flex-col gap-4">
        {data.map((r) => (
          <article
            key={r.id}
            className="rounded-3xl border border-[#eee3dc] bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
          >
            {/* כותרת + סטטוס */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-[#352c3b]">{r.product.name}</h3>
                <p className="mt-0.5 text-sm text-[#8b7c8c]">
                  {box === "sent" ? "בעלת המוצר: " : "מבקשת: "}
                  {box === "sent" ? r.owner.name : r.borrower.name}
                </p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[r.status]}`}>
                {statusText[r.status]}
              </span>
            </div>

            {/* פרטים */}
            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">תאריכים</dt>
                <dd className="font-bold text-[#392f40]">
                  {formatDate(r.startDate)} – {formatDate(r.endDate)}
                </dd>
              </div>

              <div className="rounded-2xl bg-[#fbf7f2] p-3">
                <dt className="text-xs text-[#8b7c8c]">
                  {box === "sent" ? "טלפון המלווה" : "טלפון המבקשת"}
                </dt>
                <dd className="font-bold text-[#392f40]" dir="ltr">
                  {(box === "sent" ? r.owner.phone : r.borrower.phone) ??
                    <span className="font-normal text-[#a597a6]">יוצג אחרי אישור</span>}
                </dd>
              </div>
            </dl>

            {r.message && (
              <p className="mt-3 rounded-2xl border border-[#f1e7e1] bg-[#fffdf9] p-3 text-sm text-[#6f6170]">
                <span className="font-bold text-[#5d4f60]">
                  {box === "sent" ? "ההודעה שלי: " : "הודעה: "}
                </span>
                {r.message}
              </p>
            )}

            {box === "received" && r.status === "PENDING" && (
              <ReceivedRequests id={r.id}  />
            )}

            <p className="mt-3 text-xs text-[#a597a6]">נשלחה ב־{formatDate(r.createdAt)}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyRequest;