import { useForm } from "react-hook-form"
import type { LoginInput } from "../types/user"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../api/auth";
import { AuthContext } from "../context/userContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { myUseMutation } from "../hooks/useMutation";


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



const Login=()=>{
        
    const navigate=useNavigate()
    const {login:logi}=AuthContext()
    const [loginError, setLoginError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginInput>({
        resolver: yupResolver( loginSchema)
    })



    return<>
        <form onSubmit={handleSubmit(async (d) => { myUseMutation(d); })}>
          <label>email</label>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
          <label>password</label>
          <input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
          {loginError && (
            <p style={{ color: "red" }}>
                 {loginError}
             </p>)}
          <button >submit</button>
        </form>
    </>
}
export default Login


