import { useForm } from "react-hook-form"
import type { LoginInput } from "../types/user"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router";
import { loginUseMutation } from "../hooks/useMutation";



const loginSchema: yup.ObjectSchema<LoginInput> = yup.object({
    email: yup
        .string()
        .trim()
        .email("כתובת אימייל לא תקינה")
        .required("שדה חובה"),

    password: yup
        .string()
        .required("שדה חובה"),
});


const Login = () => {

    const navigate = useNavigate()
    const { login: saveUser } = AuthContext()
    const loginMutation = loginUseMutation()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInput>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data: LoginInput) => {
        loginMutation.mutate(data, {
            onSuccess: (response) => {
                localStorage.setItem("token", response.token);
                saveUser(response.user)
                if (response.user.role == "ADMIN")
                     navigate("/admin")
                else    navigate("/me");
            }
        })

    }

    return <>
        <div dir="rtl" className="flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-12">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-[2.25rem] bg-cream shadow-[0_50px_100px_-50px_rgb(22_20_31/0.7)] ring-1 ring-white/80 md:grid-cols-[1fr_1.05fr] animate-rise">
                {/* Mosaic panel */}
                <div aria-hidden className="relative hidden bg-ink p-6 md:block">
                    <div className="tile-stage grid h-full grid-cols-3 grid-rows-5 gap-3">
                        <div className="tile col-span-2 row-span-2 bg-coral" />
                        <div className="tile row-span-3 bg-sky" />
                        <div className="tile row-span-2 bg-sun" />
                        <div className="tile row-span-1 bg-lilac" />
                        <div className="tile col-span-2 row-span-2 bg-mint" />
                        <div className="tile row-span-1 bg-blush" />
                    </div>
                    <span className="absolute bottom-10 right-10 font-display text-5xl font-black leading-none text-cream drop-shadow-[0_6px_16px_rgb(0_0_0/0.35)]">
                        שלום<span className="text-sun">.</span>
                    </span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-7 sm:p-12">
                    <span className="eyebrow w-fit">
                        <span className="h-2 w-2 rounded-sm bg-coral" />
                        STORE
                    </span>
                    <h1 className="mb-8 mt-5 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
                        <span className="marker">התחברות</span>
                    </h1>

                    <label className="field-label">email</label>
                    <input className="field" dir="ltr" {...register("email")} />
                    <p className="field-error">{errors.email?.message}</p>
                    <label className="field-label mt-2">password</label>
                    <input className="field" dir="ltr" type="password" {...register("password")} />
                    <p className="field-error">{errors.password?.message}</p>


                    {loginMutation.isError && <p className="mt-2 rounded-xl border-2 border-coral-deep/20 bg-[#fff1ec] px-4 py-3 text-sm font-semibold text-coral-deep animate-pop">{loginMutation.error.message}</p>}
                    <button className="btn-primary mt-6 w-full py-4 text-base" type="submit" disabled={loginMutation.isPending}>
                        {loginMutation.isPending ? "מתחברת..." : "התחברות"}
                    </button>
                </form>
            </div>
        </div>
    </>
}
export default Login
