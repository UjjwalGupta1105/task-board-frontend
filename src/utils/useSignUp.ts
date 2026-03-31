"use client";
import { userServiceApi } from "@/lib/axios.config";
import { useMutation } from "@tanstack/react-query"
import { AuthResponse } from "@/types/AuthResponse";
import { SignUpPayload } from "@/types/SignUpPayload";
import axios from "axios";
import { toast } from "react-toastify";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/reduxSlices/setUser";
import { useRouter } from "next/navigation";

export const registerUser = async (data: SignUpPayload): Promise<AuthResponse> => {
  const res = await userServiceApi.post("/auth/register", data);
  return res.data;
};

const useSignUp=()=>{
  const dispatch=useDispatch();
  const router=useRouter();

    return useMutation({
        mutationFn: (data: SignUpPayload) => registerUser(data),

        onSuccess: (data:AuthResponse) => {
          localStorage.setItem("jwtToken", data.token);
          toast.success("Signed Up Successfully");
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
          toast.error(error.response?.data?.message || "Error occured while signing up");
        } else {
          toast.error("Error occured while signing up");
        }
        },
    })
}

export default useSignUp;