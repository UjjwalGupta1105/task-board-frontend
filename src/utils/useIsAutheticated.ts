import { userServiceApi } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";
import { setUser } from "@/lib/reduxSlices/setUser";
import { useDispatch } from "react-redux";
import { User } from "@/types/User";

const checkAuthStatus = async (): Promise<User | null > => {
  try {
      const token = localStorage.getItem("jwtToken");
      if(!token){
        throw new Error("No token found");
      }
      const res = await userServiceApi.get("/auth/authenticate-user", { headers: { Authorization: token } });
      if (res?.data?.success) {
        return res.data.data;
      }

      throw new Error("Authentication failed");

  } catch (error) {
      throw error;
  }
}

export const useIsAuthenticated = ()  => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: checkAuthStatus,
});
};