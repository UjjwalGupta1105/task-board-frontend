import { userServiceApi } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";
import { setUser } from "@/features/setUser/setUser";
import { useDispatch } from "react-redux";
import { User } from "@/types/User";

const checkAuthStatus = async (): Promise<User | null > => {
  const token = localStorage.getItem("jwtToken");
  if(!token){
    return null;
  }
  const res = await userServiceApi.post("/auth/authenticate-user", { authToken: token });
  if (res?.data?.success) {
    return res.data.data;
  }

  return null;
}

export const useIsAuthenticated = ()  => {
  const dispatch = useDispatch();
  const {data,isSuccess}=useQuery({
    queryKey: ["authStatus"],
    queryFn: checkAuthStatus,
});

// if(data && isSuccess){
//  if (data) {
//         const user: User = {
//           id: data.id,
//           fullName: data.fullName,
//           email: data.email,
//         };
//         dispatch(setUser(user));
//       }
// }

  return data ;
};