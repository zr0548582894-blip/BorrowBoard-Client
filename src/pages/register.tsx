import { useForm } from "react-hook-form"
import type { RegisterInput } from "../types/user"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router";
import { registerUseMutation } from "../hooks/useMutation";




export const registerSchema = yup.object({
    name: yup
        .string()
        .trim()
        .required("שם הוא שדה חובה")
        .min(2, "השם חייב להכיל לפחות 2 תווים")
        .max(50, "השם יכול להכיל עד 50 תווים"),

    email: yup
        .string()
        .trim()
        .required("אימייל הוא שדה חובה")
        .email("כתובת אימייל לא תקינה"),

    password: yup
        .string()
        .required("סיסמה היא שדה חובה")
        .min(8, "הסיסמה חייבת להכיל לפחות 8 תווים")
        .max(72, "הסיסמה ארוכה מדי")
        .matches(/[A-Za-z]/, "הסיסמה חייבת להכיל לפחות אות אחת באנגלית")
        .matches(/\d/, "הסיסמה חייבת להכיל לפחות ספרה אחת"),


    phone: yup
        .string()
        .required("טלפון הוא שדה חובה")
        .test("phone", "מספר טלפון לא תקין", (value) =>
            /^(0\d{8,9}|\+972\d{8,9})$/.test((value ?? "").replace(/[\s-]/g, ""))
        ),

    city: yup
        .string()
        .trim()
        .transform((value) => (value === "" ? undefined : value))
        .optional()
        .min(2, "שם העיר חייב להכיל לפחות 2 תווים")
        .max(50, "שם העיר יכול להכיל עד 50 תווים"),
});


const Register = () => {

    const navigate = useNavigate()
    const { login: saveUser } = AuthContext()
    const registerMutation = registerUseMutation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    })

    const onSubmit = (data: RegisterInput) => {
        registerMutation.mutate(data, {
            onSuccess: (response) => {
                localStorage.setItem("token", response.token);
                saveUser(response.user)
                navigate("/");
            }

        })
    }

    return <>
        <div dir="rtl" className="flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-12">
            <div className="relative w-full max-w-2xl animate-rise">
                {/* Floating color blocks around the card */}
                <div aria-hidden className="tile-stage pointer-events-none absolute inset-0 -z-10 hidden sm:block">
                    <div className="tile absolute -right-10 -top-8 h-24 w-28 bg-coral" />
                    <div className="tile absolute -left-12 top-16 h-32 w-20 bg-sky" />
                    <div className="tile absolute -bottom-8 -left-6 h-20 w-32 bg-sun" />
                    <div className="tile absolute -right-8 bottom-24 h-20 w-16 bg-mint" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-x-5 rounded-[2.25rem] p-7 sm:grid-cols-2 sm:p-12">
                    <div className="sm:col-span-2">
                        <span className="eyebrow">
                            <span className="h-2 w-2 rounded-sm bg-mint" />
                            STORE
                        </span>
                        <h1 className="mb-8 mt-5 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
                            <span className="marker">הרשמה</span>
                        </h1>
                    </div>

                    <div>
                    <label className="field-label">name</label>
                    <input className="field" {...register("name")} />
                    <p className="field-error">{errors.name?.message}</p>
                    </div>

                    <div>
                    <label className="field-label">email</label>
                    <input className="field" dir="ltr" {...register("email")} />
                    <p className="field-error">{errors.email?.message}</p>
                    </div>

                    <div className="sm:col-span-2">
                    <label className="field-label">password</label>
                    <input className="field" dir="ltr" type="password" {...register("password")} />
                    <p className="field-error">{errors.password?.message}</p>
                    </div>

                    <div>
                    <label className="field-label">phone</label>
                    <input className="field" dir="ltr" {...register("phone")} />
                    <p className="field-error">{errors.phone?.message}</p>
                    </div>

                    <div>
                    <label className="field-label">city</label>
                    <input className="field" {...register("city")} />
                    <p className="field-error">{errors.city?.message}</p>
                    </div>

                    {registerMutation.isError && <p className="mt-2 rounded-xl border-2 border-coral-deep/20 bg-[#fff1ec] px-4 py-3 text-sm font-semibold text-coral-deep sm:col-span-2 animate-pop">{registerMutation.error.message}</p>}
                    <button className="btn-primary mt-6 w-full py-4 text-base sm:col-span-2" type="submit" disabled={registerMutation.isPending}>
                        {registerMutation.isPending ? "מתחברת..." : "התחברות"}
                    </button>
                </form>
            </div>
        </div>
    </>
}
export default Register
