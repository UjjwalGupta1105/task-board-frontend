"use client";
import { userServiceApi } from "@/lib/axios.config";
import { useMutation } from "@tanstack/react-query"
import {LoginPayload} from "@/types/LoginPayload"
import { AuthResponse } from "@/types/AuthResponse";
import { toast } from "react-toastify";
import axios from "axios";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/reduxSlices/setUser";
import { useRouter } from "next/navigation";

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  const res = await userServiceApi.post("/auth/login", data);
  return res.data.data ;
};

const useLogin=()=>{
  const dispatch=useDispatch();
  const router=useRouter()

    return useMutation({
        mutationFn: (data: LoginPayload) => loginUser(data),

        onSuccess: (data:AuthResponse) => {
          localStorage.setItem("jwtToken", data.token);
          toast.success("Logged In Successfully");
           const user: User = {
                  id: data.id,
                  email: data.email,
                  fullName: data.fullName,
            };
            dispatch(setUser(user));
            router.push("/dashboard");
        },

        onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message || "Error occured while loging in");
        } else {
          toast.error("Error occured while loging in");
        }
        },
    })
}

export default useLogin;