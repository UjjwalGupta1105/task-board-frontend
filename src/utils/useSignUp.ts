"use client";
import { userServiceApi } from "@/lib/axios.config";
import { useMutation } from "@tanstack/react-query"
import { AuthResponse } from "@/types/AuthResponse";
import { SignUpPayload } from "@/types/SignUpPayload";
import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = async (data: SignUpPayload): Promise<AuthResponse> => {
  const res = await userServiceApi.post("/auth/register", data);
  return res.data;
};


const useSignUp=()=>{
    return useMutation({
        mutationFn: (data: SignUpPayload) => registerUser(data),

        onSuccess: (data:AuthResponse) => {
          console.log("SignUp success:", data);
          localStorage.setItem("jwtToken", data.token);
          toast.success("Signed Up Successfully");
        },

        onError: (error) => {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message || "Error occured while signing up");
        } else {
          toast.error("Error occured while signing up");
        }
        },
    })
}

export default useSignUp;