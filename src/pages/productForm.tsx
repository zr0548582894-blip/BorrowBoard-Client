import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductDtailsUseQuery, useCategoriesQuery } from "../hooks/useQuery";
import { type ProductInput, type ProductCondition, PRODUCT_CONDITIONS } from "../types/product";
import ImageDropzone from "../components/ImageDropzone";
import { useNavigate, useParams } from "react-router";
import { PouductFormUseMutation } from "../hooks/useMutation";
import { useEffect, useState } from "react";


// שדה ריק בטופס מגיע כ-"" - הופכים אותו לערך ריק במקום NaN
const emptyToUndefined = (value: unknown, original: unknown) =>
    original === "" ? undefined : value;
const emptyToNull = (value: unknown, original: unknown) =>
    original === "" ? null : value;

export const productSchema: yup.ObjectSchema<ProductInput> = yup.object({
    name: yup
        .string()
        .trim()
        .required("שם המוצר הוא שדה חובה")
        .min(2, "השם חייב להכיל לפחות 2 תווים")
        .max(80, "השם יכול להכיל עד 80 תווים"),

    description: yup
        .string()
        .trim()
        .required("תיאור הוא שדה חובה")
        .min(10, "התיאור חייב להכיל לפחות 10 תווים")
        .max(1000, "התיאור יכול להכיל עד 1000 תווים"),

    categoryId: yup
        .number()
        .transform(emptyToUndefined)
        .typeError("יש לבחור קטגוריה")
        .required("יש לבחור קטגוריה")
        .integer()
        .positive("יש לבחור קטגוריה"),

    condition: yup
        .mixed<ProductCondition>()
        .oneOf([...PRODUCT_CONDITIONS], "יש לבחור מצב מהרשימה")
        .required("יש לבחור את מצב המוצר"),

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

    maxDays: yup
        .number()
        .transform(emptyToNull)
        .typeError("יש להזין מספר")
        .integer("יש להזין מספר שלם")
        .min(1, "מינימום יום אחד")
        .max(365, "מקסימום 365 ימים")
        .nullable()
        .optional(),
});

const ProductForm = () => {


    const param = useParams()
    const type = param.id ? "edit" : "add"
    const productId = param.id ? Number(param.id) : 0
    const pouductFormUseMutation = PouductFormUseMutation(type, productId)
    const { data } = useCategoriesQuery()
    const [show, setShow] = useState(false)
    const { data: productDtails, isLoading, error } = ProductDtailsUseQuery(productId)
    const navigate = useNavigate()



    const { register, handleSubmit, setValue, watch, formState: { errors }, reset, } = useForm<ProductInput>({
        resolver: yupResolver(productSchema)
    })
    useEffect(() => {
        if (productDtails && data) {
            reset({
                name: productDtails?.name,
                description: productDtails?.description,
                categoryId: productDtails?.categoryId,
                condition: productDtails?.condition,
                city: productDtails?.city,
                maxDays: productDtails?.maxDays,
                imageUrl: productDtails?.imageUrl
            })
        }
    }, [productDtails, data])

    if (isLoading)
        return <p>טוען נתונים.....</p>
    if (error)
        return <p>{error.message}</p>

    const onSubmit = (data: ProductInput) => {
        pouductFormUseMutation.mutate(data, {
            onSuccess: () => {
                setShow(true)
                if (type == "add")
                    reset()
                else
                    navigate("/")
            }
        })
    }


    return <div dir="rtl" className="px-4 pb-24 pt-10 sm:px-8 sm:pt-14">
        <div className="relative mx-auto w-full max-w-4xl animate-rise">

            {/* Floating color blocks behind the card */}
            <div aria-hidden className="tile-stage pointer-events-none absolute inset-0 -z-10 hidden md:block">
                <div className="tile absolute -right-12 -top-10 h-28 w-32 bg-coral" />
                <div className="tile absolute -left-14 top-24 h-36 w-20 bg-sky" />
                <div className="tile absolute -bottom-10 -left-8 h-20 w-36 bg-sun" />
                <div className="tile absolute -right-10 bottom-32 h-24 w-16 bg-mint" />
            </div>

            {/* Header */}
            <div className="mb-8">
                <span className="eyebrow">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inset-0 animate-ping rounded-sm bg-coral/60" />
                        <span className="relative h-2.5 w-2.5 rounded-sm bg-coral" />
                    </span>
                    מוצר
                </span>
                <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
                    פרטי <span className="marker">המוצר</span><span className="text-coral">.</span>
                </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-x-6 rounded-[2.25rem] p-6 sm:grid-cols-2 sm:p-10">

                {/* Section: basics */}
                <div className="mb-5 flex items-center gap-3 sm:col-span-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink font-display text-sm font-black text-sun">1</span>
                    <span className="text-sm font-extrabold text-ink">מה משאילים?</span>
                    <span className="h-px flex-1 bg-line" />
                </div>

                <div className="sm:col-span-2">
                    <label className="field-label"> שם המוצר</label>
                    <input className="field" type="text" {...register("name")} />
                    <p className="field-error">{errors.name?.message}</p>
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
                    <label className="field-label">מצב</label>
                    <select className="field select-field font-semibold" {...register("condition")}>
                        {PRODUCT_CONDITIONS.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <p className="field-error">{errors.condition?.message}</p>
                </div>

                {/* Section: details */}
                <div className="mb-5 mt-4 flex items-center gap-3 sm:col-span-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink font-display text-sm font-black text-sun">2</span>
                    <span className="text-sm font-extrabold text-ink">איפה ולכמה זמן?</span>
                    <span className="h-px flex-1 bg-line" />
                </div>

                <div>
                    <label className="field-label">עיר</label>
                    <input className="field" type="text" {...register("city")} />
                    <p className="field-error">{errors.city?.message}</p>
                </div>

                <div>
                    <label className="field-label">מקסימום ימים</label>
                    <div className="relative">
                        <input className="field pl-16 tabular-nums" dir="ltr" type="number" {...register("maxDays")} />
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted">ימים</span>
                    </div>
                    <p className="field-error">{errors.maxDays?.message}</p>
                </div>

                <div className="sm:col-span-2">
                    <label className="field-label">תמונה</label>
                    <ImageDropzone
                        value={watch("imageUrl")}
                        onChange={(url) => setValue("imageUrl", url, { shouldValidate: true })}
                    />
                    <p className="field-error">{errors.imageUrl?.message}</p>
                </div>

                <button className="btn-primary mt-4 w-full py-4 text-base sm:col-span-2" type="submit" >
                    שלח
                    <span aria-hidden className="text-lg leading-none">←</span>
                </button>
                {show && (
                    <div role="status" className="mt-5 flex items-center gap-3 rounded-2xl border-2 border-mint/40 bg-[#e6f8f0] px-5 py-4 sm:col-span-2 animate-pop">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mint text-base font-black text-ink shadow-[0_6px_14px_-6px_rgb(46_203_150/0.8)]">✓</span>
                        <p className="font-bold text-forest">המוצר נוסף בהצלחה</p>
                    </div>
                )}
            </form>
        </div>
    </div>
}
export default ProductForm