import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { offerUseMutation } from "../../hooks/useMutation";
import type { OfferInput } from "../../types/offer";
import type { ProductCondition } from "../../types/product";


export const offerSchema = yup.object({
  message: yup.string().trim().required("יש לכתוב הודעה").max(500, "ההודעה יכולה להכיל עד 500 תווים"),
  condition: yup
    .mixed<"NEW" | "LIKE_NEW" | "USED">()
    .oneOf(["NEW", "LIKE_NEW", "USED"], "יש לבחור מצב")
    .required("יש לבחור את מצב המוצר"),
  imageUrl: yup
    .string()
    .trim()
    .transform((value) => (value === "" ? undefined : value))
    .url("יש להזין קישור תקין שמתחיל ב-https://")
    .optional(),
});

type Props = {
  WantedItemId: number;
  onSuccess: () => void;
  onCancel: () => void;
};

const conditionText: Record<ProductCondition, string> = {
  NEW: "חדש",
  LIKE_NEW: "כמו חדש",
  USED: "משומש",
};

const inputClass =
  "w-full rounded-xl border border-[#e7dad2] bg-[#fffdf9] px-4 py-3 text-[#392f40] outline-none transition focus:border-[#d17d6b] focus:ring-4 focus:ring-[#f3d5c9]/60";
const labelClass = "mb-1.5 block text-sm font-bold text-[#5d4f60]";
const errorClass = "mt-1 min-h-5 text-xs font-semibold text-[#c0533d]";

const OfferForm = ({ WantedItemId, onSuccess, onCancel }: Props) => {
  const offerMutation = offerUseMutation(WantedItemId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(offerSchema),
    defaultValues: { condition: "USED" },
  });

  const onSubmit = (data: OfferInput) => {
    offerMutation.mutate(data, { onSuccess });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir="rtl"
      className="rounded-3xl border border-[#eee3dc] bg-white p-6 shadow-sm sm:p-9"
    >
      <h3 className="text-2xl font-black text-[#352c3b]">
        הצעת מוצר<span className="text-[#d17d6b]">.</span>
      </h3>
      <p className="mt-1 text-sm text-[#8b7c8c]">ספרי מה יש לך להציע, והמבקשת תוכל לאשר או לדחות.</p>

      <div className="mt-6">
        <label className={labelClass}>הודעה</label>
        <textarea rows={3} placeholder="למשל: יש לי מקרן במצב טוב, כולל כבל" className={inputClass} {...register("message")} />
        <p className={errorClass}>{errors.message?.message}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>מצב המוצר</label>
          <select className={inputClass} {...register("condition")}>
            {Object.entries(conditionText).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <p className={errorClass}>{errors.condition?.message}</p>
        </div>

        <div>
          <label className={labelClass}>קישור לתמונה (רשות)</label>
          <input dir="ltr" placeholder="https://..." className={inputClass} {...register("imageUrl")} />
          <p className={errorClass}>{errors.imageUrl?.message}</p>
        </div>
      </div>

      {offerMutation.isError && (
        <p className="mt-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {offerMutation.error.message}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={offerMutation.isPending}
          className="flex-1 rounded-2xl bg-[#d17d6b] py-3.5 font-bold text-white shadow-md transition hover:bg-[#bf6a58] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {offerMutation.isPending ? "שולחת..." : "שליחת הצעה"}
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

export default OfferForm;