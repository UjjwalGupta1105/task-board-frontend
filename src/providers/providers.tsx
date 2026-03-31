// app/providers.tsx
"use client";
import { store } from "@/lib/store.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { redirect } from "next/navigation";
import { useIsAuthenticated } from "@/utils/useIsAutheticated";
import { useEffect } from "react";
import { setUser } from "@/lib/reduxSlices/setUser";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store.config";
import { useRouter } from "next/router";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useIsAuthenticated();

  if (isError) {
    router.replace("/signup");
  }

  if (isSuccess && data) {
    const user_: User = {
      id: data.id,
      fullName: data.fullName,
      email: data.email,
    };
    dispatch(setUser(user_));
    router.replace("/");
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
