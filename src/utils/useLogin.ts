"use client";
import { userServiceApi } from "@/lib/axios.config";
import { useMutation } from "@tanstack/react-query"
import {LoginPayload} from "@/types/LoginPayload"
import { AuthResponse } from "@/types/AuthResponse";
import { toast } from "react-toastify";
import axios from "axios";

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  const res = await userServiceApi.post("/auth/login", data);
  return res.data;
};

const useLogin=()=>{
    return useMutation({
        mutationFn: (data: LoginPayload) => loginUser(data),

        onSuccess: (data:AuthResponse) => {
          console.log("Login success:", data);
          localStorage.setItem("jwtToken", data.token);
          toast.success("Logged In Successfully");
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