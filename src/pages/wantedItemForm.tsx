import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { WantedItemDtailsUseQuery, useCategoriesQuery } from "../hooks/useQuery";
import { type WantedItemInput } from "../types/wantedItem";
import ImageDropzone from "../components/ImageDropzone";
import { useNavigate, useParams } from "react-router";
import { WantedItemFormUseMutation } from "../hooks/useMutation";
import { useEffect, useState } from "react";

// שדה ריק בטופס מגיע כ-"" - הופכים אותו לערך ריק
const emptyToUndefined = (value: unknown, original: unknown) =>
    original === "" ? undefined : value;
const emptyToNull = (value: unknown, original: unknown) =>
    original === "" ? null : value;

export const wantedItemSchema: yup.ObjectSchema<WantedItemInput> = yup.object({
    title: yup
        .string()
        .trim()
        .required("כותרת היא שדה חובה")
        .min(2, "הכותרת חייבת להכיל לפחות 2 תווים")
        .max(80, "הכותרת יכולה להכיל עד 80 תווים"),

    description: yup
        .string()
        .trim()
        .required("תיאור הוא שדה חובה")
        .max(1000, "התיאור יכול להכיל עד 1000 תווים"),

    categoryId: yup
        .number()
        .transform(emptyToUndefined)
        .typeError("יש לבחור קטגוריה")
        .required("יש לבחור קטגוריה")
        .integer()
        .positive("יש לבחור קטגוריה"),

    city: yup
        .string()
        .trim()
        .required("עיר היא שדה חובה")
        .min(2, "שם העיר חייב להכיל לפחות 2 תווים")
        .max(50, "שם העיר יכול להכיל עד 50 תווים"),

    imageUrl: yup
        .string()
        .trim()
        .transform(emptyToNull)
        .url("קישור תמונה לא תקין")
        .nullable()
        .optional(),

    neededFrom: yup
        .string()
        .transform(emptyToNull)
        .nullable()
        .optional(),

    neededUntil: yup
        .string()
        .transform(emptyToNull)
        .nullable()
        .optional()
        .test("after-from", 'תאריך "עד" חייב להיות אחרי תאריך "מ-"', function (value) {
            const { neededFrom } = this.parent;
            return !value || !neededFrom || value >= neededFrom;
        }),
});

const WantedItemForm = () => {

    const param = useParams()
    const type = param.id ? "edit" : "add"
    const wantedItemId = param.id ? Number(param.id) : 0
    const wantedItemFormUseMutation = WantedItemFormUseMutation(type, wantedItemId)
    const { data } = useCategoriesQuery()
    const [show, setShow] = useState(false)
    const { data: wantedDtails, isLoading, error } = WantedItemDtailsUseQuery(wantedItemId)
    const navigate = useNavigate()

    const { register, handleSubmit, setValue, watch, formState: { errors }, reset, } = useForm<WantedItemInput>({
        resolver: yupResolver(wantedItemSchema)
    })

    useEffect(() => {
        if (wantedDtails && data) {
            reset({
                title: wantedDtails.title,
                description: wantedDtails.description,
                categoryId: wantedDtails.categoryId,
                city: wantedDtails.city,
                imageUrl: wantedDtails.imageUrl,
                neededFrom: wantedDtails.neededFrom?.slice(0, 10) ?? null,
                neededUntil: wantedDtails.neededUntil?.slice(0, 10) ?? null,
            })
        }
    }, [wantedDtails, data])

    if (isLoading)
        return <p>טוען נתונים.....</p>
    if (error)
        return <p>{error.message}</p>

    const onSubmit = (data: WantedItemInput) => {
        wantedItemFormUseMutation.mutate(data, {
            onSuccess: () => {
                setShow(true)
                if (type == "add")
                    reset()
                else
                    navigate("/wanted")
            }
        })
    }

    return <div dir="rtl" className="px-4 pb-24 pt-10 sm:px-8 sm:pt-14">
        <div className="relative mx-auto w-full max-w-4xl animate-rise">

            <div aria-hidden className="tile-stage pointer-events-none absolute inset-0 -z-10 hidden md:block">
                <div className="tile absolute -right-12 -top-10 h-28 w-32 bg-sky" />
                <div className="tile absolute -left-14 top-24 h-36 w-20 bg-coral" />
                <div className="tile absolute -bottom-10 -left-8 h-20 w-36 bg-mint" />
                <div className="tile absolute -right-10 bottom-32 h-24 w-16 bg-sun" />
            </div>

            <div className="mb-8">
                <span className="eyebrow">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inset-0 animate-ping rounded-sm bg-coral/60" />
                        <span className="relative h-2.5 w-2.5 rounded-sm bg-coral" />
                    </span>
                    מחפשת מוצר
                </span>
                <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                    מה <span className="marker">חסר לך</span><span className="text-coral">?</span>
                </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-x-6 rounded-[2.25rem] p-6 sm:grid-cols-2 sm:p-10">

                <div className="mb-5 flex items-center gap-3 sm:col-span-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink font-display text-sm font-black text-sun">1</span>
                    <span className="text-sm font-extrabold text-ink">מה מחפשים?</span>
                    <span className="h-px flex-1 bg-line" />
                </div>

                <div className="sm:col-span-2">
                    <label className="field-label">כותרת</label>
                    <input className="field" type="text" placeholder="למשל: מחפשת עגלת תאומים" {...register("title")} />
                    <p className="field-error">{errors.title?.message}</p>
                </div>

                <div className="sm:col-span-2">
                    <label className="field-label">תיאור</label>
                    <textarea className="field min-h-36 resize-y leading-7" {...register("description")}></textarea>
                    <p className="field-error">{errors.description?.message}</p>
                </div>

                <div>
                    <label className="field-label">קטגוריה</label>
                    <select className="field select-field font-semibold" {...register("categoryId")}>
                        <option value="">בחרי קטגוריה</option>
                        {data?.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <p className="field-error">{errors.categoryId?.message}</p>
                </div>

                <div>
                    <label className="field-label">עיר</label>
                    <input className="field" type="text" {...register("city")} />
                    <p className="field-error">{errors.city?.message}</p>
                </div>

                <div className="mb-5 mt-4 flex items-center gap-3 sm:col-span-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink font-display text-sm font-black text-sun">2</span>
                    <span className="text-sm font-extrabold text-ink">מתי צריך? (רשות)</span>
                    <span className="h-px flex-1 bg-line" />
                </div>

                <div>
                    <label className="field-label">מתאריך</label>
                    <input className="field" type="date" {...register("neededFrom")} />
                    <p className="field-error">{errors.neededFrom?.message}</p>
                </div>

                <div>
                    <label className="field-label">עד תאריך</label>
                    <input className="field" type="date" {...register("neededUntil")} />
                    <p className="field-error">{errors.neededUntil?.message}</p>
                </div>

                <div className="sm:col-span-2">
                    <label className="field-label">תמונה להמחשה (רשות)</label>
                    <ImageDropzone
                        value={watch("imageUrl")}
                        onChange={(url) => setValue("imageUrl", url, { shouldValidate: true })}
                    />
                    <p className="field-error">{errors.imageUrl?.message}</p>
                </div>

                {wantedItemFormUseMutation.isError && (
                    <p className="field-error sm:col-span-2">{wantedItemFormUseMutation.error.message}</p>
                )}

                <button className="btn-primary mt-4 w-full py-4 text-base sm:col-span-2" type="submit">
                    פרסום בקשה
                    <span aria-hidden className="text-lg leading-none">←</span>
                </button>
                {show && (
                    <div role="status" className="mt-5 flex items-center gap-3 rounded-2xl border-2 border-mint/40 bg-[#e6f8f0] px-5 py-4 sm:col-span-2 animate-pop">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-base font-black text-ink shadow-[0_6px_14px_-6px_rgb(46_203_150/0.8)]">✓</span>
                        <p className="font-bold text-forest">הבקשה פורסמה בהצלחה</p>
                    </div>
                )}
            </form>
        </div>
    </div>
}
export default WantedItemForm