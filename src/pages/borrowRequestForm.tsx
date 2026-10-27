import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BorrowRequestUseMutation } from "../hooks/useMutation";
import type { BorrowRequestInput } from "../types/borrowRequest";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router";

const todayString = () => new Date().toLocaleDateString("en-CA");
const daysBetween = (start: string, end: string) =>
  Math.round((new Date(end).getTime() - new Date(start).getTime()) / 86_400_000) + 1;

const borrowRequestSchema = (maxDays: number | null) =>
  yup.object({
    startDate: yup
      .string()
      .required("יש לבחור תאריך התחלה")
      .test("not-past", "תאריך ההתחלה לא יכול להיות בעבר", (value) => !value || value >= todayString()),
    endDate: yup
      .string()
      .required("יש לבחור תאריך סיום")
      .test("after-start", "תאריך הסיום חייב להיות באותו יום או אחרי תאריך ההתחלה", function (value) {
        const { startDate } = this.parent;
        return !value || !startDate || value >= startDate;
      })
      .test("max-days", `ניתן להשאיל לכל היותר ${maxDays} ימים`, function (value) {
        const { startDate } = this.parent;
        if (!maxDays || !value || !startDate) return true;
        return daysBetween(startDate, value) <= maxDays;
      }),
    message: yup.string().trim().max(500, "ההודעה יכולה להכיל עד 500 תווים").optional(),
  });

type Props = {
  productId: number;
  maxDays: number | null;
  onSuccess: () => void;
  onCancel: () => void;
};

const BorrowRequestForm = ({ productId, maxDays, onSuccess, onCancel }: Props) => {
  const borrowMutation = BorrowRequestUseMutation(productId);
  const context=AuthContext()
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(borrowRequestSchema(maxDays)),
  });

  const onSubmit = (data: BorrowRequestInput) => {
    borrowMutation.mutate(data, { onSuccess });
  };

  const inputClass =
    "w-full rounded-xl border border-[#e7dad2] bg-[#fffdf9] px-4 py-3 text-[#392f40] outline-none transition focus:border-[#d17d6b] focus:ring-4 focus:ring-[#f3d5c9]/60";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir="rtl"
      className="rounded-3xl border border-[#eee3dc] bg-white p-6 shadow-sm sm:p-9"
    >
      <h3 className="text-2xl font-black text-[#352c3b]">
        בקשת השאלה<span className="text-[#d17d6b]">.</span>
      </h3>
      {maxDays && <p className="mt-1 text-sm text-[#8b7c8c]">ניתן להשאיל עד {maxDays} ימים</p>}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#5d4f60]">תאריך התחלה</label>
          <input type="date" min={todayString()} className={inputClass} {...register("startDate")} />
          <p className="mt-1 min-h-5 text-xs font-semibold text-[#c0533d]">{errors.startDate?.message}</p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-[#5d4f60]">תאריך סיום</label>
          <input type="date" min={todayString()} className={inputClass} {...register("endDate")} />
          <p className="mt-1 min-h-5 text-xs font-semibold text-[#c0533d]">{errors.endDate?.message}</p>
        </div>
      </div>

      <div className="mt-2">
        <label className="mb-1.5 block text-sm font-bold text-[#5d4f60]">הודעה (רשות)</label>
        <textarea rows={3} placeholder="למשל: אשמח לשבת הקרובה" className={inputClass} {...register("message")} />
        <p className="mt-1 min-h-5 text-xs font-semibold text-[#c0533d]">{errors.message?.message}</p>
      </div>

      {borrowMutation.isError && (
        <p className="mt-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {borrowMutation.error.message}
        </p>
      )}
      {context.user?.role === "USER" && context.user.productCount === 0 && (
        <p className="mt-4 rounded-2xl border border-[#f1ddd5] bg-[#fff8f5] p-4 text-center text-sm text-[#6f6170]">
          גם לך יש מה להשאיל?{" "}
          <button type="button" onClick={() => navigate("/products/new")} className="font-bold text-[#b5513d] underline">
            הוסיפי מוצר
          </button>
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={borrowMutation.isPending}
          className="flex-1 rounded-2xl bg-[#d17d6b] py-3.5 font-bold text-white shadow-md transition hover:bg-[#bf6a58] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {borrowMutation.isPending ? "שולחת..." : "שליחת בקשה"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-2xl border border-[#e7dad2] px-8 py-3.5 font-bold text-[#6f6170] transition hover:bg-[#fbf7f2]"
        >
          ביטול
        </button>
      </div>
    </form>
  );
};

export default BorrowRequestForm;