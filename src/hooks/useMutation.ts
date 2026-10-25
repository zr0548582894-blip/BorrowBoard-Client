import { useMutation } from "react-query"
import { login } from "../api/auth"


export const myUseMutation = (d:<TVeriable>) => 
{
    const { data, isLoading, error } = useMutation({
        mutationFn: () => login(d)
    }
}
